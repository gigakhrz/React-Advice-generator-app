import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Advicebox from "./components/Advicebox";

function App(): JSX.Element {
  return (
    <Container>
      <GlobalStyles />
      <Advicebox />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #202733;
`;
