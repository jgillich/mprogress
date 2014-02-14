# MProgress

A slim progress bar with no dependencies. Similar to [nprogress](https://github.com/rstacruz/nprogress).

## Usage


```
<script src="mprogress.js"></script>
```


```
var mprogress = new MProgress();

mprogress.interval().show();

// do stuff

mprogress.hide();
```

## Functions

* `MProgress([styles])`: Constructor function. Styles is a object containing [HTMLElement.style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement.style) properties, used to override the default style. Returns `this`.

* `interval([interval])`: Creates a timer that calls `increase()` with a default `interval` of 500ms. Automatically removed in `remove()`. Returns `this`.

* `show()`: Append element to body. Returns `this`.

* `hide()`: Finish progress bar and call `remove()`. Returns `this`.

* `remove()`: Remove element from body and detach timers. Returns `this`.

* `set(value)`: Set current progress to percentage `value`. Returns `this`.

* `get()`: Returns current percentage value.

* `increase([value])`: Increase progress bar value. If `value` is not passed, a random value is chosen. Returns `this`.
