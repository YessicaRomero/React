import Messeger from "./messeger";
function App() {
  const name = "Pepote";
  const color = [{id:1, name:"orange"},{id:2, name: "blue"},{id:3 , name:"red"}, {id:4 , name:"pink"},{id: 5, name:"purple"},];


  return (
    <>
    <h1>Hola Mundo</h1>
    <p>vslsdjf nfldsfldnsn</p>
    <p>Hola {name}</p>
    <ol>
      {color.map(c => <li key={c.id}>{c.name}</li>)}
    </ol>
    <Messeger msg={"Probando y conociendo React"}></Messeger>
  </>
  );
}

export default App
