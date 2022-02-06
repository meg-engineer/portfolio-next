import Image from "next/image";
import { portfolioList } from "app.config";

// Components
import Card from "components/Card";

const Portfolio = () => {
  return (
    <div className="py-32 text-stone-600 bg-pink-50">
      <h1 className="mb-12 text-2xl tracking-wider text-center">PORTFOLIO</h1>
      <p className="mb-4 text-center">個人開発のWebアプリケーションです</p>
      <div className="mb-4 text-center">
        <a
          href="https://github.com/meg-engineer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-600 bg-stone-300 hover:bg-stone-50 rounded-full border-0 btn"
        >
          <Image
            src="/icon/github-brands.svg"
            width={16}
            height={16}
            alt="twitter"
          />
          <span className="ml-2 capitalize">Githubはこちら</span>
        </a>
      </div>
      <div className="gap-8 justify-center items-center md:flex md:px-32">
        {portfolioList.map((portfolio) => (
          <div key={portfolio.id} className="mb-3 md:mb-0">
            <Card
              title={portfolio.title}
              description={portfolio.description}
              detail={portfolio.detail}
              stack={portfolio.stack}
              image={portfolio.image}
              url={portfolio.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
