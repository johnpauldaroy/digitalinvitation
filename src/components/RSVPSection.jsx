import { useState } from 'react';

const initialForm = {
  guestName: '',
  attendees: '1',
  withKids: 'no',
  kidsCount: '',
  message: '',
  attendance: 'yes',
};

const RSVP_WEBHOOK_URL = import.meta.env.VITE_RSVP_WEBHOOK_URL || '';

function RSVPSection({ rsvp, onSuccess }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const nextErrors = {};
    if (!form.guestName.trim()) nextErrors.guestName = 'Guest name is required.';
    if (!form.attendees || Number(form.attendees) < 1) nextErrors.attendees = 'Enter at least 1 attendee.';
    if (form.withKids === 'yes' && (!form.kidsCount || Number(form.kidsCount) < 1)) {
      nextErrors.kidsCount = 'Enter how many kids will come.';
    }
    if (!form.attendance) nextErrors.attendance = 'Please confirm attendance.';
    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleKidsToggle = (value) => {
    setForm((prev) => ({
      ...prev,
      withKids: value,
      kidsCount: value === 'yes' ? prev.kidsCount : '',
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (!RSVP_WEBHOOK_URL) {
      setSubmitError('RSVP submission is not configured yet.');
      return;
    }

    setLoading(true);
    setSubmitted(false);
    setSubmitError('');

    try {
      await fetch(RSVP_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams({
          guestName: form.guestName.trim(),
          attendees: String(Number(form.attendees)),
          withKids: form.withKids,
          kidsCount: form.withKids === 'yes' ? String(Number(form.kidsCount)) : '',
          message: form.message.trim(),
          attendance: form.attendance,
        }),
      });

      setSubmitted(true);
      onSuccess();
      setForm(initialForm);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit RSVP.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-soft backdrop-blur-lg sm:p-10">
      <h3 className="font-heading text-3xl text-slate-800">RSVP</h3>
      <p className="mt-2 text-slate-600">{rsvp.contactLabel}</p>
      <p className="mt-1 text-sm font-semibold text-slate-600">Contact: {rsvp.contactName} | {rsvp.contactEmail}</p>

      {submitted && (
        <div className="mt-4 rounded-xl border border-candy-mint/60 bg-candy-mint/25 p-3 text-sm font-semibold text-slate-700">
          Thank you. Your RSVP was submitted successfully.
        </div>
      )}

      {submitError && (
        <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm font-semibold text-rose-700">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        <label className="grid gap-1 text-sm font-semibold text-slate-700">
          Guest Name *
          <input
            name="guestName"
            value={form.guestName}
            onChange={handleChange}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none ring-candy-pink/40 focus:ring"
            placeholder="Enter your name"
          />
          {errors.guestName && <span className="text-xs font-semibold text-rose-500">{errors.guestName}</span>}
        </label>

        <label className="grid gap-1 text-sm font-semibold text-slate-700">
          Number of Attendees *
          <input
            name="attendees"
            type="number"
            min="1"
            value={form.attendees}
            onChange={handleChange}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none ring-candy-pink/40 focus:ring"
          />
          {errors.attendees && <span className="text-xs font-semibold text-rose-500">{errors.attendees}</span>}
        </label>

        <div className="grid gap-2 text-sm font-semibold text-slate-700">
          <span>With Kids? *</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => handleKidsToggle('yes')}
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                form.withKids === 'yes'
                  ? 'bg-candy-pink text-white shadow-sm'
                  : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => handleKidsToggle('no')}
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                form.withKids === 'no'
                  ? 'bg-candy-sky text-slate-800 shadow-sm'
                  : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              No
            </button>
          </div>
        </div>

        {form.withKids === 'yes' && (
          <label className="grid gap-1 text-sm font-semibold text-slate-700">
            How many kids? *
            <input
              name="kidsCount"
              type="number"
              min="1"
              value={form.kidsCount}
              onChange={handleChange}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none ring-candy-pink/40 focus:ring"
              placeholder="Enter number of kids"
            />
            {errors.kidsCount && <span className="text-xs font-semibold text-rose-500">{errors.kidsCount}</span>}
          </label>
        )}

        <label className="grid gap-1 text-sm font-semibold text-slate-700">
          Message for Celebrant
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none ring-candy-pink/40 focus:ring"
            placeholder="Write your sweet message here"
          />
        </label>

        <label className="grid gap-1 text-sm font-semibold text-slate-700">
          Will you attend? *
          <select
            name="attendance"
            value={form.attendance}
            onChange={handleChange}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none ring-candy-pink/40 focus:ring"
          >
            <option value="yes">Yes, we will attend</option>
            <option value="no">Sorry, we cannot attend</option>
          </select>
          {errors.attendance && <span className="text-xs font-semibold text-rose-500">{errors.attendance}</span>}
        </label>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-fit rounded-full bg-candy-sky px-6 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? 'Submitting...' : 'Submit RSVP'}
        </button>
      </form>
    </section>
  );
}

export default RSVPSection;
