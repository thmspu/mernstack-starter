import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Todolist from '../Components/todolist.js';

describe('<Todolist/>', function() {
     it('should have props for email and src', function() {
       const wrapper = shallow(<Todolist/>);
       expect(wrapper.props().delete).to.be.defined;
     });
});