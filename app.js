//import logo from './logo.svg';
import './App.css';
import * as React from 'react';

function App() {
const [backgroundColor,setBackgroundColor] = React.useState('green');
const [background,setBackground] = React.useState('green');
const [color,setColor] = React.useState('green');


constchangeColor = (cl) => {
constnewColor = cl;
setBackgroundColor(newColor);
  }
const changeColor1 = (cl1) => {
const newColor1 = cl1;
setBackground(newColor1);
  }
const changeColor2 = (cl2) => {
console.log('change color 2');
const newColor2 = cl2;
setColor(newColor2);
  }
React.useEffect(() => {
    var ws = new WebSocket('wss://4zgslf1c42.execute-api.us-east-2.amazonaws.com/production');
ws.onopen = () => {
console.log('Connected react app to the server')
    };
ws.onclose = (e) => {
console.log('Disconnected. Check internet or server.')
    };
ws.onerror = (e) => {
      console.log(e.message);
    };
ws.onmessage = (e) => {
console.log(e.data);
constmessageDiv = document.getElementById('message');
const messageDiv1 = document.getElementById('message1');
const messageDiv2 = document.getElementById('message2');

if(e.data === "S1OD")
      {
messageDiv.innerHTML = "Occupied";
        console.log('red');
changeColor('red');
        //changeBgColor('red');
      }
      else if (e.data === "S1NOD")
      {
messageDiv.innerHTML = "Vacant";
        console.log('green');
changeColor('green');
        //changeBgColor('green');
      }
      else if (e.data === "S2OD")
      {
        messageDiv1.innerHTML = "Occupied";
        console.log('red');
        changeColor1('red');
        //changeBgColor('red');
      }
      else if (e.data === "S2NOD")
      {
        messageDiv1.innerHTML = "Vacant";
        console.log('green');
        changeColor1('green');
        //changeBgColor('green');
      }
      else if (e.data === "S3OD")
      {
        messageDiv2.innerHTML = "Occupied";
        console.log('red');
        changeColor2('red');
        //changeBgColor('red');
      }
      else if (e.data === "S3NOD")
      {
        messageDiv2.innerHTML = "Vacant";
        console.log('green');
        changeColor2('green');
        //changeBgColor('green');
      }
    };
  }, [])
  return (
<div className='App'>
<div className='App-header'>
<br></br>
<div className='title' style={{ fontSize: '50px', fontFamily: 'fantasy',color: 'rgb(26, 4, 77)', marginLeft: '100px' }}>Smart Car Parking System</div>
<br></br>
<br></br>
<div className='floor' style={{ fontSize: '25px',fontFamily: 'fantasy',color: 'rgb(26, 4, 77)',marginRight: '1200px' }}>FLOOR 1</div>
<div id="rectangle" style={{ background: backgroundColor}}>
<br></br>
<div> Slot 1</div>
<br></br>
<div id='message'></div>
</div>
<div id="rectangle4">
<br></br>
<div> Slot 2</div>
<br></br>
<div>Vacant</div>
</div>
<div id="rectangle4">
<br></br>
<div> Slot 3</div>
<br></br>
<div>Vacant</div>
</div>
<div id="rectangle4">
<br></br>
<div>Slot 4</div>
<br></br>
<div>Vacant</div>
</div>
<br></br>
<div className='floor' style={{ fontSize: '25px',fontFamily: 'fantasy', color: 'rgb(26, 4, 77)',marginRight: '1250px',textAlign: 'center'  }}>FLOOR 2</div>
<div id="rectangle2" style={{ background: background}}>
<br></br>
<div>Slot 5</div>
<br></br>
<div id='message1'></div>
</div>
<div id="rectangle2" style={{ background: color}}>
<br></br>
<div> Slot 6</div>
<br></br>
<div id='message2'></div>
</div>
<div id="rectangle2">
<br></br>
<div>Slot 7</div>
<br></br>
<div>Vacant</div>
</div>
<div id="rectangle2">
<br></br>
<div> Slot 8</div>
<br></br>
<div>Vacant</div>
</div>
<br></br>
<br></br>
<div className='legend'>
<div style={{float: 'centre'}}>
<div className='occupied'></div>
<span style={{ fontSize: '25px',color: 'rgb(26, 4, 77)' }}>Occupied</span>
</div>
<div style={{float: 'right'}}>
<div className='vacant'></div>
<span style={{ fontSize: '25px',color: 'rgb(26, 4, 77)' }}>Vacant</span>
</div>
</div>
</div>
</div>
  );
}
export default App;
