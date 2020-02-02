export class Device {

    constructor ( _id= undefined, type= '', description = '', value = 0) {
        this._id = _id;
        this.type = type;
        this.description = description;
        this.value = value;
    }

    _id: string;
    type: String;
    description: String;
    value: Number;
}
