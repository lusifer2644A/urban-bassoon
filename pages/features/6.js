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
    subTitle: "Order Management ",
    image: "06-00.png",
    title: "Collate. Manage. Simplify.",
    heroQues: "Want to manage all your international orders on one platform?",
    description:
      "Simplify your order management with our operating system for international e-commerce by leveraging your existing CMS, OMS, and WMS into a multi-channel sales environment and automate daily operations efficiently.",
    serviceTitle:
      "Integrate with the best-in-class operating system for international order management with ",
    serviceTitleBold: "goGLOCAL OS",
    link: "/connect/seller",
    list: [
      {
        id: 1,
        image: "06-01.svg",
        title: "Easy Integration",
        description:
          "Seamless two-way integration with your current order, inventory, ERP, and warehouse management system",
      },
      {
        id: 2,
        image: "06-02.svg",
        title: "International Standards     ",
        description:
          "Integrated with global logistics providers and warehousing partners",
      },
      {
        id: 3,
        image: "06-03.svg",
        title: "Simplified shipping",
        description:
          "Intelligent workflows for smart order allocation and reconciliation",
      },
    ],
  };

  const BigFeatureButton = ({ text, link }) => {
    return (
      <Link href={data.link}>
        <div className="px-2 w-40 py-2 accent-grad  rounded-lg cursor-pointer text-center">
          <p className="body-3 text-black">{text}</p>
        </div>
      </Link>
    );
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
              <div className="main-heading2 heading-color2 text-center md:text-center mx-auto leading-[40px] ">
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
