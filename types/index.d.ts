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

export type User = {
    username: string,
    email: string,
    fullName: string
    profilePic: string
}