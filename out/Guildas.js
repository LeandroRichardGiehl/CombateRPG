"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guilda = void 0;
class Guilda {
    constructor(nome) {
        this.nome = nome;
        this.membros = [];
    }
    getNome() {
        return this.nome;
    }
    getMembros() {
        return this.membros;
    }
    adicionarMembro(membro) {
        this.membros.push(membro);
        membro.clã.push(this.nome);
    }
    remocaoMembros(membro) {
        for (let i = 0; i < this.membros.length; i++) {
            const membroClass = this.membros[i];
            if (membro == membroClass) {
                this.membros.splice(i, 1);
                console.log(`${membro.getNome()} foi removido do clã!`);
            }
        }
    }
    toString() {
        let str = "Guilda: " + this.nome + " Membros: [";
        for (const membro of this.membros) {
            str += membro.getNome() + ", ";
        }
        return str + "]";
    }
}
exports.Guilda = Guilda;
//# sourceMappingURL=Guildas.js.map