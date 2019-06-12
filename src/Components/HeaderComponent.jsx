import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import AuthenticationSercice from './AuthenticationSercice.js';
import { withRouter } from 'react-router';



class HeaderComponent extends Component {

    render() {
        const isUserLoggedIn = AuthenticationSercice.isUserLoggedIn();

        console.log("IsUserLoggedIN?")
        console.log(isUserLoggedIn)
        console.log("End")



        return (

            <header>

                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand" href="https://reactjs.org/">React App</a>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/Raghu">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationSercice.logout}>Logout</Link></li>}
                    </ul>
                </nav>


          </header>
      


        )
    }
        

}


export default withRouter(HeaderComponent);