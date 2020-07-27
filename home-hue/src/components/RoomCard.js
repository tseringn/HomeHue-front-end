import React from 'react'


const RoomCard = (props) => {


    return(                       
    <div className="ui card">
        <div className="content">
            <div className="right floated meta">{props.created_at}</div>
            <img className="ui avatar image" src={props.user.image_url} alt="user"/> @{props.user.username}
        </div>
        <div className="image">
            <img src={props.img_url} alt={props.name}/>
        </div>
        <div className="content">
            <h5><strong>{props.name}</strong></h5>
            {props.description}
        </div>
        <div className="content">
            <span className="right floated">
            <i className="heart outline like icon"></i>
            {props.likes.length}
            </span>
            <i className="comment icon"></i>
            3 comments
        </div>
        <div className="extra content">
            <div className="ui large transparent left icon input">
            <i className="heart outline icon"></i>
            <input type="text" placeholder="Add Comment..."/>
            </div>
        </div>
    </div>  
    )
}


export default RoomCard