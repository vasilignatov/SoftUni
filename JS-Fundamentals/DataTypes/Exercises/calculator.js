function calculcator(firstNum, operator, secondNum) {

    let result = 0;
    if (operator == '-') {
        result = firstNum - secondNum;
    } else if (operator == '+') {
        result = firstNum + secondNum;
    } else if (operator == '*') {
        result = firstNum * secondNum;
    } else if (operator == '/') {
        result = firstNum / secondNum;
    }
    console.log(result.toFixed(2));
}
calculcator(5, '-', 10)