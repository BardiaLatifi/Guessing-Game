# What is Guessing Game?

The Guessing Game is a web-based game that displays a variety of random video game screenshots and gives you six random options to guess which one is correct.

## Specifications

- It is written in Vanilla HTML, CSS, and JavaScript.
- It features a dynamic UI that guides you on what to do in different circumstances.
- The game tracks your score and shows you the result at any time.
- It is responsive and flexible, providing the best possible UI on any device.

## Aims to Improve the Guessing Game

1. **Category Selection**:  
    Currently, the category selection feature is inactive, and you must omit this option to run the game. However, I will update the code soon to include this feature for improved functionality in the next release.
    
2. **Variety of Games**:  
    At the moment, the game can display 20 screenshots. The next update will feature more than 100 games, offering better randomness and covering various game genres and platforms.
    
3. **More Challenging Options**:  
    The options given for guessing are currently completely random. However, I want users to feel more challenged. Soon, in an update, the game will provide more relevant options related to the correct answer.
    

## The Score Count and Game Over Logic

Hear is the Logic of score changes. the Game will be over at 0 or negative scores.

| Action |Score Change|
|:---:|:---:|
|Game Start|+5 points|
|<span style="color: green">Correct Answer</span>|+3 points|
|<span style="color: yellow">Empty Answer</span>|-1 point|
|<span style="color: red">Wrong Answer</span>|-2 points|
