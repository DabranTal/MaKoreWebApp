import img from './Launch/image.png';


    let Tal = {lastMessage: "", Username: "Tal", Nickname: "tal (:", password: "1234567890", pic: img, friends: [], noti: 1 }
    let Coral = {lastMessage: "",  Username: "Coral", Nickname: "Kuta", password: "12345678", pic: img, friends: [[Tal, []]], noti: 3 }
    let Ido = {lastMessage: "",  Username: "Ido", Nickname: "Idota", password: "12341234", pic: img, friends: [[Coral, []], [Tal, []]], noti: 2 }

    let users = [
        {lastMessage: "",  Username: "Matan", Nickname: "Matansha", password: "1234567890", pic: img, friends: [[Tal, []], [Coral, []], [Ido, []]], noti: 3 },
        {lastMessage: "",  Username: "Itamar", Nickname: "itamar", password: "12345678", pic: img, friends: [[Tal, []], [Coral, []], [Ido, []]], noti: 4 },
        {lastMessage: "",  Username: "Bella", Nickname: "bella", password: "12341234", pic: img, friends: [[Tal, []], [Coral, []], [Ido, []]], noti: 3 },
        Tal, Coral, Ido];


    export default users;


