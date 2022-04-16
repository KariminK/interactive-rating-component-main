var btns = document.querySelectorAll('.btn');
var btsub = document.querySelector('#btnsub');
var span = document.querySelector('#select');
var thank = document.querySelector('.thanks');
btns.forEach(btn=>{
    btn.classList.remove('clicked')
    btn.addEventListener('click', ()=>{
        btns.forEach(bt=>{
            bt.classList.remove('clicked')
        })
        btn.classList.add('clicked')
    })
})

btsub.addEventListener('click', ()=>{
    let btclicked = document.querySelector('.clicked');
    if (btclicked.innerText != ""){
        thank.classList.remove('hidden');
        span.innerText = 'You selected '+btclicked.innerText+'  out of 5';
    }
})