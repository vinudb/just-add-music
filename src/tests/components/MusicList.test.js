import React from 'react';
import MusicList from "../../components/MusicList";
import { findByTestAtrr, musicItems } from "../utils";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

const setUp = () => {
    configure({ adapter: new Adapter() });
    const wrapper = shallow(<MusicList />);
    return wrapper;
};

let wrapper;
beforeEach(() => {
    wrapper = setUp();
    wrapper.setState({
        musicItemsToDisplay: musicItems
    })
});

test('render without error', () => {
    const component = findByTestAtrr(wrapper, 'musicListComponent');
    expect(component.length).toBe(1);
});

test('should render music items equal to the length of limit state', () => {
    const component = findByTestAtrr(wrapper, 'musicListItemComponent');
    expect(component.length).toBe(musicItems.length);
});

test('Should call fetchMusicJson inside ComponentDidMount', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'fetchMusicJson');
    instance.componentDidMount();
    expect(instance.fetchMusicJson).toHaveBeenCalledTimes(1);
});