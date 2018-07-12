export default class Vertex3D{
    constructor(x,y,z){
        this._x = parseFloat(x);
        this._y = parseFloat(y);
        this._z = parseFloat(z);
    }
    get x(){return this._x}
    get y(){return this._y}
    get z(){return this._z}

    set x(x){this.x = _x}
    set y(y){this.y = _y}
    set z(z){this.z = _z}
    
}