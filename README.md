# Digital Invitation - Jamiesha's 1st Birthday

Interactive, mobile-first birthday invitation website built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- canvas-confetti
- Vitest + Testing Library

## Project Structure

```text
src/
  components/
    BackgroundDecor.jsx
    CountdownSection.jsx
    EventDetailsSection.jsx
    FooterSection.jsx
    HeroSection.jsx
    LocationSection.jsx
    MemorySection.jsx
    MusicToggle.jsx
    RSVPSection.jsx
    SurpriseMessageModal.jsx
  data/
    invitationData.js
  App.jsx
  App.test.jsx
  index.css
  main.jsx
  setupTests.js
index.html
vite.config.mjs
```

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
```

## Test

```bash
npm test
```

## Where To Edit Invitation Details

Edit all event content in:

- `src/data/invitationData.js`

Main editable fields:

- Celebrant name, age, headline, about text
- Party date/time and ISO countdown datetime
- Venue name and address
- Dress code and theme
- RSVP contact info
- Google Maps link
- Music URL
- Gallery cards and image links

## Notes

- RSVP submits to a Google Apps Script webhook configured via `VITE_RSVP_WEBHOOK_URL`.
- Confetti triggers on first load and after successful RSVP submit.
- Music toggle supports any direct `.mp3` URL in `invitationData.js`.

## Google Sheets RSVP Setup

1. Open the target Google Sheet.
2. Go to `Extensions` > `Apps Script`.
3. Paste this script:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const data = e.parameter;

  sheet.appendRow([
    data.guestName || '',
    data.attendees || '',
    data.withKids || '',
    data.kidsCount || '',
    data.message || '',
    data.attendance || '',
  ]);

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Deploy the script as a web app and copy its URL.
5. Put that URL into `.env` as `VITE_RSVP_WEBHOOK_URL=...`.
6. Restart the dev server after changing the env file.

Suggested sheet headers:

- Guest Name
- Number of Attendees
- With Kids
- How Many Kids
- Message for Celebrant
- Will you attend?

## Future Upgrades

1. Connect RSVP form to Formspree, Supabase, or EmailJS.
2. Add WhatsApp one-tap RSVP button.
3. Add a real photo carousel with swipe gestures.
4. Add per-section animation toggles for accessibility.
5. Add multi-language support.

## Design Variations

1. Princess Theme:
Use blush pink + gold accents, crown illustrations, and a castle silhouette background.

2. Butterfly Garden Theme:
Use mint + floral tones, leaf textures, and animated butterfly paths.

3. Pastel Rainbow Theme (current):
Use soft rainbow gradients, balloon-like shapes, and playful rounded cards.
