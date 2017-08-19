const exampleText = `# Heading

![Random image](https://unsplash.it/50 'Random image')

## Sub-heading
### Another deeper heading

Paragraphs are separated
by a blank line.

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

> > This is a blockquote.

\`\`\`
// This is an example of code
const greeting = 'Hello!';
\`\`\`

Markdown parser courtesy of [marked.js](https://github.com/chjj/marked)
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = { text: exampleText };
  }

  // Call markdown function from external API
  markIt() {
    return { __html: marked(this.state.text, { sanitize: true }) };
  }

  // Upon text change, update state and highlight preview box
  handleChange = (e) => {
    this.setState({ text: e.target.value });
    const preview = document.getElementById('preview');
    preview.classList.add("edited");
    setTimeout(() => preview.classList.remove('edited'), 3000);
  };

  render() {
    return (
      <div className="container">
        <h2 id="title"><span role="img" aria-label="document">📝</span> Markdown Previewer <span role="img" aria-label="glasses">👓</span></h2>
        <textarea
          id="editor"
          onChange={this.handleChange}
          defaultValue={this.state.text}
          rows="30"
          cols="50"
        />
        <p id="preview" dangerouslySetInnerHTML={this.markIt()} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
