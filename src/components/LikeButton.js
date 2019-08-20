import React from 'react';

const LikeButton = (props) => {
    return (
        <div data-test="likeButtonComponent">
            <div className="container">
                <div className="wrapper">
                    <span onClick={props.onLikeClick} className={props.isLike ? `like-button is-active` : `like-button`}>
                        <i className="material-icons not-liked bouncy">favorite_border</i>
                        <i className="material-icons is-liked bouncy">favorite</i>
                        <span className="like-overlay"></span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default LikeButton;
