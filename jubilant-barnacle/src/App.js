import './App.css';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import RockPaperScissors from './games/RockPaperScissors';
import TicTacToe from './games/TicTacToe';
import Typing from './games/Typing';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/tictactoe" component={TicTacToe} />
        <Route exact path="/rockpaperscissors" component={RockPaperScissors} />
        <Route exact path="/typing" component={Typing} />
      </main>
    </div>
  );
}

export default App;
