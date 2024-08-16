"use client";

import Image from "next/image";
import classes from "./Body.module.css";
import Plano1 from "/public/planos/plano-2.png";
import Render1 from "/public/renders/render-7.jpg";
import Construction1 from "/public/construction/construction-5.jpg";
import Result1 from "/public/results/result-1.jpg";
import { Poppins } from "next/font/google";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
        className={`${poppins.className} ${isInView ? "faden-up" : ""}`}
        ref={elementRef}
      >
        Proceso de desarrollo
      </h1>
      <div
        className={classes.dividor}
        style={{ width: isInView ? "100%" : "0%" }}
      />
      <div className={classes["container-project"]}>
        <div className={classes.project}>
          <div>
            <h2 className={poppins.className}>1. Diseño de planos</h2>
            <p>
              En esta etapa, me dedico a la planificación detallada del diseño
              arquitectónico. Cada línea y cada medida se trazan con precisión
              para asegurar que el proyecto final cumpla con las expectativas
              estéticas y funcionales. Este proceso es fundamental para
              establecer una base sólida antes de pasar a la siguiente fase.
            </p>
            <button className={classes["button-project"]}>
              <div>Ver trabajo</div>
              <ChevronRight size={20} className={classes["icon-button"]} />
            </button>
          </div>
          <Image
            src={Plano1}
            alt="Plano"
            width={300}
            height={300}
            className={classes["image-image-mobil"]}
          />
          <Image
            src={Plano1}
            alt="Plano"
            width={400}
            height={400}
            className={classes["image-image-web"]}
          />
        </div>

        <div className={classes.project}>
          <div>
            <h2 className={poppins.className}>2. Diseño de render</h2>
            <p>
              Después de completar los planos, me enfoco en la creación de
              renders realistas. Estos renders permiten visualizar el proyecto
              con todos sus detalles, proporcionando una imagen clara de cómo se
              verá el resultado final. Es una herramienta esencial para prever
              ajustes y garantizar que el diseño se alinee con la visión del
              cliente.
            </p>
            <button className={classes["button-project"]}>
              <div>Ver trabajo</div>
              <ChevronRight size={20} className={classes["icon-button"]} />
            </button>
          </div>
          <Image
            src={Render1}
            alt="Render"
            width={300}
            height={300}
            className={classes["image-image-mobil"]}
          />
          <Image
            src={Render1}
            alt="Render"
            width={400}
            height={400}
            className={classes["image-image-web"]}
          />
        </div>
      </div>
      <div className={classes["dividor-2"]} />

      <div className={classes["container-project"]}>
        <div className={classes.project}>
          <div>
            <h2 className={poppins.className}>3. Diseño de construnción</h2>
            <p>
              En esta fase, se da vida al diseño trazado en los planos. Con una
              ejecución meticulosa y atención al detalle, se asegura que cada
              aspecto de la construcción se alinee con el diseño deseado. Este
              proceso es donde la visión comienza a materializarse, convirtiendo
              las ideas en una estructura tangible.
            </p>
            <button className={classes["button-project"]}>
              <div>Ver trabajo</div>
              <ChevronRight size={20} className={classes["icon-button"]} />
            </button>
          </div>
          <Image
            src={Construction1}
            alt="Construción"
            width={300}
            height={300}
            className={classes["image-image-mobil"]}
          />
          <Image
            src={Construction1}
            alt="Construción"
            width={400}
            height={400}
            className={classes["image-image-web"]}
          />
        </div>

        <div className={classes.project}>
          <div>
            <h2 className={poppins.className}>4. Resultado final</h2>
            <p>
              Finalmente, llega el momento en que el cliente puede ver hecho
              realidad el hogar o proyecto de sus sueños. Cada detalle ha sido
              cuidadosamente considerado y ejecutado, culminando en un espacio
              que no solo cumple, sino que supera las expectativas.
            </p>
            <button className={classes["button-project"]}>
              <div>Ver trabajo</div>
              <ChevronRight size={20} className={classes["icon-button"]} />
            </button>
          </div>
          <Image
            src={Result1}
            alt="Resultado"
            width={300}
            height={300}
            className={classes["image-image-mobil"]}
          />
          <Image
            src={Result1}
            alt="Resultado"
            width={400}
            height={400}
            className={classes["image-image-web"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Body;
