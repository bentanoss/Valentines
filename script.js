// script.js

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            window.location.href = 'second.html'; // Redirect to second page
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?'; 
        var yesButton = document.getElementById('yes-button');
        var newSize = parseFloat(window.getComputedStyle(yesButton).fontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    }
}


// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
// Function to display "cat_0.gif" with a question and options
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';

    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');

    // Create a new Image element for "cat_0.gif"
    var catZeroImage = new Image();
    catZeroImage.src = 'cat_0.gif'; // Ensure this file exists
    catZeroImage.alt = 'Suspicious Cat';

    // Create a question text
    var message = document.createElement('div');
    message.innerText = "Did you just press no before you pressed yes? 🤨";
    message.style.fontSize = "32px";
    message.style.marginTop = "20px";
    message.style.color = "#ff4d6d";
    message.style.fontFamily = "'Sacramento', cursive";

    // Create Yes button
    var yesButton = document.createElement('button');
    yesButton.innerText = "Yes";
    yesButton.style.padding = "10px 20px";
    yesButton.style.margin = "10px";
    yesButton.style.fontSize = "26px";
    yesButton.style.fontFamily = "'Sacramento', cursive";
    yesButton.style.backgroundColor = "#FB607F";
    yesButton.style.color = "white";
    yesButton.style.border = "none";
    yesButton.style.cursor = "pointer";
    
    // Set up the button to redirect to final page
    yesButton.onclick = function() {
        window.location.href = "final.html"; // Redirect to final page
    };

    // Create No button
    var noButton = document.createElement('button');
    noButton.innerText = "No";
    noButton.style.padding = "10px 20px";
    noButton.style.margin = "10px";
    noButton.style.fontSize = "26px";
    noButton.style.fontFamily = "'Sacramento', cursive";
    noButton.style.backgroundColor = "#FB607F";
    noButton.style.color = "white";
    noButton.style.border = "none";
    noButton.style.cursor = "pointer";

    // No button logic - Increase Yes button size on each click
    noButton.onclick = function() {
        noButton.innerText = "You sure?"; 
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 1.5; // Increase Yes size
        yesButton.style.fontSize = newSize + 'px';
    };

    // Append elements to image container
    catZeroImage.onload = function() {
        imageContainer.appendChild(catZeroImage);
        imageContainer.appendChild(message);
        imageContainer.appendChild(yesButton);
        imageContainer.appendChild(noButton);

        // Hide the original options container
        document.getElementById('options').style.display = 'none';
    };
}


// Display the cat.gif initially
displayCat();
