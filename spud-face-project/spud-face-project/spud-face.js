window.addEventListener("DOMContentLoaded", (event) => {
const spudLicense = document.getElementById('drivers-license-form')
const spudLicenseField = document.querySelectorAll('.license_info');

//updates License on field input
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
    onCardItem.innerHTML = event.target.value;}
})

  // ** Phase 1B: Update license with event delegation and event.target ** 

// 
  // ** Phase 2: Add focus and blur events to form inputs **
 


  // ** Phase 3: Check that license numbers match **
 

  // ** Phase 4: Update submit button click count **

 
});