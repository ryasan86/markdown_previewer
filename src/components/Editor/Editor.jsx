import React, { Component } from 'react';
import './Editor.css';
import Toolbar from '../Toolbar/Toolbar';

export default class Editor extends Component {
  handleChange(val) {
    this.props.onText(val);
  }

  render() {
    return (
      <div id="editor-container">
        <Toolbar />
        <textarea
          id="editor"
          type="text"
          value={this.props.text}
          onChange={e => this.handleChange(e.target.value)}
        />
      </div>
    );
  }
}
