document.addEventListener("mousemove",(e) => {
    document.querySelectorAll(".object").forEach((move) => {
        let movingValue = move.getAttribute("data-value");
        let x = e.clientX * movingValue / 140;
        let y = e.clientY * movingValue / 140;

        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

const nav = document.querySelector('nav');
window.addEventListener('scroll',() => {
  if (window.pageYOffset > 500) {
    nav.classList.add('primary', 'shadow');
    nav.classList.remove('bg-transparent');
  } else {
    nav.classList.remove('primary', 'shadow');
    nav.classList.add('bg-transparent');
  }
});

const links = document.querySelectorAll('.nav-link');
links.forEach((link) => {
  link.addEventListener('click', () => {
    let el = link.getAttribute('data-link');
    if ( el == 'home') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else if ( el == 'about') {
      window.scrollTo({
        top: 560,
        behavior: "smooth"
      });
    } else if ( el == 'project') {
      window.scrollTo({
        top: 1185,
        behavior: "smooth"
      });
    } else if ( el == 'contact') {
      window.scrollTo({
        top: 1810,
        behavior: "smooth"
      });
    }
  });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbzXGUjl1mVXWhnpt-kjKFKlLUjWFqSPTDCGcTcrDfY6FP6LABMRLKbTc10c0QLl9rtR/exec'
const form = document.forms['x-rpl-c-contact-message']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const successAlert = document.querySelector('.alert-success');
const errorAlert = document.querySelector('.alert-danger');

form.addEventListener('submit', e => {
  e.preventDefault()
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      successAlert.classList.remove('d-none')
      successAlert.classList.add('d-inline-block')
      setTimeout(() => {
        successAlert.classList.remove('d-inline-block')
        successAlert.classList.add('d-none')
      }, 5000);
      form.reset();
      console.log('success', response)
    })
    .catch(error => {
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      errorAlert.classList.remove('d-none')
      errorAlert.classList.add('d-inline-block')
      setTimeout(() => {
        errorAlert.classList.remove('d-inline-block')
        errorAlert.classList.add('d-none')
      }, 5000);
      form.reset();
      console.log('error', error.message)
  })
})