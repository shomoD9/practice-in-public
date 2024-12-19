/**
 * Player Constructor Function
 * Creates a new Player object with name and height properties.
 * @param {string} name - The name of the player
 * @param {number} height - The height of the player in centimeters
 */
function Player(name, height){
    // Initialize player properties
    this.name = name;
    this.height = height;

    /**
     * Method to make the player introduce themselves
     * Logs a greeting message with the player's name
     */
    this.saySomething = function(){
        console.log(`Hi, I am ${name}`);
    }
}

// Create a new player instance
let shivam = new Player("shiv", 182);

// Access and log the player's height
console.log(shivam.height); // 182

// Create and immediately access a new player instance
console.log(new Player("shiv", 192).height); // 192

// Call the saySomething method on our player instance
shivam.saySomething();

