import { newSpecPage } from '@stencil/core/testing';
import { KizunaProgress } from '../kizuna-progress';

describe('kizuna-progress', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KizunaProgress],
      html: `<kizuna-progress></kizuna-progress>`,
    });
    expect(page.root).toEqualHtml(`
      <kizuna-progress>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kizuna-progress>
    `);
  });
});
