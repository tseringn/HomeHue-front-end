import React from 'react'




const RoomCard = (props) => {
    
    
    
    const handleLikeClick = (e) => {
        if(props.currentUser){ 
            if (!heartAppearance()){    
                postLike()
                // e.target.classList.remove('outline')
            } else {
                deleteLike()
                // e.target.classList.add('outline')
            } 
        } else {
            props.history.push('/login')
        }
    }

    const deleteLike = () => {
        let likeId = props.likes.find(like=>like.user_id===props.currentUser.id).id
        fetch(`http://localhost:3000/likes/${likeId}`,{
            method: "DELETE",
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            }
        })
        .then(resp=>resp.json())
        .then(()=>{
            props.handleUnlike(likeId, props.id)
        })
        
    }

    const postLike = () => {
        fetch('http://localhost:3000/likes', {
            method: "POST",
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                user_id: props.currentUser,
                room_id: props.id
            })
        })
        .then(resp=>resp.json())
        .then(newLike=> {
            
         props.handleNewRoomLike(newLike)
         
        })
    }

    const heartAppearance = () => {

        if (props.currentUser){        
            if (props.likes.find(like=>like.user_id===props.currentUser.id)){
                return true
            } else {
                return false
            }
        } else {
         return false
        }   
    }
        

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
            <i onClick={handleLikeClick} className={ heartAppearance() ? "heart red like icon" : "heart outline red like icon"}></i>
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