# Workshop 4: Funky Poem Generator TW: FLASHING LIGHTS

Website link: (https://harn475.github.io/workshop-6/)

## Overview

This p5.js sketch allows users to create a funky, dynamic poem with an abstract visual style. The poem is created by adding sentences via an input field, and the last word of each sentence is replaced with a random rhyme. The sketch features dynamic styling, where users can choose between an abstract or plain background, as well as abstract or plain text styles. The generated poem can be saved as a text file.

## Features

- **Funky Poem Creation**: Users can enter text and add it to a growing poem, with the last word of each sentence replaced by a random rhyme.
- **Abstract Visual Styles**: The sketch includes two background styles (abstract and plain) and two text styles (abstract and plain) for users to customize the visual presentation.
- **Dynamic Title**: The title of the poem is automatically generated based on the content of the poem, using the last word from a random line.
- **Poem Saving**: Once the poem is created, users can save it as a text file for later use.

## Progress (Problem Solving/Code)

- **Font and Layout**: The sketch loads a custom font (`Monstrous_Fish.otf`) to enhance the visual style of the poem. The main title and input elements are positioned dynamically on the canvas.
- **Interactive Input**: The user can enter text in an input field and add it to the poem by pressing the "Add to Poem" button. Each added line replaces the last word with a rhyme, enhancing the creativity of the poem.
- **Text Styling**: The user can choose between abstract and plain text and background styles. The "Abstract" text style includes random colors and a pulsating effect, while the "Plain" style displays black, static text. The "Abstract" background changes randomly with each frame, while the "Plain" background is a simple white.
- **Poem Title**: The title is automatically generated using the last word of a random line from the poem. If the poem is empty, the title is "Untitled Poem."
  
## Issues Faced

One of the challenges during the development of this project was deciding on how to handle the visual styling and interaction design. After several attempts, I successfully integrated the "Abstract" background and text styles, making sure they were dynamically applied as per the user’s choice. The function for replacing the last word with a rhyme also required a lot of tweaking to ensure that it only applied correctly when a new sentence was added.

## Final Coding Comments

- **Dynamic and Interactive**: The combination of interactive elements (input field, buttons, dropdowns) with dynamic visuals (random color generation and pulsating text) created an engaging user experience.
- **User Customization**: The background and text style choices added a layer of personalization, allowing users to express their creativity not only through the poem but also through the overall design of the sketch.
- **Poem Structure**: The rhyme replacement mechanism, utilizing RiTa (a natural language processing library), added a unique touch to the poem creation process. 

## Future Development

- **Better Title Generation**: I would like to improve the title generation process, perhaps using more sophisticated algorithms or drawing inspiration from the entire poem rather than just one line.
- **Interactive Poem Visualization**: In the future, I could add interactive elements where users can manipulate the poem text directly on the canvas, such as moving or resizing lines.
- **Additional Customization**: Adding more customizable options for text size, font, or background image would allow for greater flexibility in the design of the poem.

## Reflection

This project allowed me to explore creative coding, combining text manipulation with dynamic visual elements. I really enjoyed the process of making the poem both visually engaging and interactive. The functionality for adding lines and automatically generating a title was particularly satisfying to implement. If I could change anything, it would be to enhance the styling of the title itself, as I feel the current version could be more eye-catching. Overall, this was a fun project.

Certainly! Here's a reference list along with a declaration of your help sources:

---

**Reference List:**

1. p5.js Reference - 2D Primitives. (n.d.). Retrieved from [https://p5js.org/reference/#2D%20Primitives](https://p5js.org/reference/#2D%20Primitives)
   
2. p5.js Discourse Forum. (n.d.). Retrieved from [https://discourse.processing.org/c/p5js/10](https://discourse.processing.org/c/p5js/10)
   
3. Reddit Users.

---

**Declaration:**

I declare that I received help with my coding from my flatmate, who is experienced with programming. Additionally, I conducted several quick Google searches to resolve issues encountered during the development process. These searches helped in understanding how to implement specific features and troubleshoot problems, especially related to p5.js, as well as getting advice from relevant forums and communities.
