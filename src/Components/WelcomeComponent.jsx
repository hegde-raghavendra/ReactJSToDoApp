import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class WelcomeComponent extends Component {

    render() {
        return (


            <div>

                <h1>Welcome {this.props.match.params.name} to Todo </h1>

                <div className="container">



                    You can see your todo lists <Link to="/todos">here</Link>


                </div>


            </div>
      


        )
    }
        

}


export default WelcomeComponent;