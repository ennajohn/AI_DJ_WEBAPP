song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotResults);
}

function modelLoaded(){
    console.log("PoseNet Model has been Initialized");
}

function gotResults(results){
    if(results.length > 0){
        console.log(results);
    }
}


function draw(){
    image(video,0,0,600,500);

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = "+ leftWristX + "leftWristY = "+ leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = "+ rightWristX + "rightWristY = "+ rightWristY);
}

function play(){
    song.play();
    song.rate(1);
    song.setVolume(1);
}

function stop(){
    song.pause();
}