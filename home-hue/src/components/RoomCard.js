import React from 'react'




const RoomCard = (props) => {
    
  
    
    const handleLikeClick = (e) => {
       
        if(props.currentUser){ 
            if (heartAppearance()){    
                deleteLike()
                
                // e.target.classList.remove('outline')
            } else {
                postLike()
                // e.target.classList.add('outline')
            } 
        } else {
            props.history.push('/login')
        }
    }

    const deleteLike = () => {
       
        let likeId = props.likes.find(like=>like.user_id===props.currentUser.id).id
        
        fetch(`http://localhost:3000/likes/${likeId}`,{method: "DELETE",})
        props.handleUnlike(likeId, props.id)
       
        
    }

    const postLike = () => {
        fetch('http://localhost:3000/likes', {
            method: "POST",
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                user_id: props.currentUser.id,
                room_id: props.id
            })
        })
        .then(resp=>resp.json())
        .then(newLike=> {
        console.log(newLike)
         props.handleNewRoomLike(newLike)
         
        })
        .catch(error=> console.log(error))
    }

    const heartAppearance = () => {
        let fun=0
        if (props.currentUser){        
            if (props.likes.find(like=>like.user_id===props.currentUser.id)){
                fun=1
            } else {
                fun=0
            }
        } else {
         fun=0
        }
        
        return fun>0?true:false
    }

    return(   
                   
    <div className="ui card room-card" >
        <div className="content">
            <div className="right floated meta">{props.created_at}</div>
            <img className="ui avatar image" src={props.user.image_url} alt="user"/> @{props.user.username}
        </div>
        <div className="image">
            <img className='room-image' src={props.img_url} alt={props.name}/>
        </div>

        <div className="extra content" style={{backgroundColor: 'lightGrey'}}>
            <div className="center aligned">
                <button onClick={()=>props.history.push(`/rooms/${props.id}`)} className="ui basic button ">
                <i className="eye icon"></i>
                    View Room
                </button>
            </div>
        </div>
        
        <div className="content">
            <h5><strong>{props.name}</strong></h5>
            {props.description}
        </div>
        <div className="content">
            <span className="right floated">
            {heartAppearance()?<i onClick={handleLikeClick} className=  "heart red like icon"></i>
            :<i onClick={(e)=>handleLikeClick()} className=  "heart outline red like icon"></i>}
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