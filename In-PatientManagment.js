

  var todayDate= new Date();
  var todayDay = todayDate.getDate();
  var todayMonth = todayDate.getMonth();
  var todayYear = todayDate.getFullYear();
  var EmptyBedId ="";
  var N = "";
  var AD ="";
  var DD="";
/*var PName = document.getElementById("patientName");*/

 

function clickOccupiedBed1()
{
document.getElementById("P1Info").style.visibility = "visible";
}

function onMouseOutBed1()
{
document.getElementById("P1Info").style.visibility = "hidden";
}

function clickOccupiedBed2()
{
document.getElementById("P2Info").style.visibility = "visible";
}

function onMouseOutBed2()
{
document.getElementById("P2Info").style.visibility = "hidden";
}

function clickOccupiedBed3()
{
document.getElementById("P3Info").style.visibility = "visible";
}

function onMouseOutBed3()
{
document.getElementById("P3Info").style.visibility = "hidden";
}

function clickOccupiedBed4()
{
document.getElementById("P4Info").style.visibility = "visible";
}

function onMouseOutBed4()
{
document.getElementById("P4Info").style.visibility = "hidden";
}
function clickOccupiedBed5()
{
document.getElementById("P5Info").style.visibility = "visible";
}

function onMouseOutBed5()
{
document.getElementById("P5Info").style.visibility = "hidden";
}

function clickOccupiedBed6()
{
document.getElementById("P6Info").style.visibility = "visible";
}

function onMouseOverBed6()
{
document.getElementById("P6Info").style.visibility = "hidden";
}

function clickOccupiedBed7()
{
document.getElementById("P7Info").style.visibility = "visible";
}

function onMouseOverBed7()
{
document.getElementById("P7Info").style.visibility = "hidden";
}



function clickEmptyBed(I,n,A,D)
{
document.getElementById("PInfoEmpty").style.visibility = "visible";
EmptyBedId = I;
N = n;
AD = A;
DD = D;
}


/*function formValidate(e)
{
var nameVlid = false;
var dateValid = false;

if( PName.value !== "" && PName.value.length <= 10){
console.log("valid");
nameVlid = true;}



if(nameValid === false || dateValid === false){
e.preventDefault();
};
}*/
function validateForm() 
{
  var PName = document.forms["myForm"]["patientN"].value;
  
  
  if (PName == "") 
  {
    alert("Name must be filled out!");
    return false;
  }
   else if(PName.length >= 10)
  {
   alert("Name must be less than 10 characters!");
   return false;
  }
  
  var DDate = document.forms["myForm"]["Discharge-Date"].value;
  var DischDate = new Date(DDate);
  var month = DischDate.getMonth();
  var day = DischDate.getDate();
  var year = DischDate.getFullYear();
  
  
  if( DDate == "")
   {
   alert("invalid Discharge Date!");
   return false;
   }
   else if(year < todayYear)
   {
   alert("invalid Discharge Date!");
   return false;
   }
   else if (year == todayYear && month < todayMonth)
  {
   alert("invalid Discharge Date!");
   return false;
  }
  else if (year == todayYear && month == todayMonth && day < todayDay)
  {
  alert("invalid Discharge Date!");
   return false;
  }
    
    var fullImg = document.getElementById("occupied").getAttribute("src");
    document.getElementById(EmptyBedId).src = fullImg;
    document.getElementById(N).innerHTML= PName;
    
    var x = new Date(); 
    document.getElementById(AD).innerHTML= x.getMonth()+ "-" + x.getDate()+"-"+ x.getFullYear() ;   
    document.getElementById(DD).innerHTML= DDate;
//return true;

}




