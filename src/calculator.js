#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * Supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

class Calculator {
  /**
   * Addition operation
   * @param {number} a - First operand
   * @param {number} b - Second operand
   * @returns {number} Sum of a and b
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtraction operation
   * @param {number} a - First operand
   * @param {number} b - Second operand
   * @returns {number} Difference of a and b
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiplication operation
   * @param {number} a - First operand
   * @param {number} b - Second operand
   * @returns {number} Product of a and b
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Division operation
   * @param {number} a - First operand (dividend)
   * @param {number} b - Second operand (divisor)
   * @returns {number} Quotient of a and b
   * @throws {Error} If attempting to divide by zero
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }

  /**
   * Perform a calculation based on operator
   * @param {number} a - First operand
   * @param {string} operator - Operator: '+', '-', '*', or '/'
   * @param {number} b - Second operand
   * @returns {number} Result of the calculation
   * @throws {Error} If operator is invalid
   */
  calculate(a, operator, b) {
    switch (operator) {
      case "+":
        return this.add(a, b);
      case "-":
        return this.subtract(a, b);
      case "*":
        return this.multiply(a, b);
      case "/":
        return this.divide(a, b);
      default:
        throw new Error(`Invalid operator: ${operator}`);
    }
  }
}

// Export for use as a module
module.exports = Calculator;

// CLI functionality
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.log("Usage: node calculator.js <number1> <operator> <number2>");
    console.log(
      "Operators: + (addition), - (subtraction), * (multiplication), / (division)"
    );
    console.log("Example: node calculator.js 10 + 5");
    process.exit(1);
  }

  const a = parseFloat(args[0]);
  const operator = args[1];
  const b = parseFloat(args[2]);

  if (isNaN(a) || isNaN(b)) {
    console.error("Error: Operands must be valid numbers");
    process.exit(1);
  }

  const calc = new Calculator();

  try {
    const result = calc.calculate(a, operator, b);
    console.log(`${a} ${operator} ${b} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}
