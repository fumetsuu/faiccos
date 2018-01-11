$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
  
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + window.outerHeight-50;
    console.log(elementBottom, viewportTop, elementTop, viewportBottom);
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  


  $(window).on('DOMContentLoaded resize scroll', function() {
      var animElements = $("[anim]");
      for(var i = 0; i < animElements.length; i++) {
        el = animElements[i]
        if($(el).isInViewport()) {
            $(el).addClass(el.getAttribute("anim"));
        }
      }
  });