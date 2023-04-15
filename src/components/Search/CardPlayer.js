import { Card, Typography, styled as styledMui } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export function CardPlayer({name, id}) {
  return (
    <>
      <StyledCard onClick={()=>console.log(id)}>
        <Typography sx={{overflow:"hidden", fontFamily:"Playfair Display"}}>
          {name}
        </Typography>
        <PersonAddIcon/>
      </StyledCard>
    </>
  )
}

const StyledCard = styledMui(Card)({
  display:"flex",
  justifyContent:"space-between",
  width:"100%",
  height:40,
  marginTop:10,
  padding:"8px 5px",
})