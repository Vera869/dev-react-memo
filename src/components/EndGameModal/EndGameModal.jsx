import styles from "./EndGameModal.module.css";
import { Button } from "../Button/Button";
import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import { addLeader } from "../../api";
import { Link } from "react-router-dom";

export function EndGameModal({ isWon, gameDurationSeconds, gameDurationMinutes, onClick, withoutSuperpowers }) {
  const [username, setUsername] = useState("Пользователь");
  const [isAddingToLeaderboard, setIsAddingToLeaderboard] = useState(false);
  const isMode = useSelector(store => store.games.isMode);

  const currentLevel = useSelector(state => state.games.currentLevel);

  const buttonRef = useRef();
  const time = gameDurationMinutes * 60 + gameDurationSeconds;

  function isAddToLeaders() {
    if (isWon === true && currentLevel === 3) {
      return true;
    } else {
      return false;
    }
  }

  function achievements() {
    if (isMode === false && withoutSuperpowers === true) {
      return [1, 2];
    } else if (isMode === false && withoutSuperpowers === false) {
      return [1];
    } else if (isMode === true && withoutSuperpowers === true) {
      return [2];
    } else {
      return [];
    }
  }

  function addToLeaderboard({ username, time }) {
    buttonRef.disabled = true;
    const valUserName = username.trim();
    if (valUserName.length > 2 && valUserName.length < 20) {
      setUsername(valUserName);
    } else {
      alert(
        "Имя пользователя должно сожержать  не менее 3 и не более 20 символов, пожалуйста, используйте буквы и цифры",
      );
      return;
    }
    addLeader({ username, time, achievements }).then(() => {
      buttonRef.disabled = false;
      setIsAddingToLeaderboard(true);
      setUsername("");
    });
  }

  const title = isWon ? (isAddToLeaders() === true ? "Вы попали на Лидерборд!" : "Вы победили!") : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      {isAddToLeaders() === true && isAddingToLeaderboard === false && (
        <>
          <input
            className={styles.username}
            type="text"
            placeholder="Пользователь"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <button className={styles.addButton} ref={buttonRef} onClick={() => addToLeaderboard({ username, time })}>
            Отправить
          </button>
        </>
      )}
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>

      <Button onClick={onClick}>Начать сначала</Button>
      <Link className={styles.leaderboardLink} to="/leaderboard">
        Перейти к лидерборду
      </Link>
    </div>
  );
}
