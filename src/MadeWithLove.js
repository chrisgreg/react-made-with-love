import React, { Component } from 'react';
import Isvg from 'react-inlinesvg';

export default class MadeWithLove extends Component {

  getBaseMessage(props) {
    const { emoji, by, link, icons } = props;
    let messageBase = 'Made with <3';
    let author = by;

    if (emoji) {
      messageBase = this.emojify(messageBase, emoji);
    }

    if (by) {
      if (link) {
        author = <a href={`${link}`}>{by}</a>;
      }
      return(
        <span>
          {`${messageBase} by `}{author}
        </span>
      )
    }

    return(
        <span>
          {messageBase}
        </span>
    );
  }

  getIconMessage(props) {
    const { by, link, icons } = props;
    let messageBase = 'Made with <3';
    let author = by;

    messageBase = this.iconify(messageBase, icons);

    if (by) {
      if (link) {
        author = <a href={`${link}`}>{by}</a>;
      }
      return(
        <span>
          {messageBase} by {author}
        </span>
      )
    }

    return (
      <span>
        {messageBase}
      </span>
    )
  }

  iconify(messageBase, icons) {
    let made = 'Made';
    let join = ' with ';
    let using = '<3';

    // Required for center alignment with text
    const style = {
      'verticalAlign': 'sub'
    }

    if (icons.verb) {
      made = (
        <span className="made-with-love-icon-verb" style={style}>
          <Isvg src={icons.verb}></Isvg>
        </span>
      )
    }

    if (icons.using) {
      using = (
        <span className="made-with-love-icon-using" style={style}>
          <Isvg src={icons.using}></Isvg>
        </span>
      )
    }

    return(
      <span>
        {made}{join}{using}
      </span>
    )
  }

  emojify(messageBase, emoji) {
    if (emoji.verb) {
      messageBase = messageBase.replace('Made', emoji.verb);
    }
    if (emoji.using) {
      messageBase = messageBase.replace('<3', emoji.using);
    } else {
      messageBase = messageBase.replace('<3', '❤️');
    }
    return messageBase;
  }

  componentWillMount() {
    const { icons } = this.props;
    this.message = icons
                  ? this.getIconMessage(this.props)
                  : this.getBaseMessage(this.props);
  }

  render() {
    return (
      <div style={this.props.style} className="made-with-love">
        {this.message}
      </div>
    )
  }
}
