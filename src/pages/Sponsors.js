import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import GridGroup from "./Sponsors_sections/GridGroup";
import logo from "../images/SponsorsPage/Logo.png";

const sponsors1 = [
  {
    icon: logo,
    title: "Sponsor",
  },
];

const sponsors2 = [
  {
    icon: logo,
    title: "Sponsor",
  },
  {
    icon: logo,
    title: "Sponsor",
  },
  {
    icon: logo,
    title: "Sponsor",
  },
  {
    icon: logo,
    title: "Sponsor",
  },
  {
    icon: logo,
    title: "Sponsor",
  },
  {
    icon: logo,
    title: "Sponsor",
  },
];
const sponsors3 = [
  {
    icon: logo,
    title: "Sponsor",
  },
  {
    icon: logo,
    title: "Sponsor",
  },
];
const sponsors4 = [
  {
    icon: logo,
    title: "Sponsor",
  },
  {
    icon: logo,
    title: "Sponsor",
  },
  {
    icon: logo,
    title: "Sponsor",
  },
  {
    icon: logo,
    title: "Sponsor",
  },
];
const sponsors5 = [
  {
    icon: logo,
    title: "Sponsor",
  },
];

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
        style="sponsors_center-H"
      />
      <GridGroup
        title="Sponsors"
        sponsors={sponsors2}
        style="sponsors_center-M"
      />
      <GridGroup
        title="Media patronage"
        sponsors={sponsors3}
        style="sponsors_center-M"
      />
      <GridGroup
        title="Partners"
        sponsors={sponsors4}
        style="sponsors_center-M"
      />
      <GridGroup
        title="Technical patron"
        sponsors={sponsors5}
        style="sponsors_center-H"
      />
    </div>
  );
};
