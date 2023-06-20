import AtomButton from "../components/AtomButton";
// styles
import { ContentsWrap } from "../style/CommonStyle";
import { MainFormWrap } from "../style/FormStyle";
// router
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const startTestPage = () => {
    navigate("first");
  };

  return (
    <ContentsWrap>
      <MainFormWrap>
        <h3>BASIC TEST 시작하기</h3>
        <AtomButton title={"START"} onClick={startTestPage} />
      </MainFormWrap>
    </ContentsWrap>
  );
};

export default Home;
