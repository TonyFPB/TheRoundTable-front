import { Divider } from "@mui/material";
import styled from "styled-components";


export default function InfoForm({name, references, type, value}) {

  return(
    <InfoStyled references={references}>
      <p>{name}: {value}</p>
      <Divider/>
    </InfoStyled>
  )
}

const InfoStyled = styled.div`
  margin:0 0 10px 0;
  p{
    margin: ${props=>props.references ? "0 0 0 10px" : "0 0 0 0"};
  }
`