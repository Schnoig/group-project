const formSelect = document.getElementById('form-selector')
  ,   myForms    = document.getElementById('my-forms')
  ;
formSelect.oninput=()=>{ myForms.className = `f-${formSelect.value}` }