import ImageCarousel from "../components/Carousel";
import Content from "../components/Content";
import Team from "../components/Team";
import Header from "../components/Header";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="mt-4">
        <ImageCarousel />
      </div>
      <Content
        title="Nosotros"
        text="Kentucky Fried Chicken, conocido mundialmente como KFC..."
      />
      <Content
        title="Misión"
        text="Nuestra misión es satisfacer las necesidades del sector alimentario..."
      />
      <Content
        title="Visión"
        text="Ser la empresa líder en la comercialización, distribución de productos..."
      />
      <Team />
    </div>
  );
};

export default LandingPage;
