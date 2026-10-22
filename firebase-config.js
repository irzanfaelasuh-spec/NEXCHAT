// Paste your Firebase WEB APP config here. This is public client configuration, not a secret.
// Never place service-account keys or private TURN credentials in this file.
export const firebaseConfig = {
  apiKey: "PASTE_FIREBASE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  appId: "PASTE_FIREBASE_APP_ID"
};
export const ICE_SERVERS = [
  { urls: "stun:stun.l.google.com:19302" }
  // Add a TURN server from a provider you control for reliable cross-network calls.
  // Keep TURN credentials short-lived and provisioned securely; do not commit permanent secrets.
];