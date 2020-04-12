import { expect } from 'chai';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should have h1 that says Users', (done) => {
    const options = { contentType: 'text/html' };
    JSDOM.fromFile('./src/index.html', options)
    .then(dom => {
      const h1 = dom.window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Users');
      done();
    }).catch(done);
  });
});
