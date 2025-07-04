"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Lenis from "lenis";
import styles from "@styles/hero.module.css";
import Sparkie from "@components/sparkie";
import Navbar from "@components/Navbar";
import MainContent from "@components/MainContent";
import About from "@sections/about"; // Import the About component
import ScopeOfEvent from "@sections/scope"; // Import the ScopeOfEvent component
//import Chief from "@sections/chiefGuest"; // Import the Chief component\
import Sponsor from "@sections/sponsor"; // Import the Sponsor component
//import Partners from "@sections/partners"; // Import the Partners component
import Moments from "@sections/moments"; // Import the Moments component
import What from "@sections/what"; // Import the What component

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Hero({ scrollToSectionRef, startEndRef, momentsTimelineRef }) {
  const logoRef = useRef(null);
  const taglineRef = useRef(null);
  const heroRef = useRef(null);
  const sparkieRef = useRef(null);
  const navRef = useRef(null);
  const mainContentRef = useRef(null);
  const logoTextRef = useRef(null);
  const sparkieContainerRef = useRef(null);

  //time line ref
  const timelineRef = useRef(null);

  // Refs for About component's elements
  const aboutSectionRef = useRef(null); // This will be passed to About for its main container
  const circleContainerRefForAbout = useRef(null); // For the circle container in About
  const bannerRefForAbout = useRef(null); // For the banner in About
  const textContainerRefForAbout = useRef(null); // For the text container in About
  const secondaryTextRefForAbout = useRef(null); // For the secondary text in About
  const textContainerBoxesRefForAbout = useRef([]); // For the boxes in About

  const addRefToBoxes = (ref) => {
    if (!textContainerBoxesRefForAbout.current.includes(ref)) {
      textContainerBoxesRefForAbout.current.push(ref);
    }
  };

  //refs for scope section
  const scopeTitleRef = useRef(null);
  const scopeSubtitleRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const scopeSectionRef = useRef(null); // This will be passed to ScopeOfEvent for its main container

  // refs for chief guest section
  const topTitleRef = useRef(null);
  const bottomTitleRef = useRef(null);
  const chiefMinisterRef = useRef(null);
  const ceoRef = useRef(null);
  const chiefSectionRef = useRef(null);

  //refs for sponsor section
  const sponsorSectionRef = useRef(null);
  const sponsorTitleRef = useRef(null);
  const whySectionRef = useRef(null); // This will be passed to Sponsor for its main container
  const whyHeadingRef = useRef(null);
  const whyCardsRef = useRef(null);
  const whatSectionRef = useRef(null); // This will be passed to Sponsor for its main container
  const whatHeadingRef = useRef(null);
  const whatCardsRef = useRef(null);

  //refs for partners section
  const partnersSectionRef = useRef(null);
  const partnerChainRef = useRef(null);
  const partnersTitleRef = useRef(null);

  //refs for moments section
  const MomentsSectionRef = useRef(null);
  const MomentsHeadingRef = useRef(null);
  const MomentsTrackRef = useRef(null);

  //refs for what section
  const whatsectionRef = useRef(null);
  const whatSectionTitleRef = useRef(null);
  const whatSectionContentRef = useRef(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function scrollToSection(sectionName) {
    const tl = timelineRef.current;
    if (!tl.labels[sectionName]) {
      console.warn(`Section '${sectionName}' not found in GSAP labels`);
      return;
    }

    const sectionTime = tl.labels[sectionName];
    const progress = sectionTime / tl.duration();
    const scrollLength = ScrollTrigger.maxScroll(window);
    const scrollTo = scrollLength * progress;

    gsap.to(window, {
      scrollTo: { y: scrollTo },
      duration: 0,
      //ease: "linear",
    });
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      if (!prev) {
        // Disable scrolling when the mobile menu is open
        document.body.style.overflow = "hidden";
      } else {
        // Re-enable scrolling when the mobile menu is closed
        document.body.style.overflow = "auto";
      }
      return !prev;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  useEffect(() => {
    scrollToSectionRef(scrollToSection);
  }, [scrollToSectionRef]);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Controls the smoothness (lower is smoother)
      smoothTouch: false, // Disables smoothing on touch devices for a native feel
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    const ticker = (time) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    // Clear any existing animations
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    const isMobile = window.innerWidth <= 768;
    // Initial animation timeline setup
    const logoTl = gsap.timeline();

    gsap.set(mainContentRef.current, {
      x: "-=50vw",
    });
    gsap.set(navRef.current, {
      y: "-=5vh",
    });

    // Initial logo animation

    // Tagline animation
    gsap.to(taglineRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.8,
    });

    // Sparkie animation
    logoTl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8, y: -30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.2,
        onComplete: () => {
          // Re-enable scrolling
          startEndRef.current.start();
          document.documentElement.style.overflow = "";
          document.body.style.overflow = "auto";
          // Single scroll timeline that handles all phases over 300vh
          const mainScrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "+=15000vh",
              scrub: 1.5,
              pin: true,
              // markers: true, // Set to true for debugging
            },
          });
          timelineRef.current = mainScrollTl;

          // Phase 1: Entry animations (0-100vh of scroll)
          mainScrollTl
            .to(
              logoRef.current,
              {
                y: isMobile ? "-=41vh" : "-=35vh",
                x: isMobile ? "-30vw" : "-=33vw",
                width: isMobile ? "115px" : "180px",
                duration: 3,
                ease: "power2.out",
              },
              0
            )
            .to(
              navRef.current,
              { opacity: 1, y: 0, duration: 5, ease: "power2.inOut" },
              0
            )
            .to(
              logoTextRef.current,
              {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
              },
              "+=0.5"
            )
            .to(
              logoRef.current,
              { opacity: 0, duration: 0.2, ease: "power2.in" },
              "<"
            )
            .to(
              taglineRef.current,
              {
                opacity: 0,
                x: "-=50vh",
                duration: 1,
                ease: "power2.out",
              },
              0
            )
            .addLabel("heroSection", "+=0") // Add a label for the Hero section
            .to(
              mainContentRef.current,
              {
                opacity: 1,
                x: 0,
                duration: 3,
                ease: "power2.inOut",
              },
              0
            )
            .to({}, { duration: 3 })
            .to(mainContentRef.current, {
              x: "-=100vw",
              opacity: 0,
              duration: 3,
              ease: "power2.in",
            })
            .addLabel("aboutSection", isMobile?"+=5":"+=7") // Add a label for the About section
            .to(
              textContainerRefForAbout.current,
              {
                y: "15vh",
                fontSize: isMobile ? "1.8rem" : "4rem",
                opacity: 1,
                duration: 3,
                ease: "power2.out",
              },
              "-=2"
            )
            .to({}, { duration: 3 })
            .to(textContainerRefForAbout.current, {
              y: isMobile ? "-=20vh" : "-=15vh",
              x: isMobile ? 0 : "-=24vw",
              fontSize: isMobile ? "1.8rem" : "2rem",
              justifyContent: "flex-start",
              duration: 3,
              ease: "power2.out",
            })
            .to(
              textContainerBoxesRefForAbout.current,
              {
                width: 0,
                height: 0,
                opacity: 0,
                duration: 3,
                ease: "power2.out",
              },
              "-=3"
            ) // Animate the boxes to disappear 2 seconds before the end of the previous animation

            .to(
              secondaryTextRefForAbout.current,
              {
                y: "5vh",
                //x: isMobile ? "-=6vw" : "-=5vw",
                duration: 3,
                ease: "power2.out",
              },
              "-=4"
            ) // Start this 2 seconds before the end of the previous animation
            .to({}, { duration: 3 })
            .to(textContainerRefForAbout.current, {
              x: "-=50%",
              opacity: 0,
              duration: 3,
              ease: "power2.in",
            })
            .to(
              secondaryTextRefForAbout.current,
              {
                x: "-=50%",
                opacity: 0,
                duration: 3,
                ease: "power2.in",
              },
              "-=2"
            )
            .addLabel("whatSection", "+=3") // Add a label for the end of the About section
            .to(
              whatsectionRef.current,
              {
                zIndex: 100,
                duration: 0,
              },
              "-=2"
            ) // Start this 2 seconds before the end of the previous animation
            .to(
              whatSectionTitleRef.current,
              {
                opacity: 1,
                x: 0,
                duration: 2,
                ease: "power2.out",
              },
              "-=2"
            )
            .to(
              whatSectionContentRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 2,
                ease: "power2.out",
              },
              "-=2"
            )
            .to({}, { duration: 3 }) // Pause to let users read
            .to([whatSectionContentRef.current, whatSectionTitleRef.current], {
              y: isMobile ? "-=20vh" : "0",
              duration: 3,
              ease: "power2.out",
            })
            .to({}, { duration: 3 }) // Pause to let users read
            .to(whatsectionRef.current, {
              zIndex: -1,
              duration: 0,
            })
            .to(
              whatSectionTitleRef.current,
              {
                opacity: 0.5,
                x: "-=100vw",
                duration: 2,
                ease: "power2.in",
              },
              "-=2"
            )
            .to(
              whatSectionContentRef.current,
              {
                opacity: 0.5,
                y: "-=100vh",
                x: "-=100vw",
                duration: 2,
                ease: "power2.in",
              },
              "-=1"
            ) // Start cards before heading finishes

            .addLabel("scopeSection",isMobile?"-=5": "+=0")
            .to(
              scopeSectionRef.current,
              {
                zIndex: 100,
                duration: 0,
              },
              "-=2"
            ) // Add a label for the Scope section
            .to(
              scopeTitleRef.current,
              {
                x: 0,
                opacity: 1,
                duration: 3,
                ease: "power2.out",
              },
              "-=2"
            )
            .to(
              scopeSubtitleRef.current,
              {
                y: 0,
                opacity: 1,
                duration: 3,
                ease: "power2.out",
              },
              "-=2"
            )
            .to(
              cardsContainerRef.current,
              {
                y: 0,
                x: 0,
                opacity: 1,
                duration: 3,
                ease: "power2.out",
              },
              "-=2" // Start cards before title finishes
            )
            .to({}, { duration: 5 })
            .to(scopeSectionRef.current, {
              zIndex: -1,
              duration: 0,
            })
            .to(
              scopeTitleRef.current,
              {
                x: "-=50vw",
                opacity: 0,
                duration: 3,
                ease: "power2.in",
              },
              "-=2"
            )
            .to(
              scopeSubtitleRef.current,
              {
                x: "-=50vw",
                opacity: 0,
                duration: 3,
                ease: "power2.in",
              },
              "-=2"
            )
            .to(
              cardsContainerRef.current,
              {
                y: "-=50vh",
                x: "-=50vw",
                opacity: 0,
                duration: 3,
                ease: "power2.in",
              },
              "-=2"
            )
            // .addLabel("chiefSection", "+=5") // Add a label for the Chief section
            // .to(
            //   topTitleRef.current,
            //   {
            //     x: "-10vw",
            //     opacity: 1,
            //     duration: 3,
            //     ease: "power2.out",
            //   },
            //   "-=1"
            // )
            // .to(
            //   bottomTitleRef.current,
            //   {
            //     x: isMobile ? "10vw" : 0,
            //     opacity: 1,
            //     duration: 3,
            //     ease: "power2.out",
            //   },
            //   "-=1"
            // )
            // .to(
            //   chiefSectionRef.current,
            //   {
            //     zIndex: 100,
            //     duration: 0,
            //   },
            //   "-=3"
            // )
            // .to(
            //   chiefMinisterRef.current,
            //   {
            //     y: isMobile ? "25vh" : 0,
            //     x: isMobile ? "-20vw" : "-10vw",
            //     rotateY: 15,
            //     opacity: 1,
            //     duration: 3,
            //     stagger: 0.5,
            //     ease: "power2.out",
            //   },
            //   "-=2"
            // )
            // .to(
            //   ceoRef.current,
            //   {
            //     opacity: 1,
            //     y: isMobile ? "20vh" : 0,
            //     x: isMobile ? "20vw" : "10vw",
            //     rotateY: -15,
            //     duration: 5,
            //     stagger: 0.5,
            //     ease: "power2.out",
            //   },
            //   "-=3"
            // )
            // .to({}, { duration: 5 })
            // .to(chiefSectionRef.current, {
            //   zIndex: -1,
            //   duration: 0,
            // })
            // .to(bottomTitleRef.current, {
            //   x: "+=50vw",
            //   opacity: 0,
            //   duration: 3,
            //   ease: "power2.in",
            // })
            // .to(
            //   topTitleRef.current,
            //   {
            //     x: "+=50vw",
            //     opacity: 0,
            //     duration: 3,
            //     ease: "power2.in",
            //   },
            //   "-=2"
            // )
            // .to(
            //   chiefMinisterRef.current,
            //   {
            //     y: "-=50vh",
            //     x: "+=50vw",
            //     opacity: 0,
            //     duration: 3,
            //     ease: "power2.in",
            //   },
            //   "-=3"
            // )
            // .to(
            //   ceoRef.current,
            //   {
            //     y: "+=50vh",
            //     x: "-=50vw",
            //     opacity: 0,
            //     duration: 3,
            //     ease: "power2.in",
            //   },
            //   "-=2"
            // )
            .addLabel("sponsorSection",isMobile?"-=9":"-=5") // Add a label for the Sponsor section
            .to(
              sponsorSectionRef.current,
              {
                zIndex: 100,
                duration: 2,
              },
              "-=3"
            ) // Start this 3 seconds before the end of the previous animation
            .to(
              sponsorTitleRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 2,
                ease: "power2.out",
              },
              "-=1"
            )
            .to({}, { duration: 3 }) // Pause to let users read
            .to(sponsorTitleRef.current, {
              opacity: 0,
              y: "-=80vh",
              duration: 3,
              ease: "power2.out",
            })
            .to(
              whySectionRef.current,
              {
                zIndex: 100,
                duration: 0,
              },
              "-=3"
            ) // Start this 3 seconds before the end of the previous animation
            .to(
              whyHeadingRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 2,
                ease: "power2.out",
              },
              "-=3"
            )
            .to(
              whyCardsRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 2,
                ease: "power2.out",
              },
              "-=3"
            ) // Start cards before heading finishes
            .to({}, { duration: 5 }) // Pause to let users read

            .to(whyHeadingRef.current, {
              opacity: 0.5,
              y: "-=100vh",
              duration: 2,
              ease: "power2.in",
            })
            .to(
              whyCardsRef.current,
              {
                opacity: 0.5,
                y: "-=100vh",
                duration: 2,
                ease: "power2.in",
              },
              "-=2"
            ) // Start cards before heading finishes
            .to(whySectionRef.current, {
              zIndex: -1,
              duration: 0,
            })
            .to(
              whatSectionRef.current,
              {
                zIndex: 100,
                duration: 0,
              },
              "-=2"
            ) // Start this 2 seconds before the end of the previous animation
            .to(
              whatHeadingRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 2,
                ease: "power2.out",
              },
              "-=1"
            )
            .to(
              whatCardsRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 2,
                ease: "power2.out",
              },
              "-=2" // Start cards before heading finishes
            )
            .to({}, { duration: 5 }) // Pause to let users read
            .to(whatSectionRef.current, {
              zIndex: -1,
              duration: 0,
            })
            //.call(startEndRef.current.end) // Call start function to load footer
            .to(whatHeadingRef.current, {
              opacity: 0.5,
              y: "-=100vh",
              duration: 2,
              ease: "power2.in",
            })
            .to(
              whatCardsRef.current,
              {
                opacity: 0.5,
                y: "-=100vh",
                duration: 2,
                ease: "power2.in",
              },
              "-=2"
            )
            .addLabel("momentsSection",isMobile?"-=12":"-=5")
            .to(
              MomentsSectionRef.current,
              {
                zIndex: 100,
                duration: 0,
              },
              "-=2"
            ) // Start this 2 seconds before the end of the previous animation
            //.call(startEndRef.current.start)
            .to(
              MomentsHeadingRef.current,
              {
                y: 0,
                opacity: 1,
                duration: 2,
                ease: "power2.out",
              },
            ) // Start this 2 seconds before the end of the previous animation
            .to(
              MomentsTrackRef.current,
              {
                y: 0,
                opacity: 1,
                duration: 2,
                ease: "power2.out",
              },
              "-=2"
            )
            .to({}, { duration: 5 }) // Pause to let users read
            .to(MomentsSectionRef.current, {
              zIndex: -1,
              duration: 0,
            }); // Hide the Moments section
          // Start track before heading finishes)
          // Call end function to hide footer
          // Start this 2 seconds before the end of the previous animation
          // .addLabel("partnersSection", "+=5") // Add a label for the Partners section
          // .to(partnersSectionRef.current, {
          //   zIndex: 100,
          //   duration: 0,
          // }) // Start this 2 seconds before the end of the previous animation

          // .to(
          //   [partnersTitleRef.current, partnerChainRef.current],
          //   {
          //     y: 0,
          //     duration: 2,
          //     ease: "power2.out",
          //   },
          //   "-=1"
          // )
          //.to({}, { duration: 5 }); // Pause to let users read
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      logoTl.kill();
      gsap.ticker.remove(ticker);
      lenis.destroy();
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = ""; // Re-enable scrolling on cleanup
    };
  }, [startEndRef]);

  return (
    <>
      <section ref={heroRef} className={styles.heroContainer} id="hero">
        {" "}
        {/* Removed aboutStyles.container */}
        <Navbar
          ref={navRef}
          logoTextRef={logoTextRef}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          closeMobileMenu={closeMobileMenu}
          scrollToSection={scrollToSection}
        />
        {/* Initial centered content */}
        <div className={styles.contentWrapper}>
          <div className={styles.logoContainer}>
            <Image
              width={200}
              height={200}
              ref={logoRef}
              src="/img/logo.svg"
              alt="RenAISE Logo"
              className={styles.logo}
            />
          </div>
          <p ref={taglineRef} className={styles.tagline}>
            Celebrating 10 Years of IEDC Bootcamp CEC
          </p>
        </div>
        <MainContent ref={mainContentRef} />
        <Sparkie ref={sparkieRef} conatinerRef={sparkieContainerRef} />
        {/* Render About component and pass refs */}
        <About
          aboutRef={aboutSectionRef}
          circleContainerRef={circleContainerRefForAbout}
          bannerRef={bannerRefForAbout}
          textContainerRef={textContainerRefForAbout}
          secondaryTextRef={secondaryTextRefForAbout}
          boxRef={addRefToBoxes}
        />
        <ScopeOfEvent
          scopeTitleRef={scopeTitleRef}
          scopeSubtitleRef={scopeSubtitleRef}
          cardsContainerRef={cardsContainerRef}
          scopeSectionRef={scopeSectionRef}
        />
        {/* <Chief
          topTitleRef={topTitleRef}
          bottomTitleRef={bottomTitleRef}
          chiefMinisterRef={chiefMinisterRef}
          ceoRef={ceoRef}
          chiefSectionRef={chiefSectionRef}
        /> */}
        <Sponsor
          sponsorSectionRef={sponsorSectionRef}
          sponsorTitleRef={sponsorTitleRef}
          whyHeadingRef={whyHeadingRef}
          whyCardsRef={whyCardsRef}
          whatHeadingRef={whatHeadingRef}
          whatCardsRef={whatCardsRef}
          whySectionRef={whySectionRef}
          whatSectionRef={whatSectionRef}
        />
        {/* <Partners
          partnerSectionRef={partnersSectionRef}
          partnerChainRef={partnerChainRef}
          partnerTitleRef={partnersTitleRef}
        /> */}
        <What
          whatsectionRef={whatsectionRef}
          whatSectionTitleRef={whatSectionTitleRef}
          whatSectionContentRef={whatSectionContentRef}
        />
        <Moments
          MomentsSectionRef={MomentsSectionRef}
          MomentsHeadingRef={MomentsHeadingRef}
          MomentsTrackRef={MomentsTrackRef}
        />
      </section>
    </>
  );
}

export default Hero;