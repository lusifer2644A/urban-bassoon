/* eslint-disable react/jsx-key */
import React from "react";
import Header from "./../../components/Header";
import Image from "next/future/image";
import ThemeToggle from "../../components/ThemeToggle";
import Link from "next/link";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  const data = {
    imageBasePath: "/asset/feature/features/",
    iconBasePath: "/asset/feature/features/icons/",
    subHeading: "International Shipping",
    image: "06-00.png",
    title: "Pack. Store. Deliver.",
    subTitle: "International Shipping",
    heroQues: "Looking to deliver your products across the world hassle-free?",
    description:
      "Empower your business with our goGlocal Fulfillment Machine to optimize your cross-border deliveries and local warehousing. Our smart fulfillment and export-compliant packaging ensure you and your customers are always happy with efficient international deliveries and returns.",
    serviceTitle: "Integrate with the best-in-class shipping networks with the",
    serviceTitleBold: "goGLOCAL Fulfilment machine",
    link: "/connect/seller",
    list: [
      {
        id: 1,
        image: "06-01.svg",
        title: "Instant SETUP",
        description:
          "Enjoy a powerful courier network and global warehouse with instant access to pre-negotiated rates and services",
      },
      {
        id: 2,
        image: "05-03.svg",
        title: "OMNI CHANNEL",
        description:
          "Have an agile and flexible international supply chain with a wide range of products to offer",
      },
      {
        id: 3,
        image: "06-03.svg",
        title: "SIMPLIFIED SHIPPING",
        description:
          "Ensure the best delivery to customers and easy returns while managing your entire shipping operation from one platform",
      },
    ],
  };

  return (
    <>
      <main className="bg-light dark:bg-dark overflow-x-hidden">
        {/* Header */}

        <Header />
        <div className="absolute top-0 left-0 white-rad-grad md:w-[3000px] md:h-[1200px] -translate-x-1/2 -translate-y-1/2 z-[1]"></div>

        <div className="page-bg bg-[#AC2EED29] z-[10] static">
          <div className="page-container main ">
            {/* Hero Section */}
            <div className="flex flex-col gap-2 md:gap-[20px] items-center justify-center px-5 py-10 pt-10 md:pt-32">
              <div className="main-heading2 heading-color2 text-center md:text-center mx-auto  leading-[40px]">
                {data.title}
              </div>
              <div>
                <div className="subtitle leading-relax text-center max-w-5xl">
                  {data.subTitle}
                </div>
              </div>
            </div>

            <div className="hidden md:flex justify-center py-6">
              <div className="flex flex-row flex-wrap w-full gap-16 items-center justify-center md:justify-auto mt-5 md:mt-10 w-fit px-5">
                <div className="flex flex-col gap-5">
                  <div className="heading-2 heading-color2 max-w-xl text-center md:text-start">
                    {data.heroQues}
                  </div>
                  <div className="subtitle max-w-lg font-noto text-center md:text-start">
                    {data.description}
                  </div>
                </div>
                <div className="relative flex items-center justify-center relative">
                  <Image
                    className="w-60 md:w-96 h-full z-10"
                    src={`${data.imageBasePath}${data.image}`}
                    alt="hero image"
                    loading="lazy"
                    width="200"
                    height="400"
                    // objectFit="cover"
                  />
                  <div className="image_background_gradient2 z-9"></div>
                </div>
              </div>
            </div>
            <div className="flex  md:hidden justify-center py-0">
              <div className="flex flex-row flex-wrap w-full gap-16 items-center justify-center md:justify-auto mt-5 md:mt-10 w-fit px-5">
                <div className="flex flex-col gap-10">
                  <div className="heading-2 heading-color2 max-w-xl text-center md:text-start">
                    {data.heroQues}
                  </div>
                  <div className="relative flex items-center justify-center relative">
                    <Image
                      className="w-60 md:w-96 h-full z-10"
                      src={`${data.imageBasePath}${data.image}`}
                      alt="hero image"
                      loading="lazy"
                      width="200"
                      height="400"
                      // objectFit="cover"
                    />
                    <div className="image_background_gradient2 z-9"></div>
                  </div>
                  <div className="subtitle max-w-lg font-noto text-center md:text-start">
                    {data.description}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="body-intro-text text-[#463C4B] text-center md:text-center mx-auto mt-20">
                {data.serviceTitle}
              </div>{" "}
              <div className="heading-3 heading-color2 text-center md:text-center mx-auto  ">
                {data.serviceTitleBold}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col md:flex-row gap-16 pt-20 px-4 items-start">
                {data.list.map((item, index) => (
                  <div
                    className="flex flex-col items-center gap-4 px-4"
                    key={index}
                  >
                    <div className="w-24 h-24">
                      <Image
                        className="h-full w-full object-contain "
                        src={`${data.iconBasePath}${item.image}`}
                        alt="hero image"
                        loading="lazy"
                        width="1000"
                        height="1000"
                        // objectFit="cover"
                      />
                    </div>
                    <div className="heading-4 heading-color2 font-semibold uppercase">
                      {item.title}
                    </div>
                    <div className="subtitle max-w-xs text-center">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="btn-primary mt-10 mb-20"
                onClick={() => router.push(data.link)}
              >
                Get in touch
              </button>
            </div>

            {/* Footers */}
            <div className="pt-0">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
