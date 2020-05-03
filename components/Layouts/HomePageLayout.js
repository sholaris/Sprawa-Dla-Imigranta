import { Container } from "react-bootstrap";
import BaseLayout from "./BaseLayout";
import Slider from "../shared/HomePage/Slider";
import Banner from "../shared/HomePage/Banner";
import FoldersSection from "../shared/HomePage/FoldersSection";
import ForumSection from "../shared/HomePage/ForumSection";
import FormsSection from "../shared/HomePage/FormsSection";
import "../../public/static/fontawesome/fontawesome";

const Home = ({ title }) => {
  return (
    <BaseLayout title={title}>
      <Slider />
      <Banner />
      <Container className="wrapper main-content-section">
        <FoldersSection />
        <ForumSection />
      </Container>
      <FormsSection />
    </BaseLayout>
  );
};

export default Home;
