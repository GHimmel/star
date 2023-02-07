const cohere = require("cohere-ai");
cohere.init(process.env.API_KEY);

export default async function ia(req, res) {
  const { comment, name } = req.body;
  const examples = [
    /* 5 estrellas */
    { text: "Este producto es muy bueno", label: "5" },
    { text: "Es lo mejor que vi en la vida", label: "5" },
    { text: "Me encanto", label: "5" },
    { text: "Esta buenisimo", label: "5" },
    { text: "Increible", label: "5" },
    {
      text: "La silla es muy buena, gran calidad y diseño. Fácil armado. Le da un toque muy estético y profesional a cualquier espacio",
      label: "5",
    },
    {
      text: "Muy buena. La verdad es muy cómoda y fácil de armar (no me llevo mas de 10 min). Excelente relación precio validad",
      label: "5",
    },
    {
      text: "Excelente silla. Comoda. Ideal para mi hija que estudia y pasa muchas horas sentada ahi",
      label: "5",
    },
    {
      text: "Muy buena calidad, realmente transparente y va muy bien con el dispensador de cinta",
      label: "5",
    },
    {
      text: "Es la mejor que use hasta ahora , buena adherencia y no es tan fina , rinde mucho y es bien transparente.",
      label: "5",
    },

    /* 4 estrellas */
    {
      text: "Me gusto pero podría ser un poco mejor.",
      label: "4",
    },
    {
      text: "Vengo del modelo anterior,la miband 6 y noto una diferencia en cuanto a comodidad,la otra pulsera me molestaba,me dolía llevarla mucho tiempo,pero este modelo es comodisimo,te olvidas que la llevas puesta,liviana y cómoda. El brillo es una bestialidad,la tengo en la mitad y es más que suficiente,el brillo máximo es prácticamente una linterna,el modelo anterior era opaco,esta pantalla es todo lo contrario.",
      label: "4",
    },
    {
      text: "Lo tengo hace poco tiempo, menos de un mes. Por el momento funciona muy bien para lo que yo lo necesito, no lo uso para deportes.",
      label: "4",
    },
    {
      text: "Vengo del miband 5 y siempre estuve muy conforme hasta que se me rompió (no fue por un problema del reloj sino mío yo lo rompí) y ahora me pase al 7, si bien tiene muchas más funciones hay cosas que extraño del 5. Cómo el icono que aparecía cuando perdía el rango con el celular, ahora para saber tengo que usar ,buscar mí celular. Para saber si está fuera de rango, y la batería me duraba mucho más el del 5. O sea el cambio es bueno pero si el 7 tuviera esas dos cosas sería perfecto, también es una pena que no traiga medidor de temperatura.",
      label: "4",
    },
    {
      text: "Funciona muy bien. La bateria no dura 15 días, pero lo suficiente como para no molestar demasiado con la carga. La pantalla es pequeña, si tienes algún problema de vista sugiero que la veas antes de comprarla. Lamentablemente no encontré opciones para modificar el tamaño de letras, pero tampoco hay demasiado espacio. La opción más grande es bastante mas cara. Una opción que sí me gustaría es que traiga gps incorporado, tembién es bastante más cara la versión que la trae. Pero por lo demás funciona muy bien. Llevo un mes usándola. Espero que la malla dure lo suficiente.",
      label: "4",
    },
    {
      text: "Por el precio y prestaciones es muy recomendable. Pero le falta pulir algunas cosas que imagino se iran solucionando con actualizaciones. La que mas me molesta es tener que cambiar manualmente el brillo desde configuraciones, tambien que el reproductor de musica no se mantenga en una pantalla principal y que cada vez que quiera cambiar tenga que deslizar hacia el reproductor me parace tonto. Otra cosa es que a veces no reconoce los toques en la pantalla para cambiar de tema. Cuando se solucione esto vuelvo a cambiar la puntuacion.",
      label: "4",
    },
    {
      text: "Por su costo no se puede pedir más. Su punto más débil está en su interfaz y la fluides para navegarla. Es algo engorroso hacer cosas super sencillas como poner un temporizador. Y como tiene un refresco de pantalla bastante bajo, cuanto más tenes que navegar, menos natural se siente. Además no cuenta o no traduce los pasos en km en la propia pulcera. Que aunque sean aprox es súper util como hacían modelos anteriores. Los diseños de la pantalla tampoco me convencen, son todos muy ostentosos y complejos.",
      label: "4",
    },

    /* 3 estrellas */
    {
      text: "podria ser mejor",
      label: "3",
    },
    {
      text: "muy bueno pero tiene detalles.",
      label: "3",
    },
    {
      text: "lo baratos sale caro",
      label: "3",
    },
    {
      text: "esta bien, pero es chino",
      label: "3",
    },

    {
      text: "El ventilador es ligero. Es verdad lo que opinan los demas de la potencia. No lo sentí muy ruidoso. Lo normal. A la 3ra velocidad tira mucho viento. Las patas hay q hacer presion para colocarlas (ponerlas como la imagen) pero igual se desarman con facilidad. Lo único por lo que le bajo las estrellas es porque el motor esta descubierto en el centro. Deberia estar tapado con un plástico para protegerlo de liquidos y polvo. De ahí en mas la otra contra es el plástico que no es resistente. Recomiendo dejarlo en una posición fija y taparlo cuando no se lo usa. 3/5.",
      label: "3",
    },
    {
      text: "Es muy bueno en cuanto a potencia, la cantidad de viento que tira. El único problema es que hoy día, lo compré hace casi 4 meses, no queda más trabado en la posición vertical que uno le ajuste, como sí sucedía al principio cuando lo compré, ahora ya no queda fijo y se apunta solo hacia arriba ya que el sistema de traba que tiene ya no lo sujeta (es medio difícil explciar por acá, espero se entienda), me contacte con exahome y me dieron teléfonos para que llame a la garantía para ver a qué service lo puedo llevar.",
      label: "3",
    },
    {
      text: "Medio pelo!! la verdad buscaba algo para la habitación de los chicos y como no quería gastar tanto, lo vi como una opción. Pero por algo está el dicho  ,lo barato sale caro. Con solo decir que la tercera usada se venció el soporte que le da dirección al ventilador. Ya con eso puedo describir lo que es. Queda siempre mirando hacia el techo. El aire que larga es bueno, por el momento, lo usé muy poco. Vamos a ver el próximo verano.",
      label: "3",
    },
    {
      text: "Buen producto, aunque esperaba más, puesto que yo tenía el xiaomi band 2 y nunca falló la sincronización con el celular. Con éste en menos de dos meses se desprogramó totalmente, teniendo que desinstalar, reiniciar y volver a instalar la aplicación. Otro problema es el registro del sueño, al despertarme a medianoche elimina el sueño registrado y toma el restante como siesta. No es lo que esperaba.",
      label: "3",
    },
    {
      text: "Está bueno pero es menos de lo que esperaba. La vinculación con el celular de corta cuando te metes un poco en el agua y eso que tengo una pileta de lona de 70cm de alto nomás, de desvincula y no podía parar la música que escuchaba de unos parlantes bluetooth. Todavía no encontré como se contesta las notificaciones de whatsapp.",
      label: "3",
    },

    /* 2 estrellas */
    {
      text: "Quise usarlo un mes para poder dar mi opinión pero ni al mes llegó. Estuve usandolo en velocidad 1 y todo bien hasta ahí, hasta que el día de ayer hizo demasiado calor así que lo usé en velocidad 3 pero solo aguantó un poco más de una hora encendido y murió. Ahora enciende pero su velocidad es muy baja y hace un ruido como si se hubiesen soltado algunos cables por dentro. Producto de muy mala calidad.",
      label: "2",
    },
    {
      text: "El ventilador es bueno. Pero el material es de muy mala calidad. El sistema de rotación se arruina después de un par de meses de uso y el ventilador se voltea mirando para arriba y tenes que abrirlo, atortinillarlo y dejarlo fijo cada tanto. Si lo quieren cuidar, no lo anden tocando mucho, dejenlo fijo, pero es una pena esa parte del producto.",
      label: "2",
    },
    {
      text: "El producto es de baja calidad, no no cumple con la relación precio /product0. Defectos su base no soporta el pero del equipo de rotación, falta peso para equilibrar el esfuerzo y el brazo de palanca que produce el accionar del mismo. Muy ruidoso, vibra en demasía y la protección se desarma por tal efecto.",
      label: "2",
    },
    {
      text: "Producto de mala calidad. Todo plástico chino. Lo encendí 10 veces y se desarmó la ficha de encendido. , la cual es de plástico. Se le salió el adhesivo y quedaron los cables sueltos. Cuando se cambia la posición vertical, parece que se va a romper y es muy probable que en breve se rompa. Atte.",
      label: "2",
    },

    /* 1 estrella */
    { text: "horrible", label: "1" },
    { text: "no es lo que esperaba", label: "1" },
    { text: "no me gusto", label: "1" },
    { text: "prefiero otra cosa", label: "1" },
    { text: "odioso", label: "1" },
    { text: "Malísima", label: "1" },
    { text: "Le doy una sola estrella xq se corta demasiado.", label: "1" },
    {
      text: "No tiene 100 metros ni ahí, una decepción. He comprado por ml otras cintas que dicen ser de 100 mts también y son muchos mas grandes que esta. Mala calidad.",
      label: "1",
    },
    { text: "Me quede muy disconforme", label: "1" },
    { text: "La verdad no lo recomiendo para nada", label: "1" },
    {
      text: "Es muy malo. Es chico, mala calidad, a penas tira una brisa. Debí agregar dinero y comprar algo aceptable. Me guié por las opiniones y me equivoqué.",
      label: "1",
    },
    {
      text: "Pésimo,ni un mes y la base toda rota. Es tirar la plata a la basura y no reconocen lo malo del mismo",
      label: "1",
    },
  ];
  const response = await cohere.classify({
    inputs: [comment],
    examples: examples,
  });
  console.log(JSON.stringify(response, null, 2));
  res.send(response);
}
