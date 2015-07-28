# inputTags-jQuery-plugin

Plugin jQuery de gestion de tags.

## Getting started

**HTML**:

```html
<input type="text" id="tags" />
```

**JS**:
```js
$('#tags').inputTags();
```


## Basic usage

**Create with custom tags**
```js
$('#tags').inputTags({
  tags: ['jQuery', 'tags', 'plugin']
});
```

**Create with tags autocomplete**
```js
$('#tags').inputTags({
  autocomplete: {
    values: ['Pellentesque', 'habitant', 'morbi', 'tristique', 'senectus', 'netus', 'malesuada', 'fames', 'turpis', 'egestas', 'Vestibulum']
  }
});
```
