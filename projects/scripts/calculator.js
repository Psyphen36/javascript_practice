function displayCalculation (val1, operation, val2) {
    let res = '';
    val1 = parseInt(val1);
    val2 = parseInt(val2);

    if (operation == '+') {
        res = val1 + val2;
    } else if (operation = '-') {
        res = val1 - val2;
    } else if (operation = '*') {
        res = val1 * val2;
    } else if (operation = '/') {
        res = val1 / val2;
    }
    return [val1, val2, res];
}
