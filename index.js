const inputs = document.querySelectorAll('.rate');
const button = document.querySelector('.submit');
const rated = document.querySelector('.rated');
const ratePage = document.querySelector('.container.one');
const thankYouPage = document.querySelector('.container.two');

function handleClick(e){
    inputs.forEach(input => {
        if (input === e.target){
            input.classList.add('clicked')
        } else {
            input.classList.remove('clicked')
        }
    });
}

inputs.forEach(input => {
    input.addEventListener('click', handleClick);
});

button.addEventListener('click', e => {
   const input = document.querySelector('.clicked.rate');
    if(input){
        ratePage.classList.add('hidden');
        thankYouPage.classList.remove('hidden');
        rated.innerHTML = input.innerHTML;
    } else {
        ratePage.classList.remove('hidden');
        thankYouPage.classList.add('hidden');
        alert('Please pick a value :)')
    }
});