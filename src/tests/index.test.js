// const resul = require('./index');

// test('My test app', () => {
//     expect(resul).toHaveLength(2);
// })



// const { Button } = require('@mui/material');
// const sum = require('./index');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// const tasks = require('./index');

// test('Check array length', () => {
//     expect(tasks).toHaveLength(2);
// })

///////////////// HAnds ON Jest - Challenge 1
// Write your code here
// const tasks = require('./index');       
//Write a test in Jest that checks the length of the tasks array.

// test('Check array length', () => {
//   expect(tasks).toHaveLength(3);
// //   expect(tasks.length).toBe(3)
// })

/////////////////////////////////////

// const can1 = {
//     flavor: 'grapefruit',
//     ounces: 12,
//   };
//   const can2 = {
//     flavor: 'grapefruit',
//     ounces: 12,
//   };
  
//   describe('the La Croix cans on my desk', () => {
//     test('have all the same properties', () => {
//       expect(can1).toEqual(can2);
//     });
//     test('are not the exact same can', () => {
//       expect(can1).not.toBe(can2);
//     });
//   });


  /////////////////////////////////////////



//   // Write your code here
// const tasks = require('./index');
// //Write a test in Jest that checks the task array's length cannot be a negative value (not to be less than zero).

// TextTrackList('Test not negative', () => {
//   expect(tasks.length).not.toBeLessThan(0);
// })


// /////////////////////////////////////////


// test('zero', () => {
//     const z = 0;
//     expect(z).not.toBeNull();
//     expect(z).toBeDefined();
//     expect(z).not.toBeUndefined();
//     expect(z).not.toBeTruthy();
//     expect(z).toBeFalsy();
// })

// /////////////////////////////////////////////

// test('1 + 1', () => {
//     const value = 1 + 1;
//     expect(value).toBeGreaterThan(1);
// });

// /////////////////////////////////////////////
// /////////////////////////////////////////////

// test('Checking "toBe"', () => {
//     const value = 0.1 + 0.2;
//     expect(value).toBe(0.3);//rounding error
//     expect(value).toBeCloseTo(0.3); //works.
// });

////////////////////////////////////////////


// test('There is no "I" in Fresco Play', () => {
//     expect('Fresco Play').not.toMatch(/I/);
//   });

// // /////////////////////////////////////////////


// var employee=[];
// employee=['Johns', 'Liani'];
// test('Expects "Johns" in employee Array', () => {
//   expect(employee).toContain('Johns');
// });

// /////////////////////////////////////////////
// Exceptions

// var employee = [];
// function EmptyCheck() {
//     if(employee.length === 0){throw new Error('Empty Array');}
// }

// test('Empty check', () => {
//     expect(EmptyCheck).toThrow();
//     expect(EmptyCheck).toThrow(Error);
//     expect(EmptyCheck).toThrow('Empty Array');
//     expect(EmptyCheck).toThrow(/Empty/);
// })

///////////////////////////////////////////////////////
// Jest challenge 3


// var tasks = [];
// tasks=[{task_name:"Task 1",status:"open"},
//        {task_name:"Task 2",status:"closed"}];

// // const tasks = require('./index')
// function updateTask(index, update_task){
//   if(index > tasks.length){
//     throw new Error('Array Out of Bounds Exception.')
//   }
// }
// test('Array out of bounds', () => {
//   expect(updateTask(3,  {task_name:"Task 3",status:"open"})).toThrow('Array Out of Bounds Exception');
// })

