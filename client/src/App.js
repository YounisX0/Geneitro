import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
background: ${({ theme }) => theme.bg};
color: ${({ theme }) => theme.text_primary};
overflow-x: hidden;
overflow-y: hidden;
transition: all 0.3s ease;
`;
const Wrapper = styled.div`
height: 100%;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
flex: 3;
`;
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Wrapper>
          <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path="/" element={<Home />} exact/>
              <Route path="/post" element={<CreatePost />} exact />
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
