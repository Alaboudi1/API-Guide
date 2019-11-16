(this["webpackJsonpapi-guide"]=this["webpackJsonpapi-guide"]||[]).push([[0],{104:function(e,t){},144:function(e,t,n){e.exports=n(869)},149:function(e,t,n){},150:function(e,t,n){},388:function(e,t){},389:function(e,t){},865:function(e,t,n){},869:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(67),o=n.n(c),l=(n(149),n(24)),i=(n(150),n(44)),s=n.n(i);var u=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(s.a,Object.assign({},e,{options:{minimap:{enabled:!1}}}))))},m="\nimport React from 'react';\n\nclass TodoApp extends React.Component {\n    constructor(props) {\n      super(props);\n      this.state = { items: [], text: '' };\n      this.handleChange = this.handleChange.bind(this);\n      this.handleSubmit = this.handleSubmit.bind(this);\n      this.myRef = React.createRef();\n\n    }\n\n    render() {\n      return (\n        <div>\n          <h3>TODO</h3>\n          <TodoList items={this.state.items} />\n          <form onSubmit={this.handleSubmit}>\n            <label htmlFor=\"new-todo\">\n              What needs to be done?\n            </label>\n            <input\n              id=\"new-todo\"\n              onChange={this.handleChange}\n              value={this.state.text}\n              ref={this.myRef}\n            />\n            <button>\n              Add #{this.state.items.length + 1}\n            </button>\n          </form>\n        </div>\n      );\n    }\n\n    handleChange(e) {\n      this.setState({ text: e.target.value });\n    }\n    componentDidMount(){\n        fetch (databaseURL)\n              .then(data=> data.json())\n              .catch(e, console.log(e))\n    }\n    handleSubmit(e) {\n      e.preventDefault();\n      if (!this.state.text.length) {\n        return;\n      }\n      const newItem = {\n        text: this.state.text,\n        id: Date.now()\n      };\n      this.setState(state => ({\n        items: state.items.concat(newItem),\n        text: ''\n      }));\n    }\n  }\n\n  class TodoList extends React.Component {\n    render() {\n      return (\n        <ul>\n          {this.props.items.map(item => (\n            <li key={item.id}>{item.text}</li>\n          ))}\n        </ul>\n      );\n    }\n  }\n\n  ReactDOM.render(\n    <TodoApp />,\n    document.getElementById('todos-example')\n  );\n\n",d={steps:[{checks:[{checkText:"Replace the class keywords with function.",code:{before:"class X extends React.Component{} ",after:"function X() "}},{checkText:"Remove the render() method signature but keep the method body",code:{before:"render() {\nreturn (\n<>Hello World!</>\n)}",after:"return (\n<>Hello World!</>\n)"}},{checkText:"Remove any scope binding for methods.",code:{before:"this.method.bind(this);"}}],warning:["The argument passed to useState is the initial value for the property. "],relatedAPIs:["React.Component","bind","constructor","render()"]},{checks:[{checkText:" Import useState at the top of your file.",code:{before:"import React from 'react';",after:"import React, { useState } from 'react';"}},{checkText:"Replace each of your component state properties with useState. ",code:{before:"this.state = { property: ' ' };",after:"const [property, handlePropertyChange ] = useState(' ');"}},{checkText:"Replace this.setState with handlePropertyChange take from useState API. ",code:{before:'this.setState(() => property: "Hello" )',after:'handlePropertyChange("Hello")'}}],relatedAPIs:["componentDidUpdate","this.state","Import React from 'react';","this.setState"]},{checks:[{checkText:" Import useEffect at the top of your file.",code:{before:"import React, {useState} from 'react';",after:"import React, { useState, useEffect } from 'react';"}},{checkText:"Replace each of the component life (e.g., componentDidUpdate ) cycle methods with useEffect.",code:{before:"componentDidMount() {code...}",after:"React.useEffect(() => {code...});"}}],relatedAPIs:["Import React from 'react';","componentDidMount"]},{checks:[{checkText:" Import useRef at the top of your file.",code:{before:"import React, {useState,  useEffect} from 'react';",after:"import React, { useState, useEffect, useRef } from 'react';"}},{checkText:"Replace createRef(); API with a useRef hock.",code:{before:"React.createRef();",after:"useRef(null);"}}],relatedAPIs:["Import React","createRef"]}]},h=n(23),f=n(139),p=n(873),b=n(872),g=function(e){var t=r.a.createElement(r.a.Fragment,null),n=r.a.createElement(r.a.Fragment,null);return e.code&&e.code.before&&(t=r.a.createElement("div",null,r.a.createElement("p",null,"Before:"),r.a.createElement(p.a,{language:"javascript",style:b.a},e.code.before))),e.code&&e.code.after&&(n=r.a.createElement("div",null,r.a.createElement("p",null,"After:"),r.a.createElement(p.a,{language:"javascript",style:b.a},e.code.after))),r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,e.checkText),t,n)};var v=function(e){var t=e.checks.map((function(e,t){return{value:"".concat(t),label:g(e),disabled:!1}})),n=Object(a.useState)(t),c=Object(l.a)(n,2),o=c[0],i=(c[1],Object(a.useState)(e.done)),s=Object(l.a)(i,2),u=s[0],m=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"rainbow-p-vertical_large rainbow-p-left_xx-large",style:{minHeight:"650px"}},r.a.createElement(h.CheckboxGroup,{id:"checkbox-group-1",label:e.label,options:o,value:u,onChange:function(t){m(t),e.changeDoneChecklist(t)}})))},E=n(135),k=n(136),x=n(140),S=n(137),R=n(45),j=n(141),y=(n(861),n(864),function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(x.a)(this,Object(S.a)(t).call(this,e))).state={currentStepIndex:0},n.stepNames=e.steps.map((function(e,t){return"step-".concat(t)})),console.log(e.steps),n.handleNextClick=n.handleNextClick.bind(Object(R.a)(n)),n.handleBackClick=n.handleBackClick.bind(Object(R.a)(n)),n}return Object(j.a)(t,e),Object(k.a)(t,[{key:"handleNextClick",value:function(){var e=this.state.currentStepIndex;if(e<this.stepNames.length-1){var t=e+1;return this.props.changeStep(t),this.setState({currentStepIndex:t})}return this.setState({isNextDisabled:!1})}},{key:"handleBackClick",value:function(){var e=this.state.currentStepIndex;if(e>0){var t=e-1;this.props.changeStep(t),this.setState({currentStepIndex:t})}}},{key:"isNextDisabled",value:function(){var e=this.state.currentStepIndex;return!(e<this.stepNames.length-1&&e>=0)}},{key:"isBackDisabled",value:function(){var e=this.state.currentStepIndex;return!(e>0&&e<this.stepNames.length)}},{key:"render",value:function(){var e=this.state.currentStepIndex;return r.a.createElement("div",{className:"rainbow-m-bottom_large rainbow-p-bottom_large"},r.a.createElement(h.ProgressIndicator,{currentStepName:this.stepNames[e]},this.props.steps.map((function(e,t){return r.a.createElement(h.ProgressStep,{name:"step-".concat(t),label:"Step ".concat(t),hasError:e})}))),r.a.createElement("div",{className:"rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap"},r.a.createElement(h.Button,{label:"Back",onClick:this.handleBackClick,variant:"neutral",disabled:this.isBackDisabled(),className:"rainbow-m-horizontal_medium"}),r.a.createElement(h.Button,{label:"Next",onClick:this.handleNextClick,variant:"brand",disabled:this.isNextDisabled(),className:"rainbow-m-horizontal_medium"})))}}]),t}(r.a.Component)),O=(n(865),n(138)),w=n.n(O);var I,C=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),c=(n[0],n[1]),o=Object(a.useState)(""),i=Object(l.a)(o,2),s=i[0],u=i[1];return e.editorRef.current.onMouseUp((function(t){var n=t.target.position.lineNumber;u(e.editorRef.current.getModel().getLineContent(n).trim())})),r.a.createElement(r.a.Fragment,null,function(){if(""==s)return r.a.createElement("h1",{style:{fontSize:"2em"}}," Please select an API! ");var e=d.steps.findIndex((function(e){return void 0!=e.relatedAPIs.find((function(e){return w()(s).contains(e)}))}));return e<0?r.a.createElement("h1",{style:{fontSize:"2em"}}," Related API is not found! Please select another API. "):r.a.createElement(v,Object.assign({key:e,label:"Step related to ".concat(s," API.")},d.steps[e],{changeDoneChecklist:c}))}())};i.monaco.init().then((function(e){return I=e})).catch((function(e){return console.error("An error occurred during initialization of Monaco: ",e)}));var N=[];var T=function(e){var t=Object(a.useState)("guide"),n=Object(l.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(0),s=Object(l.a)(i,2),u=s[0],m=s[1];Object(a.useEffect)((function(){R(d.steps[u].done||[]),O()}),[u]);var p=Object(a.useState)(d.steps.map((function(e){return!1}))),b=Object(l.a)(p,2),g=b[0],E=b[1],k=Object(a.useState)([]),x=Object(l.a)(k,2),S=x[0],R=x[1],j=function(e){S.length===d.steps[u].checks.length?E(g.map((function(e,t){return t!==u&&e}))):E(g.map((function(e,t){return t===u||e}))),d.steps[u].done=S.map((function(e){return e})),m(e)},O=function(){var t=d.steps[u].relatedAPIs;e.editorRef.current.deltaDecorations(N,[]);var n=[];t.forEach((function(t){var a=e.editorRef.current.getModel().findMatches(t);n.push.apply(n,Object(f.a)(a.map((function(e){return{range:new I.Range(e.range.startLineNumber,e.range.startColumn,e.range.endLineNumber,e.range.endColumn),options:{inlineClassName:"myInlineDecoration"}}}))))})),N=e.editorRef.current.deltaDecorations([],n)};return r.a.createElement("div",{className:"rainbow-flex rainbow-flex_column rainbow_vertical-stretch",style:{minWidth:"700px"}},r.a.createElement(h.Tabset,{fullWidth:!0,id:"tabset-2",onSelect:function(e,t){o(t)},activeTabName:c},r.a.createElement(h.Tab,{name:"guide",label:r.a.createElement("span",null,r.a.createElement("b",null," Guide "))}),r.a.createElement(h.Tab,{style:{overflow:"hidden"},name:"help",label:r.a.createElement("span",null,r.a.createElement("b",null,"   Help  "))})),"guide"===c?r.a.createElement(r.a.Fragment,null,r.a.createElement(v,Object.assign({key:u,label:"Step ".concat(u,"/").concat(d.steps.length-1)},d.steps[u],{changeDoneChecklist:R})),r.a.createElement(y,{changeStep:j,steps:g})):r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{editorRef:e.editorRef})))},D=function(){var e=Object(a.useRef)(),t=Object(a.useState)("Todo"),n=Object(l.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(m),s=Object(l.a)(i,2),f=s[0],p=s[1],b=Object(a.useState)(!1),g=Object(l.a)(b,2),v=g[0],E=g[1];Object(a.useEffect)((function(){p("config"==c?"const config = ".concat(JSON.stringify(d)):m)}),[c]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"editor"},r.a.createElement("div",{className:"rainbow-flex rainbow-flex_column rainbow_vertical-stretch",style:{maxWidth:"50%"}},r.a.createElement(h.Tabset,{fullWidth:!0,id:"tabset-2",onSelect:function(e,t){o(t)},activeTabName:c},r.a.createElement(h.Tab,{name:"config",label:r.a.createElement("span",null,r.a.createElement("b",null," config.js "))}),r.a.createElement(h.Tab,{style:{overflow:"hidden"},name:"Todo",label:r.a.createElement("span",null,r.a.createElement("b",null,"   Todo.js   "))}))),r.a.createElement(u,{language:"javascript",height:"90vh",theme:"dark",value:f,editorDidMount:function(t,n){e.current=n,E(!0),console.log("done")}})),v?r.a.createElement(T,{editorRef:e}):r.a.createElement(r.a.Fragment,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[144,1,2]]]);
//# sourceMappingURL=main.ebef3986.chunk.js.map