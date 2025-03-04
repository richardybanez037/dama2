import { INIT_ROW_0, INIT_ROW_1, INIT_ROW_2, INIT_ROW_3, INIT_ROW_4, INIT_ROW_5, INIT_ROW_6, INIT_ROW_7 } from "@/app/constants/game";
import { ICell } from "@/app/definitions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialGameState {
    path: number[][],
    row_0: ICell[],
    row_1: ICell[],
    row_2: ICell[],
    row_3: ICell[],
    row_4: ICell[],
    row_5: ICell[],
    row_6: ICell[],
    row_7: ICell[],
    selectedPiece: ICell | null,
    turn: "black" | "white"
}

const initialState: InitialGameState = {
    path: [],
    row_0: INIT_ROW_0,
    row_1: INIT_ROW_1,
    row_2: INIT_ROW_2,
    row_3: INIT_ROW_3,
    row_4: INIT_ROW_4,
    row_5: INIT_ROW_5,
    row_6: INIT_ROW_6,
    row_7: INIT_ROW_7,
    selectedPiece: null,
    turn: "white"
}

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        setPath: (state, actions: PayloadAction<number[][]>) => {
            state.path = actions.payload
        },
        clearPath: (state) => {
            state.path = []
        },
        setSelectedPiece: (state, actions: PayloadAction<ICell>) => {
            state.selectedPiece = actions.payload
        },
        setRow0: (state, actions: PayloadAction<ICell[]>) => {
            state.row_0 = actions.payload
        },
        setRow1: (state, actions: PayloadAction<ICell[]>) => {
            state.row_1 = actions.payload
        },
        setRow2: (state, actions: PayloadAction<ICell[]>) => {
            state.row_2 = actions.payload
        },
        setRow3: (state, actions: PayloadAction<ICell[]>) => {
            state.row_3 = actions.payload
        },
        setRow4: (state, actions: PayloadAction<ICell[]>) => {
            state.row_4 = actions.payload
        },
        setRow5: (state, actions: PayloadAction<ICell[]>) => {
            state.row_5 = actions.payload
        },
        setRow6: (state, actions: PayloadAction<ICell[]>) => {
            state.row_6 = actions.payload
        },
        setRow7: (state, actions: PayloadAction<ICell[]>) => {
            state.row_7 = actions.payload
        },
    }
})

export const {
    setPath,
    clearPath,
    setSelectedPiece,
    setRow0,
    setRow1,
    setRow2,
    setRow3,
    setRow4,
    setRow5,
    setRow6,
    setRow7,
} = gameSlice.actions

export default gameSlice.reducer