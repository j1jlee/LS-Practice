/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
 
var floodFill = function(image, sr, sc, color) {

    let startingValue = image[sr][sc];
    // startingValue--;

    image[sr][sc] = color;

    const rowLength = image.length;
    const colLength = image[0].length;

    const rowChange = [1, -1, 0, 0];
    const colChange = [0, 0, 1, -1];

    let stack = [[sr, sc]];

    const firstCoord = sr + 'x' + sc;
    const travelSet = new Set(firstCoord)

    while (stack.length > 0) {
        const currentCoord = stack.pop();
        const [currentR, currentC] = currentCoord;

        const coordStr = currentR + 'x' + currentC;
        travelSet.add(coordStr);

        image[currentR][currentC] = color;

        for (let i = 0; i < 4; i++) {
            const rowDelta = currentR + rowChange[i];
            const colDelta = currentC + colChange[i];

            if (rowDelta < 0 ||
            rowDelta >= rowLength ||
            colDelta < 0 ||
            colDelta >= colLength) {
                continue;
            } else {
                const newCoord = rowDelta + 'x' + colDelta;
                if (!travelSet.has(newCoord) && image[rowDelta][colDelta] == startingValue) {
                // if (image[rowDelta][colDelta] == startingValue) {
                    stack.push([rowDelta, colDelta]);
                }
            }

            
        }

        if (stack.length == 0) break;

        console.log("stack length?", stack.length)
    }
    
    return image;
};

