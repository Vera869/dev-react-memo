import { useDispatch, useSelector } from "react-redux";
import { setIsMode } from "../../Store/Slice";
import styles from "./checkbox.module.css";
// import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export function Checkbox() {
  const isMode = useSelector(store => store.games.isMode);
  console.log(isMode);
  const dispatch = useDispatch();
  const changeMode = () => {
    dispatch(setIsMode());
    // console.log(isMode);
  };
  return (
    <div className={styles.box}>
      <div className={styles.checkbox}>
        <input className={styles.input} type="checkbox" checked={isMode} onChange={changeMode} />
        <h2 className={styles.header}>Лёгкий режим (3 жизни)</h2>
      </div>
      <button className={styles.button}>Играть</button>
      <Link to="/leaderboard" className={styles.link}>
        Перейти к лидерборду
      </Link>
    </div>
  );
}
