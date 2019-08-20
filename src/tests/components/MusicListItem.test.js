import React from 'react';
import MusicListItem from "../../components/MusicListItem";
import { findByTestAtrr, musicItems } from "../utils";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

const setUp = () => {
    configure({ adapter: new Adapter() });
    const wrapper = shallow(<MusicListItem musicItem={musicItems[0]} />);
    return wrapper;
};

let wrapper;
beforeEach(() => {
    wrapper = setUp();
    wrapper.setState({ isOpen: false })
});

test('render without error', () => {
    const component = findByTestAtrr(wrapper, 'musicListItemComponent');
    expect(component.length).toBe(1);
});

test('should not render comment modal by default', () => {
    const component = findByTestAtrr(wrapper, 'commentModalComponent');
    expect(component.length).toBe(0);
});


test('should render comment modal when isOpen state is true', () => {
    wrapper.setState({ isOpen: true });
    const component = findByTestAtrr(wrapper, 'commentModalComponent');
    expect(component.length).toBe(1);
});
