import { useEffect } from "react";

export default function usePageTranslator(targetLang) {
  useEffect(() => {
    if (!targetLang) return;

    const getTextNodes = (node, list = []) => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
        list.push(node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        node.childNodes.forEach(child => getTextNodes(child, list));
      }
      return list;
    };

    const translateAll = async () => {
      const nodes = getTextNodes(document.body);
      const texts = nodes.map(n => n.textContent);

      try {
        const res = await fetch("https://libretranslate.com/translate", {
          method: "POST",
          body: JSON.stringify({
            q: texts,
            source: "auto",
            target: targetLang,
            format: "text"
          }),
          headers: { "Content-Type": "application/json" }
        });

        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);

        const data = await res.json();

        // Si la API devuelve un array de traducciones
        if (Array.isArray(data)) {
          data.forEach((item, i) => {
            nodes[i].textContent = item.translatedText;
          });
        } else {
          console.error("Formato de respuesta inesperado", data);
        }

      } catch (err) {
        console.error("Error traduciendo:", err);
      }
    };

    translateAll();
  }, [targetLang]);
}
