/**
 * Created by dejun on 2/19/2016.
 */
import React from "react";
import {render} from "react-dom";
import {Router, hashHistory, Route} from "react-router";


//import React components
import Front from "./Components/Font";


//tapEvent plugin for material ui components
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
        <div>
            <Front/>
        </div>)
    }
}
 
render((
   <Router history={hashHistory}>
     <Route path="/" component={App} />
   </Router>
), document.getElementById("root"));