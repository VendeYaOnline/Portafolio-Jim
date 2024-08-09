import { Poppins } from "next/font/google";
import classes from "./Menu.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";
import { useRouter } from "next/navigation";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const Menu = () => {
  const [active, setActive] = useState(false);

  const togleMenu = () => {
    setActive(!active);
  };

  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return (
    <nav className={classes["container-menu"]}>
      <HamburgerMenu active={active} togleMenu={togleMenu} />
      <ul className={classes["menu-web"]}>
        <li className={poppins.className}>
          <Link href="#projects">Proyectos</Link>
        </li>

        <li className={poppins.className}>
          <Link href={"#knowledge"}>Conociminetos</Link>
        </li>

        <Link href={"#"}>
          <button className={classes["button-contact"]}>Contactar</button>
        </Link>
      </ul>

      <ul className={classes["menu-mobil"]} style={{ left: active ? 0 : -250 }}>
        <li className={poppins.className}>
          <Link href="#projects">Proyectos</Link>
        </li>

        <li className={poppins.className}>
          <Link href={"#knowledge"}>Conociminetos</Link>
        </li>

        <Link href={"#"}>
          <button className={classes["button-contact"]}>Contactar</button>
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
