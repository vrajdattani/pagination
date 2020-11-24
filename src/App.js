import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import FetchPost from './Components/FetchPost';
import RawJson from './Components/RawJson';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={FetchPost}/>
        <Route path='/RawJson' component={RawJson}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
