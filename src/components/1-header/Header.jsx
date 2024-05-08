import React from "react";
import "./header.css";
import { useState } from "react";
import { useEffect } from "react";
export default function Header() {
  const [showModel, setshowModel] = useState(false);
  const [theme, settheme] = useState(
    localStorage.getItem("currentmode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className=" flex">
      <button
        onClick={() => {
          setshowModel(true);
        }}
        className="menu icon-menu flex"
      ></button>
      <div></div>

      <nav>
        <ul className="flex">
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          localStorage.setItem(
            "currentmode",
            theme === "dark" ? "light" : "dark"
          );
          settheme(localStorage.getItem("currentmode"));

          // settheme("light");
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showModel && (
        <div className=" fixed">
          <ul className="model ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModel(false);
                }}
              ></button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projets</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
