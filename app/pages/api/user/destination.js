export default function destination(req, res) {
    let data = {}
    const id = req.query.id
    if (id == 2) {
        data = {
            title: "Tanjung Karang",
            date: "20 feb 2023",
            img: "abc.jpg",
            text: [
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis unde vel nisi quae totam saepe voluptate nihil tempora. Aliquam voluptatum nulla doloremque quos ullam repudiandae ea nemo laudantium praesentium alias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit in, eius exercitationem aut cumque ducimus laudantium esse quidem. Enim delectus quibusdam minus tempora voluptates nulla ea molestiae autem architecto quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt atque laboriosam, esse illo voluptatum sint aliquid quod nostrum consectetur, quia provident odio iusto animi. Esse saepe perferendis libero quis voluptas.",

                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, libero debitis consectetur doloribus, ipsum fuga cupiditate sed fugit dolore magni similique ex cum eaque et in modi natus quaerat architecto.",

                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo error necessitatibus, molestiae id, nemo fuga aliquam, ipsum eum quaerat dolore deleniti? Pariatur perferendis illum consectetur! Nisi beatae libero aliquid dolores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est natus enim nihil, quaerat at, porro unde expedita cupiditate ex similique magnam voluptatum consequuntur quia voluptatibus, tenetur corporis quas sunt recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quam iste molestias odio. Magni sapiente perferendis suscipit eaque voluptatem rerum, commodi minima quibusdam saepe dolor odio voluptatibus error, voluptas enim?",
            ]
            ,
            rate: "5.0",
            facilities: [
                {
                    hotel: {
                        title: "Santika",
                        img: "hotel.png"
                    }
                },
                {
                    spa: {
                        title: "Spa",
                        img: "hotel.png"
                    }
                },
                {
                    hotel: {
                        title: "Santika",
                        img: "hotel.png"
                    }
                },
                {
                    spa: {
                        title: "Spa",
                        img: "hotel.png"
                    }
                }
            ]
        }
        res.status(200).json(data)
        return
    }
    res.status(404).json(
        {
            code: 404,
            status: "not found",
        }
    )
}