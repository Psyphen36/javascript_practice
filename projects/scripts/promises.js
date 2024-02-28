async function requestingToServer() {
  console.log('make a request...')
  let promiseVar = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('sending data of a request...')
    }, 2000);
  })
  
  console.log(promiseVar)
  promiseVar.then((value) => {
    console.log('Consoling the value...')
    console.log(value)
    return value
  })  
  
  console.log('process the response...')
  
  console.log('get the response...')
  
  console.log('Done...')
} 

requestingToServer();


// async function getData() {
//   let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   let data = await x.json()
//   return data
// }

// async function main() {
//   console.log('loading...')

//   console.log('Do something else')

//   console.log('Load data')

//   let data = await getData()

//   console.log(data)

//   console.log('process data')

//   console.log('task 2')
// }

// main();