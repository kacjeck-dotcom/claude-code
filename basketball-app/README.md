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

- **Funny voices.** Misses get a line from a character voice: grandma, robot, chipmunk, angry coach or movie-trailer guy. If the AI calls a shot wrong and you press Undo, it apologises in one of those voices. Turn it off with the "Funny voices" button in the camera tools. The demo doesn't talk.
- **AI Coach tab.** The Coach tab in the middle of the bottom bar is your coach's own page:
  - **Today's advice** from your history, with a button that starts the right drill or workout.
  - **Ask your coach:** a chat with quick questions ("How's my shooting?", "What should I work on?", "Where am I best?", "How's my form?", "Am I getting better?", "My records", "Plan my week", "Hype me up"). You can also type a question. Answers come from your own sessions and are read out loud when voice calls are on.
  - **Your numbers:** form score, arc and top miss, plus the latest form check and shot feedback.
  - **This week's plan:** built from how many days you play, with Start buttons and a tick for each day you've trained.
  - **Coach remembers:** your records and weak spots.
  - **Coach voice** switches.

  A card on Track shows the coach's current advice and opens the tab. When a session starts, the coach greets you, calls out new records as they happen, and the session report compares the session with your average. All of this is worked out on the phone from your own data. It is not a chatbot, and it only answers questions about your game.
- **Your spot.** The camera can see makes and misses, but not where you're standing. Workouts set your spot for you. In free shooting, open tools → Spot (or tap the spot name at the top) to say where you're shooting from, so your shot chart and zones stay right.
- **AI form check.** A pose-detection model (MoveNet) watches your body. After every shot you get a
  0–100 form score covering knee bend, arm extension, release height, follow-through and balance/drift,
  plus release time and one spoken tip on what to fix. An object-detection model (COCO-SSD) helps find the ball.
  The AI needs the app opened from its own web address (GitHub Pages); it can't load inside the Claude artifact preview.

- **Automatic make/miss detection.** Point your phone's camera at the hoop, or upload a recorded clip.
  Swish Lab finds the ball using colour and motion, follows it, and calls each shot as a make or a miss.
- **Shot chart.** Each shot is tagged with the zone of your spot
  (paint, mid-range, corner 3s, wings, top of the key, free throws).
- **Drills and workouts, HomeCourt style.** Tap a workout or a shooting drill to see its intro page: the spots on a court, the target at each spot, the time and setup tips. Start opens the camera full screen. Before each spot a card shows where to go, and the coach says it out loud ("Now go to the right elbow. Make 5.") and counts you in. Your makes count toward the target on screen. Drill spots are timed, so you move on when you hit the target or the clock runs out. Make, Undo and Miss buttons fix any call the camera gets wrong, and undoing the shot that finished a spot takes you back to it. At the end you get a spot-by-spot results page. Dribbling drills open the front-camera target game.
- **Guided workouts.** Form Shooting, Free Throw 50, Elbow to Elbow, Around the World, Make 100 and Corner Specialist.
  Your spot moves on its own as you finish each station.
- **Stats.** FG%, 3PT%, FT%, eFG%, best streak, a hot-zone map and your FG% trend across sessions.
- **History.** Every session is saved in your browser, with a per-session shot chart and a summary you can copy.
- **Full-screen camera.** Every session (free shooting, workouts, drills, video analysis and the demo) runs full screen. At the top: ✕ to end, the session name and a tools button for Set hoop, Tap the ball, voice and Stop. At the bottom: Make, Undo and Miss. Ending a session shows its report.
- **Voice calls and sounds.** Hear "Make, 7 for 10" after every shot, so you never have to look at the phone. Minor lines are skipped when the voice falls behind. Turn voice calls and funny voices on or off on your profile page.
- **Manual buttons.** Make, Undo and Miss sit at the bottom of the camera screen for when the AI gets a call wrong.

## Run it

Open `index.html` in any modern browser. To use the phone camera, the page must be served over HTTPS
(or `localhost`). The easiest way is GitHub Pages: turn on Pages for this repo and open
`https://<you>.github.io/<repo>/basketball-app/`. Then "Add to Home Screen" on your phone.

Local test: `npx serve basketball-app` (or `python3 -m http.server`) and open it on `localhost`.

## Tips for accurate tracking

1. Prop the phone up behind the shooter or on the baseline, so the rim and the ball's whole arc are in frame.
2. The hoop is found automatically: the box turns green and says "Hoop found". It looks for an orange or red rim with a backboard behind it, and follows the rim if the phone gets bumped. If it can't spot the hoop (a dark rim, or strong sunset light), tap the rim once on the screen. To fine-tune, open the tools button (top right), press **Set hoop** and drag a box around the rim.
3. In the same tools, press **Tap the ball** and tap the ball once, so the tracker learns its colour under your gym's lighting.
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
