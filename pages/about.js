/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { motion } from "framer-motion";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import Features from "../components/Features";
import Header from "./../components/Header";
// import Link from "next/link";
// Image
import KnowMore from "../components/button/KnowMore";
import { ContainedButton } from "../components/button/Mainbutton";
import { RoundedButton } from "../components/button/RoundedButton";
import Footer from "../components/Footer";
import Tick from "../components/icons/tick";
import { useRouter } from "next/router";
import Features1 from "../components/Features1";

export default function Home() {
  const router = useRouter();
  const data = {
    title: "About Us",
    subTitle:
      "Founded in 2022, with the vision to transform global e-commerce exports from India, we are the pioneers connecting all the dots of global e-commerce, helping thousands of Indian merchants grow their international business by providing them the most comprehensive global e-commerce platform. Whether a business is just starting it’s cross-border journey or is an expert international exporter, we have a solution to offer.      ",
    cta_description:
      "We are solving the core challenges faced by sellers across sizes, sectors and geographies through a unique sustainable business model by leveraging programs powered by tech. goGlocal is India’s first and only all-inclusive platform for all global ecommerce requirements - a group of restless innovators, tirelessly working towards making global e-commerce seamless.       ",
    cta_image: "Group 35065 (2).png",
    imageBasePath: "/asset/about/",
    why_we_exist: {
      title: "Why we Exist ?",
      subTitle:
        "The world will not wait. And we are making sure “Made in India” is recognised across the world now. ",
      description:
        "The hundreds of sellers associated with us operate in more than fifty countries, and collectively aim to generate revenue of billions of US dollars and touch the lives of millions.We believe in the long run consumers should be able to buy products from anywhere in the world like local grocery shopping.  We are certain by leading technological evolution in the domain, we will make our unreasonable ideas a reality.",
      image: "about_cta_2.png",
    },
    who_we_are: {
      title: "Who We Are?",
      subTitle:
        "We believe in the power of a small group of thoughtful, committed and smart individuals aspiring to change the world. ",
      description:
        "A crew of creators from varying backgrounds and points of view are reimagining and reinventing the existing complexities of Global e-commerce with a view to offering the best and most simplified selling experience. The diverse perspectives of the crew derived from different cultures, education, and professional and life experiences all combine to add to our ability to give life to our mission.",
      image: "about_03.png",
    },
    team: [
      {
        image: "1.png",
        name: "Anirudh Bhagchandka",
        designation: "Founder",
        description:
          "5+ years Management Consulting,  Founder Reasoned (2017) & Global Trade Observer (2021)",
        linkedin: "https://www.linkedin.com/in/anirudh-bhagchandka-515603125/",
      },
      {
        image: "2.png",
        name: "Navin Mistry",
        designation: "Co-Founder",
        description:
          "22+ years experience in Cross-border. Ex- Ebay, Paypal Shiprocket : Sr Advisor ",
        linkedin: "https://www.linkedin.com/in/navinmistry/",
      },
      {
        image: "3.png",
        name: "Shruti Agarwal",
        designation: "Head Community & Partnerships",
        description: "16+ years in eComm , Founder D2C Insider",
        linkedin: "https://www.linkedin.com/in/shrutiaquarious/",
      },
      {
        image: "4.png",
        name: "Madhushree Karn",
        designation: "HR Lead",
        description: "7+ Years in Talent Management",
        linkedin: "https://www.linkedin.com/in/madhushree-k-05014676/",
      },
      {
        image: "5.png",
        name: "Puneet Jain",
        designation: "Lead Strategic Alliances",
        description: "16+ Years in Developing Partner Ecosystem",
        linkedin: "https://www.linkedin.com/in/pj81/",
      },
      {
        image: "6.png",
        name: "Shubham Kedia",
        designation: "Founding Team",
        description: "Growth Transformation, University of Manchester",
        linkedin: "https://www.linkedin.com/in/shubham-kedia-596067232/",
      },

      {
        image: "7.png",
        name: "Yogesh Awate",
        designation: "Head Data Science",
        description: "ML Expert, IIT Bombay, Carnegie Mellon University ",
        linkedin: "https://www.linkedin.com/in/yogesh-awate-40467710/",
      },
      {
        image: "8.png",
        name: "Anushka Bhagchandka",
        designation: "Founding Team",
        description: "Avid D2C Enthusiast, Northeastern University",
        linkedin: "https://www.linkedin.com/in/anushka-bhagchandka-32b747193/",
      },
    ],
    bottom: {
      light: "about_bottom_light 1.png",
      dark: "about_bottom_dark 1.png",
    },
  };

  return (
    <>
      <Head>
        <title>Goglocal</title>
        <meta name="description" content="Goglocal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-light dark:bg-dark overflow-x-hidden">
        {/* Header */}

        <Header />
        <div className="absolute top-0 left-0 white-rad-grad md:w-[3000px] md:h-[1200px] -translate-x-1/2 -translate-y-1/2 z-[-1]"></div>

        <div className="page-bg bg-[#AC2EED29] z-[10] static z-[1]">
          <div className="page-container main ">
            {/* Hero Section */}
            <div className=" pt-10 pb-5 md:pb-12 px-5 md:px-10 dark:bg-gradient-to-b from-[#692E98] to-[#880ed438] rounded-t-[2rem]">
              <motion.div
                // initial={{ opacity: 0, y: 10 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 items-center justify-center w-max-2xl md:mt-10"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="main-heading headingColor2 text-justify md:text-center  max-w-lg mx-auto"
                >
                  {data.title}
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="subtitle headingColor leading-relax max-w-4xl mx-auto text-justify md:text-center pt-2 md:pt-8"
                >
                  {data.subTitle}
                </motion.h1>
              </motion.div>
            </div>

            <motion.div className="main-light-background dark:bg-[#880ed438] px-4 md:px-12 py-5 rounded-[0rem]">
              <div className="md:pt-8 px-8">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="flex flex-col  md:flex-row items-center  gap-8 justify-center mx-auto "
                >
                  <div className="w-full md:w-1/2">
                    <p className="subtitle heading-color2 text-justify ">
                      <ul class="list-disc subtitle heading-color22 dark:text-white max-w-xl font-noto">
                        <li>
                          Solving core global trade problems faced by business
                          across sizes and geographies.
                        </li>
                        <li>
                          Uniquely crafted service models by leveraging
                          technology and leveraging the benefits of e-commerce
                        </li>
                      </ul>
                    </p>
                  </div>
                  <div className="md:w-4/12 relative">
                    <div className="w-8/12 mx-auto mt-0 md:mt-0">
                      <Image
                        src={`${data.imageBasePath}${data.cta_image}`}
                        alt="cta_image"
                        width={500}
                        height={500}
                        layout="responsive"
                        loading="lazy"
                      />
                      <div className="image_background_gradient" />
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="heading-1 heading-color2 text-center pt-16 md:pt-40">
                {data.why_we_exist.title}
              </div>
              <div className="flex flex-row gap-2 justify-center items-center">
                <div>
                  <svg
                    width="48"
                    height="2"
                    viewBox="0 0 48 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M47.0103 0.65332H0" stroke="#1d1125" />
                  </svg>
                </div>
                <div className="heading-4 heading-color22 font-normal text-center py-4">
                  <span> Solving the big how </span>
                </div>
                <div>
                  <svg
                    width="48"
                    height="2"
                    viewBox="0 0 48 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M47.0103 0.65332H0" stroke="#1d1125" />
                  </svg>
                </div>
              </div>

              <div className="heading-4 heading-color2 font-light italic tracking-wide font-bold max-w-2xl mx-auto text-center  py-2 md:py-12">
                {data.why_we_exist.subTitle}
              </div>
              <div className="md:pt-8">
                <div className="flex flex-col  md:flex-row items-center gap-4  justify-center mx-auto ">
                  <div className="md:w-4/12 relative">
                    <div className="mx-auto ">
                      <Image
                        src={`${data.imageBasePath}${data.why_we_exist.image}`}
                        alt="cta_image"
                        width={500}
                        height={500}
                        layout="responsive"
                        className="p-8 w-80 mx-auto  "
                        loading="lazy"
                      />
                      <div className="image_background_gradient" />
                      {/* <div className="main-grad hidden lg:block dark:hidden absolute top-0 right-0 h-full w-full"></div> */}
                    </div>
                  </div>
                  <div className="md:w-fit">
                    <div className="flex flex-col  items-start justify-center gap-4">
                      <div className="flex flex-row gap-2 items-center justify-center md:text-justify heading-5 font-normal font-noto heading-color22">
                        <p>
                          <svg
                            width="33"
                            height="32"
                            viewBox="0 0 33 32"
                            className="svg-fill"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#1d1125"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              fill="#1d1125"
                              d="M16.1729 31.5974C25.0046 31.5974 32.1641 24.5949 32.1641 15.9569C32.1641 7.31889 25.0046 0.316406 16.1729 0.316406C7.34116 0.316406 0.181641 7.31889 0.181641 15.9569C0.181641 24.5949 7.34116 31.5974 16.1729 31.5974ZM15.7338 19.7262L21.9365 13.47L20.6436 12.1882L15.062 17.818L11.6759 14.6654L10.4354 15.9978L14.4671 19.7515L15.1127 20.3526L15.7338 19.7262Z"
                            />
                          </svg>
                        </p>
                        <p>
                          Integrate you into{"  "}
                          <span className="font-bold">
                            {" "}
                            global marketplaces.
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-center heading-5 font-normal font-noto heading-color2 md:text-justify ">
                        <p>
                          <svg
                            width="33"
                            height="32"
                            viewBox="0 0 33 32"
                            className="svg-fill"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              fill="#1d1125"
                              d="M16.1729 31.5974C25.0046 31.5974 32.1641 24.5949 32.1641 15.9569C32.1641 7.31889 25.0046 0.316406 16.1729 0.316406C7.34116 0.316406 0.181641 7.31889 0.181641 15.9569C0.181641 24.5949 7.34116 31.5974 16.1729 31.5974ZM15.7338 19.7262L21.9365 13.47L20.6436 12.1882L15.062 17.818L11.6759 14.6654L10.4354 15.9978L14.4671 19.7515L15.1127 20.3526L15.7338 19.7262Z"
                            />
                          </svg>
                        </p>
                        <p>
                          Setup {"  "}
                          <span className="font-bold"> global stores</span> and
                          attract {"  "}
                          <span className="font-bold"> new customers</span> at
                          low investment.
                        </p>
                      </div>{" "}
                      <div className="flex flex-row gap-2 items-center justify-center heading-5 font-normal font-noto heading-color2 md:text-justify">
                        <p>
                          <svg
                            width="33"
                            height="32"
                            viewBox="0 0 33 32"
                            className="svg-fill"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              fill="#1d1125"
                              d="M16.1729 31.5974C25.0046 31.5974 32.1641 24.5949 32.1641 15.9569C32.1641 7.31889 25.0046 0.316406 16.1729 0.316406C7.34116 0.316406 0.181641 7.31889 0.181641 15.9569C0.181641 24.5949 7.34116 31.5974 16.1729 31.5974ZM15.7338 19.7262L21.9365 13.47L20.6436 12.1882L15.062 17.818L11.6759 14.6654L10.4354 15.9978L14.4671 19.7515L15.1127 20.3526L15.7338 19.7262Z"
                            />
                          </svg>
                        </p>
                        <p>
                          Reliably {"  "}
                          <span className="font-bold"> deliver</span> products
                          internationally {"  "}
                          <span className="font-bold">
                            {" "}
                            at low cost with speed.
                          </span>
                        </p>
                      </div>{" "}
                      <div className="flex flex-row gap-2 items-center justify-center heading-5 font-normal font-noto heading-color2 md:text-justify">
                        <p>
                          <svg
                            width="33"
                            height="32"
                            viewBox="0 0 33 32"
                            className="svg-fill"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              fill="#1d1125"
                              d="M16.1729 31.5974C25.0046 31.5974 32.1641 24.5949 32.1641 15.9569C32.1641 7.31889 25.0046 0.316406 16.1729 0.316406C7.34116 0.316406 0.181641 7.31889 0.181641 15.9569C0.181641 24.5949 7.34116 31.5974 16.1729 31.5974ZM15.7338 19.7262L21.9365 13.47L20.6436 12.1882L15.062 17.818L11.6759 14.6654L10.4354 15.9978L14.4671 19.7515L15.1127 20.3526L15.7338 19.7262Z"
                            />
                          </svg>
                        </p>
                        <p>
                          <span className="font-bold"> Comply</span> with Indian
                          and foreign {"  "}
                          <span className="font-bold"> trade compliances </span>
                          {"  "} and customs.
                        </p>
                      </div>{" "}
                      <div className="flex flex-row gap-2 items-center justify-center heading-5 font-normal font-noto heading-color2 md:text-justify">
                        <p>
                          <svg
                            width="33"
                            height="32"
                            viewBox="0 0 33 32"
                            className="svg-fill"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              fill="#1d1125"
                              d="M16.1729 31.5974C25.0046 31.5974 32.1641 24.5949 32.1641 15.9569C32.1641 7.31889 25.0046 0.316406 16.1729 0.316406C7.34116 0.316406 0.181641 7.31889 0.181641 15.9569C0.181641 24.5949 7.34116 31.5974 16.1729 31.5974ZM15.7338 19.7262L21.9365 13.47L20.6436 12.1882L15.062 17.818L11.6759 14.6654L10.4354 15.9978L14.4671 19.7515L15.1127 20.3526L15.7338 19.7262Z"
                            />
                          </svg>
                        </p>
                        <p>
                          Receive secure {"  "}
                          <span className="font-bold">
                            {" "}
                            international sale remittances
                          </span>{" "}
                          at best {"  "}
                          <span className="font-bold"> FX rate.</span>
                        </p>
                      </div>{" "}
                      <div className="flex flex-row gap-2 items-center justify-center heading-5 font-normal font-noto heading-color2 md:text-justify">
                        <p>
                          <svg
                            width="33"
                            height="32"
                            viewBox="0 0 33 32"
                            className="svg-fill"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              fill="#1d1125"
                              d="M16.1729 31.5974C25.0046 31.5974 32.1641 24.5949 32.1641 15.9569C32.1641 7.31889 25.0046 0.316406 16.1729 0.316406C7.34116 0.316406 0.181641 7.31889 0.181641 15.9569C0.181641 24.5949 7.34116 31.5974 16.1729 31.5974ZM15.7338 19.7262L21.9365 13.47L20.6436 12.1882L15.062 17.818L11.6759 14.6654L10.4354 15.9978L14.4671 19.7515L15.1127 20.3526L15.7338 19.7262Z"
                            />
                          </svg>
                        </p>
                        <p>
                          Offer a{" "}
                          <span className="font-bold">
                            {" "}
                            superior customer experience
                          </span>{" "}
                          and grow business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Who we are  */}

              <div className=" px-5 md:px-10 pt-20 md:pt-60 ">
                <div className="heading-1 heading-color2 text-center ">
                  {data.who_we_are.title}
                </div>

                <div className="heading-4 heading-color2 font-light italic tracking-wide font-bold max-w-2xl mx-auto text-center  py-2 md:py-12">
                  {data.who_we_are.subTitle}
                </div>
                <div className="pt-4 md:pt-8">
                  <div className="flex flex-col  md:flex-row items-center justify-center mx-auto ">
                    <div className="md:w-1/2">
                      <p className="medium-text heading-color2 text-center md:text-start max-w-xl">
                        {data.who_we_are.description}
                      </p>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-4/12 relative">
                      <Image
                        src={`${data.imageBasePath}${data.who_we_are.image}`}
                        alt="cta_image"
                        width={500}
                        height={500}
                        layout="responsive"
                        className="p-2 md:p-8"
                        loading="lazy"
                      />
                      <div className="image_background_gradient" />
                      {/* <div className="hidden lg:block main-grad  dark:hidden absolute top-0 right-0 h-full w-full"></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className=" px-5 md:px-10 dark:bg-gradient-to-b from-[#7c007747] via-[#7c007747] via-[#7c007747] to-transparent pt-10 md:pt-20 ">
              <div className="main-heading2 heading-color22 py-4 text-center mx-auto">
                The Team
              </div>
              <div className="pt-0 pb-2 md:pt-8 md:pb-40 w-full">
                <div className="flex-3x3-team">
                  {data.team.map((item, index) => (
                    <div className="w-full md:w-1/3 lg:w-1/4 py-4" key={index}>
                      <a href={item.linkedin} target="_blank" rel="noreferrer">
                        <div className="flex flex-col items-start justify-start relative">
                          <div className="flex flex-col justify-start items-center w-full z-10">
                            <motion.div
                              whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.5 },
                              }}
                              className="w-52 h-52 "
                            >
                              <Image
                                src={`${data.imageBasePath}team/${item.image}`}
                                alt="cta_image"
                                className="cursor-pointer team-image"
                                width={500}
                                height={500}
                                layout="responsive"
                                loading="lazy"
                              />
                            </motion.div>
                            <div className="heading-4 heading-color22 text-center pt-2 h-16 md:h-auto">
                              {item.name}
                            </div>
                            <div className="subtitle text-center leading-snug headingColor">
                              {item.designation}
                            </div>
                            <div className="caption-text font-normal leading-normal text-center headingColor text-[#1d1125] max-w-xs pt-2">
                              {item.description}
                            </div>
                          </div>
                          <div className=" z-[0]" />
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
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
