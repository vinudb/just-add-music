import React from 'react';
import Thumbnail from "../../components/Thumbnail";
import { findByTestAtrr, musicItems } from "../utils";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

const setUp = () => {
    configure({ adapter: new Adapter() });
    const wrapper = shallow(<Thumbnail thumbnailPath={musicItems[0].cover_image_path} />);
    return wrapper;
};

let wrapper;
beforeEach(() => {
    wrapper = setUp();
});

test('render without error', () => {
    const component = findByTestAtrr(wrapper, 'thumbnailComponent');
    expect(component.length).toBe(1);
});

test('Check if the image source is set correctly', () => {
    const component = findByTestAtrr(wrapper, 'thumbnailComponent');
    expect(component.find("img").prop("src")).toEqual(musicItems[0].cover_image_path);
});