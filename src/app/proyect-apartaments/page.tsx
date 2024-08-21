"use client"

import Image from "next/image";
import classes from "./ProyectApartaments.module.css";
import Result1 from "/public/proyect-1/6.jpg";
import Result2 from "/public/proyect-1/7.jpg";
import Result3 from "/public/proyect-1/8.jpg";
import Render1 from "/public/proyect-1/1.jpg";
import Render2 from "/public/proyect-1/2.jpg";
import Construct1 from "/public/proyect-1/3.jpg";
import Construct2 from "/public/proyect-1/4.jpg";
import Construct3 from "/public/proyect-1/5.jpg";
import { Poppins } from "next/font/google";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useMenu } from "@/hooks";
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const ProyectApartaments = () => {
  const { setActiveMenu } = useMenu();

  const activeMenu = () => {
    setActiveMenu(true);
  };

  return (
    <article className={classes["container-proyect"]}>
      <Link href="/#proyects">
        <button className={classes["button-back"]} onClick={activeMenu}>
          <ArrowLeft color="white" />
        </button>
      </Link>

      <h1 className={poppins.className}>Diseño de apartamentos</h1>

      <div className={classes["container-images"]}>
        <Image
          src={Render1}
          alt="Proyecto de apartarmentos"
          className="rounded-md mt-5"
        />
        <Image
          src={Render2}
          alt="Proyecto de apartarmentos"
          className="rounded-md mt-5"
        />
      </div>

      <p className="my-5">
        En esta etapa, trabajamos en la creación de renders detallados que
        capturan la esencia y visión del proyecto. Estos renders nos permiten
        visualizar con precisión cómo se verá el complejo de apartamentos,
        asegurando que todos los detalles estén alineados con las expectativas
        del cliente antes de avanzar a la construcción. Desde la distribución de
        espacios hasta la selección de materiales y acabados, cada render es una
        herramienta esencial para comunicar la calidad y el diseño final.
      </p>
      <div className={classes["container-images"]}>
        <Image
          src={Construct1}
          alt="Proyecto de apartarmentos"
          className="rounded-md"
        />
        <Image
          src={Construct2}
          alt="Proyecto de apartarmentos"
          className="rounded-md"
        />
        <Image
          src={Construct3}
          alt="Proyecto de apartarmentos"
          className="rounded-md"
        />
      </div>

      <p className="my-5">
        La fase de construcción es donde transformamos las ideas y planos en una
        realidad tangible. Con un enfoque riguroso en la calidad y la
        eficiencia, nuestro equipo trabaja en cada detalle para asegurar que el
        desarrollo del proyecto cumpla con los más altos estándares. Desde la
        cimentación hasta los acabados, cada etapa es supervisada con precisión
        para garantizar que el resultado final refleje fielmente la visión
        establecida en los planos y renders.
      </p>
      <div className={classes["container-images"]}>
        <Image
          src={Result1}
          alt="Proyecto de apartarmentos"
          className="rounded-md"
        />
        <Image
          src={Result2}
          alt="Proyecto de apartarmentos"
          className="rounded-md"
        />
        <Image
          src={Result3}
          alt="Proyecto de apartarmentos"
          className="rounded-md"
        />
      </div>

      <p className="mt-5">
        El resultado final es la culminación de meses de planificación, diseño y
        construcción. Este complejo de apartamentos no solo cumple con los
        estándares arquitectónicos, sino que también ofrece un espacio que
        combina funcionalidad y estética. Cada detalle ha sido considerado para
        crear un hogar que los residentes disfrutarán durante muchos años.
        Estamos orgullosos de presentar este proyecto como un testimonio de
        nuestro compromiso con la excelencia en la arquitectura.
      </p>
    </article>
  );
};

export default ProyectApartaments;
