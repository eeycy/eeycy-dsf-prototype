function checkPhone(){
    if ((document.forms["components"]["phoneRadio"].value == "custom") 
        && document.forms["components"]["phoneNum"].value == "") return false;
   else return true;
}