import { asset, safeURL } from '../utils'
import Decor from './Decor'
import Credit from './Credit'

export default function Closing({ data, onReopen }) {
  const { first, second } = data.couple
  const { media } = data
  return (
    <footer className="closing motion-scene" aria-labelledby="closing-title">
      <div className="closing-scene">
        <img
          className="closing-art"
          src={media.heroPoster ? safeURL(media.heroPoster) : asset('hero-first.webp')}
          alt=""
          width="720"
          height="1280"
          loading="lazy"
          decoding="async"
        />
        <div className="closing-copy reveal">
          <p className="closing-eyebrow">The beginning of our forever</p>
          <h2 className="closing-title" id="closing-title">With all<br /><em>our love</em></h2>
          <div className="closing-rule" aria-hidden="true"></div>
          <p className="closing-names"><span>{first}</span><i>&amp;</i><span>{second}</span></p>
          <p className="closing-date">{data.wedding.dateLabel}</p>
          <p className="closing-note">The day will be beautiful.<br />Even more so with you.</p>
        </div>
        <p className="closing-caption">A little moment. A lifetime of love.</p>
      </div>

      {/* Venue section placed after 'The beginning of our forever' as requested */}
      <div className="closing-venue-wrap reveal">
        <div className="venue-highlight">
          <p className="venue-calligraphy">
            At Bride’s Residence Khamari,<br />
            Tikrikilla, West Garo Hills.
          </p>
          {/* Client request: location sits between the venue and the reception lines */}
          <div className="venue-location">
            <iframe
              className="location-map"
              title={`Map to ${data.venue.name}`}
              src={`https://maps.google.com/maps?q=${data.venue.coords}&z=15&output=embed`}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <a className="action" href={data.venue.mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
          </div>
          <p className="venue-calligraphy">
            Reception to follow<br />
            Till 7:00 PM
          </p>
        </div>
      </div>

      <div className="closing-colophon">
        <button className="reopen" id="reopen" onClick={onReopen}>Open the envelope again <span aria-hidden="true">↺</span></button>
        <Credit />
      </div>
      <Decor index={7} />
    </footer>
  )
}
