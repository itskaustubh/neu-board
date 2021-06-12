import './App.scss';
import Navbar from './components/layout/navbar'
import Dashboard from './components/dashboard/dashboard'
import WriteMessage from './components/projects/writeMessage'
import { BrowserRouter,Switch,Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/add' component={WriteMessage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
