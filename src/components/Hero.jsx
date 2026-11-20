import { asset, safeURL } from '../utils'
import Decor from './Decor'
import VerseS from './VerseS'

export default function Hero({ data, theme, heroRef, heroHidden }) {
  const { bride, groom } = data.parents || {}
  const bibleVerse = data.wedding.bibleVerse
  return (
    <section className="hero motion-scene" aria-label="Wedding invitation">
      <img
        className="hero-art"
        src={data.media.heroPoster ? safeURL(data.media.heroPoster) : asset('hero-first.webp')}
        alt={theme.scene}
        decoding="async"
      />
      <video className="hero-video" id="hero-video" ref={heroRef} muted loop playsInline preload="none" hidden={heroHidden} />

      <div className="hero-copy">
        {bibleVerse && (
          <div className="hero-verse">
            <p className="hero-verse-text">
              “<VerseS />o they are no longer two,<br />
              but one flesh.<br />
              Therefore what God has joined together,<br />
              let no one separate.”
            </p>
            <p className="hero-verse-ref">- Matthew 19:6</p>
          </div>
        )}

        <h2 className="hero-families-title">TOGETHER WITH OUR FAMILIES</h2>
        <p className="hero-joyfully-invite">We joyfully invite you to the</p>

        <div className="hero-wedding-wrap">
          <span className="hero-wedding-text">wedding</span>
          <span className="hero-of-text">of</span>
        </div>

        <div className="hero-person-block">
          <h1 className="hero-person-name" id="names" tabIndex={-1}>
            {data.couple.fullNameBride || data.couple.first}
          </h1>
          <p className="hero-person-parents">
            D/O {bride?.father} &amp; {bride?.mother}
          </p>
        </div>

        <div className="hero-amp" aria-hidden="true">&amp;</div>

        <div className="hero-person-block">
          <h2 className="hero-person-name hero-person-name--groom">
            {data.couple.fullNameGroom || data.couple.second}
          </h2>
          <p className="hero-person-parents">
            S/O {groom?.father} &amp; {groom?.mother}
          </p>
        </div>
      </div>

      {/* Scroll indicator on terrace steps as requested */}
      <a
        href="#our-invitation"
        className="hero-scroll-cue"
        aria-label="Scroll down to explore invitation"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('our-invitation')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <span className="hero-scroll-label">Scroll to explore</span>
        <svg
          className="hero-scroll-arrow"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </a>

      <Decor index={0} eager />
    </section>
  )
}
