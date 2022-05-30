import './App.css';
import {
    BrowserRouter as MainRouter,
    Routes as Switch,
    Route,
    Navigate
} from 'react-router-dom'
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
          <MainRouter>
              <Switch>
                  <Route path='/' element={<Home/>}></Route>
              </Switch>
      </MainRouter>
    </div>
  );
}

export default App;
