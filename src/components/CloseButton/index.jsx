import "./styles.css";

export default function CloseButton({ deleteClick }) {
  return (
    <button className="close-button" onClick={deleteClick}>
      Обнулить счетчик кликов
    </button>
  );
}
