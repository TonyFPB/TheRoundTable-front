import { Card, Typography, styled as styledMui } from "@mui/material";




export function CardPlayer({name, id}) {
  return (
    <>
      <StyledCard onClick={()=>console.log(id)}>
        <Typography>
          {name}
        </Typography>
      </StyledCard>
    </>
  )
}

const StyledCard = styledMui(Card)({
  width:"100%",
  height:40,
  marginTop:10,
  padding:"8px 5px"
})