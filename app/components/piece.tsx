'use client'

import { PIECE_BLACK, PIECE_WHITE } from "../constants/game"
import { IPieceColor } from "../definitions"

const Piece = ({ color }: { color: IPieceColor }) => {
    return <div className="m-1">
        {
            color === PIECE_BLACK &&
                <div className="w-[11vw] h-[11vw] sm:w-18 sm:h-18 bg-white border-[0.7vw] sm:border-4 border-black rounded-full black-piece"></div>
        }
        {
            color === PIECE_WHITE &&
                <div className="w-[11vw] h-[11vw] sm:w-18 sm:h-18 bg-white border-[0.7vw] sm:border-4 border-gray-200 rounded-full white-piece"></div>
        }
    </div>
}

export default Piece