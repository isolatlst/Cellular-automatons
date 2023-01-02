import React from "react";
import {GamesType} from "../tools/gamesType";


const createDefaultGrid = (sizeXY: number) => {
    const arr = [] as Array<boolean>
    arr.length = sizeXY * sizeXY
    arr.fill(false)
    return arr
}

export const useGrid = () => {
    const [sizeXY, setSizeXY] = React.useState(25)
    const [grid, setGrid] = React.useState(createDefaultGrid(sizeXY))
    const [isGamePaused, setIsGamePaused] = React.useState(true)

    const setGridSize = (e: React.ChangeEvent<{ value: string | undefined }>) => {
        if (!isGamePaused) setIsGamePaused(true)
        if (Number(e.currentTarget.value) <= 100) {
            setSizeXY(Number(e.currentTarget.value))
            setGrid(createDefaultGrid(Number(e.currentTarget.value)))
        } else {
            setSizeXY(25)
            setGrid(createDefaultGrid(25))
        }
    }

    const setGridItem = (e: React.MouseEvent<HTMLSpanElement>) => {
        const index = Number((e.target as HTMLElement).dataset.index)
        if (isGamePaused && (index || index === 0)) {
            let newGrid = [...grid]
            newGrid[index] = !newGrid[index]
            setGrid(newGrid)
            newGrid = []
        }
    }

    const clearGrid = () => {
        setIsGamePaused(true)
        setGrid(createDefaultGrid(sizeXY))
    }

    const startGame = (callback: GamesType, X = 0) => {
        setIsGamePaused(false)

        const {isGridUpdated, nextGeneration} = callback(grid, sizeXY, X)

        if (isGridUpdated) {
            setGrid(nextGeneration)
        } else {
            setIsGamePaused(true)
            alert('Следующие поколения неизменны');
        }
    }

    return {
        sizeXY, setGridSize,
        grid, setGridItem, clearGrid,
        startGame, isGamePaused, setIsGamePaused
    }
}