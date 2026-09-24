# Swish Lab — free basketball shot tracker

A free, open alternative to paid AI shot-tracking apps (like Ball AI / HomeCourt).
One HTML file, no email, no server, no subscription. Everything runs on your device.

## Features

- **Player profiles.** Sign up with a name, then answer 8 quick questions: age and level, height and weight, position, shooting hand, playstyle, up to 3 goals, and how many days and minutes a week you play. You get a plan: a weekly shots goal, a drill level, a "For you" row of drills and a recommended workout. Height sets the release-height stat, weight gives calories burned in each session report, and shooting hand tells the form check which arm to watch first.
  Several players can share one phone. Each one logs in from the "Who's hooping?" screen, with an optional 4-digit PIN, and keeps their own stats and clips. Tap your initials in the top corner to open your profile, where you can edit it, switch player, log out or delete the player. Profiles live only on this phone: nothing is sent anywhere, and a PIN only locks the profile on this phone. It is not an online password.
- **Installs like an app.** Open the web address on your phone and choose Add to Home Screen. It gets its own icon, opens full screen, and works offline after the first load.
- **Back up and restore.** Profile → Back up saves one file with the player's profile, stats and plan (not clips). On another phone, open the file with "Restore from a backup" on the welcome or player screen.
- **Highlight clips.** Every tracked shot is recorded as a short clip (Clips tab) that you can play, save or share. The session report shows your top makes.
- **Your own AI.** A make/miss model and a hoop-finder model train on your phone from your own shots.
  The make/miss model helps call shots once it's at least 80% accurate on shots it hasn't seen. Stats → My AI shows its accuracy, and you can retrain or reset it there.
- **Form & Arc stats.** Entry-angle histogram, FG% by arc, how you miss, form-score trend, each form check's trend, and release time.
- **No setup to start.** The hoop box appears on its own (line the rim up inside it), followed by a 3-2-1 countdown.

- **AI form check.** A pose-detection model (MoveNet) watches your body. After every shot you get a
  0–100 form score covering knee bend, arm extension, release height, follow-through and balance/drift,
  plus release time and one spoken tip on what to fix. An object-detection model (COCO-SSD) helps find the ball.
  The AI needs the app opened from its own web address (GitHub Pages); it can't load inside the Claude artifact preview.

- **Automatic make/miss detection.** Point your phone's camera at the hoop, or upload a recorded clip.
  Swish Lab finds the ball using colour and motion, follows it, and calls each shot as a make or a miss.
- **Shot chart.** Tap the court to set where you're shooting from. Each shot is tagged with its zone
  (paint, mid-range, corner 3s, wings, top of the key, free throws).
- **Drills.** Dribbling drills open a front-camera target game. Shooting, Moves (pump fake, jab step, step-through, spin, drop step, fadeaway) and Finishing (layups, reverses, euro steps, floaters, weak hand, wrong-foot and scoop) drills open the shot tracker. Each spot has a make target on screen, and the next spot starts once you hit it. Best FG% per drill is saved.
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

## Photo credits

Drill photos come from Wikimedia Commons. They have been resized and cropped, with training targets drawn on top:

- "Boy dribbling the ball in a 3x3 basketball game in Baozhong Junior High School" by 褒忠國中 雲端網, CC BY 2.0
- "Boy dribbling a Basketball at a Sidewalk in downtown Taichung" by Tbatb, CC BY-SA 4.0
- "Jump Shot (147812777)" by Devon Boutte, CC BY 3.0
- "Street Basketball" by Jeremy Nacario, CC BY-SA 4.0
- "San Vicente, Filipino basketball 2, Palawan, Philippines" by Vyacheslav Argenberg, CC BY 4.0
- "Streetball in the Philippines 46" by Video13, CC BY-SA 4.0
