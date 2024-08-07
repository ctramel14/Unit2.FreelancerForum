const freelancers = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
  { name: "Carol", price: 70, occupation: "programmer" },
  { name: "Son Goku", price: 4, occupation: "fighter" },
  { name: "Deku", price: 1, occupation: "hero" },
  { name: "Master Roshi", price: 100, occupation: "teacher" },
  { name: "Ganondorf Dragmire", price: 47, occupation: "dictator" },
  { name: "Groose", price: 1234, occupation: "inventor" },
];

const initialFree = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
];

const maxNames = 15;
function av() {
  const total = initialFree.reduce((acc, initial) => {
    acc = acc + initial.price;
    return acc;
  }, 0);
  return total / initialFree.length;
}
const addFreeLancer= setInterval(addLancer, 3000);
render();

function render() {
  const names = document.querySelector("#freelancers");
  const nameElements = initialFree.map((lancer) => {
    const element = document.createElement("li");
    element.textContent =
      lancer.name + " $" + lancer.price + " " + lancer.occupation;
    return element;
  });
  names.replaceChildren(...nameElements);
  document.getElementById("averageprice").value = av();
}

function addLancer() {
  const lancer = freelancers[Math.floor(Math.random() * freelancers.length)];
  initialFree.push(lancer);

  if (initialFree.length >= maxNames) {
      clearInterval(addFreeLancer);
  }
  render();

}

