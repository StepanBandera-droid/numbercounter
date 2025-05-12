import "./styles.css";

const Button = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      Click
    </button>
  );
};

export default Button;
