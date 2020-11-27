var student_prototype = {
    listOfCourses: new Array("Discrete Math", "Linear Algebra", "Calculus", "Probability Theory",
                             "Rocket Science", "Music Theory", "Random Bullshittery")
  }
  
  function createStudent(firstName, lastName, id){
    var student = Object.create(student_prototype);
    student.firstName = firstName;
    student.lastName = lastName;
    student.id = id;
    return student;
  }
  
  var student1 = createStudent("John", "Goodspeed", 1);
  var student2 = createStudent("Matthew", "Jameson", 2);
  
  console.log(student1.firstName, student1.lastName, student1.listOfCourses[6]);
  console.log(student2.firstName, student2.lastName, student2.listOfCourses[2]);
  