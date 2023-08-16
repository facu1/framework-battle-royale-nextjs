"use client";

import { GButton, GDialog } from "../../../components";
import { useDialogContext } from "../../../context";
import GUserForm from "../GUserForm/GUserForm";
import styles from "./Toolbar.module.css";

function Toolbar() {
  const { setDialogState } = useDialogContext();

  const openDialog = () => {
    setDialogState(true);
  };

  return (
    <div>
      <div className={styles["toolbar-container"]}>
        <p>Framework Battle Royale</p>
        <GButton callBack={openDialog}>Open Dialog</GButton>
      </div>
      <GDialog>
        <GUserForm />
      </GDialog>
    </div>
  );
}

export default Toolbar;
