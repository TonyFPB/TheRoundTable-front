import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import styled from "styled-components";
import InfoFomr from "./InfosForm";

export default function PlayerForm({player}) {
  console.log(player)
  if(player.type === "MASTER"){
    return(
      <>
      Voce
      </>
    )
  }
  return (
    <StyledForm>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {player.User.name}
        </AccordionSummary>
        <AccordionDetails>
          {player.PlayerForm.form.map((f, i)=><InfoFomr key={i} name={f.name} value={f.value} type={f.type} references={f.references}/>)}
        </AccordionDetails>
      </Accordion>
    </StyledForm>
  )
}

const StyledForm = styled.div`
  margin: 20px 50px;
`