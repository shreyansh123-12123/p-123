noseX=0;
noseY=0;
diffrence=0;
rightWristX=0;
leftWristx=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(600,400);
    
    canvas = createCanvas(600,400);
    canvas.position(700,220);
    
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("mission succssefulllll!!!!!!");
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX= results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
    console.log("noseX = " + noseX + "noseY = " + noseY);
    rightWristX= results[0].pose.rightWrist.x;
    leftWristx= results[0].pose.leftWrist.x;
    diffrence= floor(leftWristx - rightWristX);
    console.log("leftWristX = " + leftWristx + "rightWristX = " + rightWristX + "difference = " + diffrence);


}
}
function draw(){
    background('#ffff00');
    textSize(diffrence);
    fill('#ffe787');
    text('shreyansh', 50 , 300)
    

}