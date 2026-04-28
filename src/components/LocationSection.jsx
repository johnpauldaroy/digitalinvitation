function LocationSection({ event, mapLink }) {
  return (
    <section className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-soft sm:p-10">
      <h3 className="font-heading text-3xl text-slate-800">Location</h3>
      <p className="mt-2 text-slate-600">Find us easily with Google Street View.</p>
      <div className="mt-6 rounded-2xl border border-white/60 bg-gradient-to-r from-candy-mint/25 to-candy-sky/20 p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{event.venueName}</p>
        <p className="mt-1 text-slate-700">{event.venueAddress}</p>
        <a
          className="mt-4 inline-flex rounded-full bg-slate-800 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-slate-700"
          href={mapLink}
          target="_blank"
          rel="noreferrer"
        >
          Open Street View
        </a>
      </div>
    </section>
  );
}

export default LocationSection;
