interface Audioplayer{
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;

}

interface Details{
    author:string;
    year:number;
}

const audioPlayer:Audioplayer={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details:{
        author: "Ed Sheeran",
        year: 2015
    }
}

const {song: newSong,details,
    details:{author:author2}
 } = audioPlayer;
const {author}=details;

const song :string="Ashes of the wake";
console.log(newSong, song,author, author2);



export{};