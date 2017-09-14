$(document).ready(function () {
  let comments = $(".slideshow p");
  let commentIndex = -1;
  function showNextComment() {
    ++commentIndex;
    comments.eq(commentIndex % comments.length).fadeIn(1500).delay(3000).fadeOut(2000, showNextComment);
  }
  showNextComment();
})
