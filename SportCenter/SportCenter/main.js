let yogaBtn = document.querySelector("#yoga");
let groupBtn = document.querySelector("#group");
let soloBtn = document.querySelector("#solo");
let stretchingBtn = document.querySelector("#stretching");
let content = document.querySelector("#classes-content");

let yoga = () => {
  content.innerHTML = `  <div class="flex flex-col">
  <div id="content-one" class="mb-6">
    <h1 class="text-2xl">Why are your Yoga?</h1>
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
      itaque incidunt iusto fuga! Odit dolorem similique ad culpa
      corrupti earum blanditiis consectetur saepe aliquam ratione dolore
      hic facilis quo veniam, molestias vel dolores quia, unde iusto
      nemo minima quod dolorum?
    </p>
  </div>
  <div id="content-two">
    <h1 class="text-2xl">When comes Yoga Your Time.</h1>
    <br />
    <p>Saturday-Sunday: 8:00am - 10:00am</p>
    <br />
    <p>Monday-Tuesday: 8:00am - 10:00am</p>
    <br />
    <p>Wednesday-Friday: 3:00am - 6:00am</p>
  </div>
</div>
<div class="flex items-center mt-4 sm:mt-10">
  <img src="Resimler/yoga.jpg" alt="" />
</div>`;
};

let group = () => {
  content.innerHTML = `  <div class="flex flex-col">
  <div id="content-one" class="mb-6">
    <h1 class="text-2xl">Why are your Group?</h1>
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
      itaque incidunt iusto fuga! Odit dolorem similique ad culpa
      corrupti earum blanditiis consectetur saepe aliquam ratione dolore
      hic facilis quo veniam, molestias vel dolores quia, unde iusto
      nemo minima quod dolorum?
    </p>
  </div>
  <div id="content-two">
    <h1 class="text-2xl">When comes Group Your Time.</h1>
    <br />
    <p>Saturday-Sunday: 8:00am - 10:00am</p>
    <br />
    <p>Monday-Tuesday: 8:00am - 10:00am</p>
    <br />
    <p>Wednesday-Friday: 3:00am - 6:00am</p>
  </div>
</div>
<div class="flex items-center mt-4 sm:mt-10">
  <img src="Resimler/group.webp" alt="" />
</div>`;
};

let solo = () => {
  content.innerHTML = `  <div class="flex flex-col">
  <div id="content-one" class="mb-6">
    <h1 class="text-2xl">Why are your Solo?</h1>
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
      itaque incidunt iusto fuga! Odit dolorem similique ad culpa
      corrupti earum blanditiis consectetur saepe aliquam ratione dolore
      hic facilis quo veniam, molestias vel dolores quia, unde iusto
      nemo minima quod dolorum?
    </p>
  </div>
  <div id="content-two">
    <h1 class="text-2xl">When comes Solo Your Time.</h1>
    <br />
    <p>Saturday-Sunday: 8:00am - 10:00am</p>
    <br />
    <p>Monday-Tuesday: 8:00am - 10:00am</p>
    <br />
    <p>Wednesday-Friday: 3:00am - 6:00am</p>
  </div>
</div>
<div class="flex items-center mt-4 sm:mt-10">
  <img src="Resimler/solo.jpg" alt="" />
</div>`;
};

let stretching = () => {
  content.innerHTML = `  <div class="flex flex-col">
  <div id="content-one" class="mb-6">
    <h1 class="text-2xl">Why are your Stretching?</h1>
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
      itaque incidunt iusto fuga! Odit dolorem similique ad culpa
      corrupti earum blanditiis consectetur saepe aliquam ratione dolore.
    </p>
  </div>
  <div id="content-two">
    <h1 class="text-2xl">When comes Stretching Your Time.</h1>
    <br />
    <p>Saturday-Sunday: 8:00am - 10:00am</p>
    <br />
    <p>Monday-Tuesday: 8:00am - 10:00am</p>
    <br />
    <p>Wednesday-Friday: 3:00am - 6:00am</p>
  </div>
</div>
<div class="flex items-center mt-4 sm:mt-10">
  <img src="Resimler/stret.webp" alt="" />
</div>`;
};

let buttons = document.querySelector("#buttons");

buttons.addEventListener("click", (event) => {
  let btnId = event.target.id;
  switch (btnId) {
    case "yoga":
      yoga();
      break;
    case "group":
      group();
      break;
    case "solo":
      solo();
      break;
    case "stretching":
      stretching();
      break;
    default:
      return;
  }
});

let navbar = document.querySelector("#navbar");
let joinBtn = document.querySelector("#join-btn");
window.addEventListener("scroll", (event) => {
  let scroll = window.scrollY;
  if (scroll > 110) {
    navbar.classList.add("bg-primary");
    navbar.classList.add("transition-all");
    joinBtn.classList.remove("hover:bg-primary");
    joinBtn.classList.add("hover:bg-white");
    joinBtn.classList.add("hover:text-primary");
  } else if (scroll < 100) {
    navbar.classList.remove("bg-primary");
    joinBtn.classList.add("hover:bg-primary");
    joinBtn.classList.remove("hover:bg-white");
    joinBtn.classList.remove("hover:text-primary");
  }
});

// BMİ CALCULATOR

let bmiHeight = document.querySelector("#height");
let bmiWeight = document.querySelector("#weight");
let bmiText = document.querySelector("#bmi-span");
let triangle = document.querySelector("#triangle");

bmiWeight.addEventListener("input", () => {
  let bmiResult = (bmiWeight.value / (bmiHeight.value / 100) ** 2).toFixed(2);
  let move;

  if (bmiResult > 13.5 && bmiResult < 35) {
    move = 8 + ((bmiResult - 13.5) * 78) / 25;
    console.log(move);
  }
  if (bmiResult > 35) {
    triangle.style.left = "86%";
  }
  if (move > 8) {
    triangle.style.left = `${move}%`;
  }

  bmiText.innerHTML = `&nbsp ${bmiResult} kg/m2`;
});
