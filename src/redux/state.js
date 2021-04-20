let state = {
    profile: {
        user: {
            name: 'Quan',
            lastName: 'Ha',
            img: 'static/media/profile.jpg'
        },
        posts: [
            {
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU',
                alt: 'avatarka',
                message: 'LOVE IT!',
                id: Math.floor(Math.random() * 100),
                likes: 12
            },
            {
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxtcl-1iO_yF8nszUob_EssatZo8c_aZbuwiH_IxKpHXL3iUI03IRkfkUfX0GPwpzsHg&usqp=CAU',
                alt: 'second avatarka',
                message: 'YO!',
                id: Math.floor(Math.random() * 100),
                likes: 121
            }
        ]
    },
    messages: [
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU',
            alt: 'avatarka',
            id: Math.floor(Math.random() * 100),
            name: 'Dimych',
            message: 'hello world!',
            active: true
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxtcl-1iO_yF8nszUob_EssatZo8c_aZbuwiH_IxKpHXL3iUI03IRkfkUfX0GPwpzsHg&usqp=CAU',
            alt: 'second avatarka',
            id: Math.floor(Math.random() * 100),
            name: 'Alex',
            message: 'hello yo!',
            active: false
        }
    ],
    sidebar: {

    }
}

export default state;