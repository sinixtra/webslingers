$(document).ready(function()
{

	function printToPage (msg)
	{
		var message = "<p>" + msg + "<\p>";
		$("#mainSection").append (message);
	}

	// defult numbers to sort
var numberGroup = [33, 28, 19, 4, 56, 8, 3, 12, 13, 44, 56, 9, 42, 7, 17, 31];
//this fucntions will start the sort algorithm
	function bubleSort(arrayOfNumbers)
	{
		//this empty object will help terminate the loop once done by seting a bull
		//must be empty to alow the function to run
		var sorted;

		//the do while loop will alow me to keep it going until sort changes
		do{
			//starting the bull at false this will later change if still soritng or
			//stay false if done
			sorted = false;

			//im using a for loop to alow me to go through all the numbers in the array
			//inside will be a function that will alow the numbers to swap places after checking them
			//seting the length to -1 will alow me to stop it from checking the last number more then once
			for (var j = 0; j < arrayOfNumbers.length-1; j++){

				//this if function will check the items at index i and i+1
				if (arrayOfNumbers[j] > arrayOfNumbers[j+1]){
					//this will serve as a place holder for when the switch happends for item at index j
					var waiting = arrayOfNumbers[j];
					//the switch happends here
					arrayOfNumbers[j] = arrayOfNumbers[j+1];
					arrayOfNumbers[j+1] = waiting;
					//this bull alows the loop to continu
					sorted = true;
				}
			}


		} while(sorted);


	}
	bubleSort(numberGroup);
	printToPage ("Numbers sorted " + numberGroup);

});
