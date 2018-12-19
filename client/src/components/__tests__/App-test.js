import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import ParticipantForm from '../ParticipantForm';
// basic shallow render checks
describe('App component', () => {
  test('should shallow correctly', () => {
      expect(shallow(
        <App />
      )).toMatchSnapshot() 
  })
  it('renders ParticipantForm component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<ParticipantForm />)).toBe(true);
  })  
})