/**
 * Application entry point.
 *
 * Finds the DOM container for the Phaser canvas and hands it to `createGame`,
 * which owns the Phaser configuration, scene registration, and canvas setup.
 */
import { createGame } from './game';

const CONTAINER_ID = 'game';

function mountGame(): void {
  const container = document.getElementById(CONTAINER_ID) ?? document.body;

  createGame(container);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountGame, { once: true });
} else {
  mountGame();
}