import Link from "next/link";
import ParallaxContainer from "@/components/common/ParallaxContainer";

import React from "react";

import Gallery1 from "@/components/gallery/Gallery1";

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
export default function CorporateGalleryPage() {
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
                        <AnimatedText text="Project" />
                        <span className="mark-decoration-3-wrap">
                          <AnimatedText text="Gallery" />
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
                    "url(/assets/images/full-width-images/page-title-bg-5.jpg)",
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
                            Gallery 2 Columns
                          </h2>
                          <h1 className="hs-title-1 mb-0">
                            <span
                              className="wow charsAnimIn"
                              data-splitting="chars"
                            >
                              <AnimatedText text="Explore the beauty of life with art photography." />
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
              <>
                {/* Section */}
                <section className="page-section pt-0">
                  <Gallery1 itemsLength={8} parantClass="col-md-6" />
                </section>
                {/* End Section */}
                {/* Divider */}
                <hr className="mt-0 mb-0" />
              </>

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