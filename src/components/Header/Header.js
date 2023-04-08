import styled from "styled-components";


export default function Header() {
  return (
    <HeaderStyles></HeaderStyles>
  );
}

const HeaderStyles = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #8F5E29;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  height: 70px;
  width: 100%;
`
