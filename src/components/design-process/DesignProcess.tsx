"use client";

import Image from "next/image";
import classes from "./DesignProcess.module.css";
import Render1 from "/public/renders/render-1.jpg";
import Render2 from "/public/renders/render-2.jpg";
import Render3 from "/public/renders/render-3.jpg";
import { Poppins } from "next/font/google";
import { useEffect, useRef, useState } from "react";
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const DesignProcess = () => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Solo actualiza el estado si el elemento está en vista y aún no se ha activado
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isInView]);

  return (
    <section className={classes["container-body"]} id="projects">
      <h1
        className={`${poppins.className} ${isInView ? "faden-up" : ""}`}
        ref={elementRef}
      >
        Proceso de renders
      </h1>
      <div
        className={classes.dividor}
        style={{ width: isInView ? "100%" : "0%" }}
      />

      <p className="text-xl w-[60%]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
        obcaecati vel molestiae? Esse blanditiis consequuntur eveniet ipsam
        voluptatibus ea laborum sapiente? Iste eum a assumenda, minima adipisci
        optio earum voluptatum!
      </p>
      <br />
      <div className={classes.galery}>
        <div className={classes["card-image"]}>
          <Image src={Render1} alt="s" />
        </div>

        <div className={classes["card-image"]}>
          <Image src={Render2} alt="s" />
        </div>

        <div className={classes["card-image"]}>
          <Image src={Render3} alt="s" />
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
