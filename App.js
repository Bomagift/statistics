class MathsOperations {
    // Class property
    static PI = 3.14159;
  
    // Class method
    static square(x) {
      return x * x;
    }
  
    // Class method
    static cube(x) {
      return x * x * x;
    }
  }
  
  // Accessing class property
  console.log(MathOperations.PI); // Output: 3.14159
  
  // Using class method
  console.log(MathOperations.square(5)); // Output: 25
  console.log(MathOperations.cube(3));   // Output: 27