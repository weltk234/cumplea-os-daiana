// 霸都丶傲天 2019.10.10
$(function () {
    let dom = document.createElement("span");
    config.texts.forEach(function (item) {
        let p = document.createElement("p");
        p.innerHTML = item;
        if (config.imgs && config.imgs[item]) {
            let img = document.createElement("img");
            img.src = config.imgs[item];
            img.setAttribute("class", 'text-img');
            p.appendChild(img);
        }
        dom.appendChild(p);
    });
    $("#texts-container").append(dom.innerHTML);
});

$(function () {
    for (let k in config.desc) {
        let dom = $("#" + k);
        if (dom.length > 0 && config.desc[k]) {
            dom.html(config.desc[k]);
        }
    }
});


var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var intervalId;

function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slides[currentSlide].classList.add('active');
}

function showNextSlide() {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide();
}

function startSlideshow() {
  currentSlide = 0;
  showSlide();

  intervalId = setInterval(showNextSlide, 4000);
}

function stopSlideshow() {
  clearInterval(intervalId);
}