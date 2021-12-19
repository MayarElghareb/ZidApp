import { Container, Button } from "react-bootstrap";
import Group1 from "../../assets/images/Group1.png";
import Group2 from "../../assets/images/Group2.png";
import Group3 from "../../assets/images/Group3.png";
import zidapp from "../../assets/images/zidapp.png";
import arrow from "../../assets/images/arrow.png";

import "./OurApps.css";
const Apps = () => {
  return (
    <section className="bg-light" id="apps">
      <Container>
        <div className="row mt-5 p-5 ">
          <div className="col-md-6">
            <h4>كل ما تحتاجه لنمو متجرك فى مكان واحد </h4>
            <p>
              مميزات سوق تطبيقات زد تساعدك في سهولة وسرعة اﺎﻟستفادة من خدمات
              وحلول سوق التطبيقات لنمو متجرك ومضاعفة أرباحك
            </p>
            <p>
              <img src={Group1} alt="icon" /> سهولة ادارة و تفعيل تطبيقاتك من
              نفس لوحة تحكم متجرك
            </p>
            <p>
              <img src={Group2} alt="icon" /> دعم فني و تقني متكامل متوفر على
              مدار الساعة
            </p>
            <p>
              <img src={Group3} alt="icon" /> أسعار تنافسية مع تجربة مجانية
              وباقات اشتراك متنوعة{" "}
            </p>
            <Button className="justify-content-center btn-color w-50">
              تصفح التطبيقات
              <img src={arrow} alt="arrow" />
            </Button>
          </div>
          <div className="col-md-6 Apps__image ">
            <div className=" ">
              <img src={zidapp} alt="Apps" className="mt-5 w-100" />
            </div>
          </div>
        </div>
     
      </Container>
    </section>
  );
};
export default Apps;
