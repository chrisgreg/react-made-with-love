import React from 'react';
import { shallow } from 'enzyme';
import MadeWithLove from '../MadeWithLove';

describe('Made With Love', () => {

  it('Renders a component', () => {
    const rendered = shallow(<MadeWithLove />);
    expect(rendered.find('.made-with-love').length).toBe(1);
  });

  it('Renders a base message without emojis', () => {
    const rendered = shallow(<MadeWithLove />);
    expect(rendered.text()).toBe('Made with <3');
  });

  it('Renders a base message with emojis', () => {
    const rendered = shallow(<MadeWithLove emoji />);
    expect(rendered.text()).toBe('Made with ❤️');
  });

  it('Renders a base message with an author', () => {
    const rendered = shallow(<MadeWithLove by="Chris"/>);
    expect(rendered.text()).toBe('Made with <3 by Chris');
  });

  it('Renders a base message with a linked author', () => {
    const rendered = shallow(<MadeWithLove by="Chris" link="http://www.chrisgregori.co.uk"/>);
    expect(rendered.find('a').length).toBe(1);
    expect(rendered.text()).toBe('Made with <3 by Chris');
  });

})
