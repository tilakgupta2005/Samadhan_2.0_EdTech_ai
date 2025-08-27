function findHighestMark(marks, { allowStringNumbers = true, onEmpty = "error" } = {}) {
  // First, check if the input is really an array or not
  if (!Array.isArray(marks)) {
    throw new TypeError("Input must be an array"); // crash if wrong input
  }

  // Now we go through the marks and keep only valid numbers
  const numericMarks = marks
    .map((mark) => {
      // if it's already a number, keep it
      if (typeof mark === "number") return mark;

      // if it's a string like "90" and option allows it → convert to number
      if (allowStringNumbers && typeof mark === "string" && mark.trim() !== "" && !isNaN(Number(mark))) {
        return Number(mark);
      }

      // otherwise, just throw it away by turning into NaN
      return NaN;
    })
    // remove NaN, Infinity, -Infinity (we only want clean numbers)
    .filter((mark) => Number.isFinite(mark));

  // if no valid marks left, then handle depending on what option user gave
  if (numericMarks.length === 0) {
    switch (onEmpty) {
      case "null": return null; // if empty, just return null
      case "default": return -Infinity; // return lowest possible value
      case "error": throw new Error("No valid numeric marks found"); // stop and give error
      default: throw new Error(`Unknown onEmpty option: ${onEmpty}`);
    }
  }

  // finally, find the max using Math.max (shortcut instead of reduce)
  return Math.max(...numericMarks);
}

// -------------------- DEMO --------------------

const marks1 = [85, 92, 78, 95, 88];
console.log(findHighestMark(marks1)); 
// → 95 (highest mark in normal list)

const marks2 = [100, -5, 0, Infinity, "invalid", NaN];
console.log(findHighestMark(marks2)); 
// → 100 (ignores invalid stuff and infinity)

const marks3 = [];
try {
  console.log(findHighestMark(marks3)); 
} catch (e) {
  console.error(e.message); 
}
// → "No valid numeric marks found" (because array empty)

console.log(findHighestMark(marks3, { onEmpty: "null" }));     
// → null (if I want empty case to return null)

console.log(findHighestMark(marks3, { onEmpty: "default" }));  
// → -Infinity (acts like no mark is possible)

const marks4 = [-10, -20, -5];
console.log(findHighestMark(marks4)); 
// → -5 (works even with all negatives)

const marks5 = ["70", "85", "90"]; 
console.log(findHighestMark(marks5)); 
// → 90 (also works if marks are strings)
