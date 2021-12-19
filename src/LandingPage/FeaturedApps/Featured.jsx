import { Container } from "react-bootstrap";
import app from "../../assets/images/app.png";
import rate from "../../assets/images/rate.png";
import arrow from "../../assets/images/arrow.png";
import "./Featured.css";
const Featured = () => {
  return (
    <Container>
      <div class="row justify-content-center mt-5 text-center" id="featured">
        <div class="col-md-6">
          <h4 className="text-dark">التطبيقات المميزة</h4>
          <p>تطبيقات تقدم حلول وخدمات مميزة نوصي بتجربتها</p>
        </div>
      </div>
      <div className="row  mt-5 p-2 ">
        <div className="col bg-light rounded p-2 me-2 ">
          <div className="row ">
            <div className="col-md-4">
              <img src={app} alt="app" />
            </div>

            <div className="col-md-8">
              <h5>
                قمرة <img src={rate} />
              </h5>

              <p>تطوير : عمر برهوم</p>
              <p>نظام الوﺎﻟء اﺄﻟمثل الذي يمكنك من رفع مبيعاتك</p>
            </div>
          </div>
        </div>

        <div className="col bg-light rounded p-2 me-2">
          <div className="row ">
            <div className="col-md-4">
              <img src={app} />
            </div>

            <div className="col-md-8">
              <h5>
                قمرة <img src={rate} />
              </h5>

              <p>تطوير : عمر برهوم</p>
              <p>نظام الوﺎﻟء اﺄﻟمثل الذي يمكنك من رفع مبيعاتك</p>
            </div>
          </div>
        </div>
        <div className="col bg-light rounded p-2 me-2">
          <div className="row ">
            <div className="col-md-4">
              <img src={app} />
            </div>

            <div className="col-md-8">
              <h5>
                قمرة <img src={rate} />
              </h5>

              <p>تطوير : عمر برهوم</p>
              <p>نظام الوﺎﻟء اﺄﻟمثل الذي يمكنك من رفع مبيعاتك</p>
            </div>
          </div>
        </div>
        <div className="col bg-light rounded p-2 me-2">
          <div className="row ">
            <div className="col-md-4">
              <img src={app} />
            </div>

            <div className="col-md-8">
              <h5>
                قمرة <img src={rate} />
              </h5>

              <p>تطوير : عمر برهوم</p>
              <p>نظام الوﺎﻟء اﺄﻟمثل الذي يمكنك من رفع مبيعاتك</p>
            </div>
          </div>
  
        </div>
      </div>
      <p className="text-center all-apps mt-5 ">جميع التطبيقات
      <img src={arrow} alt="arrow" className="ani__arrow"/></p>
    </Container>
  );
};
export default Featured;
