//rotating.js handles the image rotation seen on the website's home page

var today = new Date();

//Build the appropriate prefix for filenames, depending on whether
var prefix = "images/home/";
switch (today.getDay())
{
    case 0:   
    case 1:
        prefix += "r";
        break;
    
}

//Use that prefix to put the proper sequence of image filenames into an array
var imageArray = new Array(6);
for (i=0; i<imageArray.length; i++)
    imageArray[i] = prefix + (i+1) + ".jpg";

//Perform a "cicular rotation" of the images in the array
var imageCounter = 0;
function rotate()
{
    var imageObject = document.getElementById('rotatingimg');
    imageObject.src = imageArray[imageCounter];
    ++imageCounter;
    if (imageCounter == 6) imageCounter = 0;
}

//Called as soon as home page has loaded, to start image rotation
function startRotation()
{
    document.getElementById('rotatingimg').src=imageArray[5];
    setInterval('rotate()', 2000);
}
