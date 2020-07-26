import React from 'react'

const NavBar = (props) => {

    const logout = () => {
        props.logout()
        props.history.push('/')
    }

    return (
        <div className="ui inverted menu" id="navbar">
            <img src="./LogoWhite.png" alt="logo" className="navbar-logo"/>
            <a className="active item">Home</a>  
            {props.currentUser && <a className="item" onClick={()=>props.history.push('/rooms')}><img className="navbar-user-image" src={props.currentUser.image_url} alt='user'/> <span className="navbar-user-name">{props.currentUser.name}</span> </a>} 
            <a className="item">Friends</a>
            <div className="ui icon input" id="search">
                <input className="navbar-search" type="text" placeholder="Search..."/>
                <i className="circular search link icon"></i>
            </div>
            {props.currentUser
                ? <button className="ui grey button" onClick={logout}>Logout</button>
                : <button className="ui grey button" onClick={()=>props.history.push('/login')}>Login or Create Account</button>
            }
        </div>
    )

}

export default NavBar