const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  // Assign initial css classes for gallery and nav items
  setInitialState() {
    this.carouselArray[0].classList.add('gallery-item-first');
    this.carouselArray[1].classList.add('gallery-item-previous');
    this.carouselArray[2].classList.add('gallery-item-selected');
    this.carouselArray[3].classList.add('gallery-item-next');
    this.carouselArray[4].classList.add('gallery-item-last');

    document.querySelector('.gallery-nav').childNodes[0].className = 'gallery-nav-item gallery-item-first';
    document.querySelector('.gallery-nav').childNodes[1].className = 'gallery-nav-item gallery-item-previous';
    document.querySelector('.gallery-nav').childNodes[2].className = 'gallery-nav-item gallery-item-selected';
    document.querySelector('.gallery-nav').childNodes[3].className = 'gallery-nav-item gallery-item-next';
    document.querySelector('.gallery-nav').childNodes[4].className = 'gallery-nav-item gallery-item-last';
  }

  // Update the order state of the carousel with css classes
  setCurrentState(target, selected, previous, next, first, last) {

    selected.forEach(el => {
      el.classList.remove('gallery-item-selected');

      if (target.className == 'gallery-controls-previous') {
        el.classList.add('gallery-item-next');
      } else {
        el.classList.add('gallery-item-previous');
      }
    });

    previous.forEach(el => {
      el.classList.remove('gallery-item-previous');

      if (target.className == 'gallery-controls-previous') {
        el.classList.add('gallery-item-selected');
      } else {
        el.classList.add('gallery-item-first');
      }
    });

    next.forEach(el => {
      el.classList.remove('gallery-item-next');

      if (target.className == 'gallery-controls-previous') {
        el.classList.add('gallery-item-last');
      } else {
        el.classList.add('gallery-item-selected');
      }
    });

    first.forEach(el => {
      el.classList.remove('gallery-item-first');

      if (target.className == 'gallery-controls-previous') {
        el.classList.add('gallery-item-previous');
      } else {
        el.classList.add('gallery-item-last');
      }
    });

    last.forEach(el => {
      el.classList.remove('gallery-item-last');

      if (target.className == 'gallery-controls-previous') {
        el.classList.add('gallery-item-first');
      } else {
        el.classList.add('gallery-item-next');
      }
    });
  }

  // Construct the carousel navigation
  setNav() {
    galleryContainer.appendChild(document.createElement('ul')).className = 'gallery-nav';

    this.carouselArray.forEach(item => {
      const nav = galleryContainer.lastElementChild;
      nav.appendChild(document.createElement('li'));
    }); 
  }

  // Construct the carousel controls
  setControls() {
    this.carouselControls.forEach(control => {
      galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
    }); 

    !!galleryControlsContainer.childNodes[0] ? galleryControlsContainer.childNodes[0].innerHTML = this.carouselControls[0] : null;
    !!galleryControlsContainer.childNodes[1] ? galleryControlsContainer.childNodes[1].innerHTML = this.carouselControls[1] : null;
  }
 
  // Add a click event listener to trigger setCurrentState method to rearrange carousel
  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];

    triggers.forEach(control => {
      control.addEventListener('click', () => {
        const target = control;
        const selectedItem = document.querySelectorAll('.gallery-item-selected');
        const previousSelectedItem = document.querySelectorAll('.gallery-item-previous');
        const nextSelectedItem = document.querySelectorAll('.gallery-item-next');
        const firstCarouselItem = document.querySelectorAll('.gallery-item-first');
        const lastCarouselItem = document.querySelectorAll('.gallery-item-last');

        this.setCurrentState(target, selectedItem, previousSelectedItem, nextSelectedItem, firstCarouselItem, lastCarouselItem);
      });
    });
  }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.setNav();
exampleCarousel.setInitialState();
exampleCarousel.useControls();



















//second carousel

function shiftLeft() {
  const boxes = document.querySelectorAll(".box");
  const tmpNode = boxes[0];
  boxes[0].className = "box move-out-from-left";

  setTimeout(function() {
      if (boxes.length > 5) {
          tmpNode.classList.add("box--hide");
          boxes[5].className = "box move-to-position5-from-left";
      }
      boxes[1].className = "box move-to-position1-from-left";
      boxes[2].className = "box move-to-position2-from-left";
      boxes[3].className = "box move-to-position3-from-left";
      boxes[4].className = "box move-to-position4-from-left";
      boxes[0].remove();

      document.querySelector(".cards__container").appendChild(tmpNode);

  }, 500);

}

