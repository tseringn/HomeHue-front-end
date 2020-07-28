import React from 'react'

const PhotoCard = (props) => {

    return(
        <div>
            <img src={props.img_url} alt='pic'/>
            <h2 style={{backgroundColor: props.color1}}>Color1</h2>
            <h2 style={{backgroundColor: props.color2}}>Color1</h2>
            <h2 style={{backgroundColor: props.color3}}>Color1</h2>
            <div className="ui card">
                <div className="image">
                    <img src="/images/avatar2/large/kristy.png"/>
                </div>
                <div className="content">
                    <a className="header">Kristy</a>
                    <div className="meta">
                    <span className="date">Joined in 2013</span>
                    </div>
                    <div className="description">
                    Kristy is an art director living in New York.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoCard