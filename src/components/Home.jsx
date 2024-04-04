import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hero1 from './images/hero_1.jpg';
import hero2 from './images/hero_1.jpg';
import { Header } from '../common/Header';

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? 1 : 0));
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const slideImages = [hero1, hero2];

  return (
    <>
    <Header/>
    <div className="site-wrap">
      <div className="hero-slide owl-carousel site-blocks-cover">
        <div className="intro-section" style={{backgroundImage: "url('images/hero_1.jpg')"}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 mx-auto text-center" data-aos="fade-up">
                <h1>OUR PLACEMENT</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="intro-section" style={{backgroundImage: "url('images/hero_1.jpg')"}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 mx-auto text-center" data-aos="fade-up">
                <h1>You Can Learn Anything</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>

      <div className="site-section">
        <div className="container">
          <div className="row mb-5 justify-content-center text-center">
            <div className="col-lg-4 mb-5">
              <h2 className="section-title-underline mb-5">
                <span>Why Academics Works</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="feature-1 border">
                <div className="icon-wrapper bg-primary">
                  <span className="flaticon-mortarboard text-white"></span>
                </div>
                <div className="feature-1-content">
                  <h2>Personalize Learning</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                  <p><a href="#" className="btn btn-primary px-4 rounded-0">Learn More</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="feature-1 border">
                <div className="icon-wrapper bg-primary">
                  <span className="flaticon-school-material text-white"></span>
                </div>
                <div className="feature-1-content">
                  <h2>Trusted Courses</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                  <p><a href="#" className="btn btn-primary px-4 rounded-0">Learn More</a></p>
                </div>
              </div> 
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="feature-1 border">
                <div className="icon-wrapper bg-primary">
                  <span className="flaticon-library text-white"></span>
                </div>
                <div className="feature-1-content">
                  <h2>Tools for Students</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                  <p><a href="#" className="btn btn-primary px-4 rounded-0">Learn More</a></p>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row mb-5 justify-content-center text-center">
            <div className="col-lg-6 mb-5">
              <h2 className="section-title-underline mb-3">
                <span>Popular Courses</span>
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, id?</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
                <div className="owl-slide-3 owl-carousel">
                    <div className="course-1-item">
                      <figure className="thumnail">
                        <a href="course-single.html"><img src="images/course_1.jpg" alt="Image" className="img-fluid" /></a>
                        <div className="price">$99.00</div>
                        <div className="category"><h3>Mobile Application</h3></div>  
                      </figure>
                      <div className="course-1-content pb-4">
                        <h2>How To Create Mobile Apps Using Ionic</h2>
                        <div className="rating text-center mb-3">
                          <span className="icon-star2 text-warning"></span>
                          <span className="icon-star2 text-warning"></span>
                          <span className="icon-star2 text-warning"></span>
                          <span className="icon-star2 text-warning"></span>
                          <span className="icon-star2 text-warning"></span>
                        </div>
                        <p className="desc mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.</p>
                        <p><a href="course-single.html" className="btn btn-primary rounded-0 px-4">Enroll In This Course</a></p>
                      </div>
                    </div>
        
                    <div className="course-1-item">
                      <figure className="thumnail">
                        <a href="course-single.html"><img src="images/course_2.jpg" alt="Image" className="img-fluid" /></a>
                        <div className="price">$99.00</div>
                        <div className="category"><h3>Web Design</h3></div>  
                      </figure>
                      <div className="course-1-content pb-4">
                        <h2>How To Create Mobile Apps Using Ionic</h2>
                        <div className="rating text-center mb-3">
                          <span className="icon-star2 text-warning"></span>
                          <span className="icon-star2 text-warning"></span>
                          <span className="icon-star2 text-warning"></span>
                          <span className="icon-star2 text-warning"></span>
                          <span className="icon-star2 text-warning"></span>
                        </div>
                        <p className="desc mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.</p>
                        <p><a href="course-single.html" className="btn btn-primary rounded-0 px-4">Enroll In This Course</a></p>
                      </div>
                    </div>
        
                    <div className="course-1-item">
                      <figure className="thumnail">
                        <a href="course-single.html"><img src="images/course_3.jpg" alt="Image" className="img-fluid" /></a>
                        <div className="price">$99.00</div>
                        <div className="category"><h3>Software Engineering</h3></div>  
                      </figure>
                      <div className="course-1-content pb-4">
                        <h2>How To Create Mobile Apps Using Ionic</h2>
                        <div className="rating text-center mb-3">
                          <span className="icon-star2 text-warning"></span>
                          <span className="icon-star2 text-warning"></span>
                          <span className="icon-star2 text-warning"></span>
                          <span className="icon-star2 text-warning"></span>
                          <span className="icon-star2 text-warning"></span>
                        </div>
                        <p className="desc mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.</p>
                        <p><a href="course-single.html" className="btn btn-primary rounded-0 px-4">Enroll In This Course</a></p>
                      </div>
                    </div>
        
                    <div className="course-1-item">
                      <figure className="thumnail">
                        <a href="course-single.html"><img src="images/course_4.jpg" alt="Image" className="img-fluid" /></a>
                        <div className="price">$99.00</div>
                        <div className="category"><h3>Photography</h3></div>  
                      </figure>
                      <div className="course-1-content pb-4">
                        <h2>How To Create Mobile Apps Using Ionic</h2>
                        <div className="rating text-center mb-3">
                          <span className="icon-star2 text-warning"></span>
                          <span className="icon-star2 text-warning"></span>
                          <span className="icon-star2 text-warning"></span>
                          <span className="icon-star2 text-warning"></span>
                          <span className="icon-star2 text-warning"></span>
                        </div>
                        <p className="desc mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.</p>
                        <p><a href="course-single.html" className="btn btn-primary rounded-0 px-4">Enroll In This Course</a></p>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-bg style-1" style={{backgroundImage: "url('images/about_1.jpg')"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="section-title-underline mb-5">
                <span>About Our University</span>
              </h2>
              <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p><a href="#" className="btn btn-primary rounded-0 px-4">Read More</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className="news-updates">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="section-title-underline">
                <span>News & Updates</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="post-entry-big">
                <a href="#" className="img-link"><img src="images/img_1.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content">
                  <div className="post-meta">
                    <a href="#">September 23, 2024</a>
                    <span className="mx-1">/</span>
                    <a href="#">Admin</a>
                  </div>
                  <h2 className="heading"><a href="#">Open Day in University Campus</a></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur doloribus voluptatibus id libero corrupti, autem vero.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="post-entry-big horizontal d-flex mb-4">
                    <a href="#" className="img-link mr-4"><img src="images/img_2.jpg" alt="Image" className="img-fluid" /></a>
                    <div className="post-content">
                      <div className="post-meta">
                        <a href="#">September 23, 2024</a>
                        <span className="mx-1">/</span>
                        <a href="#">Admin</a>
                      </div>
                      <h2 className="heading"><a href="#">Open Day in University Campus</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="post-entry-big horizontal d-flex mb-4">
                    <a href="#" className="img-link mr-4"><img src="images/img_3.jpg" alt="Image" className="img-fluid" /></a>
                    <div className="post-content">
                      <div className="post-meta">
                        <a href="#">September 23, 2024</a>
                        <span className="mx-1">/</span>
                        <a href="#">Admin</a>
                      </div>
                      <h2 className="heading"><a href="#">Open Day in University Campus</a></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section ftco-subscribe-1" style={{backgroundImage: "url('images/bg_1.jpg')"}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2>Subscribe to our newsletter</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className="col-lg-5">
              <form action="#" className="d-flex">
                <input type="text" className="rounded form-control mr-2 py-3" placeholder="Enter your email"/>
                <button className="btn btn-primary rounded py-3 px-4" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h2 className="footer-heading">Quick Links</h2>
              <ul className="list-unstyled">
                <li><a href="#">Our Placements</a></li>
                <li><a href="#">Why Academics Works</a></li>
                <li><a href="#">Popular Courses</a></li>
                <li><a href="#">About Us</a></li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h2 className="footer-heading">Courses</h2>
              <ul className="list-unstyled">
                <li><a href="#">Software Engineering</a></li>
                <li><a href="#">Mobile Application</a></li>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Photography</a></li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h2 className="footer-heading">Support</h2>
              <ul className="list-unstyled">
                <li><a href="#">Support</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h2 className="footer-heading">Follow Us</h2>
              <a href="#" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
              <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
              <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
              <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 text-center">
              <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" className="text-primary">Colorlib</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


