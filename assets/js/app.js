function updateBeds() {
  const icu = icuBeds.value;
  const general = generalBeds.value;
  const oxygen = oxygenBeds.value;

  icuPreview.innerText = icu;
  generalPreview.innerText = general;
  oxygenPreview.innerText = oxygen;

  alert("Bed data updated (frontend test)");
}

function updateDoctor() {
  alert("Doctor updated (frontend test)");
}

function updateMedicine() {
  alert("Medicine updated (frontend test)");
}

function addHospital() {
  alert("Hospital added (frontend test)");
}

function createStaff() {
  alert("Staff created (frontend test)");
}
