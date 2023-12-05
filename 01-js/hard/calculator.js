/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(x) {
    try {
      this.result += x;
    } catch (error) {
      throw Error();
    }
  }
  subtract(x) {
    try {
      this.result -= x;
    } catch (error) {
      throw Error();
    }
  }
  multiply(x) {
    try {
      this.result *= x;
    } catch (error) {
      throw Error();
    }
  }
  divide(x) {
    try {
      if(x==0){
        throw Error()
      }
      this.result /= x;
    } catch (error) {
      throw Error();
    }
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(string) {
    // i dont know much about regular expression , but this one is use for removing space : /\s/g

    string = string.replace("/s/g", "");
    try {
      this.result = eval(string);
      // this method is not good , result becomes infinity by various mathematical operation other than dividing by zero
     if(!isFinite(this.result) || isNaN(this.result)){
      throw Error()
     }
    } catch (error) {
      throw new  Error();
    }
  }
}


// var calc = new Calculator();
// calc.calculate('5+2');

// // calc.divide(4);
// console.log(calc.getResult());

module.exports = Calculator;
