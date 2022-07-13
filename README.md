# Laboratoria's header implemented as a Custom Web Component

To use it, simply import the package to your HTML via `<script>` tag from unpkg.com

```HTML
<script src="https://unpkg.com/laboratoria-ce-header"></script>
```

It will register a new component, you can use it with 
```HTML
<laboratoria-header></laboratoria-header>
```

This component expect 3 things:

- A set of anchor tags for links
- A property buttonname for the button buttonname
- A property link to set the button link

You can see an example use here:

```HTML
<laboratoria-header name="My Button" link="#linkToSomewhere">
  <a href="#1">Link 1</a>
  <a href="#2">Link 2</a>
  <a href="#3">Link 3</a>
</laboratoria-header>
```