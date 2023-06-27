export default function location(req, res) {
    const location = [
        {
            id: 1,
            name: "Palu",
            path: "abc.jpg"
        },
        {
            id: 2,
            name: "Donggala",
            path: "abc.jpg"
        },
        {
            id: 3,
            name: "Sigi",
            path: "abc.jpg"
        },
        {
            id: 4,
            name: "Morowali",
            path: "abc.jpg"
        },
        {
            id: 5,
            name: "Luwuk",
            path: "abc.jpg"
        },
        {
            id: 6,
            name: "Baggai Kepulauan",
            path: "abc.jpg"
        }
    ]

    res.status(200).json(location)
}