var folder = './'

function plot_freqs(folder){
    var canvas = document.getElementById("canvas_freqs");
    //console.log(canvas)
    canvas.height = 400;
    canvas.width  = 600;

    var totalFrames = 20 ;
    var videoFrames = [];
    for (var i = 0; i < totalFrames; i++){
        var videoFrame = new Image;
        var videoFrameUrl = folder+'single_'+String(i).padStart(2,'0') + '.png';
        //console.log(videoFrameUrl)
        videoFrame.src = videoFrameUrl;
        videoFrames.push(videoFrame);
    }
    var context = canvas.getContext("2d");

    var dx = 0;
    var dy = 0 ;
    context.drawImage(videoFrames[0], dx, dy, canvas.width, canvas.height);

    $("#input_freqs").on("input", function(event) {
    var currentImage = videoFrames[event.target.value];
    context.drawImage(currentImage, dx, dy, canvas.width, canvas.height);
    });
    
}


function plot_multi(folder){
    var canvas = document.getElementById("canvas_multi");
    //console.log(canvas)
    canvas.height = 400;
    canvas.width =  600;

    var totalFrames = 20 ;
    var videoFrames = [];
    for (var i = 0; i < totalFrames; i++){
        var videoFrame = new Image;
        var videoFrameUrl = folder+'multi_'+String(i).padStart(2,'0') + '.png';
        //console.log(videoFrameUrl)
        videoFrame.src = videoFrameUrl;
        videoFrames.push(videoFrame);
    }
    var context = canvas.getContext("2d");

    var dx = 0;
    var dy = 0 ;
    context.drawImage(videoFrames[0], dx, dy, canvas.width, canvas.height);

    $("#input_multi").on("input", function(event) {
    var currentImage = videoFrames[event.target.value];
    context.drawImage(currentImage, dx, dy, canvas.width, canvas.height);
    });
    
}




function changeDate(n) {
    hours = Math.floor(n/6);
    mins = n % 6;
    time_stamp = 'time: '+String(hours).padStart(2,'0')+":"+mins +'5';
    //console.log(time_stamp);
    document.getElementById('output').value = time_stamp;
}

plot_freqs(folder);
plot_multi(folder);

window.addEventListener('load', function () {
    plot_freqs(folder);
    plot_multi(folder);
});
