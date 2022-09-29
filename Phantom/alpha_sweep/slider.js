var folder = './'

function plot_freqs(folder){
    var canvas = document.getElementById("canvas_freqs");
    //console.log(canvas)
    canvas.height = 800;
    canvas.width = 1400;

    var totalFrames = 100 ;
    var videoFrames = [];
    for (var i = 0; i < totalFrames; i++){
        var videoFrame = new Image;
        var videoFrameUrl = folder+'freqs_'+String(i).padStart(2,'0') + '.png';
        //console.log(videoFrameUrl)
        videoFrame.src = videoFrameUrl;
        videoFrames.push(videoFrame);
    }
    var context = canvas.getContext("2d");

    var dx = -70;
    dx = 0;
    var dy = 30 ;
    dy = 0;
    context.drawImage(videoFrames[0], dx, dy);

    $("#input_freqs").on("input", function(event) {
    var currentImage = videoFrames[event.target.value];
    context.drawImage(currentImage, dx, dy);
    });
    
}


function plot_multi(folder){
    var canvas = document.getElementById("canvas_multi");
    //console.log(canvas)
    canvas.height = 800;
    canvas.width = 1400;

    var totalFrames = 100 ;
    var videoFrames = [];
    for (var i = 0; i < totalFrames; i++){
        var videoFrame = new Image;
        var videoFrameUrl = folder+'multi_'+String(i).padStart(2,'0') + '.png';
        //console.log(videoFrameUrl)
        videoFrame.src = videoFrameUrl;
        videoFrames.push(videoFrame);
    }
    var context = canvas.getContext("2d");

    var dx = -70;
    dx = 0;
    var dy = 30 ;
    dy = 0;
    context.drawImage(videoFrames[0], dx, dy);

    $("#input_multi").on("input", function(event) {
    var currentImage = videoFrames[event.target.value];
    context.drawImage(currentImage, dx, dy);
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
