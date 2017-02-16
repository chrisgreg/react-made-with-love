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

  it('Renders a base message with an author', () => {
    const rendered = shallow(<MadeWithLove by="Chris"/>);
    expect(rendered.text()).toBe('Made with <3 by Chris');
  });

  it('Renders a base message with a linked author', () => {
    const rendered = shallow(<MadeWithLove by="Chris" link="http://www.chrisgregori.co.uk" />);
    expect(rendered.find('a').length).toBe(1);
    expect(rendered.text()).toBe('Made with <3 by Chris');
  });

  it('Renders a base emoji message with emojis', () => {
    const rendered = shallow(<MadeWithLove emoji />);
    expect(rendered.text()).toBe('Made with ❤️');
  });

  it('Renders an emoji message with custom verb emoji', () => {
    const emoji = {
      verb: '💻'
    }
    const rendered = shallow(<MadeWithLove emoji={emoji} />);
    expect(rendered.text()).toBe('💻 with ❤️');
  });

  it('Renders an emoji message with custom verb and using emoji', () => {
    const emoji = {
      verb: '💻',
      using: '🔥'
    }
    const rendered = shallow(<MadeWithLove emoji={emoji} />);
    expect(rendered.text()).toBe('💻 with 🔥');
  });

  it('Renders an icon message with a custom verb icon', () => {
    const icons = {
      verb: '../assets/code.svg'
    }
    const rendered = shallow(<MadeWithLove icons={icons} />);
    expect(rendered.text()).toBe('<InlineSVG /> with <3');
  });

  it('Renders an icon message with a custom using icon', () => {
    const icons = {
      using: '../assets/heart.svg'
    }
    const rendered = shallow(<MadeWithLove icons={icons} />);
    expect(rendered.text()).toBe('Made with <InlineSVG />');
  });

  it('Renders an icon message with an author', () => {
    const icons = {
      using: '../assets/heart.svg'
    }
    const rendered = shallow(<MadeWithLove icons={icons} by="Chris"/>);
    expect(rendered.find('a').length).toBe(0);
    expect(rendered.text()).toBe('Made with <InlineSVG /> by Chris');
  });

  it('Renders an icon message with a linked author', () => {
    const icons = {
      using: '../assets/heart.svg'
    }
    const rendered = shallow(<MadeWithLove icons={icons} by="Chris" link="http://www.chrisgregori.co.uk"/>);
    expect(rendered.find('a').length).toBe(1);
    expect(rendered.text()).toBe('Made with <InlineSVG /> by Chris');
  });

})
