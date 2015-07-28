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

**Add events**
Add events on plugin initialization:
```js
$('#tags').inputTags({
    init: function($elem) {
      console.log('Event called on plugin init', $elem);
    },
    create: function() {
      console.log('Event called when an item is created');
    },
    update: function() {
      console.log('Event called when an item is updated');
    },
    destroy: function() {
      console.log('Event called when an item is deleted');
    },
    selected: function() {
      console.log('Event called when an item is selected');
    },
    unselected: function() {
      console.log('Event called when an item is unselected');
    },
    change: function($elem) {
      console.log('Event called on item change', $elem);
    }
});
```

Add events after plugin initialization:
```js
$('#tags').inputTags().on('change', function($elem) {
  console.log('Event called on item change', $elem);
});
```
OR
```js
$('#tags').inputTags('event', 'change', function($elem) {
  console.log('Event called on item change', $elem);
});
```
