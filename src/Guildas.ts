import { Personagem } from "./Personagem"

export class Guilda{
    nome: string;
    membros: Array <Personagem>

    constructor(nome: string){
        this.nome =  nome;
        this.membros = [];
    }
    getNome(): string {
        return this.nome;
    }

    getMembros(): Array <Personagem> {
        return this.membros;
    }

    adicionarMembro(membro: Personagem){
    this.membros.push(membro);
    membro.clã.push(this.nome);
    }

    remocaoMembros(membro: Personagem) {
        for (let i = 0; i < this.membros.length; i++) {
            const membroClass = this.membros[i];
            if(membro == membroClass){
                this.membros.splice(i, 1)
                console.log(`${membro.getNome()} foi removido do clã!`)
            }

        }
    }

    toString():string {
        let str:string = "Guilda: " + this.nome + " Membros: ["
        for (const membro of this.membros) {
            str += membro.getNome() + ", "
        }
        return str + "]"
    }
} 