
// controls for changing the background
document.getElementById('background-btn').addEventListener('click', function() {
    document.getElementById('background').style.backgroundImage = "url('GettyImages-874018402-1150x844.jpg')";
});





// button controls

// controls for the left button
document.getElementById('left').addEventListener('click', function() {
    var position = document.getElementById('ball').style.left;
 
    var newPosition = parseInt(position) - 10;
 
    document.getElementById('ball').style.left = newPosition + 'px';
 });
 

// controls for the right button
document.getElementById('right').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;
 
    var newPosition = parseInt(position) + 10;
 
    document.getElementById('ball').style.left = newPosition + 'px';
 }); 
 

