import { useState } from "react";
import { JsonToExcel } from "react-json-to-excel";
import { names } from "./utils/name";

function App() {
  const [maxRows, setMaxRows] = useState(10000);
  function CreateRow(value) {
    const obj = {}
    obj.line = value
    obj.name = names[Math.floor(Math.random() * names.length)]
    obj.random = Math.floor(Math.random() * maxRows)
    return obj
  }
  function CreateExcel() {
    const rows = [];
    let counter = 1;

    while (counter <= maxRows) {
      rows.push(CreateRow(counter));
      counter++;
    }
    return rows
  }
  return (
    <div>
      <span>Selecione quantas linhas o arquivo deve ter:</span>
      <input
        value={maxRows}
        onChange={(e) => setMaxRows(e.target.value)}
        type="number"
      ></input>
      <span>(aparentemente o limite é dezena de milhar)</span>
      <JsonToExcel
        title="Download como Excel"
        data={CreateExcel()}
        fileName="registro-de-ponto"
        btnClassName="custom-classname"
      />
    </div>
  );
}

export default App;
