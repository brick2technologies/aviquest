import { useEffect } from "react";

export default function SEO({
  title,
  description,
  keywords,
  canonical,
}) {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const setProperty = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    if (description) setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);

    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:type", "website");
    setProperty("og:url", window.location.href);

    if (canonical) {
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }
  }, [title, description, keywords, canonical]);

  return null;
}
