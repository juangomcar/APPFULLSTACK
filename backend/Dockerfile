FROM node:18

WORKDIR /app

COPY backend/backend/package*.json ./

RUN npm install

COPY backend/backend ./

COPY backend/backend/.env .env

EXPOSE 4000

CMD ["npm", "run", "start", "--foreground"]
