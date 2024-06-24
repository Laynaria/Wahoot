export const meta = (title: string, lang: string) => {
  useHead({
    title: `Wahoot - ${title}`,
    htmlAttrs: { lang },
    link: [{ rel: "icon", href: "~/favicon.ico" }],
  });
};
