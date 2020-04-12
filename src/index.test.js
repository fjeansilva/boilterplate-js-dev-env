import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

const { JSDOM } = jsdom;

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', (done) => {
    const options = { contentType: 'text/html' };
    JSDOM.fromFile('./src/index.html', options)
    .then(dom => {
      const h1 = dom.window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Hello JS');
      done();
    }).catch(done);
  });
});
