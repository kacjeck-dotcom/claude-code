# Swish Lab — free basketball shot tracker

A free, open alternative to paid AI shot-tracking apps (like Ball AI / HomeCourt).
One HTML file, no account, no server, no subscription. Everything runs on your device.

## Features

- **Automatic make/miss detection.** Point your phone's camera at the hoop, or upload a recorded clip.
  Swish Lab finds the ball using colour and motion, follows it, and calls each shot as a make or a miss.
- **Shot chart.** Tap the court to set where you're shooting from. Each shot is tagged with its zone
  (paint, mid-range, corner 3s, wings, top of the key, free throws).
- **Guided workouts.** Form Shooting, Free Throw 50, Elbow to Elbow, Around the World, Make 100 and Corner Specialist.
  Your spot moves on its own as you finish each station.
- **Stats.** FG%, 3PT%, FT%, eFG%, best streak, a hot-zone map and your FG% trend across sessions.
- **History.** Every session is saved in your browser, with a per-session shot chart and a summary you can copy.
- **Voice calls and sounds.** Optionally hear "Make, 7 for 10" after every shot, so you never have to look at the phone.
- **Manual buttons.** Big Make/Miss/Undo buttons for when you'd rather log by hand.

## Run it

Open `index.html` in any modern browser. To use the phone camera, the page must be served over HTTPS
(or `localhost`). The easiest way is GitHub Pages: turn on Pages for this repo and open
`https://<you>.github.io/<repo>/basketball-app/`. Then "Add to Home Screen" on your phone.

Local test: `npx serve basketball-app` (or `python3 -m http.server`) and open it on `localhost`.

## Tips for accurate tracking

1. Prop the phone up behind the shooter or on the baseline, so the rim and the ball's whole arc are in frame.
2. Press **Set hoop** and drag a box around just the rim.
3. Press **Tap the ball** and tap the ball once, so the tracker learns its colour under your gym's lighting.
4. Shoot. A shot is counted when the ball rises above the rim and comes back down: through the box is a make, beside it is a miss.
   If it miscalls one, press **Undo** and log it by hand.

Press **Watch the demo** to see the tracker work on a simulated shooter.
