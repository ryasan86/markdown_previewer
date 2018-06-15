import React, { Component } from 'react';
import Marked from 'marked';
import './Previewer.css';
import Toolbar from '../Toolbar/Toolbar';

export default class Previewer extends Component {
  componentDidMount() {
    Marked.setOptions({
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      langPrefix: 'language-'
    });
  }

  getMarkdownText() {
    const rawMarkup = Marked(this.props.text);
    return { __html: rawMarkup };
  }

  render() {
    const { onScreenToggle, view,icon } = this.props;
    return (
      <div className="container">
        <Toolbar onScreenToggle={onScreenToggle} icon={icon} view={view} />
        <div id="preview" className="text-background" dangerouslySetInnerHTML={this.getMarkdownText()} />
      </div>
    );
  }
}
