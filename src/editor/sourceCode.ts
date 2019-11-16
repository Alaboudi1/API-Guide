import { Interface } from "readline";
import { string } from "prop-types";

export const code =
  `
import React from 'react';

class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.myRef = React.createRef();

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
              ref={this.myRef}
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
    componentDidMount(){
        fetch (databaseURL)
              .then(data=> data.json())
              .catch(e, console.log(e))
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
          checkText: "Replace the class keywords with function.",
          code: {
            before: "class X extends React.Component{} ",
            after: "function X() "
          }
        },
        {
          checkText: "Remove the render() method signature but keep the method body",
          code: {
            before: `render() {\nreturn (\n<>Hello World!</>\n)}`,
            after: `return (\n<>Hello World!</>\n)`,
          }
        },
        {
          checkText: "Remove any scope binding for methods.",
          code: {
            before: `this.method.bind(this);`,
          },
        }
      ],
      warning: [
        "The argument passed to useState is the initial value for the property. "
      ],
      relatedAPIs: [
        "React.Component",
        "bind",
        "constructor",
        "render()"
      ]
    },
    {
      checks: [
        {

          checkText: " Import useState at the top of your file.",

          code: {
            before: "import React from 'react';",
            after: "import React, { useState } from 'react';"
          }
        },
        {
          checkText: "Replace each of your component state properties with useState. ",

          code: {
            before: `this.state = { property: ' ' };`,
            after: "const [property, handlePropertyChange ] = useState(' ');"
          },
        },
        {
          checkText: "Replace this.setState with handlePropertyChange take from useState API. ",

          code: {
            before: `this.setState(() => property: "Hello" )`,
            after: `handlePropertyChange("Hello")`
          }
        },
      ],
      relatedAPIs: [
        "componentDidUpdate",
        "this.state",
        "Import React from 'react';",
        "this.setState"


      ],
    },
    {
      checks: [
        {

          checkText: " Import useEffect at the top of your file.",

          code: {
            before: "import React, {useState} from 'react';",
            after: "import React, { useState, useEffect } from 'react';"
          }
        },
        {
          checkText: "Replace each of the component life (e.g., componentDidUpdate ) cycle methods with useEffect.",
          code: {
            before: `componentDidMount() {code...}`,
            after: `React.useEffect(() => {code...});`
          }
        }
      ],
      relatedAPIs: [
        "Import React from 'react';",
        "componentDidMount"


      ],
    },
      {
      checks: [
        {

          checkText: " Import useRef at the top of your file.",

          code: {
            before: "import React, {useState,  useEffect} from 'react';",
            after: "import React, { useState, useEffect, useRef } from 'react';"
          }
        },
        {
          checkText: "Replace createRef(); API with a useRef hock.",
          code: {
            before: `React.createRef();`,
            after: `useRef(null);`
          }
        }
      ],
      relatedAPIs: [
        "Import React",
        "createRef"


      ],
    },



  ]

};