function Student(firstName, lastName, id, arr){
    this.firstName = firstName,
    this.lastName = lastName,
    this.id = id,
    this.arr = arr,
  
    this.fullName = function(){
      return this.firstName + " " + lastName;
    },
  
    this.avg_grade = function(){
        const sum = (accumulator, currentValue) => accumulator + currentValue;
        return this.arr.reduce(sum)/this.arr.length;
    }
}
  
var student1 = new Student("John", "Harper", 12461, new Array(3,4,2,1));
console.log("Full name: " + student1.fullName() + ", Average grade: " +  student1.avg_grade());

var student2 = new Student("William", "Pinkerton", 13522, new Array(5,5,5,4));
console.log("Full name: " + student2.fullName() + ", Average grade: " + student2.avg_grade());