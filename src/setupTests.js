import React from 'react';
import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

vi.mock('canvas-confetti', () => ({ default: vi.fn() }));
vi.mock('framer-motion', () => {
  const omitMotionProps = (props) => {
    const {
      animate,
      initial,
      transition,
      whileInView,
      viewport,
      exit,
      layout,
      layoutId,
      ...rest
    } = props;
    return rest;
  };

  return {
    AnimatePresence: ({ children }) => React.createElement(React.Fragment, null, children),
    motion: new Proxy(
      {},
      {
        get: (_, tag) =>
          React.forwardRef((props, ref) => React.createElement(tag, { ...omitMotionProps(props), ref })),
      }
    ),
  };
});

const AudioMock = vi.fn(function AudioMock() {
  return {
    play: vi.fn().mockResolvedValue(undefined),
    pause: vi.fn(),
    loop: false,
    volume: 1,
  };
});

globalThis.Audio = AudioMock;
window.Audio = AudioMock;

Object.defineProperty(window.HTMLMediaElement.prototype, 'play', {
  configurable: true,
  writable: true,
  value: vi.fn().mockResolvedValue(undefined),
});

Object.defineProperty(window.HTMLMediaElement.prototype, 'pause', {
  configurable: true,
  writable: true,
  value: vi.fn(),
});
