const Trendingnowtile = require('../Models/trendingnowtile.js')
const fs = require('fs')
exports.displaymovie=(req,res)=>{
    Trendingnowtile.find()
    .then(result=>{
        res.status(200).json({
            trendingnow:result
        })
    }).catch(err=>{
        res.status(400).json({
            error:err
        });
    })
}

exports.playmovietile = (req, res) => {
    Trendingnowtile.findById(req.params._id)
    .then((result)=>{
        let range =req.headers.range;
        if(!range){
            range = 'bytes=0-'
        }
        const videoPath = result.videourl;
        const videoSize =fs.statSync(videoPath).size;
        const chunksize = 10 **10;
        const start = Number(range.replace(/\D/g,''))
        const end =Math.min(start + chunksize,videoSize -1);
        const contentlength = end - start+1;
        const headers ={
            'Content-Range': `bytes ${start} - ${end}/${videoSize}`,
            'Accept-Ranges':'bytes',
            'Content-Length':contentlength,
            'Content-Type':'video/mp4',
        }
        res.writeHead(206,headers);
        const videoStream = fs.createReadStream(videoPath,{start,end});
        videoStream.pipe(res);
    })
}