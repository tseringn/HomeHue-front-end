import React from 'react';


class Login extends React.Component{

    state ={ 
        newAccount: false
    }

    loginForm = () => {

        return (<div className="ui large form" id="login-form">
                <h2>Login</h2>
                <div className="two fields">
                  <div className="field">
                    <label>Username</label>
                    <input className = "input" placeholder="Username" type="text"/>
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <input className = "input" placeholder="Password" type="password"/>
                  </div>
                </div>
                <div className="ui submit button">Submit</div>
              </div>)

    }

    createAccountForm = () => {
        return (<div className="ui inverted segment" id="create-account-form">
                    <h2>Create Account</h2>
                    <div className="ui inverted form">
                    <div className="two fields">
                        <div className="field">
                        <label>Username</label>
                        <input placeholder="Username" type="text"/>
                        </div>
                        <div className="field">
                        <label>Password</label>
                        <input placeholder="Password" type="text"/>
                        </div>
                    </div>
                    <div className="inline field">
                        <div className="ui checkbox">
                        <input type="checkbox" tabindex="0" className="hidden"/>
                        <label>I agree to the terms and conditions</label>
                        </div>
                    </div>
                    <div className="ui submit button">Submit</div>
                    </div>
                </div>)
    }


    render(){
        return(
            <div>
            <h1 className="display-1">LOGO HERE</h1>
            {this.state.newAccount ? this.createAccountForm() : this.loginForm()}
            </div>
        )
    }
}

export default Login