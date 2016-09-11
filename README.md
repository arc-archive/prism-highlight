
`<prism-highlight>` Syntax highlighting via Prism

### Example
```
<prism-highlight id="c1" lang="markdown"></prism-highlight>
<script>
  document.querySelector('#c1').code = '# Test highlight';
</script>
```

The `lang` attribute is required and the component will not start parsing data without it.

### Styling
`<prism-highlight>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--prism-highlight` | Mixin applied to the element | `{}`
`--prism-highlight-code` | Mixin applied to the `<pre>` element | `{}`
`--prism-highlight-mark` | Background color for the `<mark>` element when using custom search | `--paper-orange-500`



### Events
| Name | Description | Params |
| --- | --- | --- |
| link | Fired when the user clicked on a link. | url **String** - Clicked url |
