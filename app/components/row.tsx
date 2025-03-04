'use client'

import { useSelector } from "react-redux"
import { ICell } from "../definitions"
import Cell from "./cell"
import { RootState } from "../store/store"

const Row = ({ row }: { row: ICell[] }) => {
    const { path } = useSelector((state: RootState) => state.game)
    
    return <div className="flex">
        {
            row.map((cell: ICell) => 
                <Cell
                    key={cell.cellNumber}
                    cell={cell}
                    isPath={path.some(p => JSON.stringify(p) === JSON.stringify([cell.rowNumber, cell.cellNumber]))}
                />
            )
        }
    </div>
}

export default Row