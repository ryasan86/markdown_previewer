import React, { Component } from 'react';
import './Editor.css';
import Toolbar from '../Toolbar/Toolbar';

export default class Editor extends Component {
  handleChange(val) {
    this.props.onText(val);
  }

  render() {
    const { onScreenToggle, view, icon, text } = this.props;
    return (
      <div className="container">
        <Toolbar onScreenToggle={onScreenToggle} icon={icon} view={view} />
        <textarea
          id="editor"
          type="text"
          className="text-background"
          value={text}
          onChange={e => this.handleChange(e.target.value)}
        />
      </div>
    );
  }
}
