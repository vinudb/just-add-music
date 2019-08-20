import React from 'react';
import PlayPauseButton from './PlayPauseButton';
import Thumbnail from './Thumbnail';
import LikeButton from "./LikeButton";
import CommentModal from './CommentModal';
import { interactMusic } from "../apiCalls/interactMusic";

class MusicListItem extends React.Component {
    state = {
        isOpen: false,
        isLike: false
    }

    handleCommentModal = (message) => {
        //if comment is set, then call api to submit comment and then close modal
        message.length > 0 && (interactMusic("comment", this.props.musicItem.id, "song", message)); 
        this.setState({ isOpen: !this.state.isOpen });
    }

    onLikeClick = () => {
        //call the api to update like for the music with id
        !this.state.isLike && interactMusic("like", this.props.musicItem.id);
        this.setState({ isLike: !this.state.isLike });
    }

    render() {
        return (
            <div data-test="musicListItemComponent" className="listItem">
                <div className="musicListItemComponent">
                    <div>
                        <Thumbnail thumbnailPath={this.props.musicItem.cover_image_path} />
                    </div>
                    <div>
                        <h3 className="marginZero musicTitle">{this.props.musicItem.name}</h3>
                        <h4 className="marginZero musicSubtitle">Artist: {this.props.musicItem.artist_name}</h4>

                        <div className="displayFlexHorizontal">
                            <PlayPauseButton music_file_path={this.props.musicItem.music_file_path} />
                            <LikeButton onLikeClick={this.onLikeClick} isLike={this.state.isLike} />
                            <span className="comment" onClick={this.handleCommentModal}></span>
                        </div>
                    </div>
                </div>

                {
                    this.state.isOpen &&
                    <CommentModal
                        data-test="commentModalComponent"
                        isModalOpen={this.state.isOpen}
                        handleCommentModal={this.handleCommentModal} />
                }
            </div>
        );
    }
}

export default MusicListItem;
