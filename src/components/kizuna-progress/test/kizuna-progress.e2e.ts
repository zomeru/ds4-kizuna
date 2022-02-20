import { newE2EPage } from '@stencil/core/testing';

describe('kizuna-progress', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kizuna-progress></kizuna-progress>');

    const element = await page.find('kizuna-progress');
    expect(element).toHaveClass('hydrated');
  });
});
