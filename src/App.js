import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header";
import Contact from "./component/Content";
import moduleName from "bootstrap/dist/css/bootstrap.min.css";
import Content from "./component/Content";
import Contents from "./component/Contents";
import { Provider } from "./context";
import NewPerson from "./layout/NewPerson";
import About from "./pages/About";
import Notfoud from "./layout/Notfoud";

function App() {
  // const statt = [{
  //   name: 'Ali',
  //   lastName: 'Vahidi',
  //   age: 22
  // },
  // {
  //   name: 'Abbas',
  //   lastName: 'Akbari',
  //   age: 20
  // }]

  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="contacrt manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contents} />
              <Route exact path="/about" component={About} />
              <Route exact path="/add" component={NewPerson} />
              <Route component={Notfoud} />
            </Switch>
            {/* <NewPerson /> */}
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
