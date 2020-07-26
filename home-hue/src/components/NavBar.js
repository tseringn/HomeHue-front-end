import React from 'react'

const NavBar = (props) => {

    return (
        <div className="ui inverted menu" id="navbar">
            <img src="./LogoWhite.png" alt="logo" style={{height: '4em', width: '4em'}}/>
            <a className="active item">Home</a>  
            <a className="item">Messages</a>  
            <a className="item">Friends</a>
            <div className="ui icon input" id="search">
                <input type="text" placeholder="Search..."/>
                <i className="circular search link icon"></i>
            </div>
            <button className="ui grey button" onClick={()=>props.history.push('/login')}>Login or Create Account</button>
        </div>
    )

}

export default NavBar