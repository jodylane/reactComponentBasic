In React basic components can be written in regular javascript. 

```

function Welcome(props){
  return ( <h1>Welcome {props.name}!</h1> )
}

```

They can be rendered to the DOM by calling the render() method.

```

ReactDom.render(
  <Welcome name="James"/>,
  document.getElementById('root')
);

```

Components can accessed once their function is written components should be written with capital letters "Welcome" 
Then they can be written like normal html elements and that will access the Welcome function. 

Props work by passing attributes from an html component element. By calling an attribute called name and setting it equal to James

I can now access props.name to return whatever name was passed to that component.
