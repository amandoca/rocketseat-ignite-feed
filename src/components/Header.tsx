import styles from "./Header.module.css";
// @ts-ignore
import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo" />
    </header>
  );
}
