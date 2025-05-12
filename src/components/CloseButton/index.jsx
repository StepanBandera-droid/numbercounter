import "./styles.css";

const CloseButton = ({ deleteClick }) => {
  return (
    <button className="close-button" onClick={deleteClick}>
      Обнулить счетчик кликов
    </button>
  );
};

export default CloseButton;
