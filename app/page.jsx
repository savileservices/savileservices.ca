import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import Home4 from "@/components/homes/home-4";
import Hero1 from "@/components/homes/home-4/heros/Hero1";
import { corporateMultipage } from "@/data/menu";

export const metadata = {
  title:
    "Savile Services || Home",
  description:
    "Strata, Residential, Commercial & Hardscape Services in Greater Vancouver, Lower Mainland and Fraser Valley",
};

export default function Home4MainDemoMultiPage() {
  return (
    <>
      <div className="theme-corporate">
        <div className="page" id="top">
          <nav className="main-nav transparent sticky wow-menubar wch-unset">
            <Header4 links={corporateMultipage} />
          </nav>

          <main id="main">
            <section className="page-section scrollSpysection" id="home">
              <Hero1 />
            </section>

            <Home4 />
          </main>
          <footer className="footer-2 pb-50">
            <Footer4 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
