import './App.css';
import Main from './Components/Main';
import HomeScreen from './Screens/HomeScreen';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <HomeScreen />
    </div>
  );
}

export default App;
