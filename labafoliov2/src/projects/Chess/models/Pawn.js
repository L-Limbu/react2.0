import { Piece } from "./Piece"
export class Pawn extends Piece {
    constructor(possibleMoves = [], position, colorType, type, enPassant) {
        super(possibleMoves, position, colorType, type='pawn')
        this.enPassant = enPassant
    }

    clone() {
        return new Pawn(this.possibleMoves.map(m => m.clone()), this.position.clone(), this.colorType,this.type ='pawn', this.enPassant)
    }
}

