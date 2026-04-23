import AnimatedText from "@/components/common/AnimatedText";
import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";

const dark = false;
import Image from "next/image";
import { corporateMultipage } from "@/data/menu";
import Link from "next/link";
import Service from "@/components/homes/home-4/Service";
import AnimateButton from "@/components/common/AnimateButton";
import { progressData } from "@/data/skills";
import { features5 } from "@/data/features";
import Faq from "@/components/common/Faq";

export const metadata = {
  title:
    "Savile Services || Our Services",
  description:
    "Strata, Residential, Commercial & Hardscape Services in Greater Vancouver, Lower Mainland and Fraser Valley",
};

export default function CorporateServicesPage() {
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
                        <AnimatedText text="Our" />
                        <span className="mark-decoration-3-wrap">
                          <AnimatedText text="Services" />
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
                      Comprehensive services designed for lasting beauty.
                    </p>
                  </div>
                </div>
              </div>
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
                    <p className="section-descr mb-0">
                      With a deep understanding of local environmental needs and a professional perspective on property management, our seasoned team is equipped to navigate the technical complexities of large-scale strata and commercial landscapes.
                    </p>
                  </div>
                </div>
              </div>
              <Service />
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
                      <Link
                        href={`/contact`}
                        className={`btn btn-mod ${
                          dark ? "btn-dark" : "btn-w"
                        } btn-with-icon btn-circle`}
                      >
                        <span className="btn-icon color-1">
                          <i className="mi-heart" />
                        </span>
                        <span data-btn-animate="y">
                          <AnimateButton text={"Get a Quote"} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-line-2 mt-n10 mt-md-20 opacity-025">
                <Image
                  src="/assets/images/demo-corporate/decoration-3.svg"
                  alt=""
                  width={1600}
                  height={243}
                />
              </div>
            </section>
            <section className="page-section z-index-1">
              <div className="container position-relative">
                <div className="row position-relative">
                  <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
                    <h3 className="section-title mb-30">
                      What is our area of&nbsp;expertise?
                    </h3>
                    <p className="text-gray mb-0">
                      At Savile Services Ltd, our expertise lies in the seamless integration of 
                      horticultural mastery and structural engineering. We specialize in the 
                      meticulous maintenance of strata and commercial landscapes, alongside 
                      the precision construction of high-end residential hardscapes. 
                      <br /><br />
                      By combining field-proven systems with professional-grade equipment, we 
                      ensure every property is managed as a high-value asset, delivering 
                      consistent results that protect and enhance long-term property value.
                    </p>
                  </div>
                  <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
                    {/* Bar Item */}
                    {progressData.map((elm, i) => (
                      <div key={i} className="progress tpl-progress">
                        <div
                          className="progress-bar bg-gradient-primary-1"
                          role="progressbar"
                          style={{ width: `${elm.value}%` }}
                        >
                          <div>{elm.label}, %</div>
                          <span>{elm.value}</span>
                        </div>
                      </div>
                    ))}
                    {/* End Bar Item */}
                  </div>
                </div>
                <div className="page-section">
                  <hr className="mt-0 mb-0" />
                </div>
                <div className="row mb-50 mb-sm-50">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 text-center">
                    <h2 className="section-title-small mb-20">
                      Why choose Savile Services?
                    </h2>
                    <p className="text-gray mb-0">
                      We don’t just maintain properties, we protect their value, elevate their appearance, and set a higher standard for grounds care. From strata communities to residential properties and commercial spaces, we deliver consistent, detail-driven maintenance and expertly built hardscapes, all backed by a team that takes pride in every square foot.
                    </p>
                  </div>
                </div>
                {/* Features Grid */}
                <div className="row mt-n30 wow fadeInUp">
                  {/* Feature Item */}
                  {features5.map((elm, i) => (
                    <div
                      key={i}
                      className="col-sm-6 col-xl-3 d-flex align-items-stretch"
                    >
                      <div className="alt-features-item box-shadow text-center mt-30">
                        <div className="alt-features-icon mb-10 color-primary-1">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d={elm.svgPath} />
                          </svg>
                        </div>
                        <h4 className="alt-features-title">{elm.title}</h4>
                        <div className="alt-features-descr">
                          {elm.description}
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* End Feature Item */}

                  {/* End Feature Item */}
                </div>
                {/* End Features Grid */}
              </div>
            </section>

            <section className="page-section">
              <div className="container position-relative">
                <div className="row position-relative">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <h3 className="section-title text-center mb-80 mb-sm-60">
                      Frequently Asked Questions
                    </h3>

                    {/* <!-- Accordion --> */}
                    <Faq />
                    {/* <!-- End Accordion --> */}
                  </div>
                </div>
              </div>
            </section>
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
          </main>
          <footer className="footer-2 pb-50">
            <Footer4 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
