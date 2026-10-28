# Firebase Site Statistics — v5.2.6

The Toolkit displays `Visitors | Views | Online` from the existing Firebase Realtime Database path `siteStats/global`.

## Runtime behavior
- Visitors increments once per browser/profile after a successful transaction.
- Views increments once per page load.
- Online counts unique browser/profile nodes under `siteStats/global/onlineUsers`; multiple tabs in the same browser remain Online = 1.
- Presence is stored as `onlineUsers/{browserUUID}/{tabSession}`. Each tab has independent disconnect cleanup, while the UI counts only the browser UUID level.
- Presence uses `.info/connected` and registers `onDisconnect().remove()` before the session write.
- Hybrid Presence keeps an open Toolkit tab Online without requiring user interaction. Each connected tab refreshes `lastSeen` every 5 minutes.
- The displayed Online count ignores sessions whose server-timestamp heartbeat is older than 30 minutes, covering sleep/network-loss/orphaned-session cases even if disconnect cleanup is delayed.
- Firebase `.info/serverTimeOffset` is used when evaluating heartbeat age so client clock differences do not distort the Online count.
- Counter failures do not stop the PD Guide workflow; details are exposed through `window.PD_SITE_STATS_STATUS` and the developer console.

## Backend requirement
The Firebase Realtime Database must allow the Toolkit to read the counter paths and perform the required counter/presence writes. If the remote project rules deny access, the Toolkit intentionally leaves the affected value as `-` and reports the Firebase error in the developer console.

Do not make unrelated database paths public solely to enable these counters. Keep any rule changes scoped to `siteStats/global`.


## v5.2.6 Online Presence Patch
- Replaced the 15-minute user-activity model with Hybrid Presence + 30-minute stale-session timeout.
- Open pages stay Online through automatic heartbeats; Online no longer depends on mouse/keyboard/scroll activity.

## v5.2.6 Related Guide Popup
- Related Guide popup changes do not alter Visitors or Views behavior.
