import { useEffect } from "react";
import { siteConfig, organizationJsonLd, type SeoMeta } from "../config/seo";

interface SeoProps {
  meta: SeoMeta;
}

export function Seo({ meta }: SeoProps) {
  useEffect(() => {
    const title = meta.title || siteConfig.defaultTitle;
    const description = meta.description || siteConfig.defaultDescription;
    const canonical = meta.canonical || `${siteConfig.url}${window.location.pathname}`;

    document.title = title;

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);

    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);
  }, [meta]);

  useEffect(() => {
    const id = "jsonld-organization";
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(organizationJsonLd);
    document.head.appendChild(script);
  }, []);

  return null;
}
