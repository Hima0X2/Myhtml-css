var array=["video1.mp4","video2.mp4","video3.mp4"];
var vid=document.querySelector(".video");
var d=array.length;
var count=1;
function func(){
if(count==d){
   count=0;
	}
	vid.src=array[count];
	vid.load();
	count++;
	//vid.load();
}

// var videoCollection = ["video1.mp4","video2.mp4","video3.mp4"];
// var vid = document.getElementById("myVideo");
// var collectionLength = videoCollection.length;
// var count = 1;
// function changeVideo() {
//     if(count === collectionLength) count = 0;
// 	vid.src = videoCollection[count];
//     vid.load();
// 	count++;
// }
	