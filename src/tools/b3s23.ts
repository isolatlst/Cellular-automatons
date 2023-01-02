import checkLivingNeighbors from "./checkLivingNeighbors";


const b3s23 = (grid: Array<boolean>, sizeXY: number) => {
    let isGridUpdated = false
    const nextGeneration = grid.map((cell, index) => {
       const livingNeighbors = checkLivingNeighbors(index, sizeXY, grid)

        if (cell && (livingNeighbors === 2 || livingNeighbors === 3)) {
            return cell
        }
        if (cell && (livingNeighbors < 2 || livingNeighbors > 3)) {
            isGridUpdated = true
            return !cell
        }
        if (!cell && livingNeighbors === 3) {
            isGridUpdated = true
            return !cell
        }
        return false
    })
    return {isGridUpdated, nextGeneration}
}

export default b3s23