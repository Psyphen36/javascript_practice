let textArr = ['Initialized hacking now reading the data', 'Reading your Files', 'Passwords files Detected', 'Sending all passwords and personal files server', 'Cleaning up'];

const randomDelay = (textArr) => {
  return new Promise((resolve, reject) => {
    const timeout = 1 + 6 * Math.random()
    setTimeout(() => {
      resolve(textArr)
    }, timeout * 1000)
  })
}

async function main() {
  let t = setInterval(() => {
      document.querySelectorAll('.js-hacking-text-container').forEach((element) => {
        if (element.lastElementChild.innerHTML.endsWith('...')) {
          element.lastElementChild.innerHTML = element.lastElementChild.innerHTML.slice(0, element.lastElementChild.innerHTML.length-3)
          
        } else {
          element.lastElementChild.innerHTML = element.lastElementChild.innerHTML 
          + '.'
          }
      })
  }, 700)
    
  
  for (const arr of textArr) {
    await addItem(arr)
  }  
  
  await randomDelay()
  clearInterval(t)
  
  
}


async function addItem(item) {
  await randomDelay(item)

  document.querySelector('.js-hacking-text-container').innerHTML += `<p>${item}</p>`
}

main()


// const hackingPromise1 = new Promise((resolve, reject) => {
  //     setTimeout(() => {
    //       resolve(`<p></p>`)
    //       console.log('Timeout Works!!')
    //     }, 1000);
    //     });
    
    //   const hackingPromise2 = new Promise((resolve) => {
      //     setTimeout(() => {
        //       resolve(`<p></p>`)
        //     }, 2000)
        //   });
        
        //   const hackingPromise3 = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`<p></p>`)
//     }, 3000)
//   });

//   const hackingPromise4 = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`<p></p>`)
//     }, 3500)
//   });

//   const hackingPromise5 = new Promise((resolve) => {
//         setTimeout(() => {
//           resolve(`<p></p>`)
//         }, 5000)
//     });

// async function PromiseWhenever(promises, action, rejectionAction) {
//   promises.forEach(promise => {
//     promise.then(action).catch(rejectionAction)
//   });
// }

// const PromiseArr = [hackingPromise1, hackingPromise2, hackingPromise3, hackingPromise4, hackingPromise5]

// // let HTMLElement = document.querySelector('.js-hacking-text-container')

// let html = PromiseWhenever(PromiseArr, value => document.querySelector('.js-hacking-text-container').innerHTML += value, error => console.error('Failed'));


