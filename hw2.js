/*
    - Function that add a new course score and return the new user object (dynamic argument)

    - Function that add a new role and check if his age is under 18 add status: "very-young"
      to that object and return the object

    - Convert this object to array and after that add (fatherName: "ali") and then convert
      it to object
*/
// ----------------------------------------------------------------------------------------------------

const user = {
    id: 6,
    name: "Hossein",
    lastName: "Zenderoh",
    roles: ["student", "admin"],
    age: 19,
    scores: {english: 10, math: 19.5, physics: 14},
};

{
    // Practice One

    let newUser = addNewCourseScore(user, "chemistry", 0);
    console.log(newUser);

    function addNewCourseScore(user, course, score) {
        if (!user.scores[course]) {
            user.scores[course] = score;
        }
        return user;
    }
}
{
    // Practice Two

    let newUser = addRole(user, "manager");
    console.log(newUser);

    function addRole(user, role) {
        user.roles.push(role);
        user.age < 18 && (user.status = "very-young");  // in this case user is 19 years old.
        return user;
    }
}
{
    // Practice Three

    let newWithFatherName = addFatherName(user, 'morteza');
    console.log(newWithFatherName);

    function addFatherName(user, fatherName) {
        let arrayOfUser = Object.entries(user);
        arrayOfUser.push(['fatherName', fatherName]);
        return Object.fromEntries(arrayOfUser);
    }
}