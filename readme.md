==================================================================
          Omar Elassal Readme File
==================================================================

(c) 2021 Omar Elassal. All rights reserved.

==================================================================
CONTENTS
==================================================================
1. Introduction
2- what's in the files
3. problems & their solutions
4. explaining the simple jquery method used
==================================================================
1. Introduction
==================================================================
  
Thank you very much for checking the code behind this simple method used on the template discussed.

This document provides information to help you use & understand the code in the repository. 
It deals with problems, solutions and possible applied scenarios that were tried and were near to be worked.

due to variety of text editors, all the codes were written using visual studio code, feel free to use a different 
text editor of your choice such as brackets, atom, intellij, etc... but please consider syntaxes and corrections
in different editors. 

You are completely free to use the code in your project, but in case of commercial use
please refer to the creator of this content.

==================================================================
2. what's in the files
==================================================================
the file includes:
shop.html --> the html page viewed
images used as a reference in the assets folder ( approx. 180~210 images all compress)
css --> stylesheet used to beautify and style the website
custom.js --> jquery easy script used to make the images section view

==================================================================
3. problems & their solutions
==================================================================

As for an instance creating a grid system inside a grid system might be very annoying specially if you are on a tight 
deadline, so as i got solution for this on the last minute of a deadline and within around an hour and a half 
searching online to find a solution it paid off finally with a solution using jquery. but at the end it was very easy to be thought of using jquery and a pinch of CSS on top but the easiest solutions sometimes are the ones that we might not be looking at.

here are the applied scenarios to find a solution:

1- first of all to try and make a gallery that scrolls like bootstrap pagination including a grid of images instead of 
data aligned in rows and coloumns in a table. This was not the best of the solutions because it didn't accept the different sizes of the images because if the grid system in bootstrap was used inside a bootstrap pagination, then
it simply will not be able to identify the size it should be considered from like (col-md-3 of a col-md-6 in which the parent has a width of 100% from a body that has col-lg-9 from the whole body container.

2- trying bootstrap carousel with all the different images but still this will not solve the issue if i tried to change 
from a brand of a product to another and it will be also viewing a huge numerous of images which may leave a bad 
user experience as the user has to scroll through the whole carousel to find specific image

3- again using bootpag which is a library that makes pages using bootstrap also didn't pay of because it was a mix between the carousel and pagination. However, if tried to put images stacked next to each other floating in rows it will difinetely not work because the page it self can either view texts (data) or images one by one which in that case similar to carousel

4- at the end, tried to select all the id's named for the hypertext anchor tags using jquery to be able to select different sections with different styles and images.
as a solution i made one section that was working fine as it looked like a table of images with scroll bar inside the website. Then duplicated this section into several section and with the help of the replacing way in VSCode replaced the directory only in different section as each products file was divided in different folders according to product name (not to mention that the client didn't provide images for some products which in that case made me use iframe tag and put the website of the companies -he deals with- inside the viewing section instead of images for some products.

==================================================================
4. explaining the simple jquery + css method used
==================================================================
first of all i named a class next to the other classes for the div's that inlcude the images.
In html, if you name an elemnt with a class then leave a space between the attributes, then it's translated as dots 
on any other file affecting html. (e.g: class="thisname myclass") then it's translated as (.this.name) dealing with it as one element that can be divided.

in the html file after naming the div class=" (whatever the name is) myclass" i returned back to the css file first to make all the elements that has my class display as none ( so it's actually present in the code but no place for them on the webpage) once this is done i have gone ahead to my custom.js file to make a custom jquery which in return will be checking every single hypertext link (anchor tag) as each product is inside an anchor tag and has its own id.

in jquery there is a method called .clone() that performs a deep copy of the set of matched elements, meaning that it copies the matched elements as well as all of their descendant elements and text nodes.

so basically it's similar to calling element by id in javascript  but including all the children of this parent, and making a copy of it then adding a "click" which is a trigger and also is a shortcut for .on( "click", handler ) telling it that once it's clicked specific elements
become having the display:"none" value except for the ones that is clicked which in that case will be the (.classname.myclass) that we mentioned in the past few lines.

of course becuase they all have the myclass attribute but they are different on their names according to products names, but one thing in common is, they all either get .remove() by jquery and that's only applied for the first elemnt that
has the first pictures ( the active div) or like the other div's that has the "display" set to "none".

so basically it's a process of adding and deleting but also jquery allows for a clone so that you don't either use a backend service get elements lost if they get deleted.
