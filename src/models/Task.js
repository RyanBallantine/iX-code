
export default class Task {
    constructor(name) {
        this.id = new Date().getTime();
        this.completed = false;
        this.name = name;
    }
}