const toggleSwitch = document.querySelector('input[type="checkbox"]');

//Switch theme Dynamically
function switchTheme(event) {
    console.log(event.taget.checked);
}
// Event Listener
toggleSwitch.addEventListener('change', switchTheme);