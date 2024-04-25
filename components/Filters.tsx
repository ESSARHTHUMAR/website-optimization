"use client";

import React, { useState } from "react";

const Filters = () => {
  const links = ["all", "frontend", "backend", "fullstack", "next 14"];

  const [active, setActive] = useState('')


  const handleClick = (link: string) => {
    setActive(link);
  }

  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link) => (
        <button key={link} onClick={() => handleClick(link)} className={`${active === link ? "gradient_blue-purple" : ""} whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}>
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filters;
