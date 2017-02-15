import React, { Component } from 'react';

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
      <div className="made-with-love">
        {this.message}
      </div>
    )
  }
}
