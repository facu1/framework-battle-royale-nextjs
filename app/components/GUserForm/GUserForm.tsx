"use client";

import { useState } from "react";
import { User } from "app/models";
import { GButton } from "../../../components";
import {
  emptyUserState,
  useDialogContext,
  useUserContext,
} from "../../../context";
import styles from "./GUserForm.module.css";
import { ButtonTypes } from "../../../components/GButton/GButton";

function GUserForm() {
  const { setUserState } = useUserContext();
  const { setDialogState } = useDialogContext();
  const [formState, setFormState] = useState<User>(emptyUserState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name: fieldName, value: fieldValue },
    } = e;

    setFormState((prevState) => ({ ...prevState, [fieldName]: fieldValue }));
  };

  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formState.name) {
      setUserState(formState);
      setDialogState(false);
    }
  };
  return (
    <form className={styles["g-form"]}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" onChange={handleInputChange} />
      <GButton callBack={submit} type={ButtonTypes.SUBMIT}>
        Save
      </GButton>
    </form>
  );
}

export default GUserForm;
