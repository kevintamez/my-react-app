// function myFun(){
//     return "myfun called";
// }

// test('First Mock Function', () => {
//     mockedFun = jest.genMockFn();
//     mockedFun.mockImplementation(function () {
//         return "mockedFun called";
//     })
//     console.log(mockedFun());
// })


// test('.Mock property example', () => {
//     const mockFn = jest.fn();
//     const a  = new mockFn();
//     console.log(mockFn.mock.instances.length);
// })

// test('.mock property example',()=>{

//     const mockFn = jest.fn();
   
//     const a = new mockFn();
   
//     const b = new mockFn();
   
//     console.log(mockFn.mock.instances[0] === a);//true
   
//     mockFn.
//     console.log(mockFn.mock.instances[1] === a);//false
   
//    });
/////////////////////////////////////////////////////
// Asynchronus Test


//    function fetchData(callback) {
//     setTimeout(function () {
//       callback({status: 'completed'}); 
//     }, 2000);
//   }

//   test('fetch data returns status completed', done => {
//     function callback(data) {
//       expect(data.status).toBe('completed');
//       done();
//    }
//     fetchData(callback);
//   });


  ////////////////////////
  function first() {
    var promise = new Promise(function(resolve, reject){
        setTimeout(function() {
          console.log('first');
          resolve('first');}, 2000);
    });
    return promise;
 }

 function second() {
    var promise = new Promise(function(resolve, reject){
        setTimeout(function() {
          console.log('second');
          resolve('second');}, 2000);
    });
    return promise;
 };

 test('Promise to be resolved', () => {
    expect(first)
     .then(second)
     .resolves.toBe('second');
  });