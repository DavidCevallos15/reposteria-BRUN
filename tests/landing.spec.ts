import { expect, test } from '@playwright/test';

test.describe('Landing Dulce Atelier', () => {
  test('no hay scroll horizontal en ninguna sección', async ({ page }) => {
    await page.goto('/');
    const height = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < height; y += 600) {
      await page.evaluate((top) => window.scrollTo(0, top), y);
      const { scrollW, clientW } = await page.evaluate(() => ({
        scrollW: document.documentElement.scrollWidth,
        clientW: document.documentElement.clientWidth,
      }));
      expect(scrollW, `overflow en y=${y}`).toBeLessThanOrEqual(clientW);
    }
  });

  test('hero con H1 y CTA principal a WhatsApp', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1, name: /galletas con mordida/i })).toBeVisible();
    const cta = page.locator('#hero').getByRole('link', { name: /pedir por whatsapp/i });
    await expect(cta).toHaveAttribute('href', /wa\.me/);
  });

  test('tabs del menú funcionan con teclado', async ({ page }) => {
    await page.goto('/#menu');
    const first = page.getByRole('tab', { name: 'Caja x3' });
    await first.focus();
    await page.keyboard.press('ArrowRight');
    await expect(page.getByRole('tab', { name: 'Caja x6' })).toHaveAttribute('aria-selected', 'true');
    await expect(page.getByRole('tabpanel')).toContainText('Clásica y Cremosa');
    await page.keyboard.press('End');
    await expect(page.getByRole('tab', { name: 'Frías' })).toBeFocused();
    await expect(page.getByRole('tabpanel')).toContainText('Matcha Frío');
    await page.keyboard.press('Home');
    await expect(page.getByRole('tab', { name: 'Caja x3' })).toHaveAttribute('aria-selected', 'true');
  });

  test('una categoría abre su tab en el menú', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /^NY Rolls/ }).click();
    await expect(page.getByRole('tab', { name: 'NY Rolls' })).toHaveAttribute('aria-selected', 'true');
    await expect(page.getByRole('tabpanel')).toContainText('Manjar de Olla');
  });

  test('menú mobile abre, bloquea scroll y cierra con Escape', async ({ page, viewport }) => {
    test.skip((viewport?.width ?? 0) >= 1024, 'solo mobile/tablet');
    await page.goto('/');
    await page.getByRole('button', { name: 'Abrir menú' }).click();
    const dialog = page.getByRole('dialog', { name: 'Menú' });
    await expect(dialog).toBeVisible();
    await expect(page.getByRole('button', { name: 'Cerrar menú' })).toBeFocused();
    expect(await page.evaluate(() => document.body.style.overflow)).toBe('hidden');
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
  });

  test('datos vacíos no se renderizan (TikTok)', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'TikTok' })).toHaveCount(0);
    await expect(page.getByRole('link', { name: 'Instagram' }).first()).toHaveAttribute('href', /dulceatelier/);
  });

  test('JSON-LD Bakery sin datos inventados', async ({ page }) => {
    await page.goto('/');
    const raw = await page.locator('script[type="application/ld+json"]').textContent();
    const data = JSON.parse(raw ?? '{}');
    expect(data['@type']).toBe('Bakery');
    expect(data.aggregateRating.ratingValue).toBe(4.6);
    expect(data.aggregateRating.reviewCount).toBeUndefined();
    expect(data.telephone).toBe('+593 99 000 0000');
    expect(data.openingHoursSpecification).toHaveLength(1);
  });
});

test.describe('Reduced motion', () => {
  test.use({ reducedMotion: 'reduce' });

  test('el texto se ve sin animar y la galleta no gira con el scroll', async ({ page }) => {
    await page.goto('/');
    // con reduced motion el H1 se renderiza como texto plano (sin spans por letra)
    const h1 = page.getByRole('heading', { level: 1 });
    await expect(h1).toBeVisible();
    expect(await h1.locator('.inline-block').count()).toBe(0);

    const cookieTransform = () =>
      page.evaluate(() => getComputedStyle(document.querySelector('#hero .will-change-transform')!).transform);
    const before = await cookieTransform();
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(300);
    expect(await cookieTransform()).toBe(before);

    // el badge giratorio queda quieto
    const anim = await page.evaluate(
      () => getComputedStyle(document.querySelector('#hero svg.animate-spin-slow')!).animationName,
    );
    expect(anim).toBe('none');
  });
});
