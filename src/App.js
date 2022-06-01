import './App.css';
import {
    BrowserRouter as MainRouter,
    Routes as Switch,
    Route,
    Navigate
} from 'react-router-dom'
import Home from './Screens/Home';
import Edituser from './Screens/Edituser';

function App() {
  return (
    <div className="App">
          <MainRouter>
              <Switch>
                  <Route exact path="/" element={<Home />}></Route>
                  <Route exact path="/edit/:id" element={<Edituser />}></Route>
              </Switch>
      </MainRouter>
    </div>
  );
}

export default App;
