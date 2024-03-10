import { useDispatch, useSelector } from "react-redux";
import { setIsMode } from "../../Store/Slice";
import styles from "./checkbox.module.css";
import { Link, useNavigate } from "react-router-dom";

export function Checkbox() {
  const isMode = useSelector(store => store.games.isMode);
  const gemeLevel = useSelector(store => store.games.currentLevel);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeMode = () => {
    dispatch(setIsMode());
  };
  const clickPlay = () => {
    if (gemeLevel === null) alert("Для старта игры, пожалуйста, выберите уровень.");
    if (gemeLevel === 1) navigate("/game/3");
    if (gemeLevel === 2) navigate("/game/6");
    if (gemeLevel === 3) navigate("/game/9");
  };
  return (
    <div className={styles.box}>
      <div className={styles.checkbox}>
        <input className={styles.input} type="checkbox" checked={isMode} onChange={changeMode} />
        <h2 className={styles.header}>Лёгкий режим (3 жизни)</h2>
      </div>
      <button className={styles.button} onClick={() => clickPlay()}>
        Играть
      </button>
      <Link to="/leaderboard" className={styles.link}>
        Перейти к лидерборду
      </Link>
    </div>
  );
}
