"use client";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutInfoData = {
  media: {
    desktop: {
      type: "image",
      path: "/images/about-about_Info-1.jpg",
      alt: "about",
    },
    mobile: {
      type: "image",
      path: "/images/about-about_Info-1.jpg",
      alt: "about",
    },
  },
  description:
    "<h2>We’re not just building charging stations—we’re driving India’s transition to clean, smart, and sustainable mobility. Born in 2020 with a handful of chargers and a big dream, we’ve grown into one of India’s fastest-growing EV charging networks, committed to making electric vehicle charging effortless, reliable, and accessible.</h2>",
};

export default function AboutInfoSection({ data = aboutInfoData }) {
  const animatedTextRef = useRef(null);
  const sanitizedText = DOMPurify.sanitize(data?.description);

  const splitTextIntoWords = (element) => {
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) {
      if (node.textContent.trim()) {
        textNodes.push(node);
      }
    }

    textNodes.forEach((textNode) => {
      const words = textNode.textContent.split(/(\s+)/);
      const fragment = document.createDocumentFragment();

      words.forEach((word) => {
        if (word.trim()) {
          // Create span for actual words
          const span = document.createElement("span");
          span.textContent = word;
          span.classList.add("word-animate");
          fragment.appendChild(span);
        } else if (word) {
          // Preserve whitespace
          fragment.appendChild(document.createTextNode(word));
        }
      });

      textNode.parentNode.replaceChild(fragment, textNode);
    });
  };

  useEffect(() => {
    if (!animatedTextRef.current) return;

    // Set the HTML content first
    animatedTextRef.current.innerHTML = sanitizedText;

    // Split text into words
    splitTextIntoWords(animatedTextRef.current);

    // Get all word spans
    const wordSpans = animatedTextRef.current.querySelectorAll(".word-animate");

    if (wordSpans.length === 0) return;

    // Set initial state - all words transparent
    gsap.set(wordSpans, {
      opacity: "20%",
    });

    // Create the animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animatedTextRef.current,
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none none",
        // markers: true,
        scrub: 1,
      },
    });

    // Animate each word to full opacity one by one
    tl.to(wordSpans, {
      opacity: 1,
      duration: 0.1,
      stagger: 0.08,
      ease: "none",
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, [sanitizedText]);

  return (
    <section className="w-full h-auto block py-[40px] sm:py-[60px] xl:py-[100px] 2xl:py-[140px]">
      <div className="container">
        <div
          ref={animatedTextRef}
          className="typography [&_h2]:font-normal mb-[40px] sm:mb-[80px] xl:mb-[100px] 2xl:mb-[140px]"
          // dangerouslySetInnerHTML={{ __html: sanitizedText }}
        />
      </div>
      <div className="w-[95%] sm:max-w-[860px] lg:max-w-[1080px] xl:max-w-[1220px] 2xl:max-w-[1380] 3xl:max-w-[1820px] mx-auto">
        <div className="w-full aspect-[1360/520] overflow-hidden rounded-[20px] xl:rounded-[25px] relative z-0">
          <Image
            src="/images/icon-play.svg"
            alt="icon-play"
            width={78}
            height={78}
            className="w-[60px] xl:w-[70px] 2xl:w-[78px] aspect-square absolute z-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition hover:scale-105"
          />
          {data?.media?.desktop?.type === "video" ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover absolute -z-2 inset-0"
            >
              <source src={data?.media?.desktop?.path} type="video/mp4" />
            </video>
          ) : (
            <picture className="w-full h-full absolute -z-1 inset-0">
              <source
                media="(max-width: 640px)"
                srcSet={data?.media?.mobile?.path}
              />
              <Image
                src={data?.media?.desktop?.path}
                alt={data?.media?.desktop?.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
                className="-z-1 object-cover transition hover:scale-105"
                placeholder="blur"
                blurDataURL="/images/placeholder.jpg"
              />
            </picture>
          )}
        </div>
      </div>
    </section>
  );
}
