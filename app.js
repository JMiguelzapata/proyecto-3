const uno = document.getElementById("input");
const dos = document.getElementById("monto");
const tres = document.getElementById("button");
const cuatro = document.getElementById("ul");
const cinco = document.getElementById("p")

let total = 0;

tres.addEventListener("click" , () => {
  let valor1 = uno.value;
  let valor2 = dos.value;

  if (valor1 === "" || valor2 === "" ) {
  return;
  }

  const li = document.createElement("li");
  li.textContent = valor1 + "Total $" + valor2;
  cuatro.appendChild(li); 

  total = total + Number(valor2);
  cinco.textContent = "total: $" + total;

  uno.value = "";
  
  dos.value = "";
});