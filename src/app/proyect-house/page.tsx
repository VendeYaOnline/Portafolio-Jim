import Image from "next/image";
import classes from "./ProyectHouse.module.css";
import Render1 from "/public/proyect-2/1.png";
import Render2 from "/public/proyect-2/plano.png";
import Render3 from "/public/proyect-2/2.jpg";
import Construct1 from "/public/proyect-2/3.jpg";
import Construct2 from "/public/proyect-2/4.jpg";
import Construct3 from "/public/proyect-2/5.jpg";
import Result1 from "/public/proyect-2/6.jpg";
import { Poppins } from "next/font/google";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const ProyectHouse = () => {
  return (
    <article className={classes["container-proyect"]}>
      <Link href="/">
        <button className={classes["button-back"]}>
          <ArrowLeft color="white" />
        </button>
      </Link>

      <h1 className={poppins.className}>Diseño y reconstrucción de casa</h1>

      <div className={classes["container-images"]}>
        <Image
          src={Render1}
          alt="Proyecto de casa"
          className="rounded-md mt-5"
        />
        <Image
          src={Render2}
          alt="Proyecto de casa"
          className="rounded-md mt-5"
        />
        <Image
          src={Render3}
          alt="Proyecto de casa"
          className="rounded-md mt-5"
        />
      </div>

      <p className="my-5">
        En la fase de diseño, transformamos un lote baldío que fue proyectado
        para un parqueadero público en un espacio habitable bien estructurado.
        Nuestro objetivo fue crear una vivienda que no solo maximizara el uso
        del terreno, sino que también ofreciera comodidad y funcionalidad a los
        futuros habitantes del área. Cada aspecto del diseño se enfocó en
        integrar la casa con el entorno del parqueadero, proporcionando un
        refugio accesible y acogedor para quienes frecuenten o vivan en el
        espacio.
      </p>
      <div className={classes["container-images"]}>
        <Image src={Construct1} alt="Proyecto de casa" className="rounded-md" />
        <Image src={Construct2} alt="Proyecto de casa" className="rounded-md" />
        <Image src={Construct3} alt="Proyecto de casa" className="rounded-md" />
      </div>

      <p className="my-5">
        La reconstrucción de la casa en este lote baldío marcó un hito en
        nuestro compromiso de revitalizar espacios subutilizados. Durante esta
        fase, trabajamos en levantar la estructura desde los cimientos,
        asegurándonos de cumplir con los más altos estándares de calidad y
        seguridad. Cada paso fue supervisado para garantizar que la nueva
        edificación reflejara fielmente el diseño aprobado, preparado para
        evolucionar en una vivienda completa en el futuro.
      </p>
      <div className={classes["container-images"]}>
        <Image src={Result1} alt="Proyecto de casa" className="rounded-md" />
      </div>

      <p className="mt-5">
        El resultado final en obra negra representa el esqueleto de lo que será
        una casa llena de vida. Entregamos una estructura sólida, lista para que
        los futuros propietarios personalicen y completen los detalles que harán
        de este espacio su hogar. Este proyecto no solo demuestra nuestra
        habilidad para transformar un espacio vacío en un potencial hogar, sino
        también nuestro compromiso con la calidad en cada fase del proceso de
        construcción.
      </p>
    </article>
  );
};

export default ProyectHouse;
