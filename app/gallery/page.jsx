import ParallaxContainer from "@/components/common/ParallaxContainer";

import React from "react";

import GalleryBlueBird from "@/components/gallery/GalleryBlueBird";
import GalleryConcretePad from "@/components/gallery/GalleryConcretePad";
import GalleryHedgeInstallation from "@/components/gallery/GalleryHedgeInstallation";
import GalleryHedgeTrimming from "@/components/gallery/GalleryHedgeTrimming";
import GalleryLawnMowing from "@/components/gallery/GalleryLawnMowing";
import GalleryLawnRenovation from "@/components/gallery/GalleryLawnRenovation";
import GalleryPatioExtension from "@/components/gallery/GalleryPatioExtension";
import GalleryYardCleanup from "@/components/gallery/GalleryYardCleanup";


import AnimatedText from "@/components/common/AnimatedText";
import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";

import Image from "next/image";
import { corporateMultipage } from "@/data/menu";

export const metadata = {
  title:
    "Savile Services || Project Gallery",
  description:
    "Strata, Residential, Commercial & Hardscape Services in Greater Vancouver, Lower Mainland and Fraser Valley",
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
                      Seeing is believing when it comes to meticulous landscaping.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                // style={{
                //   backgroundImage:
                //     "url(/assets/images/gallery/cover.jpg)",
                // }}
              >
                <>
                  <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
                  <div className="container position-relative pt-50">
                    {/* Section Content */}
                    <div className="text-center">
                      <div className="row">
                        {/* Page Title */}
                        <div className="col-md-8 offset-md-2">
                          <p className="text-gray mb-0">
                            Explore the technical precision and aesthetic transformations our team 
                            delivers. From structural hardscape builds to comprehensive strata 
                            restorations, see how we enhance property value through professional 
                            stewardship and detail-driven execution.
                          </p>
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
                  <div className="col-md-8 offset-md-2">
                    <h3 className="hs-title-3 mb-0" align="center">
                      <span
                        className="wow charsAnimIn"
                        data-splitting="chars"
                      >
                        <AnimatedText text="Concrete Pad" />
                      </span>
                    </h3>
                    <p></p>
                  </div>
                  <GalleryConcretePad itemsLength={3} parantClass="col-md-6" />
                </section>
                {/* End Section */}
              </>
              <br/><br/>
              <>
                {/* Section */}
                <section className="page-section pt-0">
                  <div className="col-md-8 offset-md-2">
                    <h3 className="hs-title-3 mb-0" align="center">
                      <span
                        className="wow charsAnimIn"
                        data-splitting="chars"
                      >
                        <AnimatedText text="Hedge Installation" />
                      </span>
                    </h3>
                    <p></p>
                  </div>
                  <GalleryHedgeInstallation itemsLength={2} parantClass="col-md-6" />
                </section>
                {/* End Section */}
              </>
              <br/><br/>
              <>
                {/* Section */}
                <section className="page-section pt-0">
                  <div className="col-md-8 offset-md-2">
                    <h3 className="hs-title-3 mb-0" align="center">
                      <span
                        className="wow charsAnimIn"
                        data-splitting="chars"
                      >
                        <AnimatedText text="Hedge Trimming" />
                      </span>
                    </h3>
                    <p></p>
                  </div>
                  <GalleryHedgeTrimming itemsLength={5} parantClass="col-md-6" />
                </section>
                {/* End Section */}
              </>
              <br/><br/>
              <>
                {/* Section */}
                <section className="page-section pt-0">
                  <div className="col-md-8 offset-md-2">
                    <h3 className="hs-title-3 mb-0" align="center">
                      <span
                        className="wow charsAnimIn"
                        data-splitting="chars"
                      >
                        <AnimatedText text="Lawn Mowing" />
                      </span>
                    </h3>
                    <p></p>
                  </div>
                  <GalleryLawnMowing itemsLength={2} parantClass="col-md-6" />
                </section>
                {/* End Section */}
              </>
              <br/><br/>
              <>
                {/* Section */}
                <section className="page-section pt-0">
                  <div className="col-md-8 offset-md-2">
                    <h3 className="hs-title-3 mb-0" align="center">
                      <span
                        className="wow charsAnimIn"
                        data-splitting="chars"
                      >
                        <AnimatedText text="Lawn Renovation" />
                      </span>
                    </h3>
                    <p></p>
                  </div>
                  <GalleryLawnRenovation itemsLength={2} parantClass="col-md-6" />
                </section>
                {/* End Section */}
              </>
              <br/><br/>
              <>
                {/* Section */}
                <section className="page-section pt-0">
                  <div className="col-md-8 offset-md-2">
                    <h3 className="hs-title-3 mb-0" align="center">
                      <span
                        className="wow charsAnimIn"
                        data-splitting="chars"
                      >
                        <AnimatedText text="Patio Extension" />
                      </span>
                    </h3>
                    <p></p>
                  </div>
                  <GalleryPatioExtension itemsLength={2} parantClass="col-md-6" />
                </section>
                {/* End Section */}
              </>
              <br/><br/>
              <>
                {/* Section */}
                <section className="page-section pt-0">
                  <div className="col-md-8 offset-md-2">
                    <h3 className="hs-title-3 mb-0" align="center">
                      <span
                        className="wow charsAnimIn"
                        data-splitting="chars"
                      >
                        <AnimatedText text="Yard Cleanup" />
                      </span>
                    </h3>
                    <p></p>
                  </div>
                  <GalleryYardCleanup itemsLength={2} parantClass="col-md-6" />
                </section>
                {/* End Section */}
              </>
              <br/><br/>
              <>
                {/* Section */}
                <section className="page-section pt-0">
                  <div className="col-md-8 offset-md-2">
                    <h3 className="hs-title-3 mb-0" align="center">
                      <span
                        className="wow charsAnimIn"
                        data-splitting="chars"
                      >
                        <AnimatedText text="Full Landscape Installation" />
                      </span>
                    </h3>
                    <p></p>
                  </div>
                  <GalleryBlueBird itemsLength={6} parantClass="col-md-6" />
                </section>
                {/* End Section */}
              </>
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