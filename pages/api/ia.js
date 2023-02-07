const cohere = require("cohere-ai");
cohere.init(process.env.API_KEY);

export default async function ia(req, res) {
  const { comment, name } = req.body;
  const examples = [
    { text: "Este producto es muy bueno", label: "bueno" },
    { text: "Es lo mejor que vi en la vida", label: "bueno" },
    { text: "Me encanto", label: "bueno" },
    { text: "Esta buenisimo", label: "bueno" },
    { text: "Increible", label: "bueno" },
    /*  */
    /* {
      text: "La silla es muy buena, gran calidad y diseño. Fácil armado. Le da un toque muy estético y profesional a cualquier espacio",
      label: "bueno",
    },
    {
      text: "Muy buena. La verdad es muy cómoda y fácil de armar (no me llevo mas de 10 min). Excelente relación precio validad",
      label: "bueno",
    },
    {
      text: "Excelente silla. Comoda. Ideal para mi hija que estudia y pasa muchas horas sentada ahi",
      label: "bueno",
    },
    {
      text: "Muy buena calidad, realmente transparente y va muy bien con el dispensador de cinta",
      label: "bueno",
    },
    {
      text: "Es la mejor que use hasta ahora , buena adherencia y no es tan fina , rinde mucho y es bien transparente.",
      label: "bueno",
    }, */
    /*  */
    { text: "horrible", label: "malo" },
    { text: "no es lo que esperaba", label: "malo" },
    { text: "no me gusto", label: "malo" },
    { text: "prefiero otra cosa", label: "malo" },
    { text: "odioso", label: "malo" },
    { text: "Malísima", label: "malo" },
    /*  */
    /* { text: "Le doy una sola estrella xq se corta demasiado.", label: "malo" },
    {
      text: "No tiene 100 metros ni ahí, una decepción. He comprado por ml otras cintas que dicen ser de 100 mts también y son muchos mas grandes que esta. Mala calidad.",
      label: "malo",
    },
    { text: "Me quede muy disconforme", label: "malo" },
    { text: "La verdad no lo recomiendo para nada", label: "malo" },
    {
      text: "Es muy malo. Es chico, mala calidad, a penas tira una brisa. Debí agregar dinero y comprar algo aceptable. Me guié por las opiniones y me equivoqué.",
      label: "malo",
    },
    {
      text: "Pésimo,ni un mes y la base toda rota. Es tirar la plata a la basura y no reconocen lo malo del mismo",
      label: "malo",
    }, */
  ];
  const response = await cohere.classify({
    inputs: [comment],
    examples: examples,
  });
  console.log(JSON.stringify(response, null, 2));
  res.send(response);
}
