(function () {
    'use strict';

    angular
        .module('myapp')
        .filter('ellipsis', ellipsis);

    function ellipsis() {
        return ellipsisFunction;

        ////////////////

        function ellipsisFunction(text, length) {
            if (text && text.length > length) {
                var subtext = text.substr(0, length);
                var index = subtext.lastIndexOf(" ");
                return subtext.substr(0, index) + "...";
            }
            return text;
        }
    }

})();