const Calculator = require("../calculator");

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  // Basic Operations Tests
  describe("Basic Operations", () => {
    test("should add two positive numbers", () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test("should subtract two numbers", () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test("should multiply two numbers", () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test("should divide two numbers", () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    test("should throw error when dividing by zero", () => {
      expect(() => calculator.divide(10, 0)).toThrow(
        "Cannot divide by zero"
      );
    });
  });

  // Modulo Operation Tests
  describe("Modulo Operation", () => {
    test("should return remainder of division", () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    test("should return 0 when number is evenly divisible", () => {
      expect(calculator.modulo(10, 2)).toBe(0);
    });

    test("should work with negative numbers", () => {
      expect(calculator.modulo(-5, 2)).toBe(-1);
    });

    test("should throw error when dividing by zero", () => {
      expect(() => calculator.modulo(10, 0)).toThrow(
        "Cannot perform modulo by zero"
      );
    });
  });

  // Power/Exponentiation Tests
  describe("Power/Exponentiation Operation", () => {
    test("should raise 2 to the power of 3", () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test("should raise number to power of 0", () => {
      expect(calculator.power(5, 0)).toBe(1);
    });

    test("should raise number to power of 1", () => {
      expect(calculator.power(7, 1)).toBe(7);
    });

    test("should handle fractional exponents", () => {
      expect(calculator.power(4, 0.5)).toBe(2);
    });

    test("should handle negative exponents", () => {
      expect(calculator.power(2, -1)).toBe(0.5);
    });
  });

  // Square Root Tests
  describe("Square Root Operation", () => {
    test("should calculate square root of 16", () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });

    test("should calculate square root of perfect square", () => {
      expect(calculator.squareRoot(25)).toBe(5);
    });

    test("should calculate square root of 0", () => {
      expect(calculator.squareRoot(0)).toBe(0);
    });

    test("should calculate square root of decimal number", () => {
      expect(calculator.squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    test("should throw error for negative number", () => {
      expect(() => calculator.squareRoot(-4)).toThrow(
        "Cannot calculate square root of negative number"
      );
    });

    test("should throw error for negative float", () => {
      expect(() => calculator.squareRoot(-16)).toThrow(
        "Cannot calculate square root of negative number"
      );
    });
  });

  // Calculate method with new operators
  describe("Calculate method with extended operators", () => {
    test("should calculate modulo using calculate method", () => {
      expect(calculator.calculate(5, "%", 2)).toBe(1);
    });

    test("should calculate power using calculate method", () => {
      expect(calculator.calculate(2, "^", 3)).toBe(8);
    });

    test("should throw error for invalid operator", () => {
      expect(() => calculator.calculate(10, "&", 5)).toThrow(
        "Invalid operator: &"
      );
    });
  });
});
