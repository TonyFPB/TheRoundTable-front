import Header from "../../components/Header/Header";
import useOneTable from "../../hooks/api/useOneTable";
import AddNewPlayer from "../../components/AddNewPlayer/AddNewPlayer";

import styled from "styled-components";

import { useLocation } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import PlayerForm from "../../components/PlayerForm/PlayerForm";
import Search from "../../components/Search/Search";




export function OneTable() {
  const [players, setPlayers] = useState(null);
  const [table, setTable] = useState(null)
  const [overlay, setOverlay] = useState(false);

  const location = useLocation();
  const { getOneTable } = useOneTable();

  useEffect(() => {
    const { pathname } = location;
    const path = pathname.split("/");
    const id = path[path.length - 1]
    getOneTable(id)
      .then(res => {

        setTable(res)
        setPlayers(res.Player)
      })
      .catch(err => console.log(err));

  }, [])

  if (!table) {
    return (<>ainda nao</>)
  }
  return (
    <>
      <Header />
      <StyledTable>
        <TableName>{table.name}</TableName>

        {table.playerMaster ? players.map(p => <PlayerForm key={p.id} player={p} />) : ""}
        {!table.playerMaster ? <PlayerForm player={players} /> : ""}
        {
          table.playerMaster && <AddNewPlayer setOverlay={() => setOverlay(true)} />
        }
        {overlay && <Search overlay={overlay} setOverlay={setOverlay} />}
      </StyledTable>

    </>
  )
}

const StyledTable = styled.div`
  margin: 70px 0 0 0;
`
const TableName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  font-size: 80px;
  font-family: 'Playfair Display', serif;
  font-weight: 500;

  @media (max-width: 690px) {
    font-size: 60px;
  }
  @media (max-width: 480px) {
    font-size: 40px;
  }
`

