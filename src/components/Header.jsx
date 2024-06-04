import React from "react";

const Header = () => {
  return (
    <nav className="fixed top-0 w-screen bg-slate-900">
      <div className="container mx-auto flex items-center justify-between py-3">
        <h2 className="cursor-pointer rounded px-3 py-1 font-semibold text-white duration-300 hover:bg-slate-700">
          React Weather Application
        </h2>
        <a
          href="mailto:hasiburbd24@gmail.com"
          className="rounded bg-white px-3 py-1 font-semibold text-slate-900 duration-200 hover:text-blue-800"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Header;
