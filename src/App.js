import GlobalStyle from "./assets/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="sign-up" element={<SignUp />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
