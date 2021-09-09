const row=document.querySelector('.row');
const facilities=document.querySelector('.facilities');

const tl= new TimelineMax();
tl.fromTo(
    row,
    1,
    {height: "0%"},
    {height: "80%"}
    ).fromTo(
        row,
        1.2,
        { width: "0%"},
        { width: "100%"}
    );
let navbar = document.querySelector('.navbar');
menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});