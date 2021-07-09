import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage';
import DustPage from './pages/DustPage/DustPage';
import CovidPage from './pages/CovidPage/CovidPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} />
        <Route exact path="/dust" component={DustPage} />
        <Route exact path="/covid" component={CovidPage} />

      </Switch>
    </Router>
  );
}

export default App;
