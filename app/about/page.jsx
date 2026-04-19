import AnimateButton from "@/components/common/AnimateButton";
import AnimatedText from "@/components/common/AnimatedText";
import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
const onePage = false;
const dark = false;
import Image from "next/image";
import { corporateMultipage } from "@/data/menu";
import Link from "next/link";
import Testimonials from "@/components/homes/home-4/Testimonials";
import { features5 } from "@/data/features";

export const metadata = {
  title: "About Us || Savile Services Ltd, Where Precision Meets the Landscape",
  description: "Learn about Savile Services Ltd, specializing in strata maintenance, commercial landscapes, and high-end residential care.",
};

export default function CorporateAboutPage() {
  return (
    <>
      <div className="theme-corporate">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header4 links={corporateMultipage} />
          </nav>

          <main id="main">
            {/* Header Section */}
            <section className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden">
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  className="opacity-05"
                  src="/assets/images/demo-corporate/bg-shape-1.svg"
                  alt=""
                  width={1443}
                  height={844}
                />
              </div>
              <div className="container position-relative pt-10 pt-sm-40 text-center">
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <h1 className="hs-title-9 mb-10">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        <AnimatedText text="Our" />
                        <span className="mark-decoration-3-wrap">
                          <AnimatedText text="Story" />
                          <b className="mark-decoration-3 wow scalexIn" data-wow-delay="0.5s" />
                        </span>
                      </span>
                    </h1>
                    <p className="hs-descr mb-0 wow fadeIn" data-wow-delay="0.2s">
                      Where Precision Meets the Landscape
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Intro Section */}
            <section className="page-section" id="about">
              <div className="container position-relative">
                <div className="row mb-70 mb-sm-50">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                    <p className="section-descr dark-white mb-0">
                      At Savile Services Ltd, we believe exceptional landscapes don’t happen by accident, they’re built through precision, consistency, and a commitment to doing things the right way. 
                      We specialize in managing large-scale communities and crafting detailed outdoor spaces with unmatched care.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <hr className="mt-0 mb-0" />

            {/* Our Approach Section */}
            <section className="page-section bg-gray-light-1">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 mb-sm-40">
                    <h2 className="section-title-small">Our Approach</h2>
                    <div className="section-line" />
                  </div>
                  <div className="col-md-8">
                    <p className="lead mb-40">
                      Our work is guided by a simple principle: every property represents an investment, and it deserves to be treated that way.
                    </p>
                    <div className="row">
                      <div className="col-sm-6 mb-40">
                        <h4 className="alt-features-title">Consistent Execution</h4>
                        <p className="alt-features-descr">We focus on reliable, high-standard performance every visit, not just one-time results.</p>
                      </div>
                      <div className="col-sm-6 mb-40">
                        <h4 className="alt-features-title">Proactive Maintenance</h4>
                        <p className="alt-features-descr">Our systems are designed to identify and prevent issues before they arise.</p>
                      </div>
                      <div className="col-sm-6 mb-40">
                        <h4 className="alt-features-title">Professional Presentation</h4>
                        <p className="alt-features-descr">From our team to your turf, we maintain a clean, professional appearance at all times.</p>
                      </div>
                      <div className="col-sm-6 mb-40">
                        <h4 className="alt-features-title">Long-Term Value</h4>
                        <p className="alt-features-descr">We prioritize sustainable property health over quick, short-term fixes.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Expertise Section */}
            <section className="page-section">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 mb-sm-40">
                    <h2 className="section-title-small">Our Expertise</h2>
                    <div className="section-line" />
                  </div>
                  <div className="col-md-8">
                    <p className="mb-40">
                      Our team brings years of hands-on experience across the specialized sectors of the landscaping industry:
                    </p>
                    <ul className="list-unstyled">
                      <li className="d-flex mb-3"><i className="mi-check color-3 me-3" /> Strata and commercial landscape maintenance</li>
                      <li className="d-flex mb-3"><i className="mi-check color-3 me-3" /> High-end residential property care</li>
                      <li className="d-flex mb-5"><i className="mi-check color-3 me-3" /> Interlocking stone, retaining walls, and custom hardscape builds</li>
                    </ul>
                    <p className="section-descr mb-0">
                      We combine practical field knowledge with proven systems to ensure every job is completed efficiently and to a high standard.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Commitment Section */}
            <section className="page-section bg-gray-light-1">
              <div className="container text-center">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="section-title-small mb-40">Our Commitment</h2>
                    <p className="lead mb-40">
                      We communicate clearly, show up when we say we will, and stand behind our work.
                      <br />
                      No shortcuts. No guesswork. No inconsistency.
                    </p>
                    <p className="hs-descr mb-10">Just reliable service, delivered with precision.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits Section (Using Features5 Data) */}
            <section className="page-section">
              <div className="container position-relative">
                <div className="row">
                  <div className="col-md-12 col-lg-3 mb-md-50">
                    <h2 className="section-caption mb-xs-10"><br/></h2>
                    <h3 className="section-title-small mb-40">Why Choose Savile?</h3>
                    <div className="section-line" />
                  </div>
                  {features5.slice(0, 3).map((elm, i) => (
                    <div key={i} className="col-md-4 col-lg-3 d-flex align-items-stretch mb-sm-30">
                      <div className="alt-features-item border-left mt-0">
                        <div className="alt-features-icon">
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
                            <path d={elm.svgPath} />
                          </svg>
                        </div>
                        <h4 className="alt-features-title">{elm.title}</h4>
                        <div className="alt-features-descr">{elm.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <hr className="mt-0 mb-0" />

            <section className="page-section" id="clients-stories">
              <Testimonials />
            </section>
          </main>

          <footer className="footer-2 pb-50">
            <Footer4 />
          </footer>
        </div>
      </div>
    </>
  );
}