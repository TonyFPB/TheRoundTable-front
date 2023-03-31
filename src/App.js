import GlobalStyle from "./assets/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
