function sumWhile() {
	var i = 0;
	var sum = 0;
	while (i <= 100) {
		var sum = sum + i;
		i++;
	}
	document.write(sum);
}

function doWhile() {
	var i = 0;
	var sum = 0;
	do {
		var sum = sum + i;
		i++;
	}
	while (i <= 100);
	document.write("<br>" + sum);
}

function sumFor() {
	var i = 0;
	var sum = 0;
	for (var i = 0; i <= 100; i++) {
		var sum = sum + i;
	}
	document.write("<br>" + sum)
}

function fizzBuzz() {
	var i = 0;
	while (i <= 100) {
		isEven(i);
		i++;
	}
}

function isEven(i) {
	if (i % 2 === 0) {
		document.write("<br>" + i + " is even: fizz");
	} else {
		document.write("<br>" + i + " is odd: buzz");;
	}
}

function asciiTable() {
	var i = 0;
	while (i <= 250) {
		var hexString = i.toString(16);
		var asciiString = String.fromCharCode(i);
		document.write("<br>" + i + ", " + hexString + ", " + asciiString);
		i++;
	}
}

function arrayTest(x) {
	if (x.length > 0) {
		document.write("<br> Array is not empty.")
	} else {
		document.write("<br> Array is empty.")
	}
}

function arrayElements(x) {
	// Takes the first element
	var arrayFirst = x[0];
	// Takes the third element
	var arrayThird = x[2];
	// Takes the last element
	var arrayLast = x[x.length - 1];
	// Puts in 6 as the second element
	x.splice(1, 1, 6);
	// Adds in these numbers to the array
	x.splice(3, 0, 100, 101, 102);
	// Displays only the first 5 elements of the array
	var first5Elements = x.slice(0, 5);

	document.write("<br>" + first5Elements);
}

function emailAddress() {
	var loops = Number(prompt("How many emails do you want to enter?"));
	var i = 0;
	var email = [];
	// Prompts user for emails depending on the number of emails they have
	while (i < loops) {
		email.push(prompt("Enter email number " + (i + 1)));
		i++;
		// Sorts the emails
		var sortedEmail = email.sort();
	}
	// Displays the sorted emails
	document.write("<br> Emails: " + sortedEmail);
}

function bubbleSort(x) {
	// Sorts the input numbers, seperating them with commas
	x.sort(function (a, b) {
		return a - b
	});
	document.write("<br> The sorted numbers are: " + x)
}