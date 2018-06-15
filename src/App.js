import React, { Component, Fragment } from 'react';
import './App.css';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { placeholder } from './Placeholder';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: placeholder,
      editorOnly: false,
      previewOnly: false
    };
    this.handleText = this.handleText.bind(this);
    this.handleScreenToggle = this.handleScreenToggle.bind(this);
  }

  handleText(text) {
    this.setState({ text: text });
  }

  handleScreenToggle(view) {
    this.setState({
      [view]: !this.state[view]
    });
  }

  render() {
    const icon = this.state.editorOnly ? 'fa fa-compress' : this.state.previewOnly ? 'fa fa-compress' : 'fa fa-expand';

    const EDITOR = (
      <Editor
        text={this.state.text}
        icon={icon}
        onText={this.handleText}
        onScreenToggle={this.handleScreenToggle}
      />
    );

    const PREVIEW = (
      <Previewer
        text={this.state.text}
        icon={icon}
        onScreenToggle={this.handleScreenToggle}
      />
    );

    return (
      <div id="app">
        {this.state.editorOnly ? EDITOR : this.state.previewOnly ? PREVIEW : <Fragment>{EDITOR}{PREVIEW}</Fragment>}
      </div>
    );
  }
}
