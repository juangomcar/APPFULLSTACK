import Link from "next/link";
import { buttonVariants } from '@/components/ui/button';

function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-4xl font-bold mb-8">Full Stack App Arquitectura de software</h1>

      <Link href="/albums/new" className={buttonVariants()}>
        Create Album
      </Link>

      <Link href="/songs/new"className={buttonVariants()}>
      Create Song
    </Link>

      <Link href="/artists/new" className={buttonVariants()}>
        Create Artist
      </Link>

      <Link href="/song" className={buttonVariants()}>
        View Songs
      </Link>

      <Link href="/album" className={buttonVariants()}>
        View Albums
      </Link>

      <Link href="/artist" className={buttonVariants()}>
        View Artists
      </Link>
    </div>
  );
}

export default Homepage;
