var likeButtons = document.getElementsByClassName("fa-thumbs-up")
console.log(likeButtons.length + " like buttons were found...");
var num_comments_liked = 0;
for ( button of likeButtons ){
    if( !button.className.toString().includes("active") ){
        console.log("Found comment not liked...");
        button.click();
        num_comments_liked += 1;
    }
}
console.log("Finished liking "+ num_comments_liked + " comments.");
