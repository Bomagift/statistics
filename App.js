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
  console.log(MathsOperations.PI); // Output: 3.14159
  
  // Using class method
  console.log(MathsOperations.square(5)); // Output: 25
  console.log(MathsOperations.cube(3));   // Output: 27