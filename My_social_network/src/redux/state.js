let state = {
    profilePage:
    {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: '0' },
            { id: 2, message: 'It\'s my first post', likesCount: '3' }
        ],
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Alexey' },
            { id: 2, name: 'Petya' },
            { id: 3, name: 'Vasya' },
            { id: 4, name: 'Ivan' }
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you ?' },
            { id: 3, message: 'What is you name ?' }
        ]
    }
}

export default state;