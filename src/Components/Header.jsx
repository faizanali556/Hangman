import React from "react";

function Header({ category }) {
  return (
    <div className="text-center">
      <h1 className="text-center text-6xl md:text-8xl text-slate-500 mt-8 mb-10">
        HangMan Game
      </h1>
      <span className="text-3xl  m-auto text-fuchsia-500  pb-[20px]">
        Category: {category}
      </span>
    </div>
  );
}

export default Header;
