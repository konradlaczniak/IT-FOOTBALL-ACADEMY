import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import GallerySection from "./Gallery_sections/Gallery_section";
import Title from "../components/Title";
import { photos, photos1, photos2 } from "./Gallery_sections/Photos";

function Gallery(props) {
  return (
    <div>
      <Hero hero="defaultGallery">
        <Banner
          title="Gallery"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est do Lorem reiciendis hic eligendi distinctio atque quaerat."
        ></Banner>
      </Hero>
      <section className="photo-section">
        <article className="photo-article">
          <Title title="Stadium" />
          <GallerySection photos={photos} />
        </article>
        <article className="photo-article">
          <Title title="Games" />
          <GallerySection photos={photos1} />
        </article>
        <article className="photo-article">
          <Title title="Others" />
          <GallerySection photos={photos2} />
        </article>
      </section>
    </div>
  );
}

export default Gallery;
