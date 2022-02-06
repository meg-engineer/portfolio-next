import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

// Components
import StickyNavigation from "components/Navigation/sticky";
import Hero from "components/Hero";
import Navigation from "components/Navigation";
import Profile from "components/Profile";
import Portfolio from "components/Portfolio";
import Skill from "components/Skill";
import Contact from "components/Contact";

// Types
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [isDisplay, setIsDisplay] = useState(false);

  const isRunning = useRef(false);

  const isScrollToggle = useCallback(() => {
    if (isRunning.current) return;
    isRunning.current = true;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const nav = document.querySelector("#navigation");
    const navOffset =
      nav && window.pageYOffset + nav.getBoundingClientRect().top;
    console.log("nav", navOffset, scrollTop);

    requestAnimationFrame(() => {
      if (navOffset && scrollTop > navOffset) {
        setIsDisplay(true);
      } else {
        setIsDisplay(false);
      }
      isRunning.current = false;
    });
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", isScrollToggle, { passive: true });
    return () => {
      document.removeEventListener("scroll", isScrollToggle);
    };
  }, []);

  return (
    <div className="container">
      <StickyNavigation isDisplay={isDisplay} />
      <Hero />
      <Navigation />
      <main>
        <section id="profile">
          <Profile />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="skill">
          <Skill />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Home;
