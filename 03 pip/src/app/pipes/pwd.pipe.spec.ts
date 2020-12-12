import { PwdPipe } from './pwd.pipe';

describe('PwdPipe', () => {
  it('create an instance', () => {
    const pipe = new PwdPipe();
    expect(pipe).toBeTruthy();
  });
});
