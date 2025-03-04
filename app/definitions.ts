export interface ICell{
    occupied: boolean | null,
    rowNumber_name: string,
    rowNumber: number,
    cellNumber: number,
    pieceColor: "black" | "white" | null,
    cellColor: "black" | "white"
    isPieceDama: boolean
}

export type IPieceColor = "black" | "white"