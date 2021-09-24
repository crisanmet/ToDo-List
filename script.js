const d = document;
const $fechaDia = d.getElementById("container__fecha__dia");
const $fechaMes = d.getElementById("container__fecha__mes");
const $fechaAnio = d.getElementById("container__fecha__anio");

const toDoList = d.getElementById("container__list");

const setDate = () => {
  const dia = new Date();

  $fechaDia.textContent = dia.toLocaleString("es", { day: "2-digit" });
  $fechaMes.textContent = dia.toLocaleString("es", { month: "short" });
  $fechaAnio.textContent = dia.toLocaleString("es", { year: "numeric" });
};

d.addEventListener("click", (e) => {
  if (e.target.matches(".agregar")) {
    e.preventDefault();
    const valor = d.getElementById("todotext").value;
    if (!valor) return;
    const task = d.createElement("div");
    task.classList.add("list");

    const trash = d.createElement("button");
    trash.textContent = "-";

    const span = d.createElement("span");
    span.textContent = valor;

    task.appendChild(span);
    task.appendChild(trash);

    task.addEventListener("click", cambiarEstado);
    //task.textContent = valor;

    toDoList.prepend(task);
    d.getElementById("todotext").value = "";
  }
});

const cambiarEstado = (e) => {
  e.target.classList.toggle("done");
};

const order = () => {
  const done = [];
  const toDo = [];

  toDoList.childNodes.forEach((e) => {
    e.classList.contains("done") ? done.push(e) : toDo.push(e);
  });
  return [...toDo, ...done];
};

const orderList = () => {
  order().forEach((e) => toDoList.appendChild(e));
};

d.addEventListener("click", (e) => {
  if (e.target.matches(".ordenar")) {
    orderList(toDoList);
  }
});
setDate();
