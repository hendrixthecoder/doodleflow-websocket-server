export type DrawLine = {
    prevPoint: Point | null,
    currentPoint: Point,
    color: string,
    lineWidth: number
}

export type Point = {
    x: number,
    y: number
}