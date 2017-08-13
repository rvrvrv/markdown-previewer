const exampleText = `Heading
=======

Sub-heading
-----------
 
### Another deeper heading
 
Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: exampleText,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // Call markdown function from external API
  markIt() {
    return { __html: marked(this.state.text, { sanitize: true }) };
  }

  // Upon text change, update state and highlight marked box
  handleChange(e) {
    this.setState({ text: this.refs.textarea.value });
    const marked = document.getElementById('marked');
    marked.classList.add('edited');
    setTimeout(() => marked.classList.remove('edited'), 3000);
  }

  render() {
    return (
      <div className="container">
        <h2 id="title">📝 Markdown Previewer 👓</h2>
        <textarea
          onChange={this.handleChange}
          ref="textarea"
          defaultValue={this.state.text}
          rows="30"
          cols="50"
        />
        <p id="marked" dangerouslySetInnerHTML={this.markIt()} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
