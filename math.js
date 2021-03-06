const divide = (dividend, divisor) => dividend / divisor;
const subtract = (minuend, subtrahend) => minuend - subtrahend;
const multiply = (multiplier, multiplyby) => multiplier * multiplyby;
const add = (addend1, addend2) => addend1 + addend2;
const even = (number) => number % 2 === 0;
const gte = (operand1, operand2) => operand1 >= operand2;
const lte = (operand1, operand2) => operand1 <= operand2;
const or = (...operands) => operands.some(operand => operand === true);
const and = (...operands) => operands.every(operand => operand === true);
const inverse = (number) => -number;