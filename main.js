function preload(){

}
function setup(){
canvas=createCanvas(450,450);
canvas.center();
video=createCapture(VIDEO);
video.size(450,450);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",got_poses);

}
function draw(){
image(video,0,0,450,450);

}

function take_snapshot(){
save("meme.png");
}
function modelLoaded(){
    console.log("posenet initialisied :):)");
}
function got_poses(results){
    if(results.length>0){
        console.log(results);
    }
}