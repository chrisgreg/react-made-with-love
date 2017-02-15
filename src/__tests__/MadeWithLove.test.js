import React from 'react';
import { shallow } from 'enzyme';
import MadeWithLove from '../MadeWithLove';

describe('Made With Love', () => {

  it('Renders a component', () => {
    const rendered = shallow(<MadeWithLove />);
    expect(rendered.find('.made-with-love').length).toBe(1);
  });
  
})
