let flag = false;
function timeTaken() {
    setTimeout(function() {
        if (!flag) {
            document.querySelector('.js-btn').textContent = 'Finished!'
            flag = true;
            console.log('finished...');
        } else {
            document.querySelector('.js-btn').textContent = 'Start'
            flag = false;
            console.log('Start...');
        }
    }, 1000)
    document.querySelector('.js-btn').textContent = 'Loading...'
}

// function addCart() {
// let addCartElement = document.querySelector('.js-text-span');
//     setTimeout(function() {
//     addCartElement.innerHTML = '';
//     console.log('Removes add text Successfully..')
//     }, 2000)

//     addCartElement.innerHTML = 'Added Successfully...';
//     console.log('add successfully!')
// }

let addCartFlag = false;
function addCart() {
    let addCartElement = document.querySelector('.js-text-span');
    if (!addCartFlag) {
        addCartElement.innerHTML = 'Added Successfully...';
        console.log('add successfully!')
        addCartFlag = true;
    } else {
        setTimeout(function(){
            addCartElement.innerHTML = '';
            console.log('Removes add text Successfully..')
        }, 1500);
        addCartFlag = false;
    }
}

// function messagePopup() {
//     setInterval(function() {
//         document.title = '(2) New messages';
//     }, 5000)
//     setInterval(function() {
//         document.title = 'Practicing functions...';
//     }, 10000)
// }
// messagePopup();