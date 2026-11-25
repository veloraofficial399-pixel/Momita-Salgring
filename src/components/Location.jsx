// Venue map, shown right after "Every lovely moment".
export default function Location({ data }) {
  const { venue } = data
  return (
    <section className="paper-section location-section motion-scene" aria-labelledby="location-title">
      <h2 className="script reveal" id="location-title">Where we celebrate</h2>
      <div className="location-frame reveal">
        <h3 className="venue-name">{venue.name}</h3>
        <div className="rule" aria-hidden="true"></div>
        <address className="venue-address">{venue.address}</address>
        <iframe
          className="location-map"
          title={`Map to ${venue.name}`}
          src={`https://maps.google.com/maps?q=${venue.coords}&z=15&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="actions">
          <a className="action" href={venue.mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
        </div>
      </div>
    </section>
  )
}
