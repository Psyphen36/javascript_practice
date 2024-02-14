let order = 0;
const shippingCost = 10;

const btnElement = document.querySelector('.js-subscribe-btn');
const btnCss = {
    'color': gray,
    'background-color': white}

function subBtn() {
    if (btnElement.innerHTML === 'Subscribe') {
        btnElement.innerHTML = 'Subscribed';
        btnElement.classList.add('is-subscribed') ;
    } else {
        btnElement.innerHTML = 'Subscribe';
        btnElement.classList.remove('is-subscribed');

    }
}

function handleCostEvent(event) {
    if ((event.key)) {
        CalculateTotal();
    } 
}


function CalculateTotal() {
    let inpVal = document.querySelector('.js-input-val').value;
    inpVal = Math.round(inpVal);
        
    if (inpVal <= 40) {
        inpVal = (parseInt(inpVal) + 10)    ;
    }
    document.querySelector('.js-display-output').innerHTML = '$' + inpVal;

}