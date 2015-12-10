'use strict';

angular.module('digits', [])
  .directive('digits', function ($timeout) {
    function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        var maxLength = 0;
        if (isNumeric(attrs.digits)) {
          maxLength = parseInt(attrs.digits);
        }

        ngModel.$parsers.push(function (value) {
          if ((value || value === 0)) {
            var cursorPosition = element[0].selectionStart;
            var oldLength = value.toString().length;
            var nonDigits = /[^0-9]/g;
            var intValue = value.replace(nonDigits, '');
            if (intValue.length > 9) {
              intValue = intValue.substr(0, 9);
            }
            var newValue = intValue.toString().substr(0, maxLength);

            ngModel.$setViewValue(newValue);
            ngModel.$render();
            element[0].setSelectionRange(cursorPosition + newValue.length - oldLength, cursorPosition + newValue.length - oldLength);

            return newValue;
          }

          return value;
        });
      }
    };
  });
