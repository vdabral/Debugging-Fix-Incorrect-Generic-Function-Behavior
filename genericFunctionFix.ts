// Generic function to return the third element of an array
function getThirdElement<T>(arr: T[]): T | null {
    if (arr.length < 3) {
        console.log("Error: The array has fewer than three elements.");
        return null;
    }
    return arr[2];
}

// Test cases
const numbers = [1, 2, 3, 4];
const words = ["apple", "banana", "cherry", "date"];
const shortArray = [42, 99]; 

console.log(getThirdElement(numbers));  
console.log(getThirdElement(words));    
console.log(getThirdElement(shortArray));
