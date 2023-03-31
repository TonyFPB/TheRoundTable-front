import styled from "styled-components"

export const StyledSign = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
  height:100vh;
  display: flex;
  img {
    width: 300px;
  }
  a {
    margin: 10px 0 0 0;
    color:#000000;
    font-family: 'Playfair Display', serif;
    font-weight:700;
    font-size:20px;
  }
`
export const StyledForm = styled.form`
  display: flex;
  flex-direction:column;
  width: 300px;
`

export const Tittle = styled.h1`
  font-family: 'Cinzel', serif;
  font-weight:700;
  font-size:40px;
`