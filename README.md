# PimPamShootIt!

***Rusty Game about shooting things.***

![alt text](https://i.gyazo.com/fde17662f78361035c74215621681e50.png "Logo Title")

## Table of Contents.
> 1. [Indication of the technologies used.](#indication-of-the-technologies-used)
> 2. [What is the game about?](#what-is-the-game-about)
> 3. [Project motivation.](#project-motivation)
>4. [Project structure.](#project-structure)
>5. [Shortcut to the game.](#shortcut-to-the-game)
>6. [Installation and deployment Guide.](#installation-and-deployment-guide)
>7. [Code examples.](#code-examples)
>8. [Other considerations:](#other-considerations)
  >> - [About how I approached the project.](#about-how-i-approached-the-project)
  >
  >> - [Difficulties.](#difficulties)
  >
  >> - [Things I liked about this project.](#things-i-liked-about-this-project)
  >
  >> -  [Bugs that I would have liked to fix.](#bugs-that-i-would-have-liked-to-fix)
  >
>> - [How could the game be improved](#how-could-the-game-be-improved)
>9.  [Licenses.](#licenses)
  




## **Indication of the technologies used.**
![Esta es una imagen](https://img.shields.io/badge/-HTML-brightgreen?style=plastic)
![Esta es una imagen](https://img.shields.io/badge/-VITE-red?style=plastic)
![Esta es una imagen](https://img.shields.io/badge/-TYPESCRIPT-orange?style=plastic)
![Esta es una imagen](https://img.shields.io/badge/-CSS-yellow?style=plastic)
![Esta es una imagen](https://img.shields.io/badge/-MARKDOWN-blue?style=plastic)
![Esta es una imagen](https://img.shields.io/badge/-NODE-lightgrey?style=plastic)
>
![Esta es una imagen](https://img.shields.io/badge/POWERED%20BY-CAFFEINE-orange?style=for-the-badge)

## **What is the game about?**
[![Image from Gyazo](https://i.gyazo.com/2b7b95df291e0da9d4b9659f0398ad6a.gif)](https://gyazo.com/2b7b95df291e0da9d4b9659f0398ad6a)
Quite simple, break dartboards pushing click on the targets with the mouse, these will be generated and move randomly around the map, so that it is not too easy, there is a counter of shots and % of accuracy, which is the playfulness key of this project, the player can compete against himself or against others to overcome. 
The targets stop once they are hit and their color changes to a clear and bright tone to make it clear to the player that he/she is done with them.


## **Project motivation.**
I liked the idea of imitating a classic shooting game, like the mythical Nintendo's Duck Hunt.
![alt text](https://i.gyazo.com/a1056036b5fad1c326e503bf54b50fb9.png "Duck Hunt NES")
I wanted to implement the detection of clicks on the screen to be able to shoot using the mouse, as well as to try that from the randomization of the targets, each game would be different.


## **Project structure.**
```
├───📁 docs/
│  
├───📁 public/
│   └───📄 style.css
├───📁 src/
│   ├───📁 actors/
│   │   ├───📄 Actor.ts
│   │   ├───📄 Background.ts
│   │   ├───📄 Clicker.ts
│   │   ├───📄 Dartboard.ts
│   │   └───📄 FPSViewer.ts
│   ├───📁 assets/
│   │   ├───📄 background.png
│   │   ├───📄 dartboard.png
│   │   ├───📄 dartboardPIM.png
│   │   ├───📄 fusi.png
│   │   └───📄 gun.cur
│   ├───📁 state/
│   │   └───📄 DartBoardManager.ts
│   ├───📁 types/
│   │   └───📄 Point.ts
│   └───📄 script.ts
├───📄 .gitignore
├───📄 index.d.ts
├───📄 index.html
├───📄 package-lock.json
├───📄 package.json
├───📄 README.md

```

## **Shortcut to the game:**
[Click here to play!](https://alfonsovalle.github.io/PimPamShootIt/ "PimPam ShootIt! Page")

## **Installation and deployment Guide.**

 *To install the game you only have to go to the repository https://github.com/AlfonsoValle/PimPamShootIt , clone it and run a npm run dev.*


## **Code examples.**

The key to the main mechanics of the game is this, we are not going to use the keyboard to interact with the targets, but the mouse. We use the AddEVentListener mousedown to capture the clicks. 
>
With the following formula, we calculate the position of the mouse on the canvas, and based on that, we calculate if we have hit a target.


```ts
	window.requestAnimationFrame(render);

	canvas.addEventListener("mousedown", (e) => {
		let Xmouse = e.offsetX * 2;
		let Ymouse = e.offsetY * 2;
		dartboards.forEach((e) => {
			const distance = Math.sqrt(
				Math.pow(Xmouse - e.origin.x, 2) +
					Math.pow(Ymouse - e.origin.y, 2)
			);
			if (distance < e.widthandheight / 2) {
				e.pimpam = true;

				if (e.pimpam && e.notpimpam) {
					clicks.hits++;
					e.notpimpam = false;
				}
			}
		});
	});

```

For me it was key that each game was different, if all the targets were the same, moving in the same direction and at the same speed, the incentive to overcome would be lost.
>
That's why I introduced these code blocks in which both the target creation position, speed and size are randomized from "playable" values. Each game is different and having these limits offers the possibility to scale it and add new game phases with these progressively higher levels. 


```ts 
constructor (
		initialPos: Point = {
			x: Math.floor(Math.random() * 1800 + 100),
			y: Math.floor(Math.random() * 1100 + 100),
		},
		maxSpeed = Math.floor(Math.random() * 700 + 200),
		widthandheight = Math.floor(
			Math.random() * 100 + 130
		),
		size = { w: widthandheight, h: widthandheight } )

```
``` ts
update(delta: number): void {
		let newPosX =
			this.origin.x + this.dartboardSpeed.x * delta;
		if (
			newPosX <= 2000 - this.dartboardSize.w &&
			newPosX >= this.dartboardSize.w
		) {
			this.origin.x = newPosX;
		}
		let newPosY =
			this.origin.y + this.dartboardSpeed.y * delta;
		if (
			newPosY <= 1300 - this.dartboardSize.h &&
			newPosY >= this.dartboardSize.h
		) {
			this.origin.y = newPosY;
		}

		if (Math.floor(Math.random() * 900) < 10) {
			this.dartboardSpeed.x =
				this.dartboardSpeed.x * -1;
		}
		if (Math.floor(Math.random() * 900) < 10) {
			this.dartboardSpeed.y =
				this.dartboardSpeed.y * -1;
		}
		if (this.pimpam === true) {
			this.dartboardSpeed.x = 0;
			this.dartboardSpeed.y = 0;
		}
	}
```   

## **Other considerations:**

### *- About how I approached the project.*

I think my way of facing this project was not too bad, taking into account that I started with the aesthetic minimum that allowed me to work, and from there I focused on logic, devoting all my time to achieve a "playful" experience for the people who played it.
It was an element of pressure for me not to be able to show something that proposed an objective and that during its execution did not make you at least smile to try to do better than a rival or a previous attempt. I didn't want to make something "pretty" or "flashy" but that didn't have the functionality of a game.

>
The game seems dynamic, replayable and fun within its simplicity. It has taken me a great deal of time and effort to make small progress, as well as personal tutorials and class time, although I feel satisfied that I was prepared to ask the right questions and always have some back up code when I asked them, I had some code that I could use, even if due to inexperience I was not able to adapt or understand it myself.


### *- Difficulties.*
My main difficulty has been fitting together bits of theory that I barely knew from class and being able to implement and understand them in a real project environment. To have been able to do it really on my own, I would have needed much more time, without LuisMi's support I would not have been able to achieve it within the deadline.  
>
I had a simple and concrete error that I could solve by myself and it made me think about the usefulness of having the code so encapsulated. In my initial idea, as I exposed previously, I wanted to give a standard size to the targets to be able to start working with the logic, I gave a size of 100px to the square on which the target is shaped, and its hitbox would be 100/2, the radius. 
Much later, when I managed to implement the randomization, I realized that my big targets, of more than 100px were not reactive to the clicks unless I hit them very close to the center, after much review I realized the error, instead of 100/2 I took the variable of altoyancho and divided it by two, solving the problem.

> 
The level of scalability that allows you to have the code like this, concretized in variables and functions, would greatly simplify the game in different phases, increasing the difficulty by reducing the size of the targets, increasing their quantity, their speed, or the number of times the direction varies. 


### *- Things I liked about this project.*
I enjoyed looking for resources and learning about the modules that can be used with Node, installing and managing third party packages and working with them in a simple way seems like a tool that could save a lot of time in the future. Switching to Typescript with so little experience has cost me a bit, but I felt comfortable with CSS layout. 
> 
### *- Bugs that I would have liked to fix.*
I have not been able to make the alert trigger once I have clicked on the last target, and it has stopped and the last shot is counted in the interface of the game itself.

### *- How could the game be improved.*
A timer could be added so that targets could not be stalked by bouncing or a little speed increment. 
A maximum amount of bullets could be given.
Phases could be added, as I explained above, with progressively increasing difficulty, either with speed, or with more targets, or with a more erratic movement. Of course you could also play with the previous proposals. 
Of course, at the aesthetic and design level many things could be implemented, a better background that was not only made with a css plot, include a good photoshop banner with a logo. Add target break sprites, an exposition, music and sound effects...

## **Licenses.**
*MIT LICENSE: Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:*
>
*The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.*
>
*THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*