// Button click handler
const ajaxRequest = () => {
    // this `res` difers from express `res`
    fetch('/ajax').then(res => res.text()).then(rnd => {
        document.querySelector('#div').textContent = rnd;
    });
}
