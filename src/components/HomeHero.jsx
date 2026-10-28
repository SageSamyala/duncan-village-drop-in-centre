import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Play, Pause } from "lucide-react";

/** Above-the-fold hero: who we help, what we do, and the two clearest next actions. */
export default function HomeHero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPlaybackWithPreference = () => {
      if (mediaQuery.matches) {
        video.pause();
        setIsPlaying(false);
      } else {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        }
      }
    };

    syncPlaybackWithPreference();
    mediaQuery.addEventListener("change", syncPlaybackWithPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncPlaybackWithPreference);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="w-full overflow-hidden bg-[#F1F7F1]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:px-8 lg:py-16">
        <div className="min-w-0">
          <p className="mb-3 font-heading text-lg text-[#E65100] sm:text-xl">
            Wamkelekile – Hands of Hope | Izandla ZeThemba
          </p>
          <p className="mb-4 text-xs font-bold tracking-[.16em] text-[#6A1B9A] sm:tracking-[.22em]">
            DUNCAN VILLAGE, EAST LONDON · GROWING FUTURES SINCE 2001
          </p>
          <h1 className="font-heading text-3xl leading-[1.1] text-[#1B5E20] sm:text-4xl lg:text-5xl">
            Care, safety and opportunity for children and families in Duncan Village.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-black/70 lg:text-lg lg:leading-8">
            We are a registered non-profit offering early childhood development, youth programmes,
            social casework and community support — free of charge, close to home.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/contact"
              className="support-pulse inline-flex min-h-14 items-center justify-center rounded-full bg-[#E65100] px-7 text-sm font-bold tracking-wide text-white transition hover:bg-[#c94700]"
            >
              I NEED SUPPORT
            </Link>
            <Link
              to="/get-involved"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#1B5E20] px-7 text-sm font-bold tracking-wide text-white transition hover:bg-[#174d1b]"
            >
              SUPPORT OUR WORK
            </Link>
            <Link
              to="/programmes"
              className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-[#1B5E20]/25 px-7 text-sm font-bold tracking-wide text-[#1B5E20] transition hover:border-[#1B5E20]"
            >
              EXPLORE PROGRAMMES
            </Link>
          </div>
        </div>

        <figure className="m-0 w-full min-w-0 overflow-hidden rounded-[2rem] bg-white shadow-lg">
          <div className="relative w-full">
            <video
              ref={videoRef}
              poster="/media/hero-poster.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              width={832}
              height={464}
              className="block h-[260px] w-full object-cover object-[center_35%] sm:h-[320px] lg:h-[400px]"
              aria-label="Duncan Village Safe Park youth celebration and community dance"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/media/hero-preview.mp4" type="video/mp4" />
              <img
                src="/media/hero-poster.jpg"
                alt="Duncan Village Safe Park youth celebration"
                className="block h-[260px] w-full object-cover object-[center_35%] sm:h-[320px] lg:h-[400px]"
              />
            </video>
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause hero video" : "Play hero video"}
              aria-pressed={isPlaying}
              className="absolute bottom-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-[#FFB300] focus:ring-offset-2 sm:bottom-4 sm:right-4"
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 fill-current" aria-hidden="true" />
              ) : (
                <Play className="h-5 w-5 fill-current translate-x-0.5" aria-hidden="true" />
              )}
            </button>
          </div>
          <figcaption className="bg-[#FFB300] px-6 py-5 font-heading text-lg text-[#212121] sm:text-xl">
            Children are the future.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
