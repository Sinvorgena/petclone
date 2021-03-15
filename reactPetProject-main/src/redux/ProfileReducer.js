let addPost = "ADD-POST"
let updNewPostText = "UPD-NEW-POST-TEXT"
let changeAvatar = "CHANGE-AVATAR"
let nextAvatar = "NEXT-AVATAR"
let prevAvatar = "PREV-AVATAR"
let addAvatar = "ADD-AVATAR"


let ProfileDefaulState = {
    userInfoDate: [
        {
            name: "Dmitry K.",
            birthdate: "2 january",
            city: "Minsk",
            education: "BSU'11",
            webSite: "https://it-kamasutra.com"
        }
    ],
    postMessageData: [
        {id: 1, message: "Hi, how are you?", likeCounter: "20", user: "vlad"},
        {id: 2, message: "Привет, как ты?", likeCounter: "15", user: "vlad"},
        {id: 3, message: "Пgdgdfgdf?", likeCounter: "12", user: "vlad"}
    ],
    newPostText: "",
    avatarUrlData: [
        {
            id: 1,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OKqoPKtc6zG0u7pS8C3klRQ-7n0KLvYTaQ&usqp=CAU"
        },
        {id: 2, url: "https://html5css.ru/css/img_lights.jpg"},
        {
            id: 3,
            url: "https://external-preview.redd.it/wl_OMEWEzDWAyDGU8-k469mI89a0HvNryasEQHxfceQ.jpg?auto=webp&s=f739d6643f9a51389369f9bdd248443f7bca68ab"
        }
    ],
    mainAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OKqoPKtc6zG0u7pS8C3klRQ-7n0KLvYTaQ&usqp=CAU"
}

export const ProfileReducer = (state = ProfileDefaulState, action) => {
    switch (action.type) {
        case addPost:
            let newPost = {
                message: state.newPostText,
                likeCounter: 5,
                user: "vlad"
            }
            state.postMessageData.push(newPost)
            state.newPostText = ""
            break
        case updNewPostText:
            state.newPostText = (action.userText)
            break
        case changeAvatar:

            break
        case nextAvatar:
            for (let key of state.avatarUrlData) {
                if (action.avatarUrl === key.url) {
                    if(state.avatarUrlData[key.id]){
                        state.mainAvatar = state.avatarUrlData[key.id].url
                    }
                }
            }
            break
        case prevAvatar:
            for (let key of state.avatarUrlData) {
                if (action.avatarUrl === key.url) {
                    if(state.avatarUrlData[key.id-2]){
                        state.mainAvatar = state.avatarUrlData[key.id-2].url
                    }

                }
            }
            break
        case addAvatar:
            let newAvatar = {
                id: state.avatarUrlData[state.avatarUrlData.length - 1].id + 1,
                url: action.avatarUrl
            }
            state.avatarUrlData.push(newAvatar)
            break
    }
    return state
}

export let addPostActionCreator = () => ({
    type: addPost
})
export let changeAvatarActionCreator = (url) => ({
    type: changeAvatar,
    avatarUrl: url
})
export let nextAvatarActionCreator = (url) => ({
    type: nextAvatar,
    avatarUrl: url
})
export let prevAvatarActionCreator = (url) => ({
    type: prevAvatar,
    avatarUrl: url
})
export let addAvatarActionCreator = (url) => ({
    type: addAvatar,
    avatarUrl: url
})

export let updNewPostTextActionCreator = (text) => ({
    type: updNewPostText,
    userText: text
})

window.ProfileDefaulState = ProfileDefaulState

