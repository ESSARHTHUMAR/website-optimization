"use client";

import { formUrlQuery } from "@/sanity/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Filters = () => {
  const links = ["all", "frontend", "backend", "fullstack", "next 14"];

  const [active, setActive] = useState('')
  const searchParams = useSearchParams();
  const router = useRouter();


  const handleClick = (link: string) => {
    let newUrl = '';
    setActive('');
    
    if(active === link){
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ['category'],
      })
    }
    else{
      setActive(link);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value: link.toLowerCase()
      })
    }

    router.push(newUrl, {scroll: false})

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
