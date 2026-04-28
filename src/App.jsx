import { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { AnimatePresence, motion } from 'framer-motion';
import BackgroundDecor from './components/BackgroundDecor';
import CountdownSection from './components/CountdownSection';
import InvitationGate from './components/InvitationGate';
import EventDetailsSection from './components/EventDetailsSection';
import FooterSection from './components/FooterSection';
import HeroSection from './components/HeroSection';
import LocationSection from './components/LocationSection';
import MemorySection from './components/MemorySection';
import MusicToggle from './components/MusicToggle';
import RSVPSection from './components/RSVPSection';
import SurpriseMessageModal from './components/SurpriseMessageModal';
import { invitationData } from './data/invitationData';

const burstConfetti = () => {
  confetti({
    particleCount: 150,
    spread: 110,
    startVelocity: 35,
    origin: { y: 0.6 },
    colors: ['#ff86c8', '#a9d8ff', '#9de7cb', '#d9b8ff', '#ffe58f'],
  });
};

function App() {
  const musicRef = useRef(null);
  const [showMessage, setShowMessage] = useState(false);
  const [showInvitation, setShowInvitation] = useState(true);

  useEffect(() => {
    if (showInvitation) return undefined;

    const timer = setTimeout(() => {
      burstConfetti();
    }, 250);

    return () => clearTimeout(timer);
  }, [showInvitation]);

  const handleOpenInvitation = () => {
    void musicRef.current?.play?.();
    setShowInvitation(false);
  };

  return (
    <div className="relative min-h-screen px-4 py-6 font-body text-slate-800 sm:px-6">
      <BackgroundDecor />

      <MusicToggle ref={musicRef} musicUrl={invitationData.musicUrl} hidden={showInvitation} />

      <AnimatePresence mode="wait">
        {showInvitation ? (
          <InvitationGate
            key="invitation-gate"
            celebrant={invitationData.celebrant}
            theme={invitationData.event.theme}
            onOpen={handleOpenInvitation}
          />
        ) : (
          <motion.main
            key="invitation-home"
            className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35 }}
          >
            <HeroSection
              heroImage={invitationData.heroImage}
              celebrant={invitationData.celebrant}
              event={invitationData.event}
            />

            <EventDetailsSection event={invitationData.event} />

            <CountdownSection targetDate={invitationData.event.partyDateISO} />

            <RSVPSection rsvp={invitationData.rsvp} onSuccess={burstConfetti} />

            <MemorySection celebrant={invitationData.celebrant} gallery={invitationData.gallery} />

            <LocationSection event={invitationData.event} mapLink={invitationData.mapLink} />

            <FooterSection rsvp={invitationData.rsvp} />
          </motion.main>
        )}
      </AnimatePresence>

      <SurpriseMessageModal
        open={showMessage}
        message={invitationData.celebrant.specialMessage}
        onClose={() => setShowMessage(false)}
      />
    </div>
  );
}

export default App;
