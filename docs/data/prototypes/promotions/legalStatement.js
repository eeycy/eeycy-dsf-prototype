function checkLegal(){
	console.log("Checking Legal...");
    if (document.forms["components"]["legalCheck"].value == "") {
		console.log("Return false");
		return false;
	}
    else {
		console.log("Return true");
		return true;
	}
}