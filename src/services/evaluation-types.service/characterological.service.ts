export const characterologicalQuestions: Array<{ answer1: string, answer2: string, answer3?: string }> = [
  {
    answer1: '¿Se siente mal por cosas cuya importancia sabe que no son importantes?',
    answer2: '¿S�lo te aturde los acontecimientos graves?'
  },
  {
    answer1: '¿Se entusiasma o indigna con facilidad?',
    answer2: '¿Acepta Ud. tranquilamente las cosas tal como son?'
  },
  {
    answer1: '¿te siente herido(a) f�cilmente y de manera profunda por una cr�tica de tus amigos o familiares?',
    answer2: '¿Soporta las criticas sin sentirte menospreciado?'
  },
  {
    answer1: '¿Te pones nervioso(a) cuando te llaman sin saber para que?',
    answer2: '¿Te mantienes sereno ?'
  },
  {
    answer1: '¿Elevas la voz en una conversaci�n, sientes necesidad de emplear palabras demasiado expresivas o subidas de tono?',
    answer2: '¿Conversa Ud. con calma, sin prisa, de una manera reposada?'
  },
  {
    answer1: '¿Te sientes angustiado frente a una tarea nueva o un cambio?',
    answer2: '¿Afrontas la situaci�n con serenidad?'
  },
  {
    answer1: '¿Pasas de la exaltaci�n al abatimiento, de la alegr�a a la tristeza y viceversa por tonter�as y a�n sin raz�n aparente?',
    answer2: '¿Te sabes controlar y mantienes la calma?'
  },
  {
    answer1: '¿Te sientes frecuentemente inquieto con dudas, frente a actos sin importancia?',
    answer2: '¿No te interesa lo que pasa a tu alrededor?'
  },
  {
    answer1: '¿Experimentas estados de miedo que te impiden realizar cualquier movimiento o que no te deja articular una sola palabra?',
    answer2: '¿Sabes controlas bien tus estados an�micos?'
  },
  {
    answer1: '¿Te sientes con frecuencia desgraciado?',
    answer2: '¿Est�s generalmente contento de tu suerte?'
  },
  {
    answer1: '¿Sueles ocuparte activamente durante tus horas libres (estudias, haces trabajos manuales o cualquier tarea voluntaria)?',
    answer2: `¿Pasas largos ratos sin hacer nada, so�ando,
              meditando o simplemente distray�ndose con lecturas entretenidas, escuchando la radio, etc.?`
  },
  {
    answer1: '¿Llevas a cabo inmediatamente y sin dificultad lo que ha decidido hacer?',
    answer2: '¿Necesitas realizar mucho esfuerzo para pasar de la idea a la acci�n'
  },
  {
    answer1: '¿Te sientes estimulado por un problema y tratas de solucionarlo?',
    answer2: '¿Te desanimas f�cilmente ante una dificultad o problema?'
  },
  {
    answer1: '¿Te gustaria realizar proyectos que realmente te preparan para el porvenir?',
    answer2: '¿Te gusta so�ar y meditar ya sea sobre el pasado o sobre el futuro, o cosas imaginarias?'
  },
  {
    answer1: '¿Haces lo que tiene que hacer enseguida y sin que le cueste mucho?',
    answer2: '¿Te sientes inclinado a postergar las cosas?'
  },
  {
    answer1: '¿Tomas decisiones r�pidamente, a�n en los casos dif�ciles?',
    answer2: '¿Eres indeciso y no te decides por largo tiempo?'
  },
  {
    answer1: '¿Eres movedizo e inquieto?',
    answer2: '¿Generalmente te mantienes tranquilo y sin sobresaltos?'
  },
  {
    answer1: '¿Actuas sin vacilar cuando se presenta alguna oportunidad?',
    answer2: '¿Prefieres pensar las opciones y generalmente no ejecutas una oportunidad?'
  },
  {
    answer1: '¿Cu�ndo has decidido realizar una tarea, supervisas hasta que lo terminas?',
    answer2: '¿Te sientes bien cu�ndo no aceptas una labor que tienes que realizar?'
  },
  {
    answer1: '¿Te gusta actuar ante una circunstancia?',
    answer2: '¿Prefieres observar que hacer?'
  },
  {
    answer1: '¿Gustas de las tareas largas por realizar?',
    answer2: '¿Te interesa m�s las tareas cortas por hacer?'
  },
  {
    answer1: '¿Planificas antes de realizar una tarea',
    answer2: '¿Prefieres hacer una tarea como salga?'
  },
  {
    answer1: '¿Tienes pocedimientos claros a lo que quieres hacer?',
    answer2: '¿Prefieres adaptarse a las circunstancias como viene?'
  },
  {
    answer1: '¿Terminas siempre lo que has comenzado?',
    answer2: '¿Abandonas con frecuencia una tarea y sin concluirla?'
  },
  {
    answer1: '¿continuas con tus amistades de infancia o frecuentas regularmente a las mismas personas y los mismo c�rculos de amigos?',
    answer2: '¿Cambias a menudo de amigos dejando por ejemplo, sin raz�n alguna de ver a personas que antes frecuentabas?'
  },
  {
    answer1: `¿Despu�s de un exceso de c�lera o despu�s de una reconciliaci�n con tu circunstancial enemigo?
              ¿permaneces de mal humor por cierto tiempo?`,
    answer2: '¿S�lo Durante cierto tiempo permaneces de mal humor?',
    answer3: '¿Es dif�cil que te reconcilies, tu resentimiento es persistente?'
  },
  {
    answer1: '¿te sientes atra�do por el retorno regular de ciertos hechos?',
    answer2: `¿Sientes horror por todo lo que es habitual o previsto de antemano,
              siendo para usted lo espont�neo un elemento esencial de tu vida?`
  },
  {
    answer1: '¿Te gusta el orden, la simetr�a, la regularidad?',
    answer2: '¿El orden te parece aburrido?'
  },
  {
    answer1: '¿Eres amigo de hacer planes fijos, horarios y trazar programas?',
    answer2: '¿Te lanzas a la acci�n sin que lo hayas planificado?'
  },
  {
    answer1: '¿Cu�ndo has adoptado una opini�n, te aferras a ella?',
    answer2: '¿Cambias f�cilmente de opini�n por una nueva idea?'}

];

/*
Commando para sacar las preguntas.
localStorage.setItem('preguntas', JSON.stringify([]));

//repetir 30 veces
(function() {
let pregunta1 = document.getElementsByClassName('btn')[0];
let pregunta2 = document.getElementsByClassName('btn')[1];
let preguntas = JSON.parse(localStorage.getItem('preguntas'));
preguntas.push({answer1: pregunta1.innerText, answer2: pregunta2.innerText});
localStorage.setItem('preguntas', JSON.stringify(preguntas));
​pregunta1.click();
})();
//

let preguntasSacadas = JSON.parse(localStorage.getItem('preguntas'));
preguntasSacadas[25].answer3 = "�Es dif�cil que te reconcilies, tu resentimiento es persistente?"

localStorage.setItem('preguntas', JSON.stringify(preguntasSacadas));
localStorage.getItem('preguntas');

*/
