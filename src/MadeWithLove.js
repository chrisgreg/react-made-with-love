import React, { Component } from 'react';

export default class MadeWithLove extends Component {

  getBaseMessage(props) {
    const { emoji, by, link } = props;
    let message = 'Made with <3';
    let author = by;

    if (emoji) {
      message = 'Made with ❤️';
    }

    if (by) {
      if (link) {
        author = <a href={`${link}`}>{by}</a>;
      }
      return(
        <span>
          {`${message} by `}{author}
        </span>
      )
    }

    return(
        <span>
          {message}
        </span>
    );
  }

  componentWillMount() {
    this.baseMessage = this.getBaseMessage(this.props);
  }

  render() {
    return (
      <div className="made-with-love">
        {this.baseMessage}
      </div>
    )
  }
}
