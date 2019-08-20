import React from 'react';
import LikeButton from "../../components/LikeButton";
import { findByTestAtrr, musicItems } from "../utils";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';

let onLikeClick, isLike;
const setUp = () => {
    configure({ adapter: new Adapter() });
    onLikeClick = jest.fn();
    isLike = false;
    const wrapper = shallow(<LikeButton onLikeClick={onLikeClick} isLike={isLike} />);
    return wrapper;
};

let wrapper;
beforeEach(() => {
    wrapper = setUp();
});

test('render without error', () => {
    const component = findByTestAtrr(wrapper, 'likeButtonComponent');
    expect(component.length).toBe(1);
});

test('when isLike is false, onLikeClick handler should be called and button text should be Like', () => {
    const component = findByTestAtrr(wrapper, 'likeButtonComponent');
    component.find('button').simulate('click');
    expect(onLikeClick).toBeCalled();
    expect(component.find('button').text()).toBe('Like');
});

test('when isLike is true, onLikeClick handler should be called and button text should be Unlike', () => {
    wrapper.setProps({ isLike: true }, () => {
        const component = findByTestAtrr(wrapper, 'likeButtonComponent');
        component.find('button').simulate('click');
        expect(onLikeClick).toBeCalled();
        expect(component.find('button').text()).toBe('Unlike');
    });
});