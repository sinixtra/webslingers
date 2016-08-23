var scores = [46, 41, 34, 33, 30, 30, 28, 27, 25, 21];
var total_scores = 0;
var average = 0;
var percAsDeci = 0;
var whole_Num_A = 0;
console.log(scores.length);
function adding(){
  for (var grade in scores){
    total_scores += scores[grade];
  }
  console.log(total_scores);
  average_Scores();
};
function average_Scores(){
  average = total_scores / scores.length;
  console.log(average)
  averageOf55();
};
function averageOf55(){
  percAsDeci = (average / 55) * 100
  console.log(percAsDeci);
  whole_Num();
}
function whole_Num(){
  whole_Num_A = Math.round(percAsDeci);
  console.log(whole_Num_A);
};
function myFunction()
{
  var x = document.getElementById("box");
  x.innerHTML = scores.join('<br/>');
}
function myFunction2()
{
  adding();
  var y = document.getElementById("box1");
  y.innerHTML = whole_Num_A + "%";
}
myFunction();
