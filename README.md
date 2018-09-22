# Memory Game Project

## Table of Contents

* [Introduction](#introduction)
* [Rubric](#rubric)
* [Contributing](#contributing)
* [Code-explained](#code-explained)
* [HTML](#html)
* [CSS](#css)
* [Java-Script](#java-script)
* [Play-game](#play-game)
* [Bugs](#bugs)

## Introduction

The starter project had some HTML and CSS styling to display a static version of the Memory Game project. My job was to convert this project from a static project to an interactive one. This required modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, I had to open `js/app.js` and build out the app's functionality
Following specific, detailed instructions, found in the Udacity Memory Game project rubric.

* [Table of Contents](#table-of-contents)

## Rubric

#### - Documentation
A README file is included detailing the game and all dependencies.

#### - Comments
Comments are present and effectively explain longer code procedure when necessary.

#### - Code Quality
Code is formatted with consistent, logical, and easy-to-read formatting as described in the Udacity JavaScript Style Guide.

#### - Usability
All application components are usable across modern desktop, tablet, and phone browsers.

#### - Interface Design Styling
Application uses CSS to style components for the game.

#### - Move Counter
Game displays the current number of moves a user has made.

#### - Timer
When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.

#### - Restart Button
A restart button allows the player to reset the game board, the timer, and the star rating.

#### - Star Rating
The game displays a star rating (from 1 to at least 3) that reflects the player's performance. At the beginning of a game, it should display at least 3 stars. After some number of moves, it should change to a lower star rating. After a few more moves, it should change to a even lower star rating (down to 1).

The number of moves needed to change the rating is up to you, but it should happen at some point.

#### - Memory Game Logic
The game randomly shuffles the cards. A user wins once all cards have successfully been matched.

#### - Congratulations Popup
When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was.

* [Table of Contents](#table-of-contents)

## Contributing

**PLEASE DO NOT CONTRIBUTE TO THIS PROJECT AS IT IS A COMPLETED TEST**


## Code-explained

So to understand the code let's start with the files that make up this game.

### - HTML
### - CSS
### - JavaScript

* [Table of Contents](#table-of-contents)

## HTML
HTML Code is the file that links everything together. If you only run the HTML without the other code it will look like a document that makes no sense, just a list of characters and words. To see this, download the index.html file and using “Ctrt and O” shortcut in your browser open it.

In between the ``` <head> ... </head>``` tags you will see the links to the CSS and other resources that define the style the page. Below is the actual code from this completed project.
```
<head>
  <meta charset="utf-8">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Matching Game</title>
  <link rel="icon" sizes="112x180" href="images/ESMS_light.png">
  <link rel="apple-touch-icon" href="/images/ESMS_small.png">
  <link rel="stylesheet prefetch" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/app.css">
  <link rel="stylesheet" href="css/responsive.css">
  <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700" rel="stylesheet">
</head>
```
* [Table of Contents](#table-of-contents)

## CSS

CSS is the static style for the game. This includes everything from the background to the layout of the objects in the game. Here is where it can seem confusing, as there is more than one CSS stylesheet. I am using ``` <link rel="stylesheet" href="css/app.css"> ``` to style the game, and ``` <link rel="stylesheet" href="css/responsive.css"> ``` to make two breakpoints to make the game look good on different screen sizes.

* [Table of Contents](#table-of-contents)

## Java-Script

JavaScript is where things start to get interesting. So in the CSS there are multiple styles for each object. Take for example the the cards. When you click on a card it appears to flip. This is because the JavaScript is switching between the different styles based on your click. If you click on one card, the background color of the card changes to “Amber” and a font awesome character is displayed.

When you click on the next card, the JavaScript does the same for that card, but then compares the two font awesome characters that are visible. If they are the same, the background color changes to “green”, and the cards remain visible. If they do not match, the JavaScript lets them stay open for one second, before changing the style back to the original “Grey” card.

Based on the click you made multiple functions are firing, like the game timer starts on your first click, and  when you have clicked on the second card your first move is counted. In the invisible side JavaScript is counting the amount of cards that are matched, and when that is equal to eight matches the game ends with a block that displays your time, moves, and stars remaining.

The amount of moves you make are being counted by a JavaScript function, which fires another function at each set interval of moves to remove one star at a time. So in short it's not magic, JavaScript is pretty much just activating the CSS styles making them visible or invisible, and running some functions based on your clicks.

Lastly, you may wonder why you did not see the JavaScript ``` <script src="js/app.js"></script> ``` in the head of the HTML like the CSS. This is because it is not a good idea to run JavaScript functions until the whole page is finished loading all its content. So you will find the link to the JavaScript in the bottom of the HTML file. ``` <script src="js/app.js"></script> ```

* [Table of Contents](#table-of-contents)

## Play-game

[HERE](http://www.encoreservices.co.za/udacity/memoryGameProject/index.html) is a link to the game hosted by Encore Services, have fun and please let me know if you encounter any bugs.

## Bugs

* This is the part where you can help, I do not know why the game does not work at all on my i Pad 1, except for the reset button?
* There is some incorrect style color on the end game modal using Samsung phone and tablets using Chrome?

* [Table of Contents](#table-of-contents)
