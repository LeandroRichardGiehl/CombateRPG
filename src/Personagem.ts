import { Coisa } from "./Coisa";

export class Personagem {
  nome: string;
  vida: number;
  level: number = 1;
  vivo: boolean = true;
  alcance: number
  clã: Array <string> = []

  constructor(nome: string, level: number = 1) {
    this.nome = nome;
    this.vida = 1000;
    this.level = level;
    this.vivo = true;
    this.alcance = 0
  }

  getNome() {
    return this.nome;
  }

  subirLevel() {
    this.level++;
  }

  machucar(dano: number, alvo: Coisa, distancia: number) { 

    if (this.alcance < distancia){
      console.log(`Erro na distancia`)
    } else if(alvo instanceof Personagem){
      if (this.nome == alvo.getNome()) {

        console.log(`${this.getNome()} não pode atacar a si mesmo.`);

      } else if(this.level < alvo.level + 5){
          alvo.vida = alvo.vida - dano * 0.5
      }else if(this.level > alvo.level + 5){
          alvo.vida = alvo.vida - dano * 1.5
      }else{
        alvo.vida = alvo.vida - dano;
      }
    } else {
      alvo.vida = alvo.vida - dano;

    }

   
    if (alvo.vida <= 0) {
      alvo.vida = 0;
      console.log(`${alvo.nome} recebeu ${dano} de dano.`);
      alvo.vivo = false;
      console.log(`${alvo.nome} morreu com seu ataque critico.`);
    }
  }


  curar(cura: number, alvo: Personagem) {
    if (alvo.getNome() != this.getNome()) {
      console.log(`Você apenas pode curar a si mesmo.`);
    } else if (alvo.vida == 0) {
      console.log(`você esta morto. `);
    } else {
      alvo.vida = alvo.vida + cura;
    }

    if (alvo.vida > 0 || alvo.vida <= 1000) {
      alvo.vivo = true;
    } else {
      alvo.vivo = false;
    }

    if (alvo.vida > 1000) {
      alvo.vida = 1000;
    } else {
      alvo.vivo = false;
    }
  }
}

