import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage.jsx'

let wrapper, startLogin

beforeEach(() => {
  startLogin = jest.fn();
  wrapper = shallow(<LoginPage startLogin={startLogin} />);
});

test('should correctly render LoginPage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});
