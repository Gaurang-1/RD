function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(200,120)

    canvas=createCanvas(530,500);
    canvas.position(900,120);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Posenetis Intialized!!");
}

function draw(){
    background('#808080');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}
