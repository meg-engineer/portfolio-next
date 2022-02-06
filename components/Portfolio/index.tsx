import { portfolioList } from "app.config";

// Components
import Card from "components/Card";

const Portfolio = () => {
  return (
    <div className="py-32 bg-pink-50">
      <h1 className="mb-20 text-2xl tracking-wider text-center">PORTFOLIO</h1>
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
