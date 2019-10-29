export class Todo {
    id: number;
    title: string = '';
    completed: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
