# inputTags-jQuery-plugin

Plugin jQuery de gestion de tags.
Permet d'ajouter, éditer et supprimer des tags depuis une liste de tags.

Voir la [DEMO](http://codepen.io/betaweb/pen/PqdbMO/).

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
  tags: ['jQuery', 'tags', 'plugin'] // Custom tags list
});
```

## Advanced usage

**Create with tags autocomplete**
```js
$('#tags').inputTags({
  autocomplete: {
    values: ['Pellentesque', 'habitant', 'morbi', 'tristique', 'senectus'] // autocomplete list
  }
});
```
