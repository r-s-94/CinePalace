import SpaceWarsMoviePicture from "./assets/Space-Wars-Film.jpg";
import SpaceWarsMoviePicture2 from "./assets/Space-Wars-Film2.jpg";
import SpaceWarsMoviePicture3 from "./assets/Space-Wars-Film4.jpg";
import SpaceWarsMoviePicture4 from "./assets/Space-Wars-Film5.png";
import SpaceWarsMoviePicture5 from "./assets/Space-Wars-Film6.png";
import SpaceWarsMoviePicture6 from "./assets/Space-Wars-Film7.jpg";
import MusicalMoviePicture from "./assets/Musical-Film-Picture.jpg";
import MusicalMoviePicture2 from "./assets/Musical-Film-Picture3.jpg";
import MusicalMoviePicture3 from "./assets/Musical-Film-Picture4.jpg";
import MusicalMoviePicture4 from "./assets/Musical-Film-Picture5.jpg";
import TragikomödieMoviePicture from "./assets/Tragikomödie-Film-Picture.jpg";
import TragikomödieMoviePicture2 from "./assets/Tragikomödie-Film-Picture2.jpg";
import DramaMoviePicture from "./assets/Drama-Film-Picture.jpg";
import DramaMoviePicture2 from "./assets/Drama-Film-Picture3.jpg";
import DramaMoviePicture3 from "./assets/Drama-Film-Picture2.png";
import DramaMoviePicture4 from "./assets/Drama-Film-Picture4.jpg";
import HorrorMoviePicture from "./assets/Horror-Film-Piture.jpg";
import HorrorMoviePicture2 from "./assets/Horror-Film-Piture2.jpg";

export interface Film {
  id: number;
  title: string;
  category: string;
  description: FilmDescription;
  pictureArray: string[];
  hall: number;
  styleClass: string;
}

interface FilmDescription {
  short: string;
  generally: string;
}

