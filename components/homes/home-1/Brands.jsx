import React from "react";
import Image from "next/image";
export default function Brands() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h3 className="section-title-small mb-40">
            <strong>Clients We Serve</strong>
          </h3>

          <div className="logo-grid">
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/brands/tribe-management.png"
              width="100"
              height="33"
              alt="Tribe Management logo"
            />
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/brands/ecm-strata-management.png"
              width="119"
              height="33"
              alt="ECM Strata Management logo"
            />
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/brands/metropolitan-property-management.png"
              width="79"
              height="33"
              alt="Metropolitan Property Management Inc. logo"
            />
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/brands/davin-management.png"
              width="122"
              height="33"
              alt="Davin Management logo"
            />
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/brands/associa-british-columbia.png"
              width="122"
              height="33"
              alt="Associa British Columbia Inc. logo"
            />
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/brands/rancho-management-services.png"
              width="122"
              height="33"
              alt="Rancho Management Services (BC) logo"
            />
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/brands/stratawest-management.png"
              width="122"
              height="33"
              alt="Stratawest Management logo"
            />
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/brands/strataco-management.png"
              width="122"
              height="33"
              alt="Strataco Management"
            />
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/brands/awm-alliance-real-estate-group.png"
              width="122"
              height="33"
              alt="AWM Alliance Real Estate Group"
            />
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/brands/century-21-prudential-estates.png"
              width="122"
              height="33"
              alt="Century 21 Prudential Estates logo"
            />
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/brands/peace-arch-duty-free.png"
              width="122"
              height="33"
              alt="Peace Arch Duty Free logo"
            />
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/brands/firstservice-residential.png"
              width="122"
              height="33"
              alt="FirstService Residential logo"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
