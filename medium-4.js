// Medium (4)
// Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object; A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods should affect the car’s mileage adding to it each time and console logging the old mileage and the new mileage.
// driveToWork = 33 miles
// driveAroundTheWorld = 24,000 miles
// runErrands = 30 miles 
// Example 1:
// car.driveToWork();
// Output: old mileage: 2000 | new mileagea: 2033
// Explanation: 2000 + 33 = 2033
// Example 2:
// car.driveAroundTheWorld();
// Output: old mileage: 2033 | new mileagea: 26033 
// Example 2:
// car.runErrands();
// Output: old mileage: 26033 | new mileagea: 26063

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    mileage: 2000,
    color: "silver",
    driveToWork: function() {
      let oldMileage = this.mileage;
      this.mileage += 33;
      console.log(`old mileage: ${oldMileage} | new mileage: ${this.mileage}`);
    },
    driveAroundTheWorld: function() {
      let oldMileage = this.mileage;
      this.mileage += 24000;
      console.log(`old mileage: ${oldMileage} | new mileage: ${this.mileage}`);
    },
    runErrands: function() {
      let oldMileage = this.mileage;
      this.mileage += 30;
      console.log(`old mileage: ${oldMileage} | new mileage: ${this.mileage}`);
    }
  };

car.driveToWork();          // Output: old mileage: 2000 | new mileage: 2033
car.driveAroundTheWorld();  // Output: old mileage: 2033 | new mileage: 26033
car.runErrands();           // Output: old mileage: 26033 | new mileage: 26063