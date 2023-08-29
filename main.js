// -------This is for navbar
// window.addEventListener('scroll',()=>{
//     document.querySelector('nav').classList.toggle
//     ('window-scroll',window.scrollY>0)
// })
// window.addEventListener('scroll',()=>{
//     document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>1)
// })
const navbar=document.querySelector('nav');
window.addEventListener('scroll',scrFun);
function scrFun(){
navbar.classList.toggle('window-scroll',window.scrollY>0)
}


// ----------this is for faqs-----//
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

//-------change icon plus
    const icon=faq.querySelector('.faq-icon i');
        if(icon.className==='uil uil-plus')
        {
            icon.className='uil uil-minus';
        }else{
            icon.className='uil uil-plus';
        }
    })
})
