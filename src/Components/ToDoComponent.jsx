import React, {Component} from 'react';
import LoginComponent from './LoginComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import ListToDoComponent from './ListToDoComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'


import {BrowserRouter as Router , Route , Link, Switch} from 'react-router-dom'


class ToDoCompoent extends Component {
    render() {
        return (
                <Router>

                    <HeaderComponent/>


                    <>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/welcome/:name" component={WelcomeComponent}/>
                            <Route path="/todos" component={ListToDoComponent}/>
                            <Route path="/logout" component={LogoutComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                    </>

                    <FooterComponent/>

                </Router>

        )
      }

}
  
  
export default ToDoCompoent;