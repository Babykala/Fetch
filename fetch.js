
const getExtAPI1=new Promise((resolve,reject)=>{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res =>res.json())
        .then(data =>resolve(data))
})

const getExtAPI2=new Promise((resolve,reject)=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res =>res.json())
        .then(data =>resolve(data))
})

Promise.all([getExtAPI1,getExtAPI2])
.then(data=>console.log(data))
.catch(error=>console.error("Error"))