//1. Briefly describe what the animate() function does in JQuery.
    //its a method in jquery to animate a css.

//2. What is a selector in JQuery?
    //its getting a element trough getting element by id just by jquery $("whatever");

//3. What selector would you use to select all text inputs inside a div with a text-boxes class?
    //$('div.classname > input');

//4. What does the append() method do in JQuery?
    //appends content to the element as a child of element, and puts it at bottom.

//5. What does the empty() method do in JQuery? !NB
    //empties content of element

//6. What does the following code do $(document).ready(function(){}) ?
    //waits for document to have loaded all dom elements before executing any files.

//7. What does the .blur() function do in JQuery.


//8. How would you select a class in JQuery?
    //$('.whatever');

//9. How would you select an ID in JQuery?
    //$('#whatever');

//10. Find and implement an image slider or gallery plugin using at least three images from Unsplash or another free image source. Add all the required HTML, CSS and JavaScript files to a repo called your-name-js-frameworks-ma-1.

function slideSwitch() {
    let $active = $('#slideshow IMG.active');
    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');
    let $next =  $active.next().length ? $active.next()
        : $('#slideshow IMG:first');
    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}
$(function() {
    setInterval( "slideSwitch()", 5000 );
});