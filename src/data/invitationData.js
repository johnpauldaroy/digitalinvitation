import heroSectionImage from '../assets/memories/hero-section.webp';
import img5829 from '../assets/memories/img-5829-1.webp';
import img5828 from '../assets/memories/img-5828-1.webp';
import img5813 from '../assets/memories/img-5813-1.webp';
import img5790 from '../assets/memories/img-5790.webp';
import img5788 from '../assets/memories/img-5788-1.webp';
import img5771 from '../assets/memories/img-5771-1.webp';
import img5770 from '../assets/memories/img-5770-1.webp';
import img5761 from '../assets/memories/img-5761-1.webp';
import img5750 from '../assets/memories/img-5750-1.webp';
import img5699 from '../assets/memories/img-5699-1.webp';
import img5697 from '../assets/memories/img-5697-1.webp';
import img5694 from '../assets/memories/img-5694-1.webp';
import img5687 from '../assets/memories/img-5687-1.webp';
import img5678 from '../assets/memories/img-5678-1.webp';

const portraitMemoryImages = [
  img5829,
  img5828,
  img5813,
  img5699,
  img5697,
  img5694,
  img5687,
  img5678,
];

const landscapeMemoryImages = [
  img5790,
  img5788,
  img5771,
  img5770,
  img5761,
  img5750,
  heroSectionImage,
];

const memoryImages = [...portraitMemoryImages, ...landscapeMemoryImages];

// Update this file only to customize invitation details quickly.
export const invitationData = {
  heroImage: heroSectionImage,
  celebrant: {
    name: 'Boa', // [DAUGHTER_NAME]
    age: 1, // [AGE]
    headline: "You're Invited!",
    about:
      'Our little boa is turning one. Join us for a joyful afternoon full of giggles, games, and sweet birthday memories.',
    specialMessage:
      'Thank you for celebrating this precious milestone with our family. Your presence means the world to us.',
  },
  event: {
    partyDateLabel: 'May 4, 2026', // [PARTY_DATE]
    partyDateISO: '2026-05-04T15:00:00+08:00',
    partyTime: '3:00 PM', // [PARTY_TIME]
    venueName: 'Buenavista Development Cooperative Function Hall 2nd Floor', // [VENUE_NAME]
    venueAddress: 'Buenavista, Guimaras, Philippines', // [VENUE_ADDRESS]
    dressCode: 'Any', // Dress code
    theme: 'Pastel Rainbow',
  },
  rsvp: {
    contactLabel: 'Please confirm attendance with us.'
  },
  mapLink:
    'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=10.69737,122.64969',
  musicUrl: "/(Stevie%20Wonder)%20Isn't%20She%20Lovely%20-%20Sungha%20Jung.mp3",
  gallery: memoryImages.map((image, index) => ({
    id: index + 1,
    title: `Memory ${String(index + 1).padStart(2, '0')}`,
    caption: "A precious moment from Jamiesha's first-year journey.",
    image,
  })),
};
