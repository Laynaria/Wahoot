export const meta = (title: string, lang: string) => {
  useHead({
    title: `Wahoot - ${title}`,
    htmlAttrs: { lang },
  });
};
