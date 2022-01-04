// TODO programatically mess with borders and stuff

const c_COLOR_PAIRS = [
  {"background": "#224fb1", "color": "#c1ffff"},
  {"background": "#fffd97", "color": "#7d70d5"},
  {"background": "#f64042", "color": "#473334"},
  {"background": "#fffe04", "color": "#fbc03f"},
  {"background": "#5dd2f0", "color": "#703d54"},
  {"background": "#f77e27", "color": "#2d3738"},
  {"background": "#fcdc2b", "color": "#f53030"},
  {"background": "#83c14a", "color": "#3d6a3e"},
  
  
  {"background": "#c1ffff", "color": "#224fb1"},
  {"background": "#7d70d5", "color": "#fffd97"},
  {"background": "#fbc03f", "color": "#fffe04"},
  {"background": "#703d54", "color": "#5dd2f0"},
  {"background": "#f53030", "color": "#fcdc2b"},
  {"background": "#3d6a3e", "color": "#83c14a"},
  
];

const c_BORDER_STYLES = [
  "dotted",
  "dotted",
  "solid",
  "double",
  "dashed",
  "dashed"
];

function getRandBorderStyle() {
  return c_BORDER_STYLES[Math.floor(Math.random() * c_BORDER_STYLES.length)];
}

function getRandColorPair() {
  return c_COLOR_PAIRS[Math.floor(Math.random() * c_COLOR_PAIRS.length)];
}

function getRandomInt(max, offset) {
  return Math.floor(Math.random() * max) + offset;
}

function setRandomColors() {
  $(".contentLink").each(function(index, element) {
    const colorPair = getRandColorPair();
    $(this).css("background-color", colorPair.background);
    $(this).css("color", colorPair.color);
    $(this).css("border-color", colorPair.color);
    $(this).css("border-width", String(getRandomInt(8, 0)) + "px");
    $(this).css("border-style", getRandBorderStyle());
  });  
}

$(".contentLink").hover(function() {
  const colorPair = getRandColorPair();
  $(this).css("background-color", colorPair.background);
  $(this).css("color", colorPair.color);
  $(this).css("border-color", colorPair.color);
  $(this).css("border-width", String(getRandomInt(8, 0)) + "px");
  $(this).css("border-style", getRandBorderStyle());
  $(this).addClass("blownUpFont");

});

particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 20,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
        "src": "js/img/fish.png", // http://pngimg.com/uploads/waffle/waffle_PNG49.png
          "width": 130,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 40,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1.4,
        "direction": "left",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 45.377304642527047,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });


setRandomColors();