"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Arqueiro_1 = require("./Arqueiro");
const Guerreiro_1 = require("./Guerreiro");
const Guildas_1 = require("./Guildas");
const Personagem_1 = require("./Personagem");
let gustavo = new Guerreiro_1.Guerreiro("Sir Gustavo de mostardas", 6);
let pedro = new Arqueiro_1.Arqueiro("Pedro de porto alegre", 1);
let igor = new Personagem_1.Personagem("Igor O santo", 1);
let clã = new Guildas_1.Guilda("Loucos");
clã.adicionarMembro(gustavo);
clã.adicionarMembro(pedro);
console.log(clã.toString());
//# sourceMappingURL=app.js.map