import checkLivingNeighbors from "./checkLivingNeighbors";


const BXsAny = (grid: Array<boolean>, sizeXY: number, X: number) => {
    let isGridUpdated = false
    const nextGeneration = grid.map((cell, index) => {
        const livingNeighbors = checkLivingNeighbors(index, sizeXY, grid)
        if (!cell && livingNeighbors === X) {
            isGridUpdated = true
            return true
        }
        if (cell && livingNeighbors < 9 && livingNeighbors >= 0) {
            return true
        }
        return false
    })
    return {isGridUpdated, nextGeneration}
}

export default BXsAny