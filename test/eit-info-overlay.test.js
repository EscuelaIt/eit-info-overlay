import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../eit-info-overlay.js';

describe('EitInfoOverlay', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`<eit-info-overlay></eit-info-overlay>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`<eit-info-overlay></eit-info-overlay>`);
    el.shadowRoot.querySelector('button').click();
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(7);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`<eit-info-overlay title="attribute title"></eit-info-overlay>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<eit-info-overlay></eit-info-overlay>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
