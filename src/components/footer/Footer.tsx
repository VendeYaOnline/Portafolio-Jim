import Link from "next/link";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes["container-footer"]}>
      <span>
        Desarrollado por{" "}
        <Link
          href="https://vendeyaonline.com/"
          target="_blank"
          className="font-bold ml-1"
        >
          VendeYaOnline
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
