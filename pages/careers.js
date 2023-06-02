/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { RoundedButton } from "../components/button/RoundedButton";
import Footer from "../components/Footer";
import Header from "./../components/Header";

const Careers = () => {
  const router = useRouter();
  const data = {
    title: "Growing and going far together",
    subTitle:
      " At goGLOCAL, we are building India’s most comprehensive tech platform for global e-commerce. To the crew who join us, we promise learnings and the adventure of a lifetime.",
    imageBasePath: "/asset/career/",
    cta: "We are taking Indian brands and businesses to the world. We are looking for exceptional people who will drive this mission for us by partnering with Indian brands and the world's best e-commerce providers.",
  };

  const selection_data = [
    {
      title: "Step 1",
      img: "selection_1.svg",
      subtitle: "Online application",
      desc: "Screening based on role, team and expertise fitment",
    },
    {
      title: "Step 2",
      img: "selection_2.svg",
      subtitle: "Case-based assessment",
      desc: "Evaluating practical application of technical knowledge and skill-sets",
    },
    {
      title: "Step 3",
      img: "selection_3.svg",
      subtitle: "Online or Offline Interview",
      desc: "Gauging your commitment to contribute to the function and ideas to innovate",
    },
    {
      title: "Step 4",
      img: "selection_4.svg",
      subtitle: "Conversation with the core team",
      desc: "Understanding your conviction in our vision and fitment in our team",
    },
  ];

  const CareerButton2 = ({ text, link }) => {
    return (
      // <Link href={link}>
      <div className="relative">
        <div className="postition_button_bg_22_mobile md:postition_button_bg_22"></div>
        <div className="w-40 md:w-60 py-4 md:py-8 postition_button_bg_2_mobile md:postition_button_bg_2  text-center">
          <p className="body-intro-text">{text}</p>
        </div>
      </div>
      // </Link>
    );
  };

  const rocketData = [
    {
      title:
        "We love people who are audacious enough to chase massive goals, hustle to get it done, but combine it with humility.",
      img: "point_01.svg",
    },
    {
      title:
        "We love people with out-of-the-box ideas who can implement them reliably.",
      img: "point_02.svg",
    },
    {
      title:
        " We trust the judgment and independent decision-making of our crew.",
      img: "point_03.svg",
    },
    {
      title: " We value integrity, respect, inclusion, and collaboration.",
      img: "point_04.svg",
    },
    {
      title:
        "We encourage them to have honest conversations and be open to sharing feedback.",
      img: "point_05.svg",
    },
  ];

  const whatsInIt = [
    {
      title: "Launch-pad",
      subtitle: "Internships & Live-Project Program",
      text: " Ready to enter the metaverse, hustlers? Are you hunting for the components to build the perfect spaceship? The goGLOCAL Universe offers plethora of collaboration and participation opportunities in tech and glocal e-commerce.",
      img: "career-01.png",
    },
    {
      title: "Lift-off",
      subtitle: "Campus Placement & Lateral Hiring",
      text: " Make goGLOCAL a stepping stone to begin your exceptional career or the next big destination to utilize and sharpen your expertise while collaborating with exceptional individuals from diverse fields. Explore roles offering 360 degree views of business in international e-commerce exports, logistics and technology.",
      img: "career-02.png",
    },
    {
      title: "Universe",
      subtitle: "Programs & Events",
      text: "An extensive learning opportunity to work with a dynamic team while solving real-time challenges around diverse aspects of glocal e-commerce exports. Our Launchpad program is exclusively designed for outstanding college students looking for multi-sectoral industry exposure while doing impactful work. ",
      img: "career-03.png",
    },
  ];

  return (
    <>
      <Head>
        <title>Goglocal</title>
        <meta name="description" content="Goglocal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-light dark:bg-dark overflow-x-hidden">
        {/* Header */}

        <Header />
        {/* <div className="absolute top-0 left-0 white-rad-grad md:w-[3000px] md:h-[1200px] -translate-x-1/2 -translate-y-1/2 z-[1]"></div> */}

        <div className="page-bg bg-[#AC2EED29] z-[10] static">
          <div className="page-container main ">
            {/* Hero Section */}
            <div className="flex flex-col gap-[20px] items-center justify-center px-5 py-10 pt-12 md:pt-32">
              <div className="main-heading2  headingColor2 text-center md:text-center mx-auto  ">
                {data.title}
              </div>
              <div>
                <div className="subtitle headingColor leading-relax text-center max-w-5xl">
                  {data.subTitle}
                </div>
              </div>
            </div>

            {/* s2 - desktop */}
            <div className="hidden md:flex justify-center px-0 py-6">
              <div className="flex flex-row flex-wrap w-full gap-10 items-center mt-10 w-fit">
                <div className="flex flex-col gap-5">
                  <div className="heading-2 heading-color2  ">
                    Why you should join us?
                  </div>
                  <div className="subtitle max-w-lg font-noto">{data.cta}</div>
                </div>
                <div className="relative flex items-center justify-center ">
                  <Image
                    className="w-60 md:w-96 h-full "
                    src={`${data.imageBasePath}01.png`}
                    alt="hero image"
                    loading="lazy"
                    width="200"
                    height="400"
                    // objectFit="cover"
                  />
                  <div className="image_background_gradient z-9"></div>
                </div>
              </div>
            </div>
            {/* s2 - modile */}
            <div className="flex md:hidden justify-center px-4 py-6">
              <div className="flex flex-row flex-wrap w-full gap-10 items-center justify-center mt-10 w-fit">
                <div className="flex flex-col gap-5">
                  <div className="heading-2 heading-color2  text-center">
                    Why you should join us?
                  </div>
                  <div className="relative flex items-center justify-center ">
                    <Image
                      className="w-60 md:w-96 h-full "
                      src={`${data.imageBasePath}01.png`}
                      alt="hero image"
                      loading="lazy"
                      width="200"
                      height="400"
                      // objectFit="cover"
                    />
                    <div className="image_background_gradient z-9"></div>
                  </div>
                  <div className="subtitle max-w-lg font-noto text-center">
                    {data.cta}
                  </div>
                </div>
              </div>
            </div>

            <div className="main-light-background dark:bg-[#880ed438] rounded-[0rem] py-10 px-4">
              <div className=" main-heading2 headin-color2 text-center py-4">
                What we believe in
              </div>
              <div className="subtitle text-center mx-auto max-w-3xl md:mt-2">
                We believe in the power of a small group of thoughtful,
                committed, and smart individuals aspiring to change the world.
              </div>
              <div className="flex justify-center py-6">
                <div className="flex flex-row flex-wrap w-full gap-20 items-center justify-center md:justify-start mt-10 w-fit">
                  <div className="relative flex items-center justify-center ">
                    <Image
                      className="w-60 md:w-72 h-full "
                      src={`${data.imageBasePath}cta_02.png`}
                      alt="hero image"
                      loading="lazy"
                      width="200"
                      height="400"
                      // objectFit="cover"
                    />
                    <div className="image_background_gradient z-9"></div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="subtitle max-w-xl font-noto text-center md:text-start">
                      A crew of creators from varying backgrounds and points of
                      view is reimagining and reinventing the existing
                      complexities of Global e-commerce with a view to offering
                      the best and most simplified selling experience. The
                      diverse perspectives of the crew derived from different
                      cultures, education, and professional and life experiences
                      all combine to add to our ability to give life to our
                      mission. Sounds unreasonable? We hope so. Because
                      reasonable ideas seldom change anything.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 justify-center items-center">
                <div className="subtitle2 text-center max-w-5xl mt-10 font-medium md:font-normal">
                  Here’s calling out to all the darers, dreamers, and doers out
                  there – together we will accomplish the unimagined.
                </div>
                <button
                  className="btn-primary"
                  onClick={() => router.push("/openposition")}
                >
                  Come fly with us
                </button>
              </div>
            </div>

            {/* rocket */}
            <div className=" main-heading2 headin-color2 text-center py-4 pt-10 md:pt-32">
              Life @ goGLOCAL
            </div>
            {/* rocket-info -- desktop */}
            <div className="hidden md:flex h-[600px] flex-row items-center justify-center gap-2">
              <div className="grid grid-cols-[1fr_0.5fr] gap-y-2 gap-x-5">
                {rocketData.map((p, idx) => {
                  return (
                    <>
                      <motion.div
                        className="medium-text max-w-[555px] text-end my-auto"
                        key={idx}
                      >
                        {p.title}
                      </motion.div>
                      <div className="h-16 w-full flex flex-row items-center justify-end mx-auto gap-0">
                        <div className=" relative h-16 w-16 ">
                          <Image
                            className="h-full w-full object-contain"
                            src={`${data.imageBasePath}${p.img}`}
                            alt="hero image"
                            width="1000"
                            height="1000"
                            loading="lazy"
                            // objectFit="cover"
                          />
                        </div>
                        <div className="h-[2px] w-[60%] bg-[#BA68C8]"></div>
                        <div className="h-[4px] w-[4px] rounded-full bg-[#BA68C8]"></div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="h-full">
                <Image
                  className="h-full w-auto object-contain "
                  src={`${data.imageBasePath}rocket2.svg`}
                  alt="hero image"
                  width="1000"
                  height="1000"
                  loading="lazy"
                  // objectFit="cover"
                />
              </div>
            </div>
            {/* rocket-info -- modile */}
            <div className="md:hidden h-[500px] flex flex-row items-center justify-center gap-2">
              <div className="grid grid-cols-[1fr] gap-y-2 gap-x-5">
                {rocketData.map((p, idx) => {
                  return (
                    <>
                      <div className="h-16 w-full flex flex-row items-center justify-end mx-auto gap-0">
                        <div className=" relative h-20 w-20 relative">
                          <Image
                            className="h-full w-full object-contain"
                            src={`${data.imageBasePath}${p.img}`}
                            alt="hero image"
                            width="1000"
                            height="1000"
                            loading="lazy"
                            // objectFit="cover"
                          />
                        </div>
                        <div className="h-[2px] w-[60%] bg-[#BA68C8]"></div>
                        <div className="h-[4px] w-[4px] rounded-full bg-[#BA68C8]"></div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="h-full relative">
                <Image
                  className="h-full w-auto object-contain z-[1000000]"
                  src={`${data.imageBasePath}rocket2.svg`}
                  alt="hero image"
                  width="1000"
                  height="1000"
                  loading="lazy"
                  // objectFit="cover"
                />
              </div>
            </div>
            <div className="md:hidden grid grid-cols-[0.3fr_1fr] gap-y-8 gap-x-5 mt-10 px-2">
              {rocketData.map((p, idx) => {
                return (
                  <>
                    <div className="h-16 w-full flex flex-row items-center justify-end mx-auto gap-0">
                      <div className=" relative h-16 w-16 ">
                        <Image
                          className="h-full w-full object-contain"
                          src={`${data.imageBasePath}${p.img}`}
                          alt="hero image"
                          width="1000"
                          height="1000"
                          loading="lazy"
                          // objectFit="cover"
                        />
                      </div>
                    </div>
                    <motion.div
                      className="medium-text w-full text-start my-auto"
                      key={idx}
                    >
                      {p.title}
                    </motion.div>
                  </>
                );
              })}
            </div>

            {/* values */}
            <div className=" main-heading2 headin-color2 text-center py-4 pt-16 md:pt-32">
              Values we value
            </div>
            <div className="flex flex-row items-center justify-center gap-2 mt-10 pb-5">
              <div className="max-w-6xl flex flex-row flex-wrap justify-center gap-y-12 gap-x-5 md:gap-x-10">
                {[
                  "Judgement",
                  "Performance",
                  "Respect",
                  "Communication",
                  "Reliability",
                  "Hustle",
                  "Audacity",
                ].map((d, idx) => {
                  return <CareerButton2 text={d} key={idx} />;
                })}
              </div>
            </div>

            {/* whats in it */}
            <div className=" main-heading2 headin-color2 text-center py-4 pt-32">
              What is in it for you?
            </div>
            <div className="flex flex-row items-center justify-center gap-2 mt-10 pb-5">
              <div className="flex flex-row flex-wrap justify-center gap-10 px-5">
                {whatsInIt.map((d, idx) => {
                  return (
                    <div
                      className=" min-h-[25rem] group relative bg-[#1D1125]  py-4 px-4 rounded-xl w-[20rem]"
                      key={idx}
                    >
                      <div className="flex flex-col items-center gap-4   ">
                        <div className="h-52 w-full group-hover:opacity-0">
                          <Image
                            className="h-full w-full mx-auto p-0 object-contain"
                            src={`${data.imageBasePath}${d.img}`}
                            alt="hero image"
                            width="1000"
                            height="1000"
                            loading="lazy"
                            // objectFit="cover"
                          />
                        </div>
                        <div className=" mt-5 heading-4 text-accent-1 uppercase group-hover:opacity-0">
                          {d.title}
                        </div>
                        <div className="subtitle text-white text-center group-hover:opacity-0">
                          {d.subtitle}
                        </div>
                      </div>
                      <div className=" absolute top-1/2 -translate-y-1/2 transition-all	duration-100 ease-in-out text-center pl-2 body-3 px-6 py-4   text-white  opacity-0 group-hover:opacity-100">
                        {d.text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* explore */}
            <div className=" main-heading2 headin-color2 text-center py-4 pt-32">
              Explore Open Positions
            </div>
            <div className="flex flex-col items-center justify-center gap-2 mt-5 pb-5">
              <button
                className="btn-primary"
                onClick={() => router.push("/openposition")}
              >
                Click here
              </button>
              <div className="max-w-6xl flex flex-row flex-wrap justify-center gap-y-8 md:gap-y-12 gap-x-5 md:gap-x-10 mt-5">
                {["Business", "Performance", "Logistics", "Technology"].map(
                  (d, idx) => {
                    return <CareerButton2 text={d} key={idx} />;
                  }
                )}
              </div>
            </div>

            <div className="main-light-background dark:bg-[#880ed438] rounded-[0rem] py-10 px-4 mt-20">
              <div className=" main-heading2 headin-color2 text-center py-4">
                Superhero Crew Selection
              </div>
              <div className="subtitle text-center mx-auto max-w-3xl mt-2">
                Our application and interview process varies from role to role,
                but here are some basic steps we follow to get to know you
                better.
              </div>
              <div className="flex justify-center items-center py-6">
                <div className="flex flex-row flex-wrap justify-center w-full gap-8 items-center mt-10 w-fit">
                  {selection_data.map((d, idx) => {
                    return (
                      <div
                        className="w-full max-w-[550px] h-auto grid grid-cols-[1fr_0.7fr] gap-5 justify-center p-5 bg-[#ffffff] dark:bg-[#ac2eed29] shadow-lg rounded-lg"
                        key={idx}
                      >
                        <div className="flex flex-col gap-3">
                          <div className="heading-2 text-[#2F1B58]">
                            {d.title}
                          </div>
                          <div className="heading-4 text-[#2F1B58]">
                            {d.subtitle}
                          </div>
                          <div className="subtitle">{d.desc}</div>
                        </div>
                        <div className="w-full h-[270px]">
                          <Image
                            src={`${data.imageBasePath}${d.img}`}
                            alt="cta_image"
                            className="w-full h-full object-contain"
                            width={500}
                            height={500}
                            layout="responsive"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* career last */}
            <div className="bg-grad-purple rounded-[0rem] py-10 px-4 flex flex-col gap-8 justify-center items-center">
              <div className=" heading-1 heading-color text-center">
                Join the crew
              </div>
              <div className="body-intro-text font-normal heading-color text-center max-w-2xl">
                Can't find a suitable role at the moment?
              </div>
              <div className="body-intro-text font-normal heading-color text-center max-w-2xl">
                Join the goGLOCAL Universe and stay updated with latest
                happenings, roles and initiatives at goGLOCAL.
              </div>
              <div className="body-intro-text font-normal heading-color text-center max-w-2xl">
                Let us know your email address, domain of interest, how we could
                collaborate!
              </div>
              <button
                className="btn-secondary2"
                onClick={() => router.push("/openposition")}
              >
                Join Us
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
};

export default Careers;
