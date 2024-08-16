"use client";

import { useEffect, useRef, useState } from "react";
import classes from "./About.module.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "500" });
import Image from "next/image";
import Avatar from "/public/avatar.jpg";

const About = () => {
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
    <section className={classes["container-about"]}>
      <h1
        id="about"
        className={`${poppins.className} ${isInView ? "faden-up" : ""}`}
        ref={elementRef}
      >
        Acerca de mi
      </h1>
      <div
        className={classes.dividor}
        style={{ width: isInView ? "100%" : "0%" }}
      />

      <div className={classes.about}>
        <Image src={Avatar} alt="Avatar" style={{ borderRadius: 10 }} />
        <div>
          <h1 className={poppins.className}>Estudiante de Arquitectura</h1>
          <h2 className={poppins.className}>Grado 9</h2>
          <p>
            Estoy en la etapa final de mis estudios de arquitectura y ya cuento
            con experiencia en la creación de planos, desarrollo de renders, y
            supervisión de obras. He aplicado mis conocimientos en proyectos
            reales, asegurando que cada detalle cumpla con los más altos
            estándares de calidad y diseño.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
