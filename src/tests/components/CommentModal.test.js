import React from 'react';
import CommentModal from "../../components/CommentModal";
import { findByTestAtrr, musicItems } from "../utils";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

let handleCommentModal;
const setUp = () => {
    handleCommentModal = jest.fn();
    configure({ adapter: new Adapter() });
    const wrapper = shallow(<CommentModal isModalOpen={false}
        handleCommentModal={handleCommentModal} />);
    return wrapper;
};

let wrapper;
beforeEach(() => {
    wrapper = setUp();
    wrapper.setState({ comment: "" })
});

test('render without error', () => {
    const component = findByTestAtrr(wrapper, 'commentModalComponent');
    expect(component.length).toBe(1);
});

test('if comment length is > 0, call handleCommentModal props function', () => {
    wrapper.setState({ comment: "Very Good" });
    const component = findByTestAtrr(wrapper, 'commentModalComponent');
    component.find('button').simulate('click');
    expect(handleCommentModal).toBeCalled();
});

test('if comment length is = 0, handleCommentModal props function should not be called', () => {
    const component = findByTestAtrr(wrapper, 'commentModalComponent');
    component.find('button').simulate('click');
    expect(handleCommentModal).toHaveBeenCalledTimes(0);
});