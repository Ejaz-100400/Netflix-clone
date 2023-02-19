const mongoose =require('mongoose');
const Schema =mongoose.Schema

const movieSchema = new Schema({
    _id:{
        type:String,
        required:true,
    },
    moviename:{
        type:String,
        required: true
    },
    duration:{
        type:String,
        required: true
    },
    banner:{
        type:String,
        required: true
    },
    videourl:{
        type:String,
        required: true
    },
    genre:{
        type:String,
        required: true
    },
    synopsis:{
        type:String,
        required: true
    },
    volume:{
        type:Boolean,
        required: true
    },
    isdropdown:{
        type:Boolean,
        required: true
    },
    close:{
        type:Boolean,
        required: true
    },
    top:{
        type:Number,
        required: true
    },
    topmovie:{
        type:Number,
        required: true,
    },
    topbanner:{
        type:String,
        required: true
    }
})
module.exports=mongoose.model('Netflix',movieSchema,'Netflix');





// [{
//     _id:'11',
//     moviename:'Chainsaw Man',
//     duration:'12 Episodes',
//     banner:'https://occ-0-5559-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUz3Zkm6dvcscPbDyjdjtt880r3Khd-0RSL1wKWhJSu1ug9GIQaq_SAm20unPHGwijMIkOLM6GtoGjBmv3VUc0nLCRntXsMpgTJBvwnu7a_cU62FAfXdOe8qyZSMhmI5l_cX4YF5sE5Z-iQlIAkXb0zoDAjw5vgQsKc.webp?r=888',
//     videourl:'',
//     genre:['Exciting', 'Anime','Japanese'],
//     synopsis:'After being left for dead, Denji turns into a devil-human hybrid with chainsaw powers, and gets recruited into a governmental devil hunting agency.',
//     tilecategory:'New & Popular',
//     lists:false,
//     type:'Series',
//     lang:'Japanese'
// }]
























// [
//     {
//     _id:'1',
//     moviename:'Money Heist',
//     duration:'5 Parts',
//     banner:'https://mir-s3-cdn-cf.behance.net/project_modules/fs/736dee100650681.5f0da29e3cce4.jpg',
//     videourl:'./Videos/Tiles/MONEY HEIST.mp4',
//     genre:['Thriller','Sci-Fy','Comedy'],
//     synopsis:'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',
//     volume:false,
//     isdropdown:false,
//     close:false
// },{
//     _id:'2',
//     moviename:'Money Heist',
//     duration:'5 Parts',
//     banner:'https://mir-s3-cdn-cf.behance.net/project_modules/fs/736dee100650681.5f0da29e3cce4.jpg',
//     videourl:'./Videos/Tiles/MONEY HEIST.mp4',
//     genre:['Thriller','Sci-Fy','Comedy'],
//     synopsis:'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',
//     volume:false,
//     isdropdown:false,
//     close:false
// }, {
//     _id:'3',
//     moviename:'Money Heist',
//     duration:'5 Parts',
//     banner:'https://mir-s3-cdn-cf.behance.net/project_modules/fs/736dee100650681.5f0da29e3cce4.jpg',
//     videourl:'./Videos/Tiles/MONEY HEIST.mp4',
//     genre:['Thriller','Sci-Fy','Comedy'],
//     synopsis:'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',
//     volume:false,
//     isdropdown:false,
//     close:false
// }, {
//     _id:'4',
//     moviename:'Money Heist',
//     duration:'5 Parts',
//     banner:'https://mir-s3-cdn-cf.behance.net/project_modules/fs/736dee100650681.5f0da29e3cce4.jpg',
//     videourl:'./Videos/Tiles/MONEY HEIST.mp4',
//     genre:['Thriller','Sci-Fy','Comedy'],
//     synopsis:'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',
//     volume:false,
//     isdropdown:false,
//     close:false
// }, {
//     _id:'5',
//     moviename:'Money Heist',
//     duration:'5 Parts',
//     banner:'https://mir-s3-cdn-cf.behance.net/project_modules/fs/736dee100650681.5f0da29e3cce4.jpg',
//     videourl:'./Videos/Tiles/MONEY HEIST.mp4',
//     genre:['Thriller','Sci-Fy','Comedy'],
//     synopsis:'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',
//     volume:false,
//     isdropdown:false,
//     close:false
// }, {
//     _id:'6',
//     moviename:'Money Heist',
//     duration:'5 Parts',
//     banner:'https://mir-s3-cdn-cf.behance.net/project_modules/fs/736dee100650681.5f0da29e3cce4.jpg',
//     videourl:'./Videos/Tiles/MONEY HEIST.mp4',
//     genre:['Thriller','Sci-Fy','Comedy'],
//     synopsis:'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',
//     volume:false,
//     isdropdown:false,
//     close:false
// }, {
//     _id:'7',
//     moviename:'Money Heist',
//     duration:'5 Parts',
//     banner:'https://mir-s3-cdn-cf.behance.net/project_modules/fs/736dee100650681.5f0da29e3cce4.jpg',
//     videourl:'./Videos/Tiles/MONEY HEIST.mp4',
//     genre:['Thriller','Sci-Fy','Comedy'],
//     synopsis:'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',
//     volume:false,
//     isdropdown:false,
//     close:false
// }, {
//     _id:'8',
//     moviename:'Money Heist',
//     duration:'5 Parts',
//     banner:'https://mir-s3-cdn-cf.behance.net/project_modules/fs/736dee100650681.5f0da29e3cce4.jpg',
//     videourl:'./Videos/Tiles/MONEY HEIST.mp4',
//     genre:['Thriller','Sci-Fy','Comedy'],
//     synopsis:'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',
//     volume:false,
//     isdropdown:false,
//     close:false
// }, {
//     _id:'9',
//     moviename:'Money Heist',
//     duration:'5 Parts',
//     banner:'https://mir-s3-cdn-cf.behance.net/project_modules/fs/736dee100650681.5f0da29e3cce4.jpg',
//     videourl:'./Videos/Tiles/MONEY HEIST.mp4',
//     genre:['Thriller','Sci-Fy','Comedy'],
//     synopsis:'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',
//     volume:false,
//     isdropdown:false,
//     close:false
// }, {
//     _id:'10',
//     moviename:'Money Heist',
//     duration:'5 Parts',
//     banner:'https://mir-s3-cdn-cf.behance.net/project_modules/fs/736dee100650681.5f0da29e3cce4.jpg',
//     videourl:'./Videos/Tiles/MONEY HEIST.mp4',
//     genre:['Thriller','Sci-Fy','Comedy'],
//     synopsis:'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',
//     volume:false,
//     isdropdown:false,
//     close:false
// }
// ]