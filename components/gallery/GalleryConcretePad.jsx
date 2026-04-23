"use client";
// import { photoItems } from "@/data/gallery";
import { concretePadPhotoItems } from "@/data/gallery";
import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";
export default function GalleryConcretePad({
  itemsLength = 3,
  parantClass = "col-md-3",
}) {
  return (
    <div className="container relative">
      {/* Photo Grid */}
      <Gallery>
        <div className="row mt-n30">
          {/* Photo Item */}
          {concretePadPhotoItems.slice(0, itemsLength).map((elm, i) => (
            <div key={i} className={parantClass}>
              <Item
                original={elm.src}
                thumbnail={elm.src}
                width={1350}
                height={865}
              >
                {({ ref, open }) => (
                  <div
                    className="post-prev-img rounded-0 mt-30 wow fadeScaleIn"
                    data-wow-duration="1s"
                  >
                    <a className="lightbox-gallery-2 mfp-image">
                      <Image
                        ref={ref}
                        onClick={open}
                        src={elm.src}
                        width={719}
                        height={461}
                        alt="Image Description"
                      />
                    </a>
                  </div>
                )}
              </Item>
            </div>
          ))}
          {/* End Photo Item */}
        </div>
      </Gallery>
      {/* Divider */}
      <hr className="mt-20 mb-0 mb-xs-40" />
      {/* End Divider */}
      {/* End Photo Grid */}
    </div>
  );
}
