import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    await this.$queryRaw`PRAGMA foreign_keys = ON;`;
  }

  async enableShutdownHooks(app: INestApplication) {
    // @ts-ignore
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}