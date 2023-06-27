import { Arqueiro } from "./Arqueiro";
import { Guerreiro } from "./Guerreiro";
import { Guilda } from "./Guildas";
import { Personagem } from "./Personagem";

let  gustavo = new Guerreiro ("Sir Gustavo de mostardas", 6);

let pedro = new Arqueiro ("Pedro de porto alegre", 1);

let igor = new Personagem ("Igor O santo", 1);

let clã = new Guilda ("Loucos")

// gustavo.machucar(20, pedro, 5);
// console.log(gustavo);
// console.log(pedro);
clã.adicionarMembro(gustavo);
clã.adicionarMembro(pedro);
console.log (clã.toString())
// console.log(gustavo)
// clã.remocaoMembros(gustavo)
// console.log(gustavo)
// console.log(clã.toString())