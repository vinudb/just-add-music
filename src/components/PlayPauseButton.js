import React from 'react';
import ReactHowler from 'react-howler';
import { corsURL } from '../utils';

class PlayPauseButton extends React.Component {
    state = {
        isPlaying: false
    }

    onPlayClick = () => this.setState({ isPlaying: !this.state.isPlaying });

    render() {
        return (
            <div>
                <ReactHowler
                    src={corsURL + this.props.music_file_path}
                    playing={this.state.isPlaying}
                />
                <span 
                    onClick={this.onPlayClick} 
                    className={this.state.isPlaying ? `active play` : `play`}>
                </span>
            </div>
        );
    }
}

export default PlayPauseButton;
