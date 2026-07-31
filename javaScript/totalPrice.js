const marks = [95, 78, 90, 78, 59];
function getTotal(marks) {
  return marks.reduce((accu, mark) => {
    return accu + mark;
  }, 0);
}
let percent=getTotal(marks)/5;

console.log(getTotal(marks));
console.log(percent+"%");

