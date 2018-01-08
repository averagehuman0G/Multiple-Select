const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
let lastChecked;
function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    //loop over checkboxes
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        console.log(this);
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}
