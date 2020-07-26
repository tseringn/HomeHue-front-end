import React from 'react';


class Login extends React.Component{

    state ={ 
        newAccount: false,
        newUser: {
            name: '',
            username: '',
            email: '',
            password: '',
            image_url: '',
        }
    }


    handleInputFieldChange=e=>{
        this.setState({newUser: {...this.state.newUser, [e.target.name]: e.target.value}})
    }


    loginForm = () => {

        return (
            <form>
                <div className="ui large form" id="login-form">
                <h2>Login</h2>
                <div className="two fields">
                  <div className="field">
                    <label>Username</label>
                    <input id='login-input-1' className = "input" placeholder="Username" type="text"/>
                  </div>
                  </div>
                  <div className="two fields">
                  <div className="field">
                    <label>Password</label>
                    <input className = "input" placeholder="Password" type="password"/>
                  </div>
                </div>
               
                <button type='submit' className="ui submit grey button">Login</button>
              
                New to HomeHue?  <a href='' onClick={this.handleCreateAccountClick}>Create an account!</a>
              </div>
              </form>)

    }
    handleCreateAccountClick=(e)=>{
        e.preventDefault()
        this.setState(prevState=> ({newAccount: !prevState.newAccount}))
        // this.setState({newAccount: this})
    }

    handleSubmitAccount=e=>{
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                accept: 'application/json',
            'content-type': 'application/json'
            },
            body: JSON.stringify(this.state.newUser)
        })
        .then(r=>r.json())
        .then(newUser=>{
            this.props.setCurrentUser(newUser.id)
            this.setState({ newUser: {
                name: '',
                username: '',
                email: '',
                password: '',
                image_url: '',
            }})
            
        })
        
    }
    createAccountForm = () => {
        const {name, username, password, email, image_url}=this.state.newUser
        return (
            <form onSubmit={this.handleSubmitAccount} >
        <div className="ui large form" id="login-form" >
        <h2>Create an Account</h2>
        <div className="two fields">
          <div className="field">
            {/* <label>Name</label> */}
            <input onChange={this.handleInputFieldChange} name='name' value={name} className = "input" placeholder="Name" type="text"/>
           </div>
         
        </div>
            <div className="two fields">
                  <div className="field">
                    {/* <label>Username</label> */}
                    <input onChange={this.handleInputFieldChange}  name='username' value={username} className = "input" placeholder="Username" type="text"/>
                </div>
            </div>

            <div className="two fields">
                  <div className="field">
                    {/* <label>Email</label> */}
                    <input onChange={this.handleInputFieldChange}  name='email' value={email} className = "input" placeholder="Email" type="email"/>
                  </div>
            </div>

            <div className="two fields">
                  <div className="field">
                    {/* <label>Password</label> */}
                    <input onChange={this.handleInputFieldChange}  name='password' value={password} className = "input" placeholder="Password" type="password"/>
                </div>
            </div>

          <div className="two fields">
          <div className="field">
            {/* <label>Profile Picture</label> */}
           <input onChange={this.handleInputFieldChange}  name='image_url' value={image_url} className = "input" placeholder="Profile Image URL here...." type="text"/>
          </div>
        </div>
        
       
        <button className="ui submit grey button" type='submit'>Create Account</button>
      
        Already have an account with HomeHue?  <a href='' onClick={this.handleCreateAccountClick}>Login!</a>
      </div>
      </form>)

    }


    render(){
        console.log(this.state.newUser)
        return(
            <div>
            <h1 className="display-1">LOGO HERE</h1>
            {this.state.newAccount ? this.createAccountForm() : this.loginForm()}
            </div>
        )
    }
}

export default Login