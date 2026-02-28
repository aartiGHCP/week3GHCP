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
   * Modulo operation
   * @param {number} a - Dividend
   * @param {number} b - Divisor
   * @returns {number} Remainder of a divided by b
   * @throws {Error} If attempting modulo by zero
   */
  modulo(a, b) {
    if (b === 0) {
      throw new Error("Cannot perform modulo by zero");
    }
    return a % b;
  }

  /**
   * Exponentiation operation
   * @param {number} base - Base number
   * @param {number} exponent - Power to raise the base to
   * @returns {number} Base raised to the exponent
   */
  power(base, exponent) {
    return Math.pow(base, exponent);
  }

  /**
   * Square root operation
   * @param {number} n - Number to find the square root of
   * @returns {number} Square root of n
   * @throws {Error} If n is negative
   */
  squareRoot(n) {
    if (n < 0) {
      throw new Error("Cannot calculate square root of negative number");
    }
    return Math.sqrt(n);
  }

  /**
   * Perform a calculation based on operator
   * @param {number} a - First operand
   * @param {string} operator - Operator: '+', '-', '*', '/', '%', or '^'
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
      case "%":
        return this.modulo(a, b);
      case "^":
        return this.power(a, b);
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

  if (args.length < 2) {
    console.log("Usage:");
    console.log("  For binary operations: node calculator.js <number1> <operator> <number2>");
    console.log("  For square root: node calculator.js sqrt <number>");
    console.log(
      "Operators: + (addition), - (subtraction), * (multiplication), / (division), % (modulo), ^ (power)"
    );
    console.log("Example: node calculator.js 10 + 5");
    console.log("Example: node calculator.js sqrt 16");
    process.exit(1);
  }

  const calc = new Calculator();

  // Handle square root as special case
  if (args[0].toLowerCase() === "sqrt") {
    const n = parseFloat(args[1]);
    if (isNaN(n)) {
      console.error("Error: Operand must be a valid number");
      process.exit(1);
    }
    try {
      const result = calc.squareRoot(n);
      console.log(`√${n} = ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  } else {
    // Handle binary operations
    if (args.length < 3) {
      console.error("Error: Binary operations require two operands and an operator");
      process.exit(1);
    }

    const a = parseFloat(args[0]);
    const operator = args[1];
    const b = parseFloat(args[2]);

    if (isNaN(a) || isNaN(b)) {
      console.error("Error: Operands must be valid numbers");
      process.exit(1);
    }

    try {
      const result = calc.calculate(a, operator, b);
      console.log(`${a} ${operator} ${b} = ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  }
}
