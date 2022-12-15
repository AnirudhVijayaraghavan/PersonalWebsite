var c = document.getElementById("c");
var ctx = c.getContext("2d");
var voidid = document.getElementById("void");
//The code below sets the canvas to full screen.
c.height = window.innerHeight;
c.width = window.innerWidth;

//Change the characters inside the matrix variables below to display whatever characters
// want in the matrix rain. Use the correct matrix variables throughout the rest of
// the code accordingly. 
// Currently using : var matrix.
var matrix1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
var matrix = "\u0B85\u0B86\u0B87\u0B88\u0B89\u0B8A\u0B8E\u0B8F\u0B90\u0B92\u0B93\u0B94\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8\u0BA9\u0BAA\u0BAE\u0BAF\u0BB0\u0BB1\u0BB2\u0BB3\u0BB4\u0BB5\u0BB6\u0BB7\u0BB8\u0BB9\u0BD0";
var matrix2 = "\u0B85\u0BA9\u0BBF\u0BB0\u0BC2\u0BA4\u0BD0";
//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 17;
var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++)
    drops[x] = 1;

// Main function to draw on the canvas.
function draw() {
    //The below code sets the background color and opacity of the canvas.
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    // The below code sets the color of the matrix rain drops.
    ctx.fillStyle = "red";
    ctx.font = font_size + "px arial";
    //Looping over drops.
    for (var i = 0; i < drops.length; i++) {
        //Printing random matrix variable characters.
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        //Sending the drop back to the top randomly after it crosses the screen.
        //Adding a randomness to the reset to make the drops scattered on the Y axis.
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //Incrementing Y-coordinate.
        drops[i]++;
    }
}

setInterval(draw, 40);