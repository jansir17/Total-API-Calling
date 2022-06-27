//axio is a library
//it helps to make request from browser. (plain js/vue/react/), node.js
//its very easy to use
//it returns promise
//throws erro brilliantly 
//no need to set header cause axios is intelligent

//axios(config)
//axios [url,config]

//axios.get(url, [,config])
//axios.post(url, [,config])
//axios.put(url, [,config])
//axios.patch(url, [,config])
//axios.delete(url, [,config]

//axios returns a response object = data, status, statustext, header, config
console.clear();

const makeRequest = async(config)=>{
  return await axios(config)
}

const deleteData= ()=>{
  makeRequest({
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    method: 'DELETE',
  })
  .then((resbal)=>console.log(resbal.data))
  .catch((err)=>console.log(err))
}
deleteData();

// const updateData= ()=>{
//   makeRequest({
//     url: 'https://jsonplaceholder.typicode.com/posts/1',
//     method: 'PUT',
//     data: JSON.stringify({
//     id: 1,
//     title: 'fooMango',
//     body: 'barMango',
//     userId: 1, 
//     }),
//   })
//   .then((resbal)=>console.log(resbal.data))
//   .catch((err)=>console.log(err))
// }
// updateData();

// const createData= ()=>{
//   makeRequest({
//     url: 'https://jsonplaceholder.typicode.com/posts',
//     method: 'POST',
//     data: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1, 
//     }),
//   })
//   .then((resbal)=>console.log(resbal))
//   .catch((err)=>console.log(err))
// }
// createData();

// const getData= ()=>{
//   makeRequest("https://jsonplaceholder.typicode.com/posts/")
//   .then((resbal)=>console.log(resbal))
//   .catch((err)=>console.log(err))
// }
// getData();