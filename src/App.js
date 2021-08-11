import Welcome from './components/Welcome';
// import logo from './logo.svg';
import {playerData} from './data/playerData';
import './App.css';
import PlayerList from './components/PlayerList';

function App() {
  return (
    <div className="App">
      <Welcome />
      <PlayerList playerData={playerData} />
    </div>
  )
}

export default App;
