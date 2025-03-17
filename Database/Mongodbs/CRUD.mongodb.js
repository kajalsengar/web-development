use("CRUDdb")

db.createCollection("courses")

db.courses.insertOne({
    name: "kajal web dev",
    assignment: "11",
    projects:"40"
})

db.courses.insertMany({
    {
        name: "gunnu web dev",
        assignment: "12",
        projects:"39"
    },
    {
        name: "prerna web dev",
        assignment: "10",
        projects:"42"
    },
    {
        name: "bhumi web dev",
        assignment: "15",
        projects:"34"
    }
})