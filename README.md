angular-digits
=====

An attribute to restrict an element to a certain number of numeric digits.

It's a simple angularjs directive that restricts the user to only type numeric characters and limits the number of characters based on the value of the attribute.

Because it's such a small amount of code, it should be able to read and understand so you can even tweak it for your needs.  In fact, I encourage it!

Available on Bower
-----

`bower install angular-digits`

How To
-----
Simply include the digits module

```javascript
var app = angular.module('app', [ 'digits' ]);
```

Then use the digits attribute on your html elements

```html
<input type="text" digits="4" ng-model="year" />
```

Note that the number of digits is specified as the value of the `digits` attribute and that `ng-model` is required.

This is particularly simple.  If you're looking for something that does more (and the complexity that comes with it) check out: [ngMask](https://github.com/candreoliveira/ngMask).

That's it!

Check out the github pages example here: http://deltreey.github.io/angular-digits/
