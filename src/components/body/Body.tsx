"use client";

import Image from "next/image";
import classes from "./Body.module.css";
import Proyect1 from "/public/proyect-1/6.jpg";
import Proyect2 from "/public/proyect-2/6.jpg";
import Proyect3 from "/public/proyect-3/8.jpg";

import { Poppins } from "next/font/google";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const Body = () => {
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
        id="proyects"
        className={`${poppins.className} ${isInView ? "faden-up" : ""}`}
        ref={elementRef}
      >
        Proyectos
      </h1>
      <div
        className={classes.dividor}
        style={{ width: isInView ? "100%" : "0%" }}
      />
      <div className={classes["container-project"]}>
        <div className={classes.project}>
          <div>
            <h2 className={poppins.className}>1. Diseño de apartamentos</h2>
            <p>
              En esta etapa, trabajamos en la creación de renders detallados que
              capturan la esencia y visión del proyecto. Estos renders nos
              permiten visualizar con precisión cómo se verá el complejo de
              apartamentos, asegurando que todos los detalles estén alineados
              con las expectativas del cliente antes de avanzar a la
              construcción. Desde la distribución de espacios hasta la selección
              de materiales y acabados, cada render es una herramienta esencial
              para comunicar la calidad y el diseño final.
            </p>
            <Link href="/proyect-apartaments">
              <button className={classes["button-project"]}>
                <div>Ver trabajo</div>
                <ChevronRight size={20} className={classes["icon-button"]} />
              </button>
            </Link>
          </div>
          <Image
            src={Proyect1}
            alt="Plano"
            width={300}
            height={300}
            className={classes["image-image-mobil"]}
          />
          <Image
            src={Proyect1}
            alt="Plano"
            width={400}
            height={400}
            className={classes["image-image-web"]}
          />
        </div>

        <div className={classes.project}>
          <div>
            <h2 className={poppins.className}>
              2. Diseño y reconstrucción de casa
            </h2>
            <p>
              El resultado final en obra negra representa el esqueleto de lo que
              será una casa llena de vida. Entregamos una estructura sólida,
              lista para que los futuros propietarios personalicen y completen
              los detalles que harán de este espacio su hogar. Este proyecto no
              solo demuestra nuestra habilidad para transformar un espacio vacío
              en un potencial hogar, sino también nuestro compromiso con la
              calidad en cada fase del proceso de construcción.
            </p>
            <Link href="/proyect-house">
              <button className={classes["button-project"]}>
                <div>Ver trabajo</div>
                <ChevronRight size={20} className={classes["icon-button"]} />
              </button>
            </Link>
          </div>
          <Image
            src={Proyect2}
            alt="Render"
            width={300}
            height={300}
            className={classes["image-image-mobil"]}
          />
          <Image
            src={Proyect2}
            alt="Render"
            width={400}
            height={400}
            className={classes["image-image-web"]}
          />
        </div>
      </div>
      <div className={classes["dividor-2"]} />

      <div className={classes["container-project"]}>
        <div className={classes["project-2"]}>
          <div>
            <h2 className={poppins.className}>
              3. Proyecto de zona social BBQ
            </h2>
            <p>
              Durante la fase de diseño, nuestro objetivo fue crear una zona
              social BBQ que sirviera como un espacio acogedor y funcional para
              el entretenimiento y la relajación. Diseñamos un área que combina
              confort y estilo, con una distribución que maximiza el uso del
              espacio y fomenta la interacción social.
            </p>

            <Link href="/proyect-bbq">
              <button className={classes["button-project"]}>
                <div>Ver trabajo</div>
                <ChevronRight size={20} className={classes["icon-button"]} />
              </button>
            </Link>
          </div>
          <Image
            src={Proyect3}
            alt="Construción"
            width={800}
            height={600}
            className={classes["image-image-mobil"]}
          />
          <Image
            src={Proyect3}
            alt="Construción"
            width={800}
            height={600}
            className={classes["image-image-web"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Body;
