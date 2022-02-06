import { portfolioList } from "app.config";

// Components
import Card from "components/Card";

const Portfolio = () => {
  return (
    <div className="py-32 bg-pink-50">
      <h1 className="mb-20 text-2xl tracking-wider text-center">PORTFOLIO</h1>
      <div className="flex-wrap gap-8 justify-center items-center text-center sm:flex">
        {portfolioList.map((portfolio) => (
          <div key={portfolio.id}>
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
