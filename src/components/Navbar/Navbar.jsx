import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import npcdp from '../../assets/images/npc-user.png';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/plants">Plants</NavLink>
      </li>
      <li>
        <NavLink to="/my-profile">My Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-20 bg-primary shadow-sm px-4 md:px-10 lg:px-20">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-100 mt-3 w-48 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* Brand */}
        <Link
          to="/"
          className="btn btn-ghost text-primary-content normal-case hover:bg-inherit hover:border-inherit text-lg md:text-xl whitespace-nowrap"
        >
          GreenNest
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 [&>li>a]:text-base-100 lg:[&>li>a]:text-lg">
          {links}
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end gap-2 md:gap-4">
        {user ? (
          <div className="dropdown dropdown-end hover:cursor-pointer">
            <div tabIndex={0} role="button">
              <div className="join h-10 items-center max-w-[180px] overflow-hidden">
                <img
                  className="join-item h-8 w-8 md:h-10 md:w-10 rounded-full object-cover"
                  src={user.photoURL || npcdp}
                  alt="user avatar"
                />
                <p className="px-2 text-sm md:text-base-100 font-semibold truncate">
                  {user.displayName}
                </p>
              </div>
            </div>
            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-box z-100 w-52 p-2 shadow-sm"
            >
              <li>
                <Link to="/my-profile">My Profile</Link>
              </li>
              <li>
                <button
                  onClick={signOutUser}
                  className="btn btn-outline btn-error hover:text-white"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="join">
            <Link to="/login" className="btn btn-accent join-item btn-sm md:btn-md">
              Login
            </Link>
            <Link to="/register" className="btn btn-accent join-item btn-sm md:btn-md">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
