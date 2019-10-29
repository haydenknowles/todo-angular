import { Todo } from './todo';
describe('Todo', () => {
    it('should create an instance', () => {
        expect(new Todo()).toBeTruthy();
    });
    it('should take values in constructor', () => {
        let todo = new Todo({
            title: 'Item title',
            completed: false
        });
        expect(todo.title).toEqual('Item title');
        expect(todo.completed).toEqual(false);
    });
});
//# sourceMappingURL=todo.spec.js.map