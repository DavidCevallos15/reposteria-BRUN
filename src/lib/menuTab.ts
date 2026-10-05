// Canal mínimo para que una card de categoría active un tab del menú.
const EVENT = 'brun:menu-tab';

export function selectMenuTab(id: string) {
  window.dispatchEvent(new CustomEvent<string>(EVENT, { detail: id }));
  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function onMenuTab(handler: (id: string) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<string>).detail);
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
