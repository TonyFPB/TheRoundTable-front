import Input from "../Form/Input";
import { useState } from "react";
import styled from "styled-components";
import { CardPlayer } from "./CardPlayer";
import { getUsers } from "../../services/userApi";
import { debounce } from "@mui/material/";

export default function Search({ overlay, setOverlay }) {
  const [playerName, setPlayerName] = useState([]);

  async function handleChange(player) {
    try {
      const players = await getUsers(player)
      console.log(players)
      setPlayerName(players);
    } catch (err) {
      setPlayerName([])
    }

  }
  return (
    <Overlay>
      <LeftSide onClick={() => setOverlay(!overlay)} />
      <SearchStyled>
        <Input
          label="Pesquisar"
          variant="standard"
          sx={{ width: "100%" }}
          onChange={e => handleChange(e.target.value)} />
        {
          playerName.length !== 0
            ?
            playerName.map(p=><CardPlayer key={p.id} id={p.id} name={p.name} />)
            :
            ""
        }
      </SearchStyled>
    </Overlay>
  )
}

const SearchStyled = styled.div`
  background-color: white;
  height: 100%;
  width: 40%;
  background-color: rgba(255,255,255, 0.8);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px 30px;
`
const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 2;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.3);
`
const LeftSide = styled.div`
  height: 100%;
  width: 60%;
`