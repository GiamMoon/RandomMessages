const generateRandomNumber = (num) => {
  return Math.floor(Math.random() * num);
}

const frases = {
  alegres: ["Genial", "Cool", "Inteligente", "Asombroso"],
  tristes: ["Basura", "Inutil", "Descartable"],
  reflexivas: ["Ser el mejor?", "Triunfar en la vida?", "Ser millonario?", "Ser respetado?"]
}

let grupoFrases = [];

for(let frase in frases){
  const fraseElegida = generateRandomNumber(frases[frase].length);

  switch(frase){
    case "alegres":
      grupoFrases.push(`Tu eres: ${frases[frase][fraseElegida]}`);
      break;
    case "tristes":
      grupoFrases.push(`Tu eres: ${frases[frase][fraseElegida]}`);
      break;
    case "reflexivas":
      grupoFrases.push(`Tu podrias: ${frases[frase][fraseElegida]}`);
      break;
    default:
      grupoFrases.push("No se encontro informacion");
      break;
  }

}

const formatearTexto = (frase) => {
  const formateado = frase.join("\n");
  console.log(formateado);
}

formatearTexto(grupoFrases);

