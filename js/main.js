fetch("./js/proyectos.json")
  .then((res) => res.json())
  .then((data) => {
    proyectos = data;
    cargarProyectos(proyectos);
  })
  .catch((error) => console.error("Error al cargar el archivo JSON:", error));

function cargarProyectos(proyectos) {
  const proyectoContainer = document.querySelector(".proyecto-container");
  const modalContainer = document.querySelector(".modal-container");
  const modalContent = document.querySelector(".modal-content");

  proyectoContainer.innerHTML = "";
  proyectos.forEach((proyecto) => {
    const div = document.createElement("div");
    div.classList.add("proyecto-card");
    div.innerHTML = `
    <h3>${proyecto.nombre}</h3>
    `;
    div.style.background = `url(${proyecto.img}) no-repeat center center/cover`;
    proyectoContainer.append(div);

    div.addEventListener("click", () => {
      mostrarModal(proyecto);
    });
  });
  const mostrarModal = (proyecto) => {
    modalContainer.classList.add("active");
    modalContent.innerHTML = `
    <div class="modal-title">
        <h2>${proyecto.nombre}</h2>
        <i class="bi bi-x-octagon-fill"></i>
    </div>
    <div class="modal-descripcion">
        <h3>Descripcion</h3>
        <p>${proyecto.descripcion}</p>
    </div>
    <div class="modal-deploy">
    <div class="modal-deploy_git">
    <a href="${proyecto.github}" target="_blank"><i class="bi bi-github"></i><p>Github</p></a>
        </div>
    <div class="modal-deploy_page">
    <a href="${proyecto.deploy}" target="_blank"><i class="bi bi-window"></i><p>Deploy</p></a>
        </div>

</div>

    `;

    let cerrarModal = document.querySelector(".bi-x-octagon-fill");
    cerrarModal.addEventListener("click", () => {
      modalContainer.classList.remove("active");
    });
  };
}

// slider
const btnPrev = document.querySelector(".btn-anterior");
const btnNext = document.querySelector(".btn-siguiente");
const slider = document.querySelector(".proyecto-container");
let width = window.innerWidth;

let posicion = 0;

btnNext.addEventListener("click", () => {
  if (width > 500) {
    posicion < 2 ? posicion++ : (posicion = 0);
    actualizarSlider();
  } else {
    posicion < 3 ? posicion++ : (posicion = 0);
    width > 500 ? actualizarSlider() : actualizarSliderResponsive();
  }
});

btnPrev.addEventListener("click", () => {
  posicion > 0 && posicion--;
  width > 500 ? actualizarSlider() : actualizarSliderResponsive();
});

const actualizarSlider = () => {
  let operacion = posicion * -50;
  slider.style.transform = `translateX(${operacion}%)`;
};

const actualizarSliderResponsive = () => {
  let operacion = posicion * -98;
  slider.style.transform = `translateX(${operacion}%)`;
};
