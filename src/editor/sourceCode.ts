import { Interface } from "readline";
import { string } from "prop-types";

export const code =
  `
class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }

    handleChange(e) {
      this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }

  class TodoList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }

  ReactDOM.render(
    <TodoApp />,
    document.getElementById('todos-example')
  );

`
  ;


export const config: Iconfig = {
  steps: [
    {
      checks: [
        {
          checkText: "Make sure that your code is producing the expected outputs."
        },
        {
          checkText: " Import useState at the top of your file.",

          code: {
            before: "import React from 'react';",
            after: "import React, { useState } from 'react';"
          }
        }
      ],
      relatedAPIs: [
        "Import React"
      ]
    },
    {
      checks: [
        {
          checkText: "Replace the class keywords with function.",
          code: {
            before: "class X extends React.Component{} ",
            after: "function X() "
          }
        },
        {
          checkText: "Replace each of your component state properties with useState. ",

          code: {
            before: `this.state = { property: ' ' };\nthis.handlePropertyChange = this.handlePropertyChange .bind(this);`,
            after: "const [property, handlePropertyChange ] = useState(' ');"
          }
        }
      ],
      warning: [
        "The argument passed to useState is the initial value for the property. "
      ],
      relatedAPIs: [
        "React.Component",
        "this.state",
        "bind"
      ]
    },
    {
      checks: [
        {
          checkText: "Replace each of the component life cycle methods with useEffect.",
          code: {
            before: `componentDidUpdate() {
              localStorage.setItem('myValueInLocalStorage', this.state.value);`,
            after: `React.useEffect(() => {
              localStorage.setItem('myValueInLocalStorage', value);
            } [value]);`
          }
        }
      ],
      warning: [
        "The second argument in useEffect is how you access the current state."
      ],
      relatedAPIs: [
        "componentDidUpdate",
      ]
    }

  ]

};