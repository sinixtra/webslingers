var scores = [46, 41, 34, 33, 30, 30, 28, 27, 25, 21];
var total_scores = 0;
var average = 0;
var percAsDeci = 0;
var whole_Num_A = 0;
//this console log is to check the lenght for debuging 
console.log(scores.length);
//this is going to add all of the values inside the array
function adding(){
  for (var grade in scores){
    total_scores += scores[grade];
  }
  //console log for debuging the total
  console.log(total_scores);
  //this will send you to the next step
  average_Scores();
};
// this fucntion will average the scores 
function average_Scores(){
  average = total_scores / scores.length;
  //console log for debuging the average 
  console.log(average)
  //next step 
  averageOf55();
};
//this fucntion will make it average out of 55
function averageOf55(){
  percAsDeci = (average / 55) * 100
  //console log for debuging 
  console.log(percAsDeci);
  //this will take you to the next step 
  whole_Num();
}
//this will make your percent into a whole number 
function whole_Num(){
  whole_Num_A = Math.round(percAsDeci);
  // console log for debuging 
  console.log(whole_Num_A);
};
//this functions will add every thing to the html
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
//this will make sure the all the scores are printed to the html 
myFunction();
