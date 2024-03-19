export {measureDistance};

Hooks.on("canvasInit", function () {
    SquareGrid.prototype.measureDistances = measureDistance;
});

function measureDistance(segments) {
    // Track the total number of diagonals
    let diagonals = 0;
    const dimensions = canvas.dimensions;
  
    // Iterate over measured segments
    return segments.map(segment => {
        let ray = segment.ray;

        // Determine the total distance traveled
        let nx = Math.ceil(Math.abs(ray.dx / dimensions.size));
        let ny = Math.ceil(Math.abs(ray.dy / dimensions.size));

        // Determine the number of straight and diagonal moves
        let diagonalCount = Math.min(nx, ny);
        let straightCount = Math.abs(ny - nx);
        diagonals += diagonalCount;

        let nd10 = Math.floor(diagonals / 2) - Math.floor((diagonals - diagonalCount) / 2);
        let spaces = (nd10 * 2) + (diagonalCount - nd10) + straightCount;
        return spaces * canvas.dimensions.distance;
    });
}
