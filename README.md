# NEXCHAT

Mobile-first real-time messaging starter for GitHub Pages + Firebase. This package was generated from the supplied NEXCHAT requirements and visual reference. **No existing repository source was included**, so this is a new starter rather than a patch to your current website.

## Before publishing
1. Create/open your Firebase project and register a **Web app**.
2. In Authentication → Sign-in method, enable **Email/Password**.
3. In Authentication → Settings → Authorized domains, add the hostname for your GitHub Pages URL (for example `yourname.github.io`).
4. Create a Cloud Firestore database.
5. Edit `js/firebase-config.js`; replace all `PASTE_...` values with the Web app config from Firebase console.
6. Publish the contents of this folder to the root of your GitHub repository. In Settings → Pages, deploy from your chosen branch and `/ (root)`.
7. Publish `firestore.rules` in Firestore → Rules, then click Publish.
8. Open the HTTPS Pages URL and create two separate accounts in two browsers/devices.

## Included in this starter
- Firebase email/password create account and sign in; duplicate email displays an error.
- Firestore user profile and stable 8-digit number allocation attempt using a transaction.
- Add contact by exact number; realtime contact list.
- Realtime one-to-one text messages, timestamps, copy action, pin toggle, delete-for-me field, delete-for-everyone UI action, and a text reaction menu triggered by long press/right-click.
- WebRTC calling module using RTCPeerConnection, media permissions, incoming call acceptance/rejection, outgoing calls, mic/camera toggles, ICE candidates and basic call state UI.
- Responsive mobile UI and reduced-motion support.

## Important blockers / security notes
This is **not production-ready and has not been tested against your Firebase project or two real devices**. The security rules are a starter baseline and require a security review before public deployment. Client-side number allocation is not fully race-safe with these rules: a trusted Cloud Function is the correct way to allocate globally unique numbers and protect public directory lookups. The current rules deliberately do not expose all user profiles, so the number-lookup flow may need a callable backend or a carefully designed public directory record. Message deletion-for-me is stored as a field but this starter's renderer does not yet filter hidden messages. Typing indicators, groups, statuses, uploads, push notifications, read receipts, and full message pagination are not implemented.

## WebRTC / TURN
The included call module is a real WebRTC implementation skeleton, not a verified production calling service. STUN alone cannot connect all NAT/firewall combinations. For reliable calls across different networks, configure a TURN provider and use short-lived credentials. Do not commit permanent TURN credentials in public JavaScript. Firestore rules currently permit participant-only call access but need stricter caller/recipient transition validation and signaling schema checks before production.

## Test checklist
- [ ] Configure Firebase and publish the rules.
- [ ] Create account A; verify duplicate email is rejected.
- [ ] Create account B on a separate browser/device.
- [ ] Add B's NEXCHAT number from A and verify contact appears.
- [ ] Send a message from A and verify it appears live on B.
- [ ] Long-press/right-click a message and test Copy, React, Pin, Delete for me, and Delete for everyone.
- [ ] Attempt calls between different networks with TURN configured; check permission prompts, audio/video, mute, camera, reject, and hang-up.
- [ ] Use Firebase Rules Playground or emulator tests to verify unauthorized reads/writes are denied.

## Paths
- `index.html`
- `css/styles.css`
- `js/firebase-config.js`
- `js/main.js`
- `js/calls.js`
- `firestore.rules`
- `README.md`
- `favicon.svg`

Do not enter private credentials into chat. Firebase web configuration is public by design; the security boundary is Authentication + strict Rules + trusted server code for sensitive operations.
