import { BasicButton } from "../style/ButtonStyle";

const AtomButton = (props) => {
  const { title, onClick } = props;

  return <BasicButton onClick={onClick}>{title}</BasicButton>;
};

export default AtomButton;