export const filmArray: Film[] = [
  {
    id: 1,
    title: "Space Wars",
    category: "Science-Fiction",
    description: {
      short: "",
      generally: `In einer weit entfernten Galaxie, in der unzählige Planeten und hoch entwickelte Spezies leben,
                  bahnt sich ein Konflikt an, der alles zu verändern.
                  
                  Die Menschheit hat sich längst über ihren Heimatplaneten Cortun hinaus entwicklet. Über Generationen
                  hinweg wurden neue Welten erschlossen und passten sich an die jeweiligen Bedingungen an.
                  So entstanden zahlreiche Kolonien und eigenständige Zivilisationen, 
                  die sich mit anderen Spezies verbündeten und gemeinsam Handel betrieben.

                  Im Zentrum dieser Entwicklung steht der Galaktische Senat von Cortun, der die politische Ordnung koordiniert.
                  Doch er sieht sich einer neue radikalen Fraktion von Menschen und anderen Spezies gegenüber, die nach der alleinigen
                  Herrschaft über die gesamte Galaxies strebt - notfalls mit allen Mitteln.

                  Inmitten dieser Entwicklungen formieren sich neue Allianzen und Machtblöcke. Einige setzen auf Diplomatie, 
                  andere auf technologische Überlegenheit - und wiederum andere sehen im Krieg den einzigen Weg, 
                  um ihre Interessen durchzusetzen.`,
    },
    pictureArray: [
      SpaceWarsMoviePicture,
      SpaceWarsMoviePicture2,
      SpaceWarsMoviePicture3,
      SpaceWarsMoviePicture4,
      SpaceWarsMoviePicture5,
      SpaceWarsMoviePicture6,
    ],
    hall: 1,
    styleClass: "film-cart",
  },
  {
    id: 2,
    title: "Broadway Musical",
    category: "Musical",
    description: {
      short: "",
      generally: `Im Herzen von New York, wo die Bühnen des Broadwasy seit Generationen Geschichte zum Leben erwecken,
                  steht ein traditionsreichen Theater vor einer entscheidenden Herausforderung. 
                  
                  Unter der Leitung eines erfahrenen Theaterdirektors Malik Deshawn versammelt sich ein neues Ensemble
                  aus talentierten Künstlern, die unterschiedlicher nicht sein könnten. 
                  Jeder von ihnen bringt seine eigenen Träume, Zweifel und Erwartungen mit auf die Bühne.
                  
                  Während intensiver Proben und kreativer Spannungen durchlebt das Ensemble Höhen und Tiefen.
                  Freundschaften, Enttäuschungen, Intrigen stellen alle Beteiligten auf eine harte Probe.
                  Zwischen Perfektionismus, Druck, und der Leidenschaft für die Kunst entsteht eine Inszenierung, 
                  die weit über ein gewönliches Musical hinausgeht.
                  
                  Als sich die Premiere nähert, wird klar: Es geht nicht nur um den Erfolg der Aufführung, 
                  sondern darum, den eigenen Platz auf der Bühne - und im Leben - zu finden.`,
    },
    pictureArray: [
      MusicalMoviePicture,
      MusicalMoviePicture2,
      MusicalMoviePicture3,
      MusicalMoviePicture4,
    ],
    hall: 1,
    styleClass: "film-cart2",
  },
  {
    id: 3,
    title: "Der Weg nach oben",
    category: "Drama",
    description: {
      short: "",
      generally: `Der christliche Afroamereikaner Jalen Trevon, Schüler der Coren Middle School träumt davon, eines Tages
                  Footbalspieler zu werden und auf einem einem großen Spielfeld mit tausenden Zuschauern zu stehen.
                  Um diesem Ziel näherzukommen, muss er es ins Team der Strong Coren schaffen, sich dort beweisen, familiäre
                  Hürden überwinden und seinen Beitrag leisten, um das Team zum Erfolg zu führen.
                  
                  Nachdem er es in das Team der Strong Corens geschaft hat, beginnt für Jalen eine Zeit voller Höhen und 
                  Herausforderungen. Im Team findet er neue Freunde aber er begegnet auch der übermüpfigen Football-Clique 
                  die ihn seit jeher schikaniert. Auch lernt er ein afroamerikanisches Mädchen names Amira kennen das ebenfalls
                  seine Schule besucht und zu einem wichtigen Teil seine Lebens wird.
                  
                  Im weiterem Verlauf gerät Jalen zunehmend unter Druck. Eine lokale Gang, zu der auch einige Mitglieder
                  der Football-Clique gehören, versuchen ihn mit Einschüchterungen dazu zu bringen, das Team zu verlassen.
                  Die Schikanen reichen von kleineren Provokationen im Training und Altag bis zur einer Situation, die völlig
                  eskaliert: Es kommt zu einem schweren Vorfall, beim dem seine Mutter überfallen und ins Krankenhaus eingeliefert
                  wird. Aufgrund von üblen Lügen und Gerüchten geräte auch seine Beziehung zu Amira zunehmend ins Wanken und 
                  beginnt zu leiden. Trotz dieser Rückschläge gibt Jalen nicht auf. Er steht seiner Familie bei, 
                  sucht Halt im Glauben und lässt sich nicht von seinem Weg abbringen. Er trainert weiter, 
                  wächst an seinen Herausforderungen und bleibt anseinem Ziel treue, während das entscheidende Spiel immer näher rückt. 
                  
                  Trotz der vergangenen Höhen und Tiefen sowie auch der Schicksalsschläge der letzten Wochen 
                  und Monate ist der entscheidende Tag gekommen: das Grße Finale. Jalen stellt sich gemeinsam mit seinem Team dem 
                  wichtigsten Spiel seiner bisherigen Laufbahn und gibt dort alles. Im Verlauf des Spiels kommt es zu überraschenden
                  Entwicklungen und Wendungen. Die lokale Gang sowie auch einige beteiligte Spieler werden durch das Eingreifen der Behörden
                  gestoppt und zur Rechenschaft gezogen. Gleichzeitig klären sich die Lügen und Gerüchte um Jalen auf, wodurch 
                  sich die Situation zwischen ihm und Amira - zunächst ohne sein Wissen - allmählich entspannt. Besonders bewegend ist, 
                  das sich seine Mutter rechtzig von ihren Verletzungen erholt und das Spiel live mitverfolgen kann. 
                  In der entscheidenden Phase des Spiels gelingt es Jalen schließlich, in letzter Minute denspielentscheidenden 
                  Touchdown zuerzielen und seinem Team den Sieg zu sichern. Am Ende steht er gemeinsam mit seiner Mutter, 
                  Freundin und seinem Team im Jubel, während er zugleich die Aufmerksamkeit von Choaches und Talentescouts
                  auf sich zieht - ein erster Schritt in Richtung seiner großen Zukunft.`,
    },
    pictureArray: [TragikomödieMoviePicture, TragikomödieMoviePicture2],
    hall: 2,
    styleClass: "film-cart3",
  },
  {
    id: 4,
    title: "Verrat und Wiederauferstehung",
    category: "Historisches Drama",
    description: {
      short: "",
      generally: `Tauche ein in eine bewegende Neuverfilmung einer Geschichte, die die Welt für immer verändert hat. Verrat und
                  Wiederauferstehung erzählt vom Aufstieg Jesus Christi, dessen Botschaft von Hoffnung und Erlösung Millionen
                  berührte und ihn zugleich zum Ziel von Verrat und Machtkämpfen machte.
                  
                  Während Jesus durch seine Worte und Taten immer mehr Menschen erreicht, verbreitet sich eine Botschaft von Liebe,
                  Vergebung, und Hoffnung über die Grenze hinaus. Kranke werden geheilt, Zweifelnde finden neuen Glauben und immer 
                  mehr Menschenschließen sich ihm an. Doch mit wachsender Anhängerschaft wächst auch der Widerstandt. Religiöse
                  und politische Kräfte sehen in ihm eine Bedrohung für die bestehende Ordnung. Misstrauen und Angst führen zu
                  Intrigen, die im Verborgenen gesponen werden. Selbst innerhalb seines engsten Kreises entstehen Zweifel.
                  Einer seiner Vertrauten trifft schließlich eine folgenschwere Entscheidung, die alles verändern wird.
                  
                  Der Verrat führte schließlich zur Gefangennahme Jesu und zu seiner Verurteilung. In einem der dunkelsten
                  Momente wird er gekreuzigt - ein Ereignis, das Anhänger in tiefe Trauer und Verzweiflung stürzt. 
                  Sein lebloser Körper wird in ein Grab gelegt und alles scheint verloren. Doch was wie das Ende wirkt, wird
                  zum Wendepunkt. Am dritten Tag geschieht das Unfassbare: Das Grab ist leer. Jesus ist auferstanden. Seine
                  Rückkehr erfüllt seine Anhänger mit neuer Hoffnung und stärkt ihren Glauben an seine Botschaft, während seine
                  Gegner zunehmend von Angst und Furcht ergriffen werden. Schließlich verlässt er die Welt der Menschen und
                  wird in den Himmel emporgehoben - doch seine Lehren leben weiter, inspirieren Generationen und verändern die
                  Welt für immer.`,
    },
    pictureArray: [
      DramaMoviePicture,
      DramaMoviePicture2,
      DramaMoviePicture3,
      DramaMoviePicture4,
    ],
    hall: 2,
    styleClass: "film-cart4",
  },
  {
    id: 5,
    title: "ES 4",
    category: "Horror",
    description: {
      short: "",
      generally: `Tauche ein in das nächste Kapitel des Grauens: ES - Kapitel 4: Das Erwachen. Nach den schrecklichen Ereignissen
                  der vergangenen Jahre glauben viele, der Horro sei endlich vorbei. Doch tief im Verborgenen regt sich etwas, 
                  das niemals wirklich verschwunden war.
                  
                  In einer scheinbar ruhigen Kleinstadt beginnen erneut unerklärliche Vorfälle. Kinder berichten, 
                  wenn niemand sonst hinsieht. Was zunächst wie Einbildung wirkt, entwickelt sich schnell zu einer Serie verstörender
                  Ereignisse.
                  
                  Eine Gruppe junger Erwachsener stößt bei ihren Nachforschungen auf dunkle Geheimnisse aus der Vergangenheit - 
                  und erkennt, dass das Böse nicht nur zurückgekehrt ist, sondern stärker und grausamer als je zuvor ist. Während
                  die Grenzen zwischen Realität und Albtraum verschwimmen, beginnt ein tödliches Spiel aus Angst und Manipulation.
                  Der Clown nutzt die tiefsten Ängste seiner Opfer, um sie in seine Welt zu ziehen - eine Welt, aus der es kein
                  Entkommen zu geben schein.
                  
                  Im finalen Aufeinandertreffen müssen sich die Überlebenden nicht nur dem Schrecken stellen, sondern auch ihren
                  eigenen inneren Dämonen. Denn nur wer seine Angst überwindet, hat eine Chance, das Grauen zu besiegen. Doch eine
                  Frage bleibt: Ist das Böse jemals wircklich besiegbar - oder wartet es nur darauf, erneut zurückzukehren?`,
    },
    pictureArray: [HorrorMoviePicture, HorrorMoviePicture2],
    hall: 3,
    styleClass: "film-cart5",
  },
];
