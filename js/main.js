// Google Maps
function initMap() {
    const loc = { lat: -20.1394, lng: -44.8872 };

    const map = new google.maps.Map(document.querySelector(".map"), {
        zoom: 14, center: loc
    });
    const marker = new google.maps.Marker({ position: loc, map: map });
};

// Sticky Menu Vanilla JS
window.addEventListener('scroll', function(){
    if (window.scrollY > 150){
      document.querySelector ('#navbar').style.opacity = 0.9;
    } else {
      document.querySelector('#navbar').style.opacity = 1;
    }
  });

// Smooth Scrolling JQuery
$('#navbar a, .btn').on('click', function (event){
    if (this.hash !== ''){
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 60
        },
        800
        );
    }
  });