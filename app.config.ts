interface portfolioType {
  id: number;
  title: string;
  description?: string;
  detail: string;
  stack: string[];
  url: string;
  image: string;
}

export const portfolioList: portfolioType[] = [
  {
    id: 1,
    title: "ブログ",
    description: "個人ブログ",
    detail: "個人ブログです。",
    stack: ["JavaScript", "Next.js", "Tailwind CSS,daisyUI", "Contentful"],
    url: "https://next-contentful-vert.vercel.app/",
    image: "/blog.jpg",
  },
  {
    id: 2,
    title: "YATTA!",
    description: "嬉しい出来事をカードにしてTwitterでシェア",
    detail:
      "嬉しい出来事をイラストカード（OGP画像）にして、Twitterでシェアできるアプリです。",
    stack: [
      "JavaScript",
      "Vue.js",
      "Vuetify",
      "Firebase/Cloud Firestore",
      "Firebase/Cloud Function",
    ],
    url: "https://yatta.tokyo/",
    image: "/yatta.png",
  },
  {
    id: 3,
    title: "ポートフォリオサイト",
    description: "",
    detail: "現在閲覧されているポートフォリオサイトです。",
    stack: ["TypeScript", "Next.js", "Tailwind CSS,daisyUI"],
    url: "https://meg-portfolio.site/",
    image: "/yatta.png",
  },
];
