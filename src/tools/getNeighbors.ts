const getNeighborhs = (index: number, sizeXY: number) => {
    const neighbors = []

    switch (index) {
        case 0 : {
            neighbors.push(index + 1)
            neighbors.push(index + sizeXY)
            neighbors.push(index + sizeXY + 1)
            break
        }
        case sizeXY - 1 : {
            neighbors.push(index - 1)
            neighbors.push(index + sizeXY - 1)
            neighbors.push(index + sizeXY)
            break
        }
        case sizeXY * (sizeXY - 1) : {
            neighbors.push(index - sizeXY)
            neighbors.push(index - sizeXY + 1)
            neighbors.push(index + 1)
            break
        }
        case sizeXY * sizeXY - 1 : {
            neighbors.push(index - sizeXY - 1)
            neighbors.push(index - sizeXY)
            neighbors.push(index - 1)
            break
        }

        default: {
            if (0 < index && index < sizeXY) {
                neighbors.push(index - 1)
                neighbors.push(index + 1)
                neighbors.push(index + sizeXY - 1)
                neighbors.push(index + sizeXY)
                neighbors.push(index + sizeXY + 1)
                break
            }
            if (index % sizeXY === 0) {
                neighbors.push(index - sizeXY)
                neighbors.push(index - sizeXY + 1)
                neighbors.push(index + 1)
                neighbors.push(index + sizeXY)
                neighbors.push(index + sizeXY + 1)
                break
            }
            if (index % sizeXY === sizeXY - 1) {
                neighbors.push(index - sizeXY - 1)
                neighbors.push(index - sizeXY)
                neighbors.push(index - 1)
                neighbors.push(index + sizeXY - 1)
                neighbors.push(index + sizeXY)
                break
            }
            if (sizeXY * (sizeXY - 1) < index && index < sizeXY * sizeXY) {
                neighbors.push(index - sizeXY - 1)
                neighbors.push(index - sizeXY)
                neighbors.push(index - sizeXY + 1)
                neighbors.push(index - 1)
                neighbors.push(index + 1)
                break
            }
            neighbors.push(index - sizeXY - 1)
            neighbors.push(index - sizeXY)
            neighbors.push(index - sizeXY + 1)
            neighbors.push(index - 1)
            neighbors.push(index + 1)
            neighbors.push(index + sizeXY - 1)
            neighbors.push(index + sizeXY)
            neighbors.push(index + sizeXY + 1)
            break
        }
    }

    return neighbors
}

export default getNeighborhs