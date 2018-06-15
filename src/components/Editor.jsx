import React, { Component } from 'react';
import Toolbar from './Toolbar';

export default class Editor extends Component {
  handleChange(val) {
    this.props.onText(val);
  }

  render() {
    const { onScreenToggle, view, icon, text } = this.props;
    return (
      <div className="wrapper">
        <Toolbar onScreenToggle={onScreenToggle} icon={icon} view="editorOnly" />
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
