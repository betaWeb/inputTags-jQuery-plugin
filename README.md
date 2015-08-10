# inputTags.js

## Presentation
[inputTags.js](http://betaweb.github.io/inputTags-jQuery-plugin/) is a simple jQuery plugin allowing to add, edit or remove tags in a tags list.

## Installation
Make sure you include the script after the jQuery library.
```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="/path/to/inputTags.jquery.js"></script>
```

## Getting started
Setting up [inputTags.js](http://betaweb.github.io/inputTags-jQuery-plugin/) is very easy. You just have to add this few lines below and that's it !

**HTML**:

```html
<input type="text" id="tags" />
```

**JS**:
```js
$('#tags').inputTags();
```


## Basic usage

**Initialize plugin with custom tags**
Allows you to add custom tags on plugin initialization.
```js
$('#tags').inputTags({
  tags: ['jQuery', 'tags', 'plugin'] // Custom tags list
});
```

## Advanced usage

**Initialize plugin with tags autocomplete**
Allows you to add a custom list from which the user can choose one or more tags.
```js
$('#tags').inputTags({
  autocomplete: {
    values: ['Pellentesque', 'habitant', 'morbi', 'tristique', 'senectus'] // autocomplete list
  }
});
```

### Methods
**Coming soon...**

### Events
**Add events listener on plugin initialization**
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
<br/>
**Add events after plugin initialization**
```js
$('#tags').inputTags().on('change', function($elem) {
  console.log('Event called on item change', $elem);
});
```
same as:
```js
$('#tags').inputTags('event', 'change', function($elem) {
  console.log('Event called on item change', $elem);
});
```
