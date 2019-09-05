import React from 'react';
import {shallow} from 'enzyme';
import Button from './index';

describe('Test <Button/>', () => {
    it('should render without any errors', () => {
        const wrapper = shallow(<Button/>);
        const button = wrapper.find('button.increment');
        expect(button.text()).toBe('Increment');
    });

    it('should increase counter state on btn click', () => {
        const wrapper = shallow(<Button/>);
        const button = wrapper.find('button.increment');
        button.simulate('click');
        button.simulate('click');
        expect(wrapper.state().counter).toBe(2);
    });

    it('should increase and render counter to UI', () => {
        const wrapper = shallow(<Button/>);
        const button = wrapper.find('button.increment');
        let counter = wrapper.find('p');
        expect(counter.text()).toBe('0');
        button.simulate('click');
        button.simulate('click');
        counter = wrapper.find('p');
        expect(counter.text()).toEqual('2');
    });

    it('should decrease and render counter to UI', () => {
        const wrapper = shallow(<Button/>);
        const incrementBtn = wrapper.find('button.increment');
        expect(wrapper.find('p').text()).toBe('0');

        incrementBtn.simulate('click');
        expect(wrapper.find('p').text()).toBe('1');
        
        const decrementBtn = wrapper.find('button.decrement');
        decrementBtn.simulate('click');
        expect(wrapper.find('p').text()).toBe('0');
    });
    
});