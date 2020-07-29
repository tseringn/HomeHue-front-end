import React from 'react'

const PhotoCard = (props) => {

    return(
        <div>
            <div className="ui card">
                <div className="image">
                    <img src={props.img_url} alt='pic'/>
                </div>
                <div className="content">
                    <button className="ui button" onClick={()=>window.open(`https://encycolorpedia.com/${props.color1.substr(1)}`,'_blank')} style={{backgroundColor: props.color1}}><i class="info circle big icon"></i></button>
                    <button className="ui button" onClick={()=>window.open(`https://encycolorpedia.com/${props.color2.substr(1)}`,'_blank')} style={{backgroundColor: props.color2}}><i class="info circle big icon"></i></button>
                    <button className="ui button" onClick={()=>window.open(`https://encycolorpedia.com/${props.color3.substr(1)}`,'_blank')} style={{backgroundColor: props.color3}}><i class="info circle big icon"></i></button>
                </div>
            </div>
        </div>
    )
}

export default PhotoCard