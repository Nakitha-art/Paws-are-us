import React from "react";

import { Column, Row, Img } from "components";

const PawsAreUsPage = () => {
  return (
    <>
      <Column
        className="bg-bluegray_100 bg-cover bg-repeat items-center justify-start mx-[auto] lg:p-[24px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[42px] w-[100%]"
        style={{ backgroundImage: "url('images/img_dribbblehd.png')" }}
      >
        <Row className="items-center lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] w-[85%]">
          <Img
            src="images/img_homepage.png"
            className="lg:h-[488px] xl:h-[611px] 2xl:h-[687px] 3xl:h-[824px] w-[27%]"
            alt="HomePage"
          />
          <Img
            src="images/img_detailpage.png"
            className="2xl:h-[1004px] 3xl:h-[1204px] lg:h-[713px] xl:h-[892px] 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[76px] xl:ml-[96px] w-[27%]"
            alt="DetailPage"
          />
          <Img
            src="images/img_requestpage.png"
            className="3xl:h-[1185px] lg:h-[702px] xl:h-[878px] 2xl:h-[988px] 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[76px] xl:ml-[96px] w-[27%]"
            alt="RequestPage"
          />
        </Row>
      </Column>
    </>
  );
};

export default PawsAreUsPage;
