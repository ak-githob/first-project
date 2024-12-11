import logo from './logo.svg';
import './App.css';
import Child from './Child';

function addition() {
  var a = document.getElementById('n1').value;
  var b = document.getElementById('n2').value;

  var c = parseInt(a)+parseInt(b)
  var d = parseInt(a)-parseInt(b)
  var e = parseInt(a)*parseInt(b)
  var f = parseInt(a)/parseInt(b)

  document.getElementById('t2').innerHTML = 
  "Addition of two numbers is: " + c + "<br>" +
  "Subtraction of two numbers is: " + d + "<br>" +
  "Multiplication of two numbers is: " + e + "<br>" +
  "Division of two numbers is: " + f;
}
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>First React App for Calulation</p>
        <img src={logo} className="App-logo" alt="logo" />
        
      Enter first number <input id='n1' type='text'></input>
      Enter second number <input id='n2' type='text'></input>
      <br></br>
      <button id='b1' onClick={addition} value='Calculate'> Calculate</button>
      
      <text id='t2'></text>
      </header>
      Alok
      <Child>
        
      </Child>
    </div>
  );
}

export default App;
