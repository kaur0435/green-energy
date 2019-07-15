function preloader() {
    const imagesPaths = [
           "./img/solar_cells.jpg",
           "./img/wind_power.jpg",
           "./img/hydroelectric_energy.jpg"
        ];
    const images = [];
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }

    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);

let btns = document.querySelectorAll('button');

let dataResource = [
    {
        heading: "Solar Cells",
        bodyText: "Solar cells can be used to generate electricity from sunlight. It is a device that converts light energy into electrical energy.Solar cells have many applications. They have long been used in situations where electrical power from the grid is unavailable e.g. handheld calculators or wrist watches, remote radiotelephones and water pumping applications.Solar cells are very useful in powering space vehicles such as satellites and telescopes (e.g. Hubble). They provide a very economical and reliable way of powering objects which would otherwise need expensive and cumbersome fuel sources.",
        imgUrl: "./img/solar_cells.jpg"
    },
    {
        heading: "Wind Power",
        bodyText: "Wind power is the use of air flow through wind turbines to provide the mechanical power to turn electric generators and traditionally to do other work.This mechanical power can be used for specific tasks (such as grinding grain or pumping water) or a generator can convert this mechanical power into electricity to power homes, businesses, schools, and the like.One of the most popular uses of wind energy today is for wind power generation. During this process, a wind turbine is used to harness the energy of the wind. As the wind starts to move the turbine blades, a generator starts to turn which then produces electricity.",
        imgUrl: "./img/wind_power.jpg"
    },
    {
        heading: "Hydroelectric Energy",
        bodyText: "Hydroelectric energy is a form of energy that harnesses the power of water in motion—such as water flowing over a waterfall—to generate electricity.The main ingredients of hydroelectric power plants are dams, rivers and turbines. Plants use dams to create reservoirs where the water is stored. This water is then released through turbines and spun to activate generators and create electricity.Hydro sites can be good places to locate a major production facility because of the cheap and plentiful energy they produce — hydro power typically is a cost-competitive source of energy.Unlike fossil fuels, hydropower is a clean source of energy.",
        imgUrl: "./img/hydroelectric_energy.jpg"
    }
];

let $content = document.querySelector(".content");

$content.innerHTML = `<div class="heading">
                        <h3>${dataResource[0].heading}</h3>
                      </div>
                      <div class="ge_images">
                        <img src="${dataResource[0].imgUrl}" alt="Keep Out Sunlight">
                      </div>
                      <div class="text">
                        <p>${dataResource[0].bodyText}</p>
                      </div>`;


function handleEvent(ev) {

    for (let i = 0; i < btns.length; i++) {
        if (btns[i].hasAttribute("id")) {
            btns[i].removeAttribute("id");
            console.log(btns[i]);
        }
    }

    let currentItem = ev.currentTarget;
    currentItem.setAttribute("id", "active");
}

for (let btn of btns) {
    btn.addEventListener("click", handleEvent);
}

function eventHandler(ev) {

    let clickedBtn = ev.currentTarget;
    let btnText = clickedBtn.dataset.btn;

    if (btnText === "PAGE1") {
        $content.innerHTML = `<div class="heading">
                                <h3>${dataResource[0].heading}</h3>
                            </div>
                            <div class="ge_images">
                                <img src="${dataResource[0].imgUrl}" alt="Keep Out Sunlight">
                            </div>
                            <div class="text">
                              <p>${dataResource[0].bodyText}</p>
                            </div>`;
    } else if (btnText === "PAGE2") {
        $content.innerHTML = `<div class="heading">
                                <h3>${dataResource[1].heading}</h3>
                            </div>
                            <div class="ge_images">
                                <img src="${dataResource[1].imgUrl}" alt="Solar Heating System">
                            </div>
                            <div class="text">
                                <p>${dataResource[1].bodyText}</p>
                            </div>`;
    } else {
        $content.innerHTML = `<div class="heading">
                                <h3>${dataResource[2].heading}</h3>
                              </div>
                              <div class="ge_images">
                                <img src="${dataResource[2].imgUrl}" alt="Avoid Electrical Heaters">
                              </div>
                              <div class="text">
                                <p>${dataResource[2].bodyText}</p>
                              </div>`;
    }
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", eventHandler);
}
