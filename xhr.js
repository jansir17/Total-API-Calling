console.clear();

//event - onload() onerror()
//property- reponse, responsetext, responsetype, responseURL, statum statusText
//fucntion - open(), send(), setRequestHeader()


const makeRequest =(method, url,data )=>{
  return new Promise((resolve,reject)=>{
  const xhr = new XMLHttpRequest();
  xhr.open(method,url)
  xhr.setRequestHeader('Content-type','application/json');
  
  xhr.onload=()=>{
    let data= xhr.response;
    console.log(JSON.parse(data));
  }
  xhr.onerror=()=>{
    console.log('error is here buddy !')
  }
  xhr.send(JSON.stringify(data));
  })
}


const getData =()=> {
  makeRequest('GET','https://jsonplaceholder.typicode.com/posts')
  .then((resbal)=>{
    console.log(resbal);
  })
}
getData();
// const sendData =()=> {
//   makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   })
// }
// const updateData =()=> {
//   makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
//     id: 1,
//     title: 'fooMango',
//     body: 'barMango',
//     userId: 1,
//   })
// }
// const updateSingleData =()=> {
//   makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
//     title: 'Changing the Title by PUT method',
//   })
// }
// const deleteData =()=> {
//   makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1')
// }