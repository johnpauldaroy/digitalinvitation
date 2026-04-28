import { motion } from 'framer-motion';

const detailConfig = [
  {
    key: 'partyDateLabel',
    label: 'Date',
    Icon: CalendarIcon,
    cardClass: 'bg-[#fff2f9] border-[#ffd4ea]',
    accent: 'text-candy-pink',
  },
  {
    key: 'partyTime',
    label: 'Time',
    Icon: ClockIcon,
    cardClass: 'bg-[#eef7ff] border-[#d6e9ff]',
    accent: 'text-candy-sky',
  },
  {
    key: 'venueName',
    label: 'Venue',
    Icon: PinIcon,
    cardClass: 'bg-[#fff7ee] border-[#ffe1bd]',
    accent: 'text-candy-peach',
  },
  {
    key: 'venueAddress',
    label: 'Address',
    Icon: MapIcon,
    cardClass: 'bg-[#effbf6] border-[#d3efdf]',
    accent: 'text-candy-mint',
  },
  {
    key: 'dressCode',
    label: 'Dress Code',
    Icon: DressIcon,
    cardClass: 'bg-[#f8f1ff] border-[#e6d5fb]',
    accent: 'text-candy-violet',
  },
  {
    key: 'theme',
    label: 'Theme',
    Icon: RainbowIcon,
    cardClass: 'bg-[#fff9de] border-[#f4e6a9]',
    accent: 'text-candy-pink',
  },
];

function EventDetailsSection({ event }) {
  return (
    <section className="rounded-[2rem] border border-white/70 bg-gradient-to-br from-white/85 via-white/75 to-candy-sky/12 p-6 shadow-soft backdrop-blur-lg sm:p-10">
      <div className="flex items-center gap-3">
        <div
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-candy-pink ring-1 ring-white/80 shadow-sm"
          aria-hidden="true"
        >
          <PaletteIcon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-heading text-3xl text-slate-800">Event Details</h3>
          <p className="mt-1 text-slate-600">Everything you need to celebrate with us.</p>
        </div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {detailConfig.map((detail, index) => (
          <motion.article
            key={detail.key}
            className={`rounded-2xl border p-4 shadow-sm ${detail.cardClass}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.06 }}
          >
            <div className="flex items-center gap-2">
              <detail.Icon className={`h-3 w-3 shrink-0 ${detail.accent}`} />
              <p className="text-xs font-semibold uppercase tracking-wide text-black">{detail.label}</p>
            </div>
            <p className="mt-1 text-sm font-bold text-slate-800">{event[detail.key]}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default EventDetailsSection;

function PaletteIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5c-4.7 0-8.5 3.6-8.5 8 0 4 3.2 7 7.2 7h.7c.8 0 1.4.7 1.4 1.5 0 .7.6 1.3 1.3 1.3 2.1 0 4-1.2 4.8-3 .3-.7.9-1.1 1.7-1.1h.4c1.4 0 2.5-1.1 2.5-2.5V12c0-4.7-3.8-8.5-8.5-8.5Z"
        fill="currentColor"
        opacity="0.16"
      />
      <path d="M12 3.5c-4.7 0-8.5 3.6-8.5 8 0 4 3.2 7 7.2 7h.7c.8 0 1.4.7 1.4 1.5 0 .7.6 1.3 1.3 1.3 2.1 0 4-1.2 4.8-3 .3-.7.9-1.1 1.7-1.1h.4c1.4 0 2.5-1.1 2.5-2.5V12c0-4.7-3.8-8.5-8.5-8.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="7.7" cy="10" r="1" fill="currentColor" />
      <circle cx="10.8" cy="7.8" r="1" fill="currentColor" />
      <circle cx="14.2" cy="7.9" r="1" fill="currentColor" />
      <circle cx="16.8" cy="10.2" r="1" fill="currentColor" />
    </svg>
  );
}

function CalendarIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} width="12" height="12" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4.5" width="18" height="16" rx="3.5" />
      <path d="M8 3.5v4M16 3.5v4M3 9.5h18" />
      <path d="M7 12.5h2M11 12.5h2M15 12.5h2M7 16h2M11 16h2" />
    </svg>
  );
}

function ClockIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} width="12" height="12" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v5l3 2" />
      <path d="M9 3.8 6.8 6M15 3.8 17.2 6" />
    </svg>
  );
}

function PinIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} width="12" height="12" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s5.5-5.2 5.5-11a5.5 5.5 0 1 0-11 0c0 5.8 5.5 11 5.5 11Z" />
      <circle cx="12" cy="10" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MapIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} width="12" height="12" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 4 3 6.5v13l5-2.5 8 2.5 5-2.5v-13l-5 2.5L8 4Z" />
      <path d="M8 4v15M16 6v15" />
    </svg>
  );
}

function DressIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} width="12" height="12" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 3.5 12 7l3-3.5 2 3-2 3.5 2 10H9L7 10l2-3.5Z" />
      <path d="M9 7.2c1 .9 2 .9 3 .9s2 0 3-.9" />
    </svg>
  );
}

function RainbowIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} width="12" height="12" stroke="currentColor" strokeWidth="1.8">
      <path d="M4.5 16a7.5 7.5 0 0 1 15 0" />
      <path d="M7 16a5 5 0 0 1 10 0" />
      <path d="M9.5 16a2.5 2.5 0 0 1 5 0" />
      <path d="M4.5 16h15" />
    </svg>
  );
}
