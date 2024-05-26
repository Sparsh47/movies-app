import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] py-5 shadow-lg shadow-card-shadow flex items-center gap-5 px-10 bg-rich-black text-white">
      <Link
        to="/"
        className="text-netflix-red text-4xl font-[Kanit] font-medium"
      >
        FlickPick
      </Link>
      <Link to="/favorite" className="text-2xl font-medium">
        Favorites
      </Link>
    </div>
  );
};

export default Navbar;
