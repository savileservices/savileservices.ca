import React from "react";

import Cta from "./Cta";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Steps from "./Steps";
import Testimonials from "./Testimonials";
import Cta2 from "./Cta2";
import Blog from "../home-4/Blog";
import NewsLetter from "./NewsLetter";
import Contact from "./Contact";
import AnimateButton from "@/components/common/AnimateButton";
import Link from "next/link";
import Testimonials2 from "./Testimonials2";
import Image from "next/image";
export default function Home4({ onePage = false, dark = false }) {
  return (
    <>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
      <section
        className={`page-section scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
      >
        <div className="bg-line-1 opacity-025">
          <Image
            src="/assets/images/demo-corporate/decoration-2.svg"
            width={1600}
            height={513}
            alt="resonance template image"
            className="wow fadeIn"
            data-wow-delay="0.4s"
          />
        </div>
        {/* End Decorative Line */}
        <div className="container position-relative">
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="section-title mb-40 mb-xs-30">
                Professional Landscapes Tailored to Your Standards
              </h2>
              <p className="section-descr dark-white mb-0">
                Savile Services provides meticulous property stewardship across the Greater Vancouver region. We believe that true landscaping excellence is found in the details, from the structural integrity of our hardscapes to the proactive care of our strata and commercial grounds.
                <br /><br />A well-maintained landscape is more than just an aesthetic choice; it is a significant asset that requires expert care. Our team delivers a discreet, detail-focused service designed to transform shared spaces and luxury estates into perfectly manicured sanctuaries.<br /><br />
              </p>
            </div>
          </div>
          {/* Testimonials Grid */}
          <Testimonials2 />
          {/* End Testimonials Grid */}
          <div className="local-scroll text-center">
            {onePage ? (
              <>
                <a
                  href="#services"
                  className={`btn btn-mod ${
                    dark ? "btn-dark" : "btn-w"
                  } btn-with-icon btn-circle`}
                >
                  <span className="btn-icon color-3">
                    <i className="mi-favorite" />
                  </span>
                  <span data-btn-animate="y">
                    <AnimateButton text={"View Our Services"} />
                  </span>
                </a>
              </>
            ) : (
              <>
                <Link
                  href={`/services`}
                  className={`btn btn-mod ${
                    dark ? "btn-dark" : "btn-w"
                  } btn-with-icon btn-circle`}
                >
                  <span className="btn-icon color-3">
                    <i className="mi-favorite" />
                  </span>
                  <span data-btn-animate="y">
                    <AnimateButton text={"View Our Services"} />
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
      <section
        className="page-section bg-scroll light-content"
        style={{
          backgroundImage:
            "url(/assets/images/demo-corporate/section-bg-1.jpg)",
        }}
      >
        {/* Desktop Overlay */}
        <div className="bg-overlay bg-gradient-primary-alpha-1 d-none d-md-block" />
        {/* End Desktop Overlay */}
        {/* Mobile Overlay */}
        <div className="bg-overlay bg-primary-1 opacity-09 d-md-none" />
        {/* End Mobile Overlay */}
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-7 col-lg-6 col-xl-5">
              <h2 className="section-title mb-40 mb-xs-30">
                Experience <span className="mark-decoration-5">exceptional</span> 
                landscape care
              </h2>
              <p className="section-descr mb-50 mb-sm-40">
                Contact our specialists to begin a tailored maintenance roadmap 
                designed for your property's long-term health.
              </p>
              <div className="local-scroll mb-70 mb-sm-50">
                {onePage ? (
                  <>
                    <a
                      href="/contact"
                      className="btn btn-mod btn-w-c btn-large btn-round btn-hover-anim opacity-09"
                    >
                      <span>Get a Consultation</span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/contact`}
                      className="btn btn-mod btn-w-c btn-large btn-round btn-hover-anim opacity-09"
                    >
                      <span>Get a Consultation</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* Logotypes */}
          <Cta />
          {/* End Logotypes */}
        </div>{" "}
      </section>
      <section
        className={`page-section pb-0 scrollSpysection   ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="services"
      >
        <div className="container position-relative">
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-8 offset-md-2 text-center">
              <h2 className="section-title mb-40 mb-xs-30">
                Precision-Driven Results for Every Property
              </h2>
              <p className="section-descr mb-0">
                Whether managing complex strata requirements or constructing custom stonework, Savile Services delivers a level of detail that transforms landscapes into lasting sanctuaries.
              </p>
            </div>
          </div>
        </div>
        <Service />
        {/* End Services Grid */}
        {/* Call to Action Block */}
        <div className="container position-relative z-index-1">
          <div className="row text-center">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <div className="text-center mb-40 mb-sm-30">
                <Image
                  src="/assets/images/demo-corporate/section-image-1.png"
                  width={100}
                  height={100}
                  alt="Image Description"
                />
              </div>
              <p className="section-descr-medium mb-50 mb-sm-40">
                Seeking elite landscape management? Contact us to schedule a professional on-site assessment for your property or strata complex.
              </p>
              <div className="local-scroll text-center">
                {onePage ? (
                  <>
                    <a
                      href="#contact"
                      className={`btn btn-mod ${
                        dark ? "btn-dark" : "btn-w"
                      } btn-with-icon btn-circle`}
                    >
                      <span className="btn-icon color-1">
                        <i className="mi-heart" />
                      </span>
                      <span data-btn-animate="y">
                        <AnimateButton text={"Get Free Consultation"} />
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/corporate-contact${dark ? "-dark" : ""}`}
                      className={`btn btn-mod ${
                        dark ? "btn-dark" : "btn-w"
                      } btn-with-icon btn-circle`}
                    >
                      <span className="btn-icon color-1">
                        <i className="mi-heart" />
                      </span>
                      <span data-btn-animate="y">
                        <AnimateButton text={"Get Free Consultation"} />
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* End Call to Action Block */}
        {/* Decorative Line */}
        <div className="bg-line-2 mt-n10 mt-md-20 opacity-025">
          <Image
            src="/assets/images/demo-corporate/decoration-3.svg"
            width={1600}
            height={243}
            alt="resonance template image"
          />
        </div>
      </section>
      <section
        className="page-section bg-primary-1 bg-color-alpha-90 bg-scroll light-content"
        style={{
          backgroundImage:
            "url(/assets/images/demo-corporate/section-bg-2.jpg)",
        }}
      >
        <Steps />
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="clients-stories"
      >
        <Testimonials />
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <div className="bg-line-3 opacity-025 mb-n90 mb-lg-n70 mb-md-n60 mb-sm-n40">
          <Image
            src="/assets/images/demo-corporate/decoration-4.svg"
            width={1600}
            height={206}
            alt="resonance template image"
          />
        </div>
        {/* End Decorative Line */}
        <div className="container position-relative">
          <div className="row mb-80 mb-sm-60">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="section-title mb-40 mb-xs-30">
                Let’s have a conversation
              </h2>
              <p className="section-descr dark-white mb-0">
                Every great landscape begins with a conversation. Tell us about your project or maintenance needs, and discover how our focus on detail can define your sanctuary.
              </p>
            </div>
          </div>{" "}
          <Contact />
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
    </>
  );
}
