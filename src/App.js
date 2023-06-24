import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import Counter from './Component/Pages/Counter'
import Home from './Component/Home'
import Login from './Component/Login'
import Registration from './Component/Registration'
import ShowData from './Component/ShowData'
import FooterTeam from './Component/Pages/Footer/FooterTeam'
import Footer from './Component/Pages/Footer/Footer'
function App() {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Counter" component={Counter} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Registration" component={Registration} />
      <Route exact path="/ShowData" component={ShowData} />
      <Route exact path="/FooterTeam" component={FooterTeam} />
      <Route exact path="/Footer" component={Footer} />
    </Switch>
  );
}

export default withRouter(App);
