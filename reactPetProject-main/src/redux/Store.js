// import {ProfileReducer} from "./ProfileReducer";
// import {DialogsReducer} from "./DialogsReducer";
// import {SideBarReducer} from "./SideBarReducer";
//
// let store = {
//     _state: {
//         Profile: {
//             userInfoDate: [
//                 {
//                     name: "Dmitry K.",
//                     birthdate: "2 january",
//                     city: "Minsk",
//                     education: "BSU'11",
//                     webSite: "https://it-kamasutra.com"
//                 }
//             ],
//             postMessageData: [
//                 {id: 1, message: "Hi, how are you?", likeCounter: "20", user: "vlad"},
//                 {id: 2, message: "Привет, как ты?", likeCounter: "15", user: "vlad"},
//                 {id: 3, message: "Пgdgdfgdf?", likeCounter: "12", user: "vlad"}
//             ],
//             newPostText: "",
//             avatarUrlData: [
//                 {id:1,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OKqoPKtc6zG0u7pS8C3klRQ-7n0KLvYTaQ&usqp=CAU"},
//                 {id:2,url:"https://html5css.ru/css/img_lights.jpg"}
//             ]
//         },
//         Dialogs: {
//             messageData: [
//                 {id: 1, message: "Привет", avatar: "http://petszona.ru/wp-content/uploads/2018/06/karby-sh.jpg"},
//                 {
//                     id: 2,
//                     message: "Привет",
//                     avatar: "https://cdnimg.rg.ru/img/content/187/94/47/iStock-644032024_d_850.jpg"
//                 },
//                 {id: 1, message: "Как дела?", avatar: "http://petszona.ru/wp-content/uploads/2018/06/karby-sh.jpg"},
//                 {
//                     id: 2,
//                     message: "Крута, а у тебя?",
//                     avatar: "https://cdnimg.rg.ru/img/content/187/94/47/iStock-644032024_d_850.jpg"
//                 },
//                 {
//                     id: 2,
//                     message: "Крута, а у тебя?",
//                     avatar: "https://cdnimg.rg.ru/img/content/187/94/47/iStock-644032024_d_850.jpg"
//                 }
//             ],
//             dialogsData: [
//                 {id: 1, name: "Vladimir"},
//                 {id: 2, name: "Denis"},
//                 {id: 3, name: "Vlad"},
//                 {id: 4, name: "Anya"},
//                 {id: 5, name: "Zina"}
//             ],
//             newMessageText: ""
//         },
//         sideBar: {
//             friendData: [
//                 {name: "Vlad"},
//                 {name: "Vladimir"},
//                 {name: "Denis"},
//                 {name: "Lera"},
//                 {name: "Anton"},
//                 {name: "Danil"}
//             ]
//         }
//     },
//
//     _callSubscriber() {
//         console.log(this)
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//     dispatch(action){
//         this._state.Profile = ProfileReducer(this.getState().Profile, action)
//         this._state.Dialogs = DialogsReducer(this.getState().Dialogs, action)
//         this._state.sideBar =  SideBarReducer(this.getState().sideBar, action)
//         this._callSubscriber(this._state)
//     },
// }
//
// export default store;