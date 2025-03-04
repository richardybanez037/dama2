'use client'

import { useDispatch, useSelector } from "react-redux"
import { ICell } from "../definitions"
import Piece from "./piece"
import { 
    clearPath, 
    setPath, 
    setSelectedPiece,
    setRow0,
    setRow1,
    setRow2,
    setRow3,
    setRow4,
    setRow5,
    setRow6,
    setRow7
} from "../store/game/gameSlice"
import { RootState } from "../store/store"

const Cell = ({ cell, isPath }: 
    {
        cell: ICell,
        isPath: boolean
    }) => {
    const dispatch = useDispatch()
    const {
        selectedPiece,
        row_0,
        row_1,
        row_2,
        row_3,
        row_4,
        row_5,
        row_6,
        row_7
    } = useSelector((state: RootState) => state.game)
    const rows = [row_0, row_1, row_2, row_3, row_4, row_5, row_6, row_7]
    const setRow = [setRow0, setRow1, setRow2, setRow3, setRow4, setRow5, setRow6, setRow7]

    const selectCellHandler = () => {
        const rowPath = cell.rowNumber - 1
        const pathSet: number[][] = []

        if(cell.occupied){
            dispatch(setSelectedPiece(cell))
            const leftCellPath = cell.cellNumber - 1
            const rightCellPath = cell.cellNumber + 1

            for(const r of rows[rowPath]){
                if(!r.occupied && leftCellPath === r.cellNumber)
                    pathSet.push([rowPath, leftCellPath])
                if(!r.occupied && rightCellPath === r.cellNumber)
                    pathSet.push([rowPath, rightCellPath])
            }

            if(pathSet.length) 
            {
                dispatch(clearPath())
                dispatch(setPath(pathSet))
            }
        }
        else if(isPath){
            const updateRow = rows[cell.rowNumber].map(c => {
                if(c === cell){
                    return {
                        ...c,
                        occupied: true,
                        pieceColor: selectedPiece?.cellColor ?? null
                    }    
                }
                return c
            })
            dispatch(setRow[cell.rowNumber](updateRow))
            if(selectedPiece?.rowNumber){
                const removeRow = rows[selectedPiece.rowNumber].map(c => {
                    if(c === selectedPiece){
                        return {
                            ...c,
                            occupied: false,
                            pieceColor: null
                        }
                    }
    
                    return c
                })
                dispatch(setRow[selectedPiece.rowNumber](removeRow))
            }
            dispatch(clearPath())
        }
    }

    return <div 
        className={
            "w-[12.5vw] h-[12.5vw] sm:w-full sm:h-20 overflow-hidden relative bg-" + 
            cell.cellColor
        }
        onClick={selectCellHandler}
    >
        {
            isPath && <div className="absolute w-full h-full bg-green-500"></div>
        }
        {
            cell.occupied === true && <Piece color={cell.pieceColor!}/>
        }
    </div>
}

export default Cell