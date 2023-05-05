import "./button.scss";

const Button = ({ title }: ButtonProps) => {
  return (
    <button type="button" className="btn btn-primary core__button">
      {title}
    </button>
  );
};

export default Button;
