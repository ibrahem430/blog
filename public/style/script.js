$(".one").on("mouseover",function(){
   
    $(".one").addClass("moveMouseOverButton");
    // setTimeout( function(){ $("h1").removeClass("big-title")},100);

});
$(".one").on("mouseout",function(){
   
    $(".one").removeClass("moveMouseOverButton");
    // setTimeout( function(){ $("h1").removeClass("big-title")},100);

});

$(".clickUnderTheText").on("mouseover",function(){
   
    $(".clickUnderTheText").addClass("moveMouseOverButton2");
    // setTimeout( function(){ $("h1").removeClass("big-title")},100);

});
$(".clickUnderTheText").on("mouseout",function(){
   
    $(".clickUnderTheText").removeClass("moveMouseOverButton2");
    // setTimeout( function(){ $("h1").removeClass("big-title")},100);

});


document.getElementById("theSacondeLine").addEventListener("input", function() {
    let text = this.value;
    this.value = text.replace(/\. /g, ".\n"); // Replace ". " with ".\n" (new line)
});

function deletePost(postId) {
    fetch(`/delete/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: postId
      }),
    })
    .then(response => response.json())
    .then(data => {
      alert("Post deleted successfully!");
      // Optionally reload the page or update the UI
    })
    .catch(error => {
      console.error('Error deleting post:', error);
    });
  }
