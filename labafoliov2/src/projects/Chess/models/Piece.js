export class Piece {
    constructor (possibleMoves, position,colorType, type ) {
        this.image = `../images/ChessPieces/${colorType}${type}.svg`
    }
    get isPawn(){
        return this.type === 'pawn'
    }
    get isRook() {
        return this.type === 'rook'
    }
    get isBishop() {
        return this.type === 'bishop'
    }
    get isKnight() {
        return this.type === 'knight'
    }
    get isQueen() {
        return this.type === 'queen'
    }
    get isKing() {
        return this.type === 'king'
    }

    samePosition(otherPosition){
        return this.position.samePosition(otherPosition)
    }

    samePiecePosition(otherPosition){
        return this.position.samePosition(otherPosition.position)
    }

}