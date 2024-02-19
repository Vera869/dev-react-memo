import { useParams } from "react-router-dom";

import { Cards } from "../../components/Cards/Cards";
// import styles from "../../components/Button/Button.module.css";

export function GamePage() {
  const { pairsCount } = useParams();
  return (
    <>
      <Cards pairsCount={parseInt(pairsCount, 10)} previewSeconds={5}></Cards>
    </>
  );
}
