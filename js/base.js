
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

// animate an element and remove the animation class after the animation end
function animateCSS(element, effect, fill = true, prefix = 'animate__') {
    const effectName = `${prefix}${effect}`;
    
    element.classList.add(`${prefix}animated`, effectName);

    element.onanimationend = e => {

        if (!fill)
            element.classList.remove(`${prefix}animated`, effectName);
    };
}
