use("CRUDdb")

db.createCollection("courses")

db.courses.insertOne({
    name: "kajal web dev",
    assignment: "11",
    projects:"40"
})

db.courses.insertMany(
    [
        {
            "name": "Amit Kumar",
            "assignment": "8",
            "projects": "25"
        },
        {
            "name": "Sophie Lee",
            "assignment": "15",
            "projects": "50"
        },
        {
            "name": "John Doe",
            "assignment": "3",
            "projects": "12"
        }
    ]
)

// let a = db.courses.find({projects: "25"})
// console.log(a.toArray())

// let b =console.log(b)
//  db.courses.findOne({projects: "25"})

db.courses.updateOne({projects: 50} , {$set:{projects: 25}})

db.courses.deleteOne({projects: 50})
