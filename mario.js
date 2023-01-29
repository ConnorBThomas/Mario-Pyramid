
printPyramid(5);
// TOD
let length  = prompt("What is the height you want?");
let string = ""

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
    for (let i = 1; i <= length; i++){
      for (let j  = 0; j < length - i; j++){
        string += " ";
      }
      for (let k = 0; k < i; k++){
        string += "#";
      }
      string += "<br>";
    }
  document.write(`<pre>${string}</pre>`)

    // TODO #1
    // print that pyramid!
}
height();