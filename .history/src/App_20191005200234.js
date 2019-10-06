import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import allReducers from './reducers'

import Home from './Ui/Home/Home';

const mainStore = createStore(allReducers, applyMiddleware(thunk));

const App = () => {

    return ( 
      <Provider store = {mainStore}>
          <Router>
            <div className="App">
            <Nav/>
            <Switch>
              <Route path="/" exact component={Home} />
              {/* <Route path="/users" component={UserFunctional} />
              <Route path="/about" component={About} />
              <Route path="/gallery" exact component={Gallery} />
              <Route path="/gallery/:id/:author" component={GalleryDetail} />
              <Route component={NotFound} /> */}
            </Switch>
            </div>
            
          </Router>
      </Provider>
    )
}

export default App;


// import React from 'react';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// // import logo from './logo.svg';
// // import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hola mundo  cccc
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
