export class Event {
    constructor(id, name, clubId, _img, dateTime,dressCode,description){
        this.id = id;
        this.name = name;
        this.clubId = clubId;
        this.image = _img;
        this.dateTime = dateTime;
        this.dressCode = dressCode;
        this.description = description;
    }
}