import React from 'react';
import './App.css';
import MemberList from "./component/MemberList";
import {ApplicationState} from "./store";
import {Store} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import {History} from "history";

interface MainProps{
    store: Store<ApplicationState>;
    history: History;
}

const App: React.FC<MainProps> = ({store, history})=>{
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Router>
                    <div className="App">
                        <Switch>
                            <Route exact path={'/'} render={(props) =>
                                <MemberList/>}
                            /> </Switch>
                    </div>
                </Router>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;

/*
<Provider store={store}>
        <ConnectedRouter history={history}>
          <Router>
            <div className="App">
              <Switch>
                <Route exact path={'/'} render={(props) =>
                         <MemberList/>}
                /> </Switch>
            </div>
          </Router>
        </ConnectedRouter>
      </Provider>
 */