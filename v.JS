var val=[ ];
var flag =0;
function validate() {
 event.preventDefault();

var nameVar = document.form1.name.value;


var nationalID = document.form1.Nid.value;

var insuranceCompany = document.form1.InCom.value;

var address = document.form1.address.value;

var mobileNumber = document.form1.mobileNo.value;
var SecMobileNumber = document.form1.SecMobileNo.value;

var emailVar = document.form1.email.value;

var file = document.getElementById("photo");

if(nameVar.length == 0) {
val.push("Please enter the name!");
}

var letters =/^[a-zA-Z]+$/;
if(!letters.test(nameVar) && !nameVar.length == 0) {
val.push("Enter correct name!");
}



if(nationalID.length == 0) {
val.push("Please enter the National ID!");
}

var numbers =/^[0-9]{10}$/;
if(!numbers.test(nationalID) && !nationalID.length == 0) {
val.push("Enter correct National ID , should be 10 digits");
}

if(insuranceCompany.length ==0) {
val.push("Please enter the insurance-company!");
}

if(address.length ==0) {
val.push("Please enter the address!");
}

if(mobileNumber.length ==0) {
val.push("Please enter the mobile Number!");
}

var mobNum =/^[0-9]{10}$/;
if(!mobNum.test(mobileNumber)&& !mobileNumber.length ==0 ) {
val.push("Enter correct Mobile number, should be 10 digits ");
}


if(SecMobileNumber.length ==0 && !mobNum.test(SecMobileNumber)) {
val.push("Please enter the Secondary Mobile Number!");
}


if(emailVar.length ==0) {
val.push("Please enter Email!");
}



if(file.files.length == 0 ){
    val.push("Please select the patient photo!");
  }

if(val.length > 0) {

  var errorMessage = "";
  for(var i = 0 ; i<val.length ; i++) 
     errorMessage+= val[i]+"\n";
     
     }
    
    if(!errorMessage.length == 0){
               alert(errorMessage);
               flag=1;
  return false;
    }
         


}

function func() {

if( val.length < 0) {
  var x = document.getElementById("formID");

//display image

document.getElementById("displayName").innerHTML="Name:"+x.nameid.value;

document.getElementById("displayID").innerHTML="National ID:"+x.id.value;


document.getElementById("displayDOB").innerHTML="Date Of Birth:"+x.dob.value;
document.getElementById("displayGender").innerHTML="Gender:"+x.gender.value;
document.getElementById("displayMS").innerHTML="Marital status:"+x.Mstatus.value;
document.getElementById("displayIC").innerHTML="Insurance company:"+x.InCom.value;
document.getElementById("displayAddress").innerHTML="Address:"+x.address.value;
document.getElementById("displayMobileNum").innerHTML="Primary Mobile Number:"+x.mobileNo.value;
document.getElementById("displaySecondaryNum").innerHTML="Secondary Mobile Number:"+x.SecMobileNo.value;
document.getElementById("displayEmail").innerHTML="Email address:"+x.email.value;

document.getElementById("image-preview").hidden = false;
 var input = document.getElementById("photo");
 var preview = document.getElementById('image-preview');
  
      var reader = new FileReader();
      reader.onload = function() {
        preview.src = reader.result;
      }
  
      if (input.files && input.files[0]) {
        reader.readAsDataURL(input.files[0]);
      }
}


}




