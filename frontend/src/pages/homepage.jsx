
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-blue-300 px-6 py-20">
      <h1 className="text-6xl font-extrabold text-blue-800 mb-8 drop-shadow-lg">
        Backlog Boss
      </h1>

      <p className="max-w-xl text-center text-gray-700 text-lg mb-12">
        The ultimate video game backlog tracker for gamers who want to conquer their unplayed
        library. Track progress, log playtime, and turn your backlog into a victory list.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <Link
          to="/about"
          className="bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition hover:bg-blue-800 hover:shadow-lg"
        >
          Learn More
        </Link>
        <Link
          to="/auth"
          className="bg-green-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition hover:bg-green-700 hover:shadow-lg"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
