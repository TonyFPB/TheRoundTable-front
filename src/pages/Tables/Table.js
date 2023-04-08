import styled from "styled-components";
import Header from "../../components/Header/Header";
import { useEffect } from "react";

import { useState } from "react";
import useTableUser from "../../hooks/api/useTable";
import TableCards from "../../components/TableCards/TableCard";

export default function Table() {
  const [tables, setTables] = useState([]);
  const { getTablesUser, tableUser } = useTableUser();
  const teste = [1,2,3,4,5,6,7,8,9,10,11]

  useEffect(() => {
    if(tableUser){
      setTables(tableUser);
    }
  }, [tableUser])

  return (
    <>
      <Header />
      <TableContainer>
        {tables
          ?
          tables.map(t => <TableCards key={t.Table.id} player={t} table={t.Table} />)
          :
          "tachu"
        }
      </TableContainer>

    </>
  );
}

const TableContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 75px 0 0 0;
  padding: 0 50px;
`
