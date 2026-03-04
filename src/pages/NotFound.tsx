import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
        The page you're looking for doesn't exist or has been moved. Let's get
        you back to the right orbit.
      </p>
      <Link
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        to="/"
        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold rounded-lg hover:shadow-2xl hover:shadow-pacific-cyan/40 transition-all duration-300 transform hover:-translate-y-1"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
