import { Vertex3D } from "./Vertex3D";
import { Face } from "./Face";

export default class Cube{
    constructor(p1,p2,p3,p4,p5,p6,p7,p8){
        this.vertices = [
            new Vertex3D(p1),
            new Vertex3D(p2),
            new Vertex3D(p3),
            new Vertex3D(p4),
            new Vertex3D(p5),
            new Vertex3D(p6),
            new Vertex3D(p7),
            new Vertex3D(p8)
        ];
        this.faces = [
            new Face([this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3]]),
            new Face([this.vertices[1], this.vertices[5], this.vertices[6], this.vertices[2]]),
            new Face([this.vertices[3], this.vertices[2], this.vertices[6], this.vertices[7]]),
            new Face([this.vertices[4], this.vertices[5], this.vertices[6], this.vertices[7]]),
            new Face([this.vertices[0], this.vertices[4], this.vertices[7], this.vertices[3]]),
            new Face([this.vertices[0], this.vertices[1], this.vertices[5], this.vertices[4]])
        ];
    }
}