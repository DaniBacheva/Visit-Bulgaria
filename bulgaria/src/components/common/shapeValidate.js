function validateSameShape(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    // Check if all keys are the same and have the same data type
    for (const key of keys1) {
      if (!keys2.includes(key) || typeof obj1[key] !== typeof obj2[key]) {
        return false;
      }
    }
  
    // If all checks pass, the objects have the same shape
    return true;
  }
  
  // Example usage:
//   const obj1 = { name: 'John', age: 25, email: 'john@example.com' };
//   const obj2 = { name: 'Alice', age: 30, email: 'alice@example.com' };
  
//   const isSameShape = validateSameShape(obj1, obj2);
  
//   if (isSameShape) {
//     console.log('Objects have the same shape.');
//   } else {
//     console.log('Objects do not have the same shape.');
//   }