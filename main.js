leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    canvas = createCanvas(600,600);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(400,400);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet model loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor( leftWristX - rightWristX);
    }
}

function draw(){
    background("#00ffff");
    textSize(difference);
    fill("#03a1fc");
    text("coder" , 10 , 300);
}
