import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

/** Above-the-fold hero: who we help, what we do, and the two clearest next actions. */
export default function HomeHero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const startPlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    video
      .play()
      .then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      })
      .catch((err) => {
        console.error("Playback failed:", err);
      });
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
          <div className="group relative w-full bg-black">
            <video
              ref={videoRef}
              poster="/media/hero-poster.jpg"
              playsInline
              preload="metadata"
              controls={hasStarted}
              width={832}
              height={464}
              className="block h-[260px] w-full object-cover object-[center_35%] sm:h-[320px] lg:h-[400px]"
              aria-label="Duncan Village Safe Park community video"
              onPlay={() => {
                setIsPlaying(true);
                setHasStarted(true);
              }}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/media/hero-video.mp4" type="video/mp4" />
              <img
                src="/media/hero-poster.jpg"
                alt="Duncan Village Safe Park youth celebration"
                className="block h-[260px] w-full object-cover object-[center_35%] sm:h-[320px] lg:h-[400px]"
              />
            </video>

            {!hasStarted && (
              <div
                onClick={startPlayback}
                className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center bg-black/25 transition-all group-hover:bg-black/35"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    startPlayback();
                  }
                }}
                aria-label="Play full video"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E65100] text-white shadow-2xl transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
                  <Play className="h-8 w-8 translate-x-0.5 fill-current sm:h-10 sm:w-10" />
                </div>
                <span className="mt-3 rounded-full bg-black/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm sm:text-sm">
                  Watch Full Video (3 mins)
                </span>
              </div>
            )}
          </div>
          <figcaption className="bg-[#FFB300] px-6 py-5 font-heading text-lg text-[#212121] sm:text-xl">
            Children are the future.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
