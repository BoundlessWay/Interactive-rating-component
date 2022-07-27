let ratingBox = document.getElementById('Interactive-rating')
let thankYouBox = document.querySelector('.thank-you-state')
let btn = document.querySelector('.Ir__Submit-btn')
let ratingOptions = document.querySelectorAll('.Evaluation-option-list__option')
let ratingResult = document.querySelector('.Result__rating')


for (let ratingOption of ratingOptions) {
    ratingOption.addEventListener('click', () => {

        for (let i = 0; i < ratingOptions.length; i++) {
            if (ratingOptions[i].classList.contains('option--selected')) {
                ratingOptions[i].classList.remove('option--selected')
            }
        }

        ratingOption.classList.add('option--selected')

        btn.addEventListener('click', () => {
            ratingBox.style.display = 'none';
            thankYouBox.style.display = 'flex';
            ratingResult.innerHTML = ratingOption.querySelector('label').innerText
        })
    })
}