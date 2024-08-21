import { Poppins } from "next/font/google";
import classes from "./Menu.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";
import { useRouter } from "next/navigation";
import { useMenu } from "@/hooks";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const Menu = () => {
  const [active, setActive] = useState(false);
  const { activeMenu, setActiveMenu } = useMenu();
  const router = useRouter();

  const togleMenu = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (activeMenu) {
    } else {
      router.replace("/");
    }
  }, [router]);

  return (
    <nav className={classes["container-menu"]}>
      <HamburgerMenu active={active} togleMenu={togleMenu} />
      <ul className={classes["menu-web"]}>
        <li className={poppins.className}>
          <Link href={"#about"}>Acerca de</Link>
        </li>
        <li className={poppins.className}>
          <Link href={"#services"}>Servicios</Link>
        </li>

        <li className={poppins.className}>
          <Link href={"#proyects"}>Proyectos</Link>
        </li>

        <Link href={"#"}>
          <button className={classes["button-contact"]}>Contactar</button>
        </Link>
      </ul>

      <ul className={classes["menu-mobil"]} style={{ left: active ? 0 : -250 }}>
        <li className={poppins.className}>
          <Link href={"#about"}>Acerca de</Link>
        </li>
        <li className={poppins.className}>
          <Link href={"#services"}>Servicios</Link>
        </li>

        <li className={poppins.className}>
          <Link href={"#proyects"}>Proyectos</Link>
        </li>

        <Link href={"#"}>
          <button className={classes["button-contact"]}>Contactar</button>
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
