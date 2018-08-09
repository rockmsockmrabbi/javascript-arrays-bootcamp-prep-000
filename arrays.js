var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray() {
  return chocolateBars (["foo",...chocolateBars]);
}
function destructivelyAddElementToBeginningOfArray() {
  return chocolateBars.unshift("foo");
}