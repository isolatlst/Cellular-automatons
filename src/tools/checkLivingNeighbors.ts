import getNeighborhs from "./getNeighbors";

const checkLivingNeighbors = (index: number, sizeXY: number, grid: Array<boolean>) => {
    const neighbors = getNeighborhs(index, sizeXY)
    let livingNeighbors = 0

    neighbors.forEach(neighbor => {
        if (grid[neighbor]) {
            livingNeighbors += 1;
        }
    })
    return livingNeighbors
}

export default checkLivingNeighbors