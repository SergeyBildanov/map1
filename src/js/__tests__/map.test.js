import ErrorRepository from '../map';

test("Adding an error", ()=>{
  let repo = new ErrorRepository();
  repo.addError(404, "Not found");
  expect(repo.translate(404)).toBe("Not found");
})
test("Unknown error translation", ()=>{
  let repo = new ErrorRepository();
  repo.addError(404, "Not found");
  expect(repo.translate(405)).toBe("Unknown error");
})

