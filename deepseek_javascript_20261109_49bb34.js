const projects = [
  "Сайт-визитка (этот)",
  "Калькулятор на JS",
  "To-Do список"
];

const list = document.getElementById("project-list");
projects.forEach(p => {
  const li = document.createElement("li");
  li.textContent = p;
  list.appendChild(li);
});