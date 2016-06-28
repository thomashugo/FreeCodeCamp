function convertToRoman(num) {

    var romNums = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"]
    ];

    var numArr = num.toString().split("").reverse();

    var romVal = numArr.map(function(val, index) {
        return romNums[index][val];
    });

    return romVal.reverse().join("");
}
