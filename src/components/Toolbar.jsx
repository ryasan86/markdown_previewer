import React, { Component } from 'react';

export default class Toolbar extends Component {
  handleClick(view) {
    this.props.onScreenToggle(view);
  }

  render() {
    const { view, icon } = this.props;
    const title = view.charAt(0).toUpperCase() + view.slice(1);
    return (
      <div id="toolbar">
        {title}
        <i className={icon} onClick={() => this.handleClick(`${view}Only`)} />
      </div>
    );
  }
}
