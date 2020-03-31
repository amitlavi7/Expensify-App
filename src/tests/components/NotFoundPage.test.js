import React from 'react';
import { shallow } from 'enzyme';
import NotFountPage from '../../components/NotFoundPage';

test('should render ExpenseListItem with expense', () => {
    const wrapper = shallow(<NotFountPage />);
    expect(wrapper).toMatchSnapshot();
});