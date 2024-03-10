import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { Checkbox } from "../../components/Checkbox/checkbox";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentLevel, setLeaders } from "../../Store/Slice";
import { useEffect } from "react";
import { getLeaders } from "../../api";

export function SelectLevelPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    getLeaders().then(response => dispatch(setLeaders(response.leaders)));
  }, [dispatch]);
  const levelSelected = useSelector(store => store.games.currentLevel);
  const clickLevel = value => {
    dispatch(setCurrentLevel(value));
  };
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link
              className={levelSelected === 1 ? styles.activeLevelLink : styles.levelLink}
              onClick={() => clickLevel(1)}
            >
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link
              className={levelSelected === 2 ? styles.activeLevelLink : styles.levelLink}
              onClick={() => clickLevel(2)}
            >
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link
              className={levelSelected === 3 ? styles.activeLevelLink : styles.levelLink}
              onClick={() => clickLevel(3)}
            >
              3
            </Link>
          </li>
        </ul>
        <Checkbox />
      </div>
    </div>
  );
}
