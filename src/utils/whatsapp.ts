export const WHATSAPP_PHONE = "5531973177316";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_PHONE}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
