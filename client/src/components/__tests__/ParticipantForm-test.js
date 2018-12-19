import React from 'react';
import { mount } from 'enzyme';
import ParticipantForm from '../ParticipantForm';
import { reducer as formReducer } from 'redux-form'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
// tests for ParicipantForm

describe("ParticipantFormContainer", () => {
	let store;
	let wrapper;
	
	beforeEach(() => {
		store = createStore(combineReducers({ form: formReducer }))				
		wrapper = mount(
			<Provider store={store}>
				<ParticipantForm />
			</Provider>
		)
  })
	it("has all fields rendered properly", () => {
		expect(wrapper.find('input[name="name"]').exists()).toBe(true);
		expect(wrapper.find('input[name="surname"]').exists()).toBe(true);
		expect(wrapper.find('input[name="email"]').exists()).toBe(true);
		expect(wrapper.find('input[placeholder="Date of holiday"]').exists()).toBe(true);
		expect(wrapper.find('#submit').exists()).toBe(true);
	
	})
	it("has all fields marke 'required' when clicking on Submit", () => {
		wrapper.find('form').simulate('submit')

		wrapper.find('#submit').simulate('click'); 
		wrapper.find('div.field').forEach((node) => {
			expect(node.hasClass('error')).toEqual(true);
		  });
		
	})
	it("is displaying error when wrong e-mail is provided", () => {
		wrapper.find('input[name="email"]').simulate('change', { target: { value: 'kowalski' } });
		wrapper.find('input[name="email"]').simulate('touchEnd'); 
		wrapper.find('form').simulate('submit')
		expect(wrapper.find('div.field').at(2).hasClass('error')).toEqual(true);
		
	})
	it("has no errors when all fields are filled", () => {
		wrapper.find('input[name="name"]').simulate('change', { target: { value: 'Jan' } });
		wrapper.find('input[name="surname"]').simulate('change', { target: { value: 'Kowalski' } });
		wrapper.find('input[name="email"]').simulate('change', { target: { value: 'kowalski@o2.pl' } });
		wrapper.find('input[placeholder="Date of holiday"]').simulate('change', { target: { value: '22-01-2019' } });
	
		wrapper.find('#submit').simulate('click'); 
		wrapper.find('div.field').forEach((node) => {
			expect(node.hasClass('error')).toEqual(false);
		});
	})
})