import classes from "./HamburgerMenu.module.css";

interface Props {
  active: boolean;
  togleMenu: () => void;
}

const HamburgerMenu = ({ active, togleMenu }: Props) => {
  return (
    <div
      onClick={togleMenu}
      className={active ? classes["container-menu"] : classes["container-menu"]}
    >
      <span
        className={`${classes.span} ${
          active ? classes["first-span-active"] : classes["first-span-disabled"]
        }`}
      ></span>

      <span
        className={`${classes.span} ${
          active
            ? classes["second-span-active"]
            : classes["second-span-disabled"]
        }`}
      ></span>

      <span
        className={`${classes.span} ${
          active ? classes["third-span-active"] : classes["third-span-disabled"]
        }`}
      ></span>
    </div>
  );
};

export default HamburgerMenu;
