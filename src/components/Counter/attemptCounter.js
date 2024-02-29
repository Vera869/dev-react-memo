import { useSelector } from "react-redux";
import styles from "./counter.module.css";

export function AttemptCounter() {
  const numAttempts = useSelector(store => store.games.attempts);
  return (
    <div className={styles.boxcounter}>
      <p className={styles.headercounter}>Осталось попыток:</p>
      <p className={styles.counter}>{numAttempts}</p>
    </div>
  );
}
