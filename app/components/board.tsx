'use client'

import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import Row from "./row"

const Board = () => {
    const { 
        row_0, 
        row_1, 
        row_2, 
        row_3, 
        row_4, 
        row_5, 
        row_6, 
        row_7
    } = useSelector((state: RootState) => state.game)

    return <div className="flex flex-col w-160">
        <Row row={row_0}/>
        <Row row={row_1}/>
        <Row row={row_2}/>
        <Row row={row_3}/>
        <Row row={row_4}/>
        <Row row={row_5}/>
        <Row row={row_6}/>
        <Row row={row_7}/>
    </div>
}

export default Board