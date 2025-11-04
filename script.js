// Print your name, age, and skills in console
console.log("Hashim Naeem");
console.log("Age: 22");
console.log("Skills: HTML, CSS, JavaScript");

// Function to add 2 numbers
function addNumbers(a, b) {
  return a + b;
}

// Example usage
let sum = addNumbers(5, 10);
console.log("Sum of 5 and 10 is:", sum);

// Function to calculate average marks
function calculateAverage(marks) {
    if (marks.length === 0) return 0;
    
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
      total += marks[i];
    }
    let average = total / marks.length;
    return average;
  }
  
  // Example usage
  let studentMarks = [85, 90, 78, 92, 88];
  console.log("Average Marks:", calculateAverage(studentMarks));
  
