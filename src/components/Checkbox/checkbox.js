import { useDispatch, useSelector } from "react-redux";
import { setIsMode } from "../../Store/Slice";
import styles from "./checkbox.module.css";

export function Checkbox() {
  const isMode = useSelector(store => store.games.isMode);
  console.log(isMode);
  const dispatch = useDispatch();
  const changeMode = () => {
    dispatch(setIsMode());
    console.log(isMode);
  };
  return (
    <div className={styles.box}>
      <h2 className={styles.header}>Играть в режиме 3 попытки</h2>
      <input className={styles.input} type="checkbox" checked={isMode} onChange={changeMode} />
    </div>
  );
}
