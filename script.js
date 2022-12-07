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
        top: 1150,
        behavior: "smooth"
      });
    }
  });
});