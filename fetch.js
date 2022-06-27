//fetch() has replaced XMLHTTPRequest
//fetch() global method for making http request
// 2 ways to call = then and Async/Await

//fetch() is easy to use compare to XMLHTTR and return  a promise.
//return promise can only handle network error
//does not support all the old BORWSER.
console.clear();

const makeRequest = async (url,config)=>{
  const resbal= await fetch(url,config);
  if(!resbal.ok){
    const messageError= `Error: ${resbal.status}`;
    throw new Error(messageError);
  }
  const databal = await resbal.json();
  return databal
}

// const deleteData= ()=>{
//   makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'DELETE'
//   })
//   .then((res2ndbal)=>console.log(res2ndbal))
//   .catch((err)=>{console.log(err)})
// }
// deleteData();

// const patchData= ()=>{
//   makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'PATCH',
//     body: JSON.stringify({
//     title: 'fooMangoMango',

//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   }})
//   .then((res2ndbal)=>console.log(res2ndbal))
//   .catch((err)=>{console.log(err)})
// }
// patchData();

// const updateData= ()=>{
//   makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'PUT',
//     body: JSON.stringify({
//     title: 'fooMangoMango',

//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   }})
//   .then((res2ndbal)=>console.log(res2ndbal))
//   .catch((err)=>{console.log(err)})
// }
// updateData();


// const sendData= ()=>{
//   makeRequest('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   }})
//   .then((res2ndbal)=>console.log(res2ndbal))
//   .catch((err)=>{console.log(err)})
// }
// sendData();


// const getData= ()=>{
//   makeRequest('https://jsonplaceholder.typicode.com/posts')
//   .then((res2ndbal)=>console.log(res2ndbal))
//   .catch((err)=>{console.log(err)})
// }