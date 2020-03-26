import React, { Component, lazy, Suspense } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

const LandingPage = lazy(() => import("./components/landingPage"))
const About =lazy(() => import("./components/Aboutus/About"))
const Interviews = lazy(() => import("./components/Interviews/interviews"))
const Login = lazy(() => import("./components/auth/login"))
const Register = lazy(() => import("./components/auth/register"))
const Jobs = lazy(() => import("./components/jobs/jobs"))
const OneJob = lazy(() => import("./components/jobs/OneJob"))
const Courses = lazy(() => import("./components/courses/courses"))
const Onecourse = lazy(() => import("./components/courses/Onecourse"))
const Model = lazy(() => import("./components/Model/model"))
const Services = lazy(() => import("./components/Services/services"))

class App extends Component {
  render() {
    return (
      <Router>
      <Suspense
      fallback={
        <div
          style={{
            textAlign: "center",
            height: "361.88px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          Loading...
        </div>
      }
    >
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/model" component={Model} />
            <Route exact path="/services" component={Services} />

          </Switch>
        </div>
      </Suspense>
      </Router>
    )
  }
}
export default App;
