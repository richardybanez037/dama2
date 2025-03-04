import { ICell } from "../definitions"

export const PIECE_BLACK: string = "black"
export const PIECE_WHITE: string = "white"
const INIT_CELL: ICell = {
    occupied: null,
    rowNumber_name: "row_0",
    rowNumber: 0,
    cellNumber: 0,
    pieceColor: null,
    cellColor: "black",
    isPieceDama: false
}

export const INIT_ROW_0: ICell[] = [
    INIT_CELL,
    {
        ...INIT_CELL,
        occupied: true,
        cellNumber: 1,
        pieceColor: "black",
        cellColor: "white"
    },
    {
        ...INIT_CELL, 
        cellNumber: 2
    }
    ,
    {
        ...INIT_CELL,
        occupied: true,
        cellNumber: 3,
        pieceColor: "black",
        cellColor: "white"
    },
    {
        ...INIT_CELL, 
        cellNumber: 4
    },
    {
        ...INIT_CELL,
        occupied: true,
        cellNumber: 5,
        pieceColor: "black",
        cellColor: "white"
    },
    {
        ...INIT_CELL, 
        cellNumber: 6,
        cellColor: "black"
    },
    {
        ...INIT_CELL,
        occupied: true,
        cellNumber: 7,
        pieceColor: "black",
        cellColor: "white"
    },
]
export const INIT_ROW_1: ICell[] = [
    //row1
    {
        ...INIT_CELL,
        occupied: true,
        rowNumber_name: "row_1",
        rowNumber: 1,
        cellNumber: 0,
        pieceColor: "black",
        cellColor: "white"
    },
    {
        ...INIT_CELL, 
        rowNumber_name: "row_1",
        rowNumber: 1, 
        cellNumber: 1,
        cellColor: "black"
    },
    {
        ...INIT_CELL,
        occupied: true,
        rowNumber_name: "row_1",
        rowNumber: 1,
        cellNumber: 2,
        pieceColor: "black",
        cellColor: "white"
    },
    {
        ...INIT_CELL, 
        rowNumber_name: "row_1",
        rowNumber: 1, 
        cellNumber: 3,
        cellColor: "black"
    },
    {
        ...INIT_CELL,
        occupied: true,
        rowNumber_name: "row_1",
        rowNumber: 1,
        cellNumber: 4,
        pieceColor: "black",
        cellColor: "white"
    },
    {
        ...INIT_CELL, 
        rowNumber_name: "row_1",
        rowNumber: 1, 
        cellNumber: 5,
        cellColor: "black"
    },
    {
        ...INIT_CELL,
        occupied: true,
        rowNumber_name: "row_1",
        rowNumber: 1,
        cellNumber: 6,
        pieceColor: "black",
        cellColor: "white"
    },
    {
        ...INIT_CELL, 
        rowNumber_name: "row_1",
        rowNumber: 1, 
        cellNumber: 7,
        cellColor: "black"
    },
]
export const INIT_ROW_2: ICell[] = [
    //row2
    {
        ...INIT_CELL, 
        rowNumber_name: "row_2",
        rowNumber: 2, 
        cellNumber: 0,
        cellColor: "black"
    },
    {
        ...INIT_CELL,
        occupied: true,
        rowNumber_name: "row_2",
        rowNumber: 2,
        cellNumber: 1,
        pieceColor: "black",
        cellColor: "white"
    },
    {
        ...INIT_CELL, 
        rowNumber_name: "row_2",
        rowNumber: 2, 
        cellNumber: 2,
        cellColor: "black"
    },
    {
        ...INIT_CELL,
        occupied: true,
        rowNumber_name: "row_2",
        rowNumber: 2,
        cellNumber: 3,
        pieceColor: "black",
        cellColor: "white"
    },
    {
        ...INIT_CELL, 
        rowNumber_name: "row_2",
        rowNumber: 2, 
        cellNumber: 4,
        cellColor: "black"
    },
    {
        ...INIT_CELL,
        occupied: true,
        rowNumber_name: "row_2",
        rowNumber: 2,
        cellNumber: 5,
        pieceColor: "black",
        cellColor: "white"
    },
    {
        ...INIT_CELL, 
        rowNumber_name: "row_2",
        rowNumber: 2, 
        cellNumber: 6,
        cellColor: "black"
    },
    {
        ...INIT_CELL,
        occupied: true,
        rowNumber_name: "row_2",
        rowNumber: 2,
        cellNumber: 7,
        pieceColor: "black",
        cellColor: "white"
    },
]
export const INIT_ROW_3: ICell[] = [
    //row3
    {
        ...INIT_CELL, 
        rowNumber_name: "row_3",
        occupied: false,
        rowNumber: 3, 
        cellNumber: 0, 
        cellColor: "white"
    },
    {
        ...INIT_CELL, 
        rowNumber_name: "row_3",
        rowNumber: 3, 
        cellNumber: 1,
        cellColor: "black"
    },
    {
        ...INIT_CELL, 
        occupied: false,
        rowNumber_name: "row_3",
        rowNumber: 3, 
        cellNumber: 2, 
        cellColor: "white"
    },
    {
        ...INIT_CELL, 
        rowNumber_name: "row_3",        
        rowNumber: 3, 
        cellNumber: 3,
        cellColor: "black"
    },
    {
        ...INIT_CELL, 
        occupied: false,
        rowNumber_name: "row_3",
        rowNumber: 3, 
        cellNumber: 4, 
        cellColor: "white"
    },
    {
        ...INIT_CELL, 
        rowNumber_name: "row_3",        
        rowNumber: 3, 
        cellNumber: 5,
        cellColor: "black"
    },
    {
        ...INIT_CELL, 
        occupied: false,
        rowNumber_name: "row_3",
        rowNumber: 3, 
        cellNumber: 6, 
        cellColor: "white"
    },
    {
        ...INIT_CELL,
        rowNumber_name: "row_3", 
        rowNumber: 3,
        cellNumber: 7,
        cellColor: "black"
    }
]
export const INIT_ROW_4: ICell[] = [
    //row4
    {
        ...INIT_CELL, 
        rowNumber_name: "row_4",
        rowNumber: 4, 
        cellNumber: 0, 
        cellColor: "black"
    },
    {
        ...INIT_CELL, 
        occupied: false,
        rowNumber_name: "row_4",
        rowNumber: 4, 
        cellNumber: 1,
        cellColor: "white"
    },
    {
        ...INIT_CELL,
        rowNumber_name: "row_4", 
        rowNumber: 4, 
        cellNumber: 2, 
        cellColor: "black"
    },
    {
        ...INIT_CELL,
        occupied: false,
        rowNumber_name: "row_4",
        rowNumber: 4, 
        cellNumber: 3,
        cellColor: "white"
    },
    {
        ...INIT_CELL,
        rowNumber_name: "row_4",
        rowNumber: 4, 
        cellNumber: 4, 
        cellColor: "black"
    },
    {
        ...INIT_CELL,
        occupied: false,
        rowNumber_name: "row_4",
        rowNumber: 4, 
        cellNumber: 5,
        cellColor: "white"
    },
    {
        ...INIT_CELL, 
        rowNumber_name: "row_4",
        rowNumber: 4, 
        cellNumber: 6, 
        cellColor: "black"
    },
    {
        ...INIT_CELL, 
        occupied: false,
        rowNumber_name: "row_4",
        rowNumber: 4, 
        cellNumber: 7,
        cellColor: "white"
    }
]
export const INIT_ROW_5: ICell[] = [
    //row5
    {
        ...INIT_CELL,
        occupied: true,
        rowNumber_name: "row_5",
        rowNumber: 5,
        cellNumber: 0,
        pieceColor: "white",
        cellColor: "white"
    },
    {
        ...INIT_CELL, 
        rowNumber_name: "row_5",
        rowNumber: 5, 
        cellNumber: 1,
        cellColor: "black"
    },
    {
        ...INIT_CELL,
        occupied: true,
        rowNumber_name: "row_5",
        rowNumber: 5,
        cellNumber: 2,
        pieceColor: "white",
        cellColor: "white"
    },
    {
        ...INIT_CELL, 
        rowNumber: 5, 
        cellNumber: 3,
        cellColor: "black"
    },
    {
        ...INIT_CELL,
        occupied: true,
        rowNumber_name: "row_5",
        rowNumber: 5,
        cellNumber: 4,
        pieceColor: "white",
        cellColor: "white"
    },
    {
        ...INIT_CELL,
        rowNumber: 5, 
        cellNumber: 5,
        cellColor: "black"
    },
    {
        ...INIT_CELL,
        occupied: true,
        rowNumber_name: "row_5",
        rowNumber: 5,
        cellNumber: 6,
        pieceColor: "white",
        cellColor: "white"
    },
    {
        ...INIT_CELL,
        rowNumber_name: "row_5",
        rowNumber: 5, 
        cellNumber: 7,
        cellColor: "black"
    }
]
export const INIT_ROW_6: ICell[] = [
    //row6
    {
        ...INIT_CELL,
        rowNumber_name: "row_6",
        rowNumber: 6, 
        cellNumber: 0,
        cellColor: "black"
    },
    {
        ...INIT_CELL,
        occupied: true,
        rowNumber_name: "row_6",
        rowNumber: 6,
        cellNumber: 1,
        pieceColor: "white",
        cellColor: "white"
    },
    {
        ...INIT_CELL,
        rowNumber_name: "row_6",
        rowNumber: 6, 
        cellNumber: 2,
        cellColor: "black"
    },
    {
        ...INIT_CELL,
        occupied: true,
        rowNumber_name: "row_6",
        rowNumber: 6,
        cellNumber: 3,
        pieceColor: "white",
        cellColor: "white"
    },
    {
        ...INIT_CELL,
        rowNumber_name: "row_6",
        rowNumber: 6, 
        cellNumber: 4,
        cellColor: "black"
    },
    {
        ...INIT_CELL,
        occupied: true,
        rowNumber_name: "row_6",
        rowNumber: 6,
        cellNumber: 5,
        pieceColor: "white",
        cellColor: "white"
    },
    {
        ...INIT_CELL,
        rowNumber_name: "row_6",
        rowNumber: 6, 
        cellNumber: 6,
        cellColor: "black"
    },
    {
        ...INIT_CELL,
        occupied: true,
        rowNumber_name: "row_6",
        rowNumber: 6,
        cellNumber: 7,
        pieceColor: "white",
        cellColor: "white"
    },
]
export const INIT_ROW_7: ICell[] = [
    //row7
    {
        ...INIT_CELL,
        occupied: true,
        rowNumber_name: "row_7",
        rowNumber: 7,
        cellNumber: 0,
        pieceColor: "white",
        cellColor: "white"
    },
    {
        ...INIT_CELL,
        rowNumber_name: "row_7",
        rowNumber: 7, 
        cellNumber: 1,
        cellColor: "black"
    },
    {
        ...INIT_CELL,
        occupied: true,
        rowNumber_name: "row_7",
        rowNumber: 7,
        cellNumber: 2,
        pieceColor: "white",
        cellColor: "white"
    },
    {
        ...INIT_CELL,
        rowNumber_name: "row_7",
        rowNumber: 7, 
        cellNumber: 3,
        cellColor: "black"
    },
    {
        ...INIT_CELL,
        occupied: true,
        rowNumber_name: "row_7",
        rowNumber: 7,
        cellNumber: 4,
        pieceColor: "white",
        cellColor: "white"
    },
    {
        ...INIT_CELL,
        rowNumber_name: "row_7",
        rowNumber: 7, 
        cellNumber: 5,
        cellColor: "black"
    },
    {
        ...INIT_CELL,
        occupied: true,
        rowNumber_name: "row_7",
        rowNumber: 7,
        cellNumber: 6,
        pieceColor: "white",
        cellColor: "white"
    },
    {
        ...INIT_CELL,
        rowNumber_name: "row_7",
        rowNumber: 7, 
        cellNumber: 7,
        cellColor: "black"
    }
]
// export const INITIAL_ROWS: ICell[][] = [
//     //row0
//     [
//         INIT_CELL,
//         {
//             occupied: true,
//             rowNumber: 0,
//             cellNumber: 1,
//             pieceColor: "black",
//             cellColor: "white",
//             isPieceDama: false
//         },
//         {
//             ...INIT_CELL, 
//             cellNumber: 2
//         }
//         ,
//         {
//             occupied: true,
//             rowNumber: 0,
//             cellNumber: 3,
//             pieceColor: "black",
//             cellColor: "white",
//             isPieceDama: false
//         },
//         {
//             ...INIT_CELL, 
//             cellNumber: 4
//         },
//         {
//             occupied: true,
//             rowNumber: 0,
//             cellNumber: 5,
//             pieceColor: "black",
//             cellColor: "white",
//             isPieceDama: false
//         },
//         {
//             ...INIT_CELL, 
//             cellNumber: 6,
//             cellColor: "black"
//         },
//         {
//             occupied: true,
//             rowNumber: 0,
//             cellNumber: 7,
//             pieceColor: "black",
//             cellColor: "white",
//             isPieceDama: false
//         },
//     ],[
//         //row1
//         {
//             occupied: true,
//             rowNumber: 1,
//             cellNumber: 0,
//             pieceColor: "black",
//             cellColor: "white",
//             isPieceDama: false
//         },
//         {
//             ...INIT_CELL, 
//             rowNumber: 1, 
//             cellNumber: 1,
//             cellColor: "black"
//         },
//         {
//             occupied: true,
//             rowNumber: 1,
//             cellNumber: 2,
//             pieceColor: "black",
//             cellColor: "white",
//             isPieceDama: false
//         },
//         {
//             ...INIT_CELL,
//             rowNumber: 1, 
//             cellNumber: 3,
//             cellColor: "black"
//         },
//         {
//             occupied: true,
//             rowNumber: 1,
//             cellNumber: 4,
//             pieceColor: "black",
//             cellColor: "white",
//             isPieceDama: false
//         },
//         {
//             ...INIT_CELL,
//             rowNumber: 1, 
//             cellNumber: 5,
//             cellColor: "black"
//         },
//         {
//             occupied: true,
//             rowNumber: 1,
//             cellNumber: 6,
//             pieceColor: "black",
//             cellColor: "white",
//             isPieceDama: false
//         },
//         {
//             ...INIT_CELL, 
//             rowNumber: 1, 
//             cellNumber: 7,
//             cellColor: "black"
//         }
//     ],[
//         //row2
//         {
//             ...INIT_CELL, 
//             rowNumber: 2, 
//             cellNumber: 0,
//             cellColor: "black"
//         },
//         {
//             occupied: true,
//             rowNumber: 2,
//             cellNumber: 1,
//             pieceColor: "black",
//             cellColor: "white",
//             isPieceDama: false
//         },
//         {
//             ...INIT_CELL, 
//             rowNumber: 2, 
//             cellNumber: 2,
//             cellColor: "black"
//         },
//         {
//             occupied: true,
//             rowNumber: 2,
//             cellNumber: 3,
//             pieceColor: "black",
//             cellColor: "white",
//             isPieceDama: false
//         },
//         {
//             ...INIT_CELL, 
//             rowNumber: 2, 
//             cellNumber: 4,
//             cellColor: "black"
//         },
//         {
//             occupied: true,
//             rowNumber: 2,
//             cellNumber: 5,
//             pieceColor: "black",
//             cellColor: "white",
//             isPieceDama: false
//         },
//         {
//             ...INIT_CELL, 
//             rowNumber: 2, 
//             cellNumber: 6,
//             cellColor: "black"
//         },
//         {
//             occupied: true,
//             rowNumber: 2,
//             cellNumber: 7,
//             pieceColor: "black",
//             cellColor: "white",
//             isPieceDama: false
//         },
//     ],[
//         //row3
//         {
//             ...INIT_CELL, 
//             occupied: false,
//             rowNumber: 3, 
//             cellNumber: 0, 
//             cellColor: "white"
//         },
//         {
//             ...INIT_CELL, 
//             rowNumber: 3, 
//             cellNumber: 1,
//             cellColor: "black"
//         },
//         {
//             ...INIT_CELL, 
//             occupied: false,
//             rowNumber: 3, 
//             cellNumber: 2, 
//             cellColor: "white"
//         },
//         {
//             ...INIT_CELL, 
//             rowNumber: 3, 
//             cellNumber: 3,
//             cellColor: "black"
//         },
//         {
//             ...INIT_CELL, 
//             occupied: false,
//             rowNumber: 3, 
//             cellNumber: 4, 
//             cellColor: "white"
//         },
//         {
//             ...INIT_CELL, 
//             rowNumber: 3, 
//             cellNumber: 5,
//             cellColor: "black"
//         },
//         {
//             ...INIT_CELL, 
//             occupied: false,
//             rowNumber: 3, 
//             cellNumber: 6, 
//             cellColor: "white"
//         },
//         {
//             ...INIT_CELL,
//             rowNumber: 3, 
//             cellNumber: 7,
//             cellColor: "black"
//         }
//     ],[
//         //row4
//         {
//             ...INIT_CELL, 
//             rowNumber: 4, 
//             cellNumber: 0, 
//             cellColor: "black"
//         },
//         {
//             ...INIT_CELL, 
//             occupied: false,
//             rowNumber: 4, 
//             cellNumber: 1,
//             cellColor: "white"
//         },
//         {
//             ...INIT_CELL, 
//             rowNumber: 4, 
//             cellNumber: 2, 
//             cellColor: "black"
//         },
//         {
//             ...INIT_CELL,
//             occupied: false,
//             rowNumber: 4, 
//             cellNumber: 3,
//             cellColor: "white"
//         },
//         {
//             ...INIT_CELL,
//             rowNumber: 4, 
//             cellNumber: 4, 
//             cellColor: "black"
//         },
//         {
//             ...INIT_CELL,
//             occupied: false,
//             rowNumber: 4, 
//             cellNumber: 5,
//             cellColor: "white"
//         },
//         {
//             ...INIT_CELL, 
//             rowNumber: 4, 
//             cellNumber: 6, 
//             cellColor: "black"
//         },
//         {
//             ...INIT_CELL, 
//             occupied: false,
//             rowNumber: 4, 
//             cellNumber: 7,
//             cellColor: "white"
//         }
//     ],[
//         //row5
//         {
//             occupied: true,
//             rowNumber: 5,
//             cellNumber: 0,
//             pieceColor: "white",
//             cellColor: "white",
//             isPieceDama: false
//         },
//         {
//             ...INIT_CELL, 
//             rowNumber: 5, 
//             cellNumber: 1,
//             cellColor: "black"
//         },
//         {
//             occupied: true,
//             rowNumber: 5,
//             cellNumber: 2,
//             pieceColor: "white",
//             cellColor: "white",
//             isPieceDama: false
//         },
//         {
//             ...INIT_CELL, 
//             rowNumber: 5, 
//             cellNumber: 3,
//             cellColor: "black"
//         },
//         {
//             occupied: true,
//             rowNumber: 5,
//             cellNumber: 4,
//             pieceColor: "white",
//             cellColor: "white",
//             isPieceDama: false
//         },
//         {
//             ...INIT_CELL,
//             rowNumber: 5, 
//             cellNumber: 5,
//             cellColor: "black"
//         },
//         {
//             occupied: true,
//             rowNumber: 5,
//             cellNumber: 6,
//             pieceColor: "white",
//             cellColor: "white",
//             isPieceDama: false
//         },
//         {
//             ...INIT_CELL,
//             rowNumber: 5, 
//             cellNumber: 7,
//             cellColor: "black"
//         }
//     ],[
//         //row6
//         {
//             ...INIT_CELL,
//             rowNumber: 6, 
//             cellNumber: 0,
//             cellColor: "black"
//         },
//         {
//             occupied: true,
//             rowNumber: 6,
//             cellNumber: 1,
//             pieceColor: "white",
//             cellColor: "white",
//             isPieceDama: false
//         },
//         {
//             ...INIT_CELL,
//             rowNumber: 6, 
//             cellNumber: 2,
//             cellColor: "black"
//         },
//         {
//             occupied: true,
//             rowNumber: 6,
//             cellNumber: 3,
//             pieceColor: "white",
//             cellColor: "white",
//             isPieceDama: false
//         },
//         {
//             ...INIT_CELL,
//             rowNumber: 6, 
//             cellNumber: 4,
//             cellColor: "black"
//         },
//         {
//             occupied: true,
//             rowNumber: 6,
//             cellNumber: 5,
//             pieceColor: "white",
//             cellColor: "white",
//             isPieceDama: false
//         },
//         {
//             ...INIT_CELL,
//             rowNumber: 6, 
//             cellNumber: 6,
//             cellColor: "black"
//         },
//         {
//             occupied: true,
//             rowNumber: 6,
//             cellNumber: 7,
//             pieceColor: "white",
//             cellColor: "white",
//             isPieceDama: false
//         },
//     ],[
//         //row7
//         {
//             occupied: true,
//             rowNumber: 7,
//             cellNumber: 0,
//             pieceColor: "white",
//             cellColor: "white",
//             isPieceDama: false
//         },
//         {
//             ...INIT_CELL,
//             rowNumber: 7, 
//             cellNumber: 1,
//             cellColor: "black"
//         },
//         {
//             occupied: true,
//             rowNumber: 7,
//             cellNumber: 2,
//             pieceColor: "white",
//             cellColor: "white",
//             isPieceDama: false
//         },
//         {
//             ...INIT_CELL,
//             rowNumber: 7, 
//             cellNumber: 3,
//             cellColor: "black"
//         },
//         {
//             occupied: true,
//             rowNumber: 7,
//             cellNumber: 4,
//             pieceColor: "white",
//             cellColor: "white",
//             isPieceDama: false
//         },
//         {
//             ...INIT_CELL,
//             rowNumber: 7, 
//             cellNumber: 5,
//             cellColor: "black"
//         },
//         {
//             occupied: true,
//             rowNumber: 7,
//             cellNumber: 6,
//             pieceColor: "white",
//             cellColor: "white",
//             isPieceDama: false
//         },
//         {
//             ...INIT_CELL,
//             rowNumber: 7, 
//             cellNumber: 7,
//             cellColor: "black"
//         }
//     ]
// ]