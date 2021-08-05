import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />

      </Switch>
    </Router>
  );
}

export default App;
