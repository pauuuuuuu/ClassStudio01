//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores){
    this.name = name;
    this.mass = mass
    this.scores = [5, 6, 3];
  }
}



//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
let grade() {
  alert('Adding +5 to your score');
  score = score + 5;
}



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.



//assignment 3
// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

// describe("Command class", function() {

//   it("throws error if command type is NOT passed into constructor as the first parameter", function() {
//     expect( function() { new Command();}).toThrow(new Error('Command type required.'));
//   });

//   it("Command type required", function() {
//     let command = new Command('STATUS_CHECK');
//     expect(command.commandType).toEqual('STATUS_CHECK');
//   });

//   it("constructor sets a value passed in as the 2nd argument", function() {
//     let command = new Command('MOVE', 20);
//     expect(command.value).toEqual(20);
//   });

// });

// describe("Test 2: ", function() {
//   //first try of the test.
//   it("Constructor sets command type -> ", function() {
//     let command = new Command('UNKNOWN');
//     //expect(command.commandType).not.toEqual('');
//     //if (command.commandType) {
//       //console.log("Command type requiredd");
//       //return 0;
//     //};
//   });
// });

// describe("Test 3: ", function(){
//   it("Constructor sets a value passed in as the 2nd argument -> ", function(){
//     let command = new Command('UNKNOWN', 999);
// //to try the value property we us next 2 lines we declare numbers between 0<>1001    
//     expect(command.value).toBeGreaterThan(0);
//     expect(command.value).toBeLessThan(1001);
//   });
// })

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });

  it("Command type required", function() {
    let command = new Command('STATUS_CHECK');
    expect(command.commandType).toEqual('STATUS_CHECK');
  });

  it("constructor sets a value passed in as the 2nd argument", function() {
    let command = new Command('MOVE', 20);
    expect(command.value).toEqual(20);
  });

});

describe("Test 2: ", function() {
  //first try of the test.
  it("Constructor sets command type -> ", function() {
    let command = new Command('UNKNOWN');
    //expect(command.commandType).not.toEqual('');
    //if (command.commandType) {
      //console.log("Command type requiredd");
      //return 0;
    //};
  });
});

describe("Test 3: ", function(){
  it("Constructor sets a value passed in as the 2nd argument -> ", function(){
    let command = new Command('UNKNOWN', 999);
//to try the value property we us next 2 lines we declare numbers between 0<>1001    
    expect(command.value).toBeGreaterThan(0);
    expect(command.value).toBeLessThan(1001);
  });
})


