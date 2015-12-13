// Exercise: Find the top navbar by query for the element type, which is <nav>.
document.getElementsByTagName("nav")[0];
// Exercise: Find the sidebar on the right by using it's id.
document.getElementById('sidebar-right');
// Exercise: Find the "Pages" and "Groups" sections of the sidebar by using their class.
document.getElementsByClassName("pages");
document.getElementsByClassName("groups");
// Exercise: Find all of the comments on the page.
document.getElementsByClassName("comments")
// Exercise: Find the first comment on the page.
document.getElementsByClassName("comments")[0];
// Exercise: Find the last comment on the page.
var comment = document.getElementsByClassName("comments");
var lastIndex = comment.length - 1;
comment[lastIndex];
// Exercise: Find the fourth comment on the page.
document.getElementsByClassName("comments")[3];
// Exercise: Find one of the ads in the sidebar and hide them.
var statusUpdateForm = document.getElementById('sidebar-right');
statusUpdateForm.style.visibility = "hidden";
// Exercise: Set the visibility to the form that you hid in the previous step to make it visible again.
var statusUpdateForm = document.getElementById('sidebar-right');
statusUpdateForm.style.visibility = "visible";
// Exercise: Use setAttribute to change src attribute of one of the ads in the sidebar.
var statusUpdate = document.getElementsByClassName('ads')[0];
var img = statusUpdate.getElementsByTagName('img')[0];
img.setAttribute('src', 'http://placebear.com/200/300');
// Exercise: Find Sam's post and change it's text to something incredible.
var postMedia = document.getElementsByClassName('post media')[3];
var mediaBody = postMedia.getElementsByClassName('media-body')[0];
var postBody = mediaBody.getElementsByTagName('p')[0];
postBody.innerHTML = "Something Incredible!";
// Exercise: Find the first post and add the .post-liked class to it.
var postMedia = document.getElementsByClassName('post media')[0];
postMedia.className = postMedia.className + " post-liked";
// Exercise: Find the second post and remove the .post-liked class.
var postMedia = document.getElementsByClassName('post media')[1];
postMedia.classList.remove('post-liked');
