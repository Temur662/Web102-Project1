import "./App.css";
import "./componets/Box";
import Box from "./componets/Box";
import Arsenal from "./images/Arsenal.png"
const App = () =>{
  return(
    <div className = "App">
      <div className = "headImg">
        <img id = "headerImg" src = {Arsenal} />
      </div>
      <h1>Arsenal Match Schedule</h1>
      <Box />
    </div>
  )
}

export default App;