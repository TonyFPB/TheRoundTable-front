import GlobalStyle from "./assets/Styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignPages/SignUp";
import Login from "./pages/SignPages/Login";
import { ToastContainer } from 'react-toastify';
import Table from "./pages/Tables/Table";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="/tables" element={<Table/>}/>
          <Route path="/table/:name" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
