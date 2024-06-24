export const meta = (title: string, lang: string) => {
  useHead({
    title: `Wahoot - ${title}`,
    htmlAttrs: { lang },
    link: [{ rel: "icon", href: "~/favicon.ico" }],
    meta: [
      {
        name: "description",
        content: `${title} page of Wahoot project. An icebreaker web application where people can learn while having fun!`,
      },
    ],
  });
};
