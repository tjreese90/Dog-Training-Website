const navSlides = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    const navLink = document.querySelectorAll('.nav-link li');


    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');

    navLink.forEach((link, index) => {

            link.style.animation = '';
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
            console.log(index / 7)
    
     });

     //Burger Animation

     burger.classList.toggle('toggle');

    });

  
}
navSlides();