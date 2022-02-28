import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";

const Header = () => {
  let [visibility, setVisibility] = useState(false);

  const handleToggle = () => {
    visibility ? setVisibility(false) : setVisibility(true);
  };
  return (
    <nav className="w-full mx-auto pt-2 bg-gray-100">
      <div className="flex justify-between px-4 pb-2">
        {/* {hamberger icon for responsive model} */}
        <div className="md:hidden">
          <button id="mobile-menu-button" onClick={handleToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="md:mx-auto">
          <Link to="/">
            <img
              className="h-28"
              src="https://scontent.fdac144-1.fna.fbcdn.net/v/t1.6435-9/126516832_100402195244562_5148954827029311154_n.png?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=j29BTTvdtvwAX9e1-zJ&_nc_ht=scontent.fdac144-1.fna&oh=00_AT8SfgXL_YCvL5I8vEHlhsUwXwlom_meuj1tOcXJ_l5cNw&oe=6239BE84"
              alt=""
            />
          </Link>
        </div>
        {/* {globe icon (no function added)} */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        </div>
      </div>
      <Navbar visibility={visibility} />
    </nav>
  );
};

export default Header;
