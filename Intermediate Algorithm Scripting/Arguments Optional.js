function addTogether() {

    function isNumber(num) {
        return Number.isInteger(num);
    }

    for (var i = 0; i < arguments.length; i++) {
        if (isNumber(arguments[i])) {} else return undefined;
    }

    if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    } else if (arguments.length === 1) {
        var first = arguments[0];
        if (isNumber(first)) {
            return function(second) {
                if (isNumber(first) === false || isNumber(second) === false) {
                    return undefined;
                } else {
                    return first + second;
                }
            };
        }
    }

}

addTogether(2)(3);
