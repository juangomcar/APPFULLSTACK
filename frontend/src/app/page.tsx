import Link from "next/link";
import {buttonVariants} from '@/components/ui/button'

function Homepage() {
  return (
    <div className="flex justify-between">
     <h1
       className="text-4xl font-bold"
      >
       NextNestApp
     </h1>

    <Link
      href="/songs/new"
      className={buttonVariants()}
    >
      Create Song
    </Link>

  </div>
  );
}
export default Homepage;