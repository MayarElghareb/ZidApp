import { Container, Button } from "react-bootstrap";
import "./About.css";
import arrow from "../../assets/images/arrow.png";
import product from "../../assets/images/product.png";
const About = () => {
  return (
    <Container>
      <section id="about">
      <div class="row justify-content-center mt-5 p-5 text-center w-100">
        <div class="col-md-6">
          <h4>طور متجرك ووسع آفاق تجارتك مع سوق تطبيقات زد</h4>
          <p>
            طور تجارتك من خالل تطبيقات وحلول سوق تطبيقات زد التي تساعدك في نمو
            أرباحك عبر إدارة عمليات متجرك بشكل فعال واحترافي
          </p>
          <Button className="justify-content-center btn-color">
            تصفح التطبيقات
            <img src={arrow} alt="arrow" />
          </Button>
        </div>
      </div>
      <div class="row  mt-5  justify-content-center product__image ">
        <div className="about__img col-md-6  ">
          <img src={product} alt="product" className="mt-5  w-100" />
        </div>
      </div>
      </section>
    </Container>
  );
};
export default About;
