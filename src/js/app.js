// TODO: write your code here
import ErrorRepository from './numbers';

console.log('worked');

let repo = new ErrorRepository();
repo.addError(404, 'Not Found');
console.log(repo.translate(404));