import React, { Component } from 'react';

export default class MadeWithLove extends Component {

  getBaseMessage(props) {
    const { emoji, by, link, icons } = props;
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
  };

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
