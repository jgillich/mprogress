# MProgress [![Build Status](https://travis-ci.org/jgillich/mprogress.png?branch=tmp)](https://travis-ci.org/jgillich/mprogress)

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

* `MProgress([styles])`: Constructor function. `styles` is a object containing [HTMLElement.style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement.style) properties, used to override the default style.
* `interval([interval])`: Create a timer that calls `increase()` with a default `interval` of 500ms. Automatically removed in `remove()`.
* `show()`: Append element to body.
* `hide()`: Finish progress bar and call `remove()`.
* `remove()`: Remove element from body and detach timers.
* `set(value)`: Set current progress to percentage `value`.
* `get()`: Return current percentage value.
* `increase([value])`: Increase progress bar value. If `value` is not passed, a random value is chosen.

All functions that don't return a value are chainable.
