"use client";

import { useUserContext } from "../context";
import styles from "./page.module.css";

export default function Home() {
  const { userState } = useUserContext();

  return <main className={styles.main}>{JSON.stringify(userState)}</main>;
}
