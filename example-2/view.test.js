/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  const view = new View();
  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    expect(document.querySelectorAll('p').length).toBe(2);
  });

  it('adds a third paragraph', () => {
    view.addParagraph();
    expect(document.querySelectorAll('p').length).toBe(3);
  })
});