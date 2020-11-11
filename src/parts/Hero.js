import React from "react";
import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/images/icons/icon-cities.svg";
import IconTraveler from "assets/images/icons/icon-traveler.svg";
import IconTreasure from "assets/images/icons/icon-treasure.svg";

import Button from "elements/Button";
export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  return (
    <section className="container pt-4">
      {/* row start */}
      <div className="row align-item-center">
        <div className="col-auto pr-5" style={{ width: 422 }}>
          <h1 className="h2 font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Star NExt Vacation
          </h1>
          <p className="mb-5 font-weight-light text-gray-500 w-75">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me
          </Button>
        </div>
      </div>
      {/* end row */}
      {/* row start */}
      <div className="row mt-5">
        <div className="col-auto">
          <img
            width="36"
            height="36"
            src={IconTraveler}
            alt={`${props.data.travelers} Travelers`}
          />
          <h6 className="mt-3">
            {props.data.travelers}{" "}
            <span className="text-gray-500 font-weight-light">travelers</span>
          </h6>
        </div>
        <div className="col-auto">
          <img
            width="36"
            height="36"
            src={IconTreasure}
            alt={`${props.data.treasures} Treaures`}
          />
          <h6 className="mt-3">
            {props.data.treasures}{" "}
            <span className="text-gray-500 font-weight-light">treaures</span>
          </h6>
        </div>
        <div className="col-auto">
          <img
            width="36"
            height="36"
            src={IconCities}
            alt={`${props.data.cities} Cities`}
          />
          <h6 className="mt-3">
            {props.data.cities}{" "}
            <span className="text-gray-500 font-weight-light">cities</span>
          </h6>
        </div>
      </div>
      {/* end rpw */}
    </section>
  );
}
