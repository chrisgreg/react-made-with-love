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
          A small (1.4kb gzipped) React component providing a 'Made With Love' banner that can be customised out-of-the-box with emojis and user-provided SVG icons.
        </p>

        <h2 className="header-level-2">Installation</h2>
        <code>npm install --save react-made-with-love</code>

        <h2 className="header-level-2">Testing?</h2>
        <p>100% test coverage using Jest & Enzyme</p>

        <h2 className="header-level-2">Usage</h2>
          <div className="language-js highlighter-rouge">
            <pre class="highlight">
              `import MadeWithLove from 'react-made-with-love';`
              <br />
              {reactElementToJSXString(<MadeWithLove emoji by="Chris"/>)}
            </pre>
          </div>

        <h2 className="header-level-2">Documentation</h2>
        <h4 className="header-level-4">Props</h4>
        <ul>
          <li>
            <code>emoji</code> - Emoji object - if specified will render ❤️.
              <ul>
                <li>
                  <code>emoji.verb</code> - Emoji property - replaces 'Made'.
                </li>
                <li>
                  <code>emoji.using</code> - Emoji property - replaces ❤️.
                </li>
              </ul>
          </li>
          <li>
            <code>icons</code> - Icons object - if specified will replace nothing by default.
              <ul>
                <li>
                  <code>icons.verb</code> - Icons property - url src to replace 'Made' with.
                </li>
                <li>
                  <code>icons.using</code> - Icons property - url src to replace ❤️ with.
                </li>
              </ul>
          </li>
          <li>
            <code>by</code> - String - if specified will add "by <i>value</i>".
          </li>
          <li>
            <code>link</code> - String - requires <code>by</code> - href to url to hyperlink <code>by</code> with.
          </li>
        </ul>

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
