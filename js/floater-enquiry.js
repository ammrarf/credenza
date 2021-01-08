
$('#floater-enquiry__button').click(function() {
    
    if ($('#floater-enquiry__container').css('display') == 'none' && $('#floater-enquiry__form-wrapper').css('display') == 'none') {
        $('#enquiry__success-text').hide();
        $('#floater-enquiry__form-wrapper').show();
    }
    
    $('#floater-enquiry__container').toggle({
        effect: 'scale',
        easing: 'swing',
        duration: 250,
    });
});


const floaterForm = document.getElementById('floater-enquiry__form');
const floaterFormButton = document.getElementById('floater-form__button');

floaterFormButton.onclick = (event) => {
    validateForm(floaterFormButton, floaterForm);

    form.reset();
}

floaterForm.onsubmit = function(event) {
    
    $('#floater-enquiry__form-wrapper').hide();
    $('#enquiry__success-text').show();
    floaterForm.reset();
    event.preventDefault();
};

floaterFormButton.onclick = function(event) {

    if (!floaterForm.checkValidity()) {
        animateCSS(floaterFormButton, 'headShake', false);
        $(floaterFormButton).addClass('button--invalid');
        
    } else {
        if ($(floaterFormButton).hasClass('button--invalid'))  
            $(floaterFormButton).removeClass('button--invalid');   
    }
};

floaterForm.oninput = function(event) {
    
    if (!floaterForm.checkValidity()) 
            $(floaterFormButton).removeClass('button--invalid');
};