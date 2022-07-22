import logo from './logo.svg';
import './App.css';
import background from "./images/background.jpg";

function App() {
  const myStyle={
    backgroundImage: `url(${background})` ,
       height: "750px",
       marginTop:"0px"
};
  return (
    <div style={myStyle} >
    <h1>Tridal Builders</h1>
  </div>
  );
}

export default App;
