import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./lib/components/Navbar/Navbar"
import { Home } from "./pages/Home/Home"
import { Search } from "./pages/Search/Search"



function App() {
   return (
      <Router>
         <div className="App">
            <Navbar />
            <Switch>
               <Route
                  path="/Prophets"
                  exact
                  render={() => <Search showProphets={true} />}
               />
               <Route path="/" component={Home} />
            </Switch>
         </div>
      </Router>
   )
}

ReactDOM.render(<App />, document.getElementById("root"))
