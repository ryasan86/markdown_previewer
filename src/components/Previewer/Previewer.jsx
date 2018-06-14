import React, { Component } from 'react';
import Marked from 'marked';
import './Previewer.css';
import Toolbar from '../Toolbar/Toolbar';

Marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  langPrefix: 'language-',
});

export default class Previewer extends Component {
  getMarkdownText() {
    const rawMarkup = Marked(this.props.text);
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div id="previewer-container">
        <Toolbar />
        <div id="previewer" dangerouslySetInnerHTML={this.getMarkdownText()} />
      </div>
    );
  }
}

