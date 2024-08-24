// Array of students in the class, each represented as a CreateStudent object with a name and a list of grades
const roster = [
    new CreateStudent('anwar', [97, 98, 99]),
    new CreateStudent('sophie', [75, 22, 85]),
    new CreateStudent('ron', [4, 7, 90]),
];

// Teacher's name for the course
const teacher = 'harriet';

// Function to calculate the average of an array of grades
function calcAverage(grades) {
    return Math.floor(grades.reduce((acc, cur) => acc + cur, 0) / grades.length);
}

// Constructor function for creating a student object with name and grades properties
function CreateStudent(name, grades) {
    this.name = name;
    this.grades = grades;
}

// Prototype method to get the grades of a student
CreateStudent.prototype.getGrades = function () {
    return this.grades;
};

// Prototype method to check if a student has passed, based on an average grade above 50
CreateStudent.prototype.checkIsPassed = function () {
    return calcAverage(this.grades) > 50;
};

// Constructor function for creating a CourseRoster object with a roster of students and the teacher's name
function CourseRoster(roster, teacher) {
    this.roster = roster;
    this.teacher = teacher;
}

// Prototype method to get a list of student names in the roster
CourseRoster.prototype.getRoster = function () {
    return this.roster.map((student) => student.name);
};

// Prototype method to return a list of students who have passed the course
CourseRoster.prototype.returnGraduatingStudents = function () {
    const graduatedStudents = this.roster.filter(student => student.checkIsPassed());
    return graduatedStudents;
};

// Create a new CourseRoster object with the list of students and the teacher's name
const rosters = new CourseRoster(roster, teacher);

// Log the list of students who have passed the course
console.log(rosters.returnGraduatingStudents());
