const ajaxRequest = () => {
    fetch('/ajax').then(res => res.text().then(rnd => {
       // alert(rnd); //recalled rnd
        document.querySelector('#div').textContent=rnd;
    } )); // diferent res then express 
}

