import "./button.scss";

const Button = ({ title, onClick, type = "button" }: ButtonProps) => {
  return (
    <button
      type={type}
      className="btn btn-primary core__button"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
