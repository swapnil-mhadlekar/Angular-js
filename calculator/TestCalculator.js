var Calculator = (function () {

    var result = "";

    var concat = function (input, displayField) {

        result = result+input;
        display(displayField);
    };

    var clear = function (displayField) {
        result = "";
        display(displayField);
    }

    var evaluate = function (displayField) {

        result = eval(result);
        display(displayField);
    }

    var display = function (displayField) {

        document.getElementById(displayField).value = result;
    }

    return {

        concat: concat,
        clear: clear,
        evaluate: evaluate
    }

})();