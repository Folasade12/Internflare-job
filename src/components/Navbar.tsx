import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="my-[30px]">
      <nav className="h-[42px] flex items-center justify-between">
        <h1 className="text-[40px] text-[var(--primary-orange)] font-bold">
          InternflareJobs
        </h1>
        <ul className="flex justify-between items-center gap-[15px]">
          <li className="hover:text-[var(--primary-orange)]">Home</li>
          <li className="hover:text-[var(--primary-orange)]">How it Works</li>
          <li className="hover:text-[var(--primary-orange)]">Employers</li>
          <li className="hover:text-[var(--primary-orange)]">Verification</li>
        </ul>
        <div className="flex gap-[10px] pr-[10px]">
          <Link to="/signin">
            <span className="rounded-[10px]">Sign In</span>
          </Link>
          <Link to="/contact">
            <span className="rounded-[10px] h-full px-[16px] py-[8px] border-2 border-solid text-[var(--primary-orange)] border-[var(--primary-orange)]">
              Contact Us
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
