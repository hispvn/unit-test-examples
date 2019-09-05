import React from 'react';
import {shallow} from 'enzyme';
import ConuterList from '.';


describe('Test CounterList component', () => {
   it('Should render without any errors', () => {
       const wrapper = shallow(<ConuterList/>);
       expect(wrapper.find('Counter').length).toBe(2);
   }) 

   it('should add a counter component in click', () => {
       const wrapper = shallow(<ConuterList/>);
       const button = wrapper.find({"data-test":"btnAddCounter"});
       button.simulate('click');
       expect(wrapper.find('Counter').length).toBe(3);
   });
});