$(document).ready(function() {
    $("#lightSlider").lightSlider({
        auto:true,
        autoWidth:true,
        loop:true,
        pause:3000,
        onSliderLoad: function(){
            $("#lightSlider").removeClass('cS-hidden');
        }
    }); 
});

$(".sss").on("click", function(event){
    if (this.hash !== ''){
        event.preventDefault();
        const hash = this.hash
        $("html , body").animate({
            scrollTop: $(hash).offset().top
        },
        800
        )
    }
})

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
