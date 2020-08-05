window.addEventListener("DOMContentLoaded", (event) => {
const spudLicense = document.getElementById('drivers-license-form')
const spudLicenseField = document.querySelectorAll('.license_info');
const inputItems = document.querySelectorAll("input");
const submitButton = document.getElementById("button");

//updates License on field input
// ** Phase 1B: Update license with event delegation and event.target ** 
const spudListener = spudLicense.addEventListener('input', (event) =>{
  if(event.target.id === "donor-status"){
    if(event.target.checked === true){
      const id = event.target.id;
      document.getElementById(`card-${id}`).innerHTML = "Donor";
    }
    else{
      const id = event.target.id;
      document.getElementById(`card-${id}`).innerHTML = "Not Donor";
    }
    
  } else{
    const id = event.target.id;
    const onCardItem = document.getElementById(`card-${id}`);
    onCardItem.innerHTML = event.target.value;
  }
});

  // ** Phase 2: Add focus and blur events to form inputs **

  inputItems.forEach(function(el){
    
    el.addEventListener("focus", (event) =>{
      event.target.classList.add("focused")
    }
    )
   
    el.addEventListener("blur", (event) =>{
     event.target.classList.remove("focused")
   }
   )
    
  })



function checkMatching(event){
  const licenseNumber = document.getElementById('license-num').value;
  const licenseNumberConfirm = document.getElementById('license-num-confirm').value

    if (licenseNumber !== licenseNumberConfirm) {
      document.getElementById('license-num').classList.add("doesNotMatch");
      document.getElementById('license-num-confirm').classList.add("doesNotMatch");
      if(event.type === "submit"){
        event.preventDefault();
      }
    } else {
      document.getElementById('license-num').classList.remove("doesNotMatch");
      document.getElementById('license-num-confirm').classList.remove("doesNotMatch");
    
    }
}

  

  // ** Phase 3: Check that license numbers match **
  spudLicense.addEventListener('submit', checkMatching);
  document.getElementById('license-num').addEventListener("blur", checkMatching)
  document.getElementById('license-num-confirm').addEventListener("blur", checkMatching)
  // ** Phase 4: Update submit button click count **

 function makeClickFunction(){
   let clickCount = 0;
   function incrementClickk(event){
    event.preventDefault();
    clickCount++
    submitButton.innerHTML = `Click Count: ${clickCount}`;
   }
   return incrementClickk;
 }

 let incrementClick = makeClickFunction();


  submitButton.addEventListener('click', incrementClick)

});