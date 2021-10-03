import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Add_user from './components/pages/Add_user';
import Home from './components/pages/Home'
import Records from './components/pages/records';
import EditUser from './components/pages/Edit_user';
import view from './components/pages/view';

function App() {
  return (
    <div>
        <Router>
        <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path='/records' component={Records}/>
              <Route exact path='/adduser' component={Add_user}/>
              <Route exact path='/edituser/:id' component={EditUser}/>
              <Route exact path='/view/:id' component={view}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
