// Button click handler
const ajaxRequest = () => {
    // this `res` difers from express `res`
    fetch('/ajax').then(res => res.text()).then(rnd => {
        document.querySelector('#div').textContent = rnd;
    });
}

const formSubmitHendler = (e) =>{
    
    console.log(e.target.mail.value);
    const mail = e.target.mail.value;
    //it for post ajax
    fetch('/ajax', {
        method: 'post',
        body: mail
    }).then(()=>{
        e.target.mail.value='';// 
    })
}