function shiftRight() {
  const boxes = document.querySelectorAll(".box");
  boxes[4].className = "box move-out-from-right";
  setTimeout(function() {
      const noOfCards = boxes.length;
      if (noOfCards > 4) {
          boxes[4].className = "box box--hide";
      }

      const tmpNode = boxes[noOfCards - 1];
      tmpNode.classList.remove("box--hide");
      boxes[noOfCards - 1].remove();
      let parentObj = document.querySelector(".cards__container");
      parentObj.insertBefore(tmpNode, parentObj.firstChild);
      tmpNode.className = "box move-to-position1-from-right";
      boxes[0].className = "box move-to-position2-from-right";
      boxes[1].className = "box move-to-position3-from-right";
      boxes[2].className = "box move-to-position4-from-right";
      boxes[3].className = "box move-to-position5-from-right";
  }, 500);

}
















// Interaction avec le second carousel

document.getElementById("box1", "box2", "box3", "box4", "box5", "box6", "box7").style.backgroundSize = "100%";

document.getElementById("q_t").addEventListener("click", showQt);

function showQt() {
  document.getElementById("box1").style.backgroundImage = "url('images/reservoir_dog.jpg')";
  document.getElementById("box2").style.backgroundImage = "url('images/kill_bill.jpg')";
  document.getElementById("box3").style.backgroundImage = "url('images/salopards.jpg')";
  document.getElementById("box4").style.backgroundImage = "url('images/django.jpg')";
  document.getElementById("box5").style.backgroundImage = "url('images/basterds.jpg')";
  document.getElementById("box6").style.backgroundImage = "url('images/pulp_fiction.jpg')";
  document.getElementById("box7").style.backgroundImage = "url('images/hollywood.jpg')";
};

document.getElementById("p_j").addEventListener("click", showPj);

function showPj() {
  document.getElementById("box1").style.backgroundImage = "url('images/king_kong.jpg')";
  document.getElementById("box2").style.backgroundImage = "url('images/engines.jpg')";
  document.getElementById("box3").style.backgroundImage = "url('images/hobbit.jpg')";
  document.getElementById("box4").style.backgroundImage = "url('images/commu_anneau.jpg')";
  document.getElementById("box5").style.backgroundImage = "url('images/deux_tours.jpg')";
  document.getElementById("box6").style.backgroundImage = "url('images/roi.jpg')";
  document.getElementById("box7").style.backgroundImage = "url('images/fantomes_contre_fantomes.jpg')";
};

document.getElementById("g_l").addEventListener("click", showGl);

function showGl() {
  document.getElementById("box1").style.backgroundImage = "url('images/star_wars_ep1.jpg')";
  document.getElementById("box2").style.backgroundImage = "url('images/att_clones.jpg')";
  document.getElementById("box3").style.backgroundImage = "url('images/sith.jpg')";
  document.getElementById("box4").style.backgroundImage = "url('images/espoir.jpg')";
  document.getElementById("box5").style.backgroundImage = "url('images/empire_contre_attaque.png')";
  document.getElementById("box6").style.backgroundImage = "url('images/jedi.jpg')";
  document.getElementById("box7").style.backgroundImage = "url('images/indiana.jpg')";
};

document.getElementById("c_n").addEventListener("click", showCn);

function showCn() {
  document.getElementById("box1").style.backgroundImage = "url('images/dark_knight.jpg')";
  document.getElementById("box2").style.backgroundImage = "url('images/inception.jpg')";
  document.getElementById("box3").style.backgroundImage = "url('images/interstellar.jpg')";
  document.getElementById("box4").style.backgroundImage = "url('images/memento.jpg')";
  document.getElementById("box5").style.backgroundImage = "url('images/insomnia.jpg')";
  document.getElementById("box6").style.backgroundImage = "url('images/steel.jpg')";
  document.getElementById("box7").style.backgroundImage = "url('images/prestige.jpg')";
};

document.getElementById("d_c").addEventListener("click", showDc);

function showDc() {
  document.getElementById("box1").style.backgroundImage = "url('images/10_cloverfield_lane.jpg')";
  document.getElementById("box2").style.backgroundImage = "url('images/doublure.jpg')";
  document.getElementById("box3").style.backgroundImage = "url('images/whiplash.jpg')";
  document.getElementById("box4").style.backgroundImage = "url('images/land.jpg')";
  document.getElementById("box5").style.backgroundImage = "url('images/first_man.jpg')";
  document.getElementById("box6").style.backgroundImage = "url('images/madeline.jpg')";
  document.getElementById("box7").style.backgroundImage = "url('images/eddy.jpg')";
};


//cookies

document.cookie = 'user=Martin';
alert(document.cookie);