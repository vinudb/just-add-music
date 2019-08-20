import React from 'react';
import MusicListItem from './MusicListItem';
import { fetchMusicList } from '../apiCalls/fetchMusicList';
import LoadingPage from "./LoadingPage";
import Pagination from './Pagination';

class MusicList extends React.Component {
    state = {
        musicItems: [],
        musicItemsCount: 0,
        page: 1,
        limit: 4,
        totalPages: 1,
        musicItemsToDisplay: [],
        showLoader: false
    }

    componentDidMount() {
        this.setState({ showLoader: true }, () => {
            this.fetchMusicJson();
        });
    }

    fetchMusicJson = () => {
        fetchMusicList()
            .then(musicItems => {
                this.setState(
                    {
                        musicItems,
                        musicItemsCount: musicItems.length,
                        totalPages: Math.ceil(musicItems.length / this.state.limit),
                        musicItemsToDisplay: musicItems.slice(0, this.state.limit),
                        showLoader: false
                    });
            });
    }

    onNextClick = () => this.setState({
        page: this.state.page + 1,
        musicItemsToDisplay: this.state.musicItems.slice(
            (this.state.limit * (this.state.page + 1)) - this.state.limit,
            this.state.limit * (this.state.page + 1))
    });

    onPreviousClick = () => this.setState({
        page: this.state.page - 1,
        musicItemsToDisplay: this.state.musicItems.slice(
            (this.state.limit * (this.state.page - 1)) - this.state.limit,
            this.state.limit * (this.state.page - 1))
    });

    render() {
        return (
            <div data-test="musicListComponent">
                {this.state.showLoader && <LoadingPage />}
                {
                    this.state.musicItemsToDisplay.map((item) => {
                        return (
                            <MusicListItem 
                                data-test="musicListItemComponent" 
                                key={item.id} 
                                musicItem={item} />
                        )
                    })
                }
                <Pagination 
                    page={this.state.page} 
                    totalPages={this.state.totalPages} 
                    onPreviousClick={this.onPreviousClick} 
                    onNextClick={this.onNextClick}/>
            </div>
        );
    }
}

export default MusicList;
