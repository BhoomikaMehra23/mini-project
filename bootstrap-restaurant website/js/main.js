(function ($) {
  

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) { //agr id spinner exist krti haiii usmaii kuch value hai null ni haii
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    // new WOW().init();
 // Modal Video





    // document.getElementById('bTable1').addEventListener(onclick,()=>{
    //     book();
    // })
    
    
})(jQuery);

