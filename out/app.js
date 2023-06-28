"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Arqueiro_1 = require("./Arqueiro");
const Guerreiro_1 = require("./Guerreiro");
const Guildas_1 = require("./Guildas");
const Personagem_1 = require("./Personagem");
const Coisa_1 = require("./Coisa");
let gustavo = new Guerreiro_1.Guerreiro("Sir Gustavo de mostardas", 6);
let pedro = new Arqueiro_1.Arqueiro("Pedro de porto alegre", 1);
let igor = new Personagem_1.Personagem("Igor O santo", 1);
let clã = new Guildas_1.Guilda("Loucos");
let lobo = new Coisa_1.Coisa("Lobo da floresta");
gustavo.machucar(200, lobo, 1);
console.log(lobo);
//# sourceMappingURL=app.js.map