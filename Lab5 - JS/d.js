function Student(firstName, lastName, id, arr){
    this.firstName = firstName,
    this.lastName = lastName,
    this.id = id,
    this.arr = arr,

    Object.defineProperty(this, "fullname", {
        set: function(value) {
            this.firstName = value.split(" ")[0];
            this.lastName = value.split(" ")[1];
        },

        get: function() {
            return this.firstName + " " + this.lastName;
        }
    }),

    Object.defineProperty(this, "avg_grade", {
        get: function() {
            const sum = (accumulator, currentValue) => accumulator + currentValue;
            return this.arr.reduce(sum)/this.arr.length;
        }
    })
}


  
var student1 = new Student("John", "Harper", 12461, new Array(3,4,2,1));
console.log("Full name: " + student1.fullname + ", Average grade: " +  student1.avg_grade);

var student2 = new Student("William", "Pinkerton", 13522, new Array(5,5,5,4));
console.log("Full name: " + student2.fullname + ", Average grade: " + student2.avg_grade);

student2.fullName = "Chris Wolstenholme";
console.log("New name: " + student2.fullName);