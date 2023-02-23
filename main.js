Dance_Bhoot_Song = "";
Ranjha_Song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreleftWrist = 0;
Kesariya_Music = "";

function preload(){
    Dance_Bhoot_Song = loadSound("Kesariya.mp3");
    Ranjha_song = loadSound("Ranjha.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log(" PoseNet model has been initialized");
}

function draw(){
    image(video,0,0,600,500);

    fill("#9c2775");
    stroke("#9c274c");

   Dance_Music = Dance_Bhoot_Song.isPlaying();
    console.log(Dance_Music);

    if(scoreleftWrist > 0.2){
        circle(leftWristX,leftWristY,20);
        Ranjha_Song.stop;

        if(Dance_Music == false){
           Dance_Bhoot_Song.play();
            document.getElementById("play").innerHTML = "Song Name : Dance Ka Bhoot Song";
        }}}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+ leftWristX + "leftWristY = "+ leftWristY);
    
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX =" + rightWristX + "rightWristY =" + rightWristY);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log("ScoreleftWrist = " + scoreleftWrist);

       
    }
}





