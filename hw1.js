/*
   - Function to sort this array from younger to older

   - Function for detect the role of user and return a list of user that have specific role (dynamic argument)

   - Function for calculate average of each person and sort from top to bottom

   - Function that return status of each student "passed" or "failed"
     for example "Hossein Zenderoh: passed"
*/
// ----------------------------------------------------------------------------------------------------

const users = [
    {
        id: 1,
        name: "Ali",
        lastName: "Ameri",
        roles: ["student"],
        age: 18,
        scores: {english: 10, math: 17, physics: 5},
    },
    {
        id: 2,
        name: "Ahmad",
        lastName: "Hosseini",
        roles: ["student", "admin"],
        age: 16,
        scores: {english: 18, math: 12, physics: 20},
    },
    {
        id: 3,
        name: "Morteza",
        lastName: "Shirbeygi",
        roles: ["student", "admin"],
        age: 17,
        scores: {english: 13, math: 20, physics: 15},
    },
    {
        id: 4,
        name: "Armin",
        lastName: "Torkashvand",
        roles: ["student", "admin"],
        age: 15,
        scores: {english: 12, math: 17, physics: 20},
    },
    {
        id: 5,
        name: "Mehdi",
        lastName: "Alinejad",
        roles: ["student", "admin"],
        age: 20,
        scores: {english: 20, math: 17, physics: 13.5},
    },
    {
        id: 6,
        name: "Hossein",
        lastName: "Zenderoh",
        roles: ["student", "admin"],
        age: 19,
        scores: {english: 10, math: 19.5, physics: 14},
    },
];
{
    // Practice One
}
{
    // Practice Two
}
{
    // Practice Three
}
{
    // Practice Four

    let statusOfUsers = status(users);
    console.log(statusOfUsers);

    function status(users) {
        let statuses = {};
        users.map((user) => {
            let sumOfScores = Object.values(user.scores).reduce((a, b) => a + b, 0);
            let scoresCount = Object.keys(user.scores).length;
            user.avg = sumOfScores / scoresCount;
        });

        users.forEach(user => statuses[user.name] = (user.avg > 15) ? "passed" : "failed");

        return statuses;
    }
}