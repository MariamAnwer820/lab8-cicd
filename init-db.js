db = db.getSiblingDB('tasks');
db.tasks.insertMany([
  { id: 1, name: 'Buy groceries', status: 'pending' },
  { id: 2, name: 'Walk the dog', status: 'done' },
  { id: 3, name: 'Read a book', status: 'pending' },
  { id: 4, name: 'Write report', status: 'in-progress' },
  { id: 5, name: 'Clean house', status: 'pending' },
  { id: 6, name: 'Cook dinner', status: 'done' },
  { id: 7, name: 'Tea', status: 'pending' }
]);
