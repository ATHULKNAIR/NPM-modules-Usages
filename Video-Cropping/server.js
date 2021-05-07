const {getVideoDurationInSeconds} = require('get-video-duration');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

let VIDEO = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';  // url
ffmpeg(VIDEO)
  .setStartTime('00:00:10')                       // in hh:mm:ss
  .setDuration('10')                              // in seconds
  .output('video_out2.mp4')                       // cropped video

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  .on('end',function(err){                                         
      if(!err){                                                    
          getVideoDurationInSeconds('video_out.mp4')
          .then((duration)=>{
              console.log(duration)                                                            // NOT NECCESSARY PART
          })
      }
  })
  .on('error',function(err){
      console.log('error',err)
  })
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  .run()