# Animated Count

A small script to animate numbers in HTML and Javascript.

[Demo](https://oelna.github.io/animated-count/)

## Usage

Include the script in your HTML `<head>`:

```html
<script defer src="./animated-count.js"></script>
```

Add the classes `count`, `animated` and, if you like, `compact` to your HTML elements containing numbers.  
The attribute `data-count-start` is also required, value can be 1.

```html
<h1 class="counter animated compact" data-count-start="100">721653</h1>
```

The script is invoked automatically on all elements containing the aforementioned classes.

## Options

The class `compact` will round larger numbers over 1000 to values such as 1K or 1M. If it is omitted, the exact number is displayed.
