function checkLegal(){
	console.log(document.forms["components"]["legalCheck"].value);
    if (document.forms["components"]["legalCheck"].value == "") {
		console.log("Return false");
		return false;
	}
    else {
		console.log("Return true");
		return true;
	}
}