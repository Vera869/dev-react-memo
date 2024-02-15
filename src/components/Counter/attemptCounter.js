import styles from "./counter.module.css";

export function AttemptCounter() {
  return (
    <div className={styles.boxcounter}>
      <p className={styles.headercounter}>Осталось попыток:</p>
      <p className={styles.counter}>3</p>
    </div>
  );
}
