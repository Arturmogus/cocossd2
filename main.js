mg = ""
status = ""
objects = [];

function preload()
{
   img = loadImage('dog_cat.jpg')
}

function setup()
{
    canvas = createCanvas(400, 250)
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}

function modelLoaded()
{
    console.log("model loaded")
    status = true
    objectDetector.detect(img, gotResults)
}

function gotResults(results, error)
{
    if(error)
    {
        console.error(error)
    }
    else
    {
        console.log(results)
        objects = results
    }
}
