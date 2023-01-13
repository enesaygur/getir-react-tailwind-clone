import React, { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { useWindowWidth } from "@react-hook/window-size";
import { IoIosArrowDown } from "react-icons/io";
export default function Menu({ title, items }) {
  const windowWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState(true);
  const toggleCollapse = () => {
    if (windowWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };
  useEffect(() => {
    if (isOpen && windowWidth <= 768) {
      setIsOpen(false);
    }
    if (!isOpen && windowWidth > 768) {
      setIsOpen(true);
    }
  }, [windowWidth]);
  return (
    <div>
      <section>
        <nav className="grid gap-y-4 items-center w-full">
          <h6
            onClick={toggleCollapse}
            className="text-primary-brand-color text-lg flex items-center justify-between"
          >
            {title}
            <button className="w-6 h-6 rounded-lg grid place-items-center ml-2 bg-primary-brand-color bg-opacity-10 text-primary-brand-color "><IoIosArrowDown size={14}/></button>
          </h6>
          <Collapse isOpened={isOpen}>
            <nav>
              <ul className="grid gap-y-4 text-center md:text-center lg:text-left xl:text-left">
                {items.map((item, key) => (
                  <li key={key}>
                    <a href="" className="text-sm hover:text-brand-color  ">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Collapse>
        </nav>
      </section>
    </div>
  );
}
