export default function location(req, res) {
    const location = [
        {
            id: 1,
            name: "PALU",
            path: "abc.jpg"
        },
        {
            id: 2,
            name: "DONGGALA",
            path: "abc.jpg"
        },
        {
            id: 3,
            name: "SIGI",
            path: "abc.jpg"
        },
        {
            id: 4,
            name: "MOROWALI",
            path: "abc.jpg"
        },
        {
            id: 5,
            name: "LUWUK",
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