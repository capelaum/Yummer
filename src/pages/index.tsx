import { Banner } from "../components/Banner";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner />
      <section className={styles.menu}>
        <nav className={styles.menuNav}>
          <button>Cookies</button>
          <button>Rabanadas</button>
          <button>Sucos</button>
        </nav>
      </section>
    </div>
  );
}
