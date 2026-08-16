import { useEffect } from "react";

const ORG = "Duncan Village Safe Park and Drop-in Centre";
const OG_IMAGE = "https://media.base44.com/images/public/6a75f1f68617f8a7b5abfa7c/be2ad761c_WhatsAppImage2026-08-04at142759.jpg";

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/** Per-route SEO metadata: unique title, description, canonical and Open Graph tags. */
export default function Seo({ title, description, path, image = OG_IMAGE }) {
  useEffect(() => {
    const fullTitle = `${title} | ${ORG}`;
    const url = `${window.location.origin}${path}`;
    document.title = fullTitle;
    setMeta("name", "description", description);
    setCanonical(url);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", ORG);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
  }, [title, description, path, image]);
  return null;
}