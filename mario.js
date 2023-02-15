
printPyramid(5);
// TOD


// Take in user input for the height


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
let length = document.getElementById("tall").value;  

let string = "";
  
    for (let i = 1; i <= length; i++){
      for (let j  = 0; j < length - i; j++){
        string += " ";
      }
      for (let k = 0; k < i; k++){
        string += document.getElementById("symbol").value;
      }
      string += "<br>";
    }
  document.getElementById("pyramid").innerHTML = `<pre>${string}</pre>`;

    // TODO #1
    // print that pyramid!
}

