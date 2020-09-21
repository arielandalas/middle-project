import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Page1 from "./pages/Page-1";
import Page2 from "./pages/Page-2";
import Page3 from "./pages/Page-3";
import Page4 from "./pages/Page-4";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

function Routes() {
    return (
        <BrowserRouter>
            <Route render={(props)=>(
                <Layout {...props}>
                    <Switch>
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/Dashboard" exact component={Dashboard}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="/experience" component={Page1}/>
                        <Route path="/skills" component={Page2}/>
                        <Route path="/interest" component={Page3}/>
                        <Route path="/award" component={Page4}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            )}/>
        </BrowserRouter>
    )
}

export default Routes;
