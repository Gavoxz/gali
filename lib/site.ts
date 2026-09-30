// Placeholders: fill in only with real, verified information.
export const site = {
  instagram: "https://www.instagram.com/gali.capital/",
  handle: "@gali.capital",
  contactEmail: "" as string, // e.g. "contact@..." — empty falls back to Instagram
  regulatory: null as null | string[], // CVM/CNPJ/authorisation notices go here
};
export const contactHref = site.contactEmail ? `mailto:${site.contactEmail}` : site.instagram;
