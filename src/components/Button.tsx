import "../styles/button.css";

interface Props {
  onTap: () => void;
}
const Button = (props: Props) => {
  return (
    <button onClick={props.onTap} className="button">
      Continue
    </button>
  );
};

export default Button;
