import React, { Component } from 'react';
import './App.css';
import Editor from './components/Editor/Editor';
import Previewer from './components/Previewer/Previewer';
import { placeholder } from './Placeholder';
class App extends Component {
  constructor() {
    super();
    this.state = {
      text: placeholder
    };
    this.handleText = this.handleText.bind(this);
  }

  handleText(text) {
    this.setState({ text: text });
  }

  render() {
    return (
      <div id="app">
        <Editor text={this.state.text} onText={this.handleText} />
        <Previewer text={this.state.text} />
      </div>
    );
  }
}

export default App;
