"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "@/lib/i18n"

const slides = [
  {
    image: "/hero/hero1.png",
    titleKey: "heroSlider.slide1.title",
    subtitleKey: "heroSlider.slide1.subtitle",
    button1TextKey: "heroSlider.slide1.button1",
    button1Link: "#bagayoda",
    button2TextKey: "heroSlider.slide1.button2",
    button2Link: "#features",
  },
  {
    image: "/hero/hero2.png",
    titleKey: "heroSlider.slide2.title",
    subtitleKey: "heroSlider.slide2.subtitle",
    button1TextKey: "heroSlider.slide2.button1",
    button1Link: "/tools/risk-calculator",
    button2TextKey: "heroSlider.slide2.button2",
    button2Link: "#comparison",
  },
  {
    image: "/hero/hero3.png",
    titleKey: "heroSlider.slide3.title",
    subtitleKey: "heroSlider.slide3.subtitle",
    button1TextKey: "heroSlider.slide3.button1",
    button1Link: "#downloads",
    button2TextKey: "heroSlider.slide3.button2",
    button2Link: "#license",
  },
]

export function HeroSlider() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={t(slide.titleKey)}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-4xl px-6">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {t(slide.titleKey)}
              </h1>

              <p className="text-xl text-white/80">
                {t(slide.subtitleKey)}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={slide.button1Link}
                  className="px-8 py-4 rounded-xl bg-[#FF6B00] text-white font-semibold hover:bg-[#e65f00] transition"
                >
                  {t(slide.button1TextKey)}
                </a>

                <a
                  href={slide.button2Link}
                  className="px-8 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold hover:bg-white/10 transition"
                >
                  {t(slide.button2TextKey)}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full ${
              current === index ? "bg-[#FF6B00]" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  )
}