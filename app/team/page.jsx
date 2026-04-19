import Link from "next/link";
import ParallaxContainer from "@/components/common/ParallaxContainer";

import React from "react";

import { teamMembers } from "@/data/team";
import Testimonials from "@/components/homes/home-10/Testimonials";
import Faq from "@/components/common/Faq";
import Brands from "@/components/homes/home-1/Brands";

import AnimatedText from "@/components/common/AnimatedText";
import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";

import Image from "next/image";
import { corporateMultipage } from "@/data/menu";

export const metadata = {
  title:
    "Corporate Contact || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function CorporateTeamPage() {
  return (
    <>
      <div className="theme-corporate">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header4 links={corporateMultipage} />
          </nav>
          <main id="main">
            <section className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden">
              {/* Background Shape */}
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  className="opacity-05"
                  src="/assets/images/demo-corporate/bg-shape-1.svg"
                  alt=""
                  width={1443}
                  height={844}
                />
              </div>
              {/* End Background Shape */}
              <div className="container position-relative pt-10 pt-sm-40 text-center">
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <h1 className="hs-title-9 mb-10">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        <AnimatedText text="Meet Our" />
                        <span className="mark-decoration-3-wrap">
                          <AnimatedText text="Team" />
                          <b
                            className="mark-decoration-3 wow scalexIn"
                            data-wow-delay="0.5s"
                          />
                        </span>
                      </span>
                    </h1>
                    <p
                      className="hs-descr mb-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      Reach out and let's bring your vision to life.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/page-title-bg-2.jpg)",
                }}
              >
                <>
                  <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
                  <div className="container position-relative pt-50">
                    {/* Section Content */}
                    <div className="text-center">
                      <div className="row">
                        {/* Page Title */}
                        <div className="col-md-8 offset-md-2">
                          <h2
                            className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                            data-wow-duration="1.2s"
                          >
                            Our Team
                          </h2>
                          <h1 className="hs-title-1 mb-0">
                            <span
                              className="wow charsAnimIn"
                              data-splitting="chars"
                            >
                              <AnimatedText text="Extraordinary creative team. Minimalism lovers." />
                            </span>
                          </h1>
                        </div>
                        {/* End Page Title */}
                      </div>
                    </div>
                    {/* End Section Content */}
                  </div>
                </>
              </ParallaxContainer>
            </section>
            <>
              <section className="page-section pt-0" id="team">
                <div className="container">
                  <div
                    className="row position-relative mt-n40 mb-80 mb-sm-40 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    {/* Decorative Waves */}
                    <div
                      className="decoration-8 d-none d-sm-block"
                      data-rellax-y=""
                      data-rellax-speed="-0.6"
                      data-rellax-percentage="-0.17"
                    >
                      <Image
                        src="/assets/images/decoration-1.svg"
                        alt=""
                        width={159}
                        height={74}
                      />
                    </div>
                    {/* End Decorative Waves */}
                    {/* Team item */}
                    {teamMembers.map((elm, i) => (
                      <div key={i} className="col-sm-6 col-lg-3 mt-40">
                        <div className="team-item">
                          <div className="team-item-image">
                            <Image
                              src={elm.image}
                              width={600}
                              height={800}
                              alt="Image Description"
                            />
                            <div className="team-item-detail">
                              <div className="team-social-links">
                                {elm.socials.map((elm, i) => (
                                  <a
                                    key={i}
                                    href={elm.url}
                                    target="_blank"
                                    rel="noopener nofollow"
                                  >
                                    <div className="visually-hidden">
                                      {elm.platform}
                                    </div>
                                    <i className={elm.icon} />
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="team-item-descr">
                            <div className="team-item-name">{elm.name}</div>
                            <div className="team-item-role">{elm.role}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* End Team item */}
                  </div>
                  {/* Divider */}
                  <hr className="mt-0 mb-80 mb-sm-40" />
                  {/* End Divider */}
                  <div className="row">
                    <div className="col-lg-4 mb-md-50 mb-xs-30">
                      <div
                        className="lead-alt wow linesAnimIn"
                        data-wow-offset={0}
                        data-splitting="lines"
                      >
                        Our mission is to make design simple and useful.
                      </div>
                    </div>
                    <div
                      className="col-lg-8 wow linesAnimIn"
                      data-wow-offset={0}
                      data-splitting="lines"
                    >
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet conseur adipisci inerene
                        maximus ligula sempe metuse pelente mattis. Maecenas
                        volutpat, diam eni sagittis quam porta quam. Sed id
                        dolor consectetur fermentum volutpat accumsan purus.
                        Etiam sit amet fringilla lacus susantebe sit ullamcorper
                        pulvinar neque porttitor. Integere lectus. Praesent sede
                        nisi eleifend fermum orci amet, iaculis libero. Donec
                        vel ultricies purus. Name dictum sem ipsumebe euliquam.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Testimonials Section */}
              <section className="page-section bg-gray-light-2 overflow-hidden">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                      <h2 className="section-caption mb-xs-10 wow fadeInUp">
                        Clients Stories
                      </h2>
                      <h3 className="section-title mb-50 mb-sm-30">
                        <span
                          className="wow charsAnimIn"
                          data-splitting="chars"
                        >
                          We're trusted by leading worldwide companies.
                        </span>
                      </h3>
                    </div>
                  </div>
                  {/* Testimonials Carousel */}
                  <Testimonials />
                  {/* End Testimonials Carousel */}
                </div>
              </section>
              {/* End Testimonials Section */}
              {/* Logotypes Section*/}
              <section className="page-section">
                <Brands />
              </section>
              {/* End Logotypes Section*/}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
              {/* FAQ Section */}
              <section className="page-section z-index-1">
                <div className="container position-relative">
                  <div className="row position-relative">
                    <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
                      <h3 className="section-title mb-30">
                        Frequently Asked Questions
                      </h3>
                      <p className="text-gray mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam pulvinar vitae neque et porttitor. Integer non
                        dapibus diam, ac eleifend lectus. In maximus ligula
                        semper metus pellentesque mattis. Maecenas volutpat,
                        diam enim sagittis quam.
                      </p>
                    </div>
                    <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
                      {/* Accordion */}
                      <Faq />
                      {/* End Accordion */}
                    </div>
                  </div>
                </div>
              </section>
              {/* End FAQ Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
              {/* Call Action Section */}
              <section className="page-section">
                <div className="container position-relative">
                  {/* Decorative Waves */}
                  <div className="position-relative">
                    <div
                      className="decoration-21 d-none d-lg-block"
                      data-rellax-y=""
                      data-rellax-speed="0.7"
                      data-rellax-percentage="0.5"
                    >
                      <Image
                        src="/assets/images/decoration-3.svg"
                        className="svg-shape"
                        width={148}
                        height={148}
                        alt=""
                      />
                    </div>
                  </div>
                  {/* End Decorative Waves */}
                  <div className="row wow fadeInUp">
                    <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-2 text-md-start mb-sm-30">
                      <p className="section-descr mb-0">
                        Looking for exclusive digital services? Contact us, and
                        we'll start productive cooperation.
                      </p>
                    </div>
                    <div className="col-md-4 col-lg-3 text-md-end">
                      <div className="local-scroll">
                        <Link
                          href={`/main-pages-contact-1`}
                          className="btn btn-mod btn-large btn-round btn-hover-anim"
                        >
                          <span>Contact us</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          </main>
          <footer className="footer-2 pb-50">
            <Footer4 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
