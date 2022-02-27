import React from "react";
import { Link } from "react-router-dom";

const navigationItem = [
  { name: "OXIFIT", path: "/", id: 1 },
  { name: "GYM SERVICES AND FEATURES", path: "/features", id: 2 },
  { name: "BEGINNERS GUIDE", path: "/beginner", id: 3 },
  { name: "OUR GROUP CLASSES", path: "/group-class", id: 4 },
  { name: "PERSONAL TRAINING", path: "/personal-trainer", id: 5 },
  { name: "CONTACT US", path: "/", id: 6 },
  { name: "MEMBERSHIPS", path: "/membership", id: 7 },
];

const Navbar = ({ visibility }) => {
  return (
    <>
      {/* main menu  */}
      <div className="hidden md:flex justify-center">
        {navigationItem.map(({ id, name, path }) => (
          <Link
            to={path}
            key={id}
            className="p-2 text-xs text-center rounded hover:bg-blue-300"
          >
            {name}
          </Link>
        ))}
      </div>

      {/* mobile menu */}
      <ul className="md:hidden bg-slate-200">
        {visibility
          ? navigationItem.map(({ id, name, path }) => (
              <li key={id} className="text-xs text-center p-1 hover:bg-red-500">
                <Link to={path}>{name}</Link>
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default Navbar;
