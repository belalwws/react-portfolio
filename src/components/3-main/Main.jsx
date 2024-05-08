import React from "react";
import "./main.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const myProjects = [
  {
    projectTitle: "react project1",
    category: ["react", "js"],
    imgpath: "./images/1.jpg",
  },
  {
    projectTitle: "temp 1",
    category: ["html", "css"],
    imgpath: "./images/2.jpg",
  },
  {
    projectTitle: "temp 2",
    category: ["html", "css"],
    imgpath: "./images/3.jpg",
  },
  {
    projectTitle: "react project 2",
    category: ["react", "css"],
    imgpath: "./images/4.jpg",
  },
  {
    projectTitle: "javasrcipt project 2",
    category: ["java", "css"],
    imgpath: "./images/5.jpg",
  },
  {
    projectTitle: "javasrcipt project 2",
    category: ["java", "css"],
    imgpath: "./images/6.jpg",
  },
];
export default function Main() {
  const [arr, setarr] = useState(myProjects);
  const [cactive, setcactive] = useState("all");
  return (
    <main className="flex">
      <section className="left-secton flex">
        <button
          onClick={() => {
            setcactive("all");
            setarr(myProjects);
          }}
          className={cactive === "all" ? "active" : null}
        >
          All projcts
        </button>
        <button
          onClick={() => {
            setcactive("css");
            const newarr = myProjects.filter((item) => {
              const zzz = item.category.filter((myitem) => {
                return myitem === "html";
              });
              return zzz[0] === "html";
            });
            setarr(newarr);
          }}
          className={cactive === "css" ? "active" : null}
        >
          HTML&Css
        </button>
        <button
          onClick={() => {
            setcactive("oo");
            const newarr = myProjects.filter((item) => {
              const zzz = item.category.filter((myitem) => {
                return myitem === "java";
              });
              return zzz[0] === "java";
            });
            setarr(newarr);
          }}
          className={cactive === "oo" ? "active" : null}
        >
          JAVASCRIPT
        </button>
        <button
          onClick={() => {
            setcactive("dd");
            const newarr = myProjects.filter((item) => {
              const zzz = item.category.filter((myitem) => {
                return myitem === "react";
              });
              return zzz[0] === "react";
            });
            setarr(newarr);
          }}
          className={cactive === "dd" ? "active" : null}
        >
          REACT JS
        </button>
      </section>

      <section className="right-secton flex ">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgpath}
                className=" card"
              >
                <img src={item.imgpath} alt="" width={266} />
                <div style={{ width: "266px" }} className="box ">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="subtitle">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vitae modi harum error sapiente. Tenetur doloremque
                    doloribus neque debitis ipsum id. Non illum sequi
                    accusantium laborum aspernatur inventore odio ullam
                    molestias.
                  </p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>
                    <a className="link flex" href="">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
