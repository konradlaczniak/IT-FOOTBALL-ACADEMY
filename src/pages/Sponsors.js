import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import GridGroup from "./Sponsors_sections/GridGroup";
import {
  sponsors1,
  sponsors2,
  sponsors3,
  sponsors4,
  sponsors5,
} from "./Sponsors_sections/Sponsors";

export const Sponsors = () => {
  return (
    <div>
      <Hero hero="defaultSponsors">
        <Banner
          title="Meet our Sponsors and partners"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est do Lorem reiciendis hic eligendi distinctio atque quaerat."
        ></Banner>
      </Hero>
      <GridGroup
        title="Titular sponsor"
        sponsors={sponsors1}
        className="sponsors_center-H"
      />
      <GridGroup
        title="Sponsors"
        sponsors={sponsors2}
        className="sponsors_center-H"
      />
      <GridGroup
        title="Media patronage"
        sponsors={sponsors3}
        className="sponsors_center-H"
      />
      <GridGroup
        title="Partners"
        sponsors={sponsors4}
        className="sponsors_center-H"
      />
      <GridGroup
        title="Technical patron"
        sponsors={sponsors5}
        className="sponsors_center-H"
      />
    </div>
  );
};
