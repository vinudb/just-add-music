import React from 'react';

const Thumbnail = (props) =>{
    return(
        <img data-test="thumbnailComponent" className="thumbnailComponent" src={props.thumbnailPath}/> 
    );
}

export default Thumbnail;
