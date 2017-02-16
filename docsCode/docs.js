import React, { Component } from 'react';
import { render, renderToStaticMarkup } from 'react-dom';
import reactElementToJSXString from 'react-element-to-jsx-string';
import MadeWithLove from '../lib/index';

class Docs extends Component {
  render() {

    const emoji = {
      verb: '💻',
      using: '🔥'
    };

    const icons = {
      verb: 'https://chrisgreg.github.io/react-made-with-love/assets/code.svg',
      using: 'https://chrisgreg.github.io/react-made-with-love/assets/heart.svg'
    };

    return(
      <div>
        <h2 className="header-level-2">What?</h2>
        <p>
          A tiny (1.4kb gzipped) React component providing a 'Made With Love' banner that can be customised out-of-the-box with emojis and user-provided SVG icons.
        </p>

        <h2 className="header-level-2">Installation</h2>
        <code>npm install --save react-made-with-love</code>

        <h2 className="header-level-2">Testing?</h2>
        <p>100% test coverage using Jest & Enzyme</p>

        <h2 className="header-level-2">Examples</h2>
        <h3 className="header-level-3">Default without props</h3>
        <Code>
          <MadeWithLove />
        </Code>

        <h3 className="header-level-3">Default Emoji</h3>
        <Code>
          <MadeWithLove emoji/>
        </Code>

        <h3 className="header-level-3">Default Emoji With Author</h3>
        <Code>
          <MadeWithLove emoji by="Chris"/>
        </Code>

        <h3 className="header-level-3">Default Emoji With Hyperlinked Author</h3>
        <Code>
          <MadeWithLove emoji by="Chris" link="http://www.chrisgregori.co.uk"/>
        </Code>

        <h3 className="header-level-3">Custom Emoji</h3>
        <Code withObject={emoji}>
          <MadeWithLove emoji={emoji}/>
        </Code>

        <h3 className="header-level-3">Custom SVG Verb</h3>
        <Code withObject={icons}>
          <MadeWithLove icons={icons}/>
        </Code>




      </div>
    )
  }
}

const Code = (props) => {
  return(
    <div>
      <div className="language-js highlighter-rouge">
        <pre class="highlight">
          {reactElementToJSXString(props.children)}
        </pre>
      </div>
      {props.children}
    </div>
  )
}

render(<Docs />, document.getElementById('root'));
