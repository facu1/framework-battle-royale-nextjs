import { ReactNode } from "react";
import styles from "./GButton.module.css";

export enum ButtonTypes {
  "SUBMIT" = "submit",
  "RESET" = "reset",
  "BUTTON" = "button",
}

interface Props {
  children: ReactNode;
  callBack: (e: any) => void;
  type?: ButtonTypes;
}

function GButton({ children, callBack, type = ButtonTypes.BUTTON }: Props) {
  const handleOnClick = (e: any) => {
    callBack(e);
  };

  return (
    <button className={styles.button} type={type} onClick={handleOnClick}>
      {children}
    </button>
  );
}

export default GButton;
