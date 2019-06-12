import React, {Component} from 'react';
import AuthenticationSercice from './AuthenticationSercice.js';

class LoginComponent extends Component {

    constructor(props) {
      super(props)
      this.state = {userid : 'Raghu', 
                    password : '',
                    hasLoginFailed : false,
                    showSuccesfulLoginMessage : false
                  }
      this.handleChange = this.handleChange.bind(this)
  
      this.loginClicked = this.loginClicked.bind(this)
    }
  
    handleChange(event) {
      this.setState({[event.target.name]:event.target.value})
    }
  
    loginClicked() {
  
      if(this.state.userid==='Raghu' && this.state.password==='temp') {
        AuthenticationSercice.registerSuccessfulLogin(this.state.userid,this.state.password)
        this.props.history.push(`/welcome/${this.state.userid}`)
     } 
      else {
        this.setState({showSuccesfulLoginMessage:false, hasLoginFailed:true })
      }
  
  
    }
  
    render() {
      return (
      
      <div>

        <h1>Login</h1>

        <div className="container">

          {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}


          <label id="userid">User ID : </label>
          <input id="userid" type="text" name="userid" value={this.state.userid} onChange={this.handleChange}></input>
          <label id="password" name="userid">Password : </label>
          <input id="password" type="password" name="password" value={this.state.password}  onChange={this.handleChange}></input>          
          <button className="btn btn-success" onClick={this.loginClicked}>Login</button>

        </div>
  
      </div>
  
  
      )
    }
  }
  
  
  export default LoginComponent;