
const workoutData = {
  "gym": {
    "week1": {
      "monday": {
        "title": "Monday: Heavy Upper Body",
        "exercises": [
          {
            "name": "Lat Pulldowns",
            "reps": "4 sets of 10 reps",
            "instructions": [
              "Sit at a lat pulldown station and grab the wide bar.",
              "Pull the bar down towards your upper chest, squeezing your shoulder blades together.",
              "Slowly release the bar back to the starting position."
            ]
          },
          {
            "name": "Overhead Press",
            "reps": "4 sets of 8 reps",
            "instructions": [
              "Stand holding a barbell or dumbbells at shoulder height.",
              "Press the weight straight up overhead until your arms lock out.",
              "Lower it back down to your shoulders under control."
            ]
          },
          {
            "name": "Dumbbell Bicep Curls",
            "reps": "3 sets of 12 reps",
            "instructions": [
              "Stand holding a dumbbell in each hand, palms facing forward.",
              "Curl the weights up towards your shoulders.",
              "Squeeze your biceps at the top and lower slowly."
            ]
          },
          {
            "name": "Leg Press",
            "reps": "3 sets of 12 reps",
            "instructions": [
              "Sit in the leg press machine and place your feet shoulder-width apart.",
              "Lower the platform until your knees are at a 90-degree angle.",
              "Push the platform away using your heels."
            ]
          }
        ]
      },
      "tuesday": {
        "title": "Tuesday: Leg Day Focus",
        "exercises": [
          {
            "name": "Deadlifts",
            "reps": "3 sets of 5-8 reps",
            "instructions": [
              "Stand with your mid-foot under the barbell.",
              "Bend over and grab the bar, bending your knees until your shins touch it.",
              "Lift your chest up and pull the weight up by driving through your heels."
            ]
          },
          {
            "name": "Barbell Bench Press",
            "reps": "4 sets of 8-12 reps",
            "instructions": [
              "Lie flat on a bench and grip the barbell slightly wider than shoulder-width.",
              "Lower the bar slowly to your mid-chest.",
              "Push the bar back up explosively until your arms are fully extended."
            ]
          },
          {
            "name": "Incline Dumbbell Press",
            "reps": "3 sets of 10-12 reps",
            "instructions": [
              "Set a bench to a 30-45 degree incline.",
              "Hold a dumbbell in each hand and press them straight up.",
              "Lower them slowly until you feel a stretch in your chest, then press back up."
            ]
          },
          {
            "name": "Cable Crossovers",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Stand in the middle of a cable machine with the pulleys set high.",
              "Pull the handles down and across your body in a sweeping arc.",
              "Squeeze your chest at the bottom, then slowly return to the start."
            ]
          }
        ]
      },
      "wednesday": {
        "title": "Wednesday: Back & Core",
        "exercises": [
          {
            "name": "Overhead Press",
            "reps": "4 sets of 8 reps",
            "instructions": [
              "Stand holding a barbell or dumbbells at shoulder height.",
              "Press the weight straight up overhead until your arms lock out.",
              "Lower it back down to your shoulders under control."
            ]
          },
          {
            "name": "Tricep Pushdowns",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Attach a rope to a high pulley.",
              "Keep your elbows tucked into your sides and push the rope down.",
              "Spread the rope apart at the bottom, then slowly let it back up."
            ]
          },
          {
            "name": "Cable Crossovers",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Stand in the middle of a cable machine with the pulleys set high.",
              "Pull the handles down and across your body in a sweeping arc.",
              "Squeeze your chest at the bottom, then slowly return to the start."
            ]
          },
          {
            "name": "Leg Press",
            "reps": "3 sets of 12 reps",
            "instructions": [
              "Sit in the leg press machine and place your feet shoulder-width apart.",
              "Lower the platform until your knees are at a 90-degree angle.",
              "Push the platform away using your heels."
            ]
          }
        ]
      },
      "thursday": {
        "title": "Thursday: Arms & Shoulders",
        "exercises": [
          {
            "name": "Cable Crossovers",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Stand in the middle of a cable machine with the pulleys set high.",
              "Pull the handles down and across your body in a sweeping arc.",
              "Squeeze your chest at the bottom, then slowly return to the start."
            ]
          },
          {
            "name": "Overhead Press",
            "reps": "4 sets of 8 reps",
            "instructions": [
              "Stand holding a barbell or dumbbells at shoulder height.",
              "Press the weight straight up overhead until your arms lock out.",
              "Lower it back down to your shoulders under control."
            ]
          },
          {
            "name": "Lat Pulldowns",
            "reps": "4 sets of 10 reps",
            "instructions": [
              "Sit at a lat pulldown station and grab the wide bar.",
              "Pull the bar down towards your upper chest, squeezing your shoulder blades together.",
              "Slowly release the bar back to the starting position."
            ]
          },
          {
            "name": "Incline Dumbbell Press",
            "reps": "3 sets of 10-12 reps",
            "instructions": [
              "Set a bench to a 30-45 degree incline.",
              "Hold a dumbbell in each hand and press them straight up.",
              "Lower them slowly until you feel a stretch in your chest, then press back up."
            ]
          }
        ]
      },
      "friday": {
        "title": "Friday: Full Body Mix",
        "exercises": [
          {
            "name": "Lat Pulldowns",
            "reps": "4 sets of 10 reps",
            "instructions": [
              "Sit at a lat pulldown station and grab the wide bar.",
              "Pull the bar down towards your upper chest, squeezing your shoulder blades together.",
              "Slowly release the bar back to the starting position."
            ]
          },
          {
            "name": "Barbell Bench Press",
            "reps": "4 sets of 8-12 reps",
            "instructions": [
              "Lie flat on a bench and grip the barbell slightly wider than shoulder-width.",
              "Lower the bar slowly to your mid-chest.",
              "Push the bar back up explosively until your arms are fully extended."
            ]
          },
          {
            "name": "Incline Dumbbell Press",
            "reps": "3 sets of 10-12 reps",
            "instructions": [
              "Set a bench to a 30-45 degree incline.",
              "Hold a dumbbell in each hand and press them straight up.",
              "Lower them slowly until you feel a stretch in your chest, then press back up."
            ]
          },
          {
            "name": "Barbell Squats",
            "reps": "4 sets of 8 reps",
            "instructions": [
              "Rest the barbell securely on your upper back.",
              "Brace your core and lower your hips down and back as if sitting in a chair.",
              "Drive through your heels to return to a standing position."
            ]
          },
          {
            "name": "Dumbbell Bicep Curls",
            "reps": "3 sets of 12 reps",
            "instructions": [
              "Stand holding a dumbbell in each hand, palms facing forward.",
              "Curl the weights up towards your shoulders.",
              "Squeeze your biceps at the top and lower slowly."
            ]
          }
        ]
      },
      "saturday": {
        "title": "Saturday: Active Recovery",
        "exercises": []
      },
      "sunday": {
        "title": "Sunday: Rest Day",
        "exercises": []
      }
    },
    "week2": {
      "monday": {
        "title": "Monday: Heavy Upper Body",
        "exercises": [
          {
            "name": "Overhead Press",
            "reps": "4 sets of 8 reps",
            "instructions": [
              "Stand holding a barbell or dumbbells at shoulder height.",
              "Press the weight straight up overhead until your arms lock out.",
              "Lower it back down to your shoulders under control."
            ]
          },
          {
            "name": "Cable Crossovers",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Stand in the middle of a cable machine with the pulleys set high.",
              "Pull the handles down and across your body in a sweeping arc.",
              "Squeeze your chest at the bottom, then slowly return to the start."
            ]
          },
          {
            "name": "Barbell Rows",
            "reps": "4 sets of 8-10 reps",
            "instructions": [
              "Bend at the hips and knees with a straight back, holding a barbell.",
              "Pull the bar up to your lower rib cage.",
              "Lower the bar under control until your arms are fully extended."
            ]
          },
          {
            "name": "Barbell Squats",
            "reps": "4 sets of 8 reps",
            "instructions": [
              "Rest the barbell securely on your upper back.",
              "Brace your core and lower your hips down and back as if sitting in a chair.",
              "Drive through your heels to return to a standing position."
            ]
          }
        ]
      },
      "tuesday": {
        "title": "Tuesday: Leg Day Focus",
        "exercises": [
          {
            "name": "Lat Pulldowns",
            "reps": "4 sets of 10 reps",
            "instructions": [
              "Sit at a lat pulldown station and grab the wide bar.",
              "Pull the bar down towards your upper chest, squeezing your shoulder blades together.",
              "Slowly release the bar back to the starting position."
            ]
          },
          {
            "name": "Cable Crossovers",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Stand in the middle of a cable machine with the pulleys set high.",
              "Pull the handles down and across your body in a sweeping arc.",
              "Squeeze your chest at the bottom, then slowly return to the start."
            ]
          },
          {
            "name": "Overhead Press",
            "reps": "4 sets of 8 reps",
            "instructions": [
              "Stand holding a barbell or dumbbells at shoulder height.",
              "Press the weight straight up overhead until your arms lock out.",
              "Lower it back down to your shoulders under control."
            ]
          },
          {
            "name": "Deadlifts",
            "reps": "3 sets of 5-8 reps",
            "instructions": [
              "Stand with your mid-foot under the barbell.",
              "Bend over and grab the bar, bending your knees until your shins touch it.",
              "Lift your chest up and pull the weight up by driving through your heels."
            ]
          }
        ]
      },
      "wednesday": {
        "title": "Wednesday: Back & Core",
        "exercises": [
          {
            "name": "Barbell Bench Press",
            "reps": "4 sets of 8-12 reps",
            "instructions": [
              "Lie flat on a bench and grip the barbell slightly wider than shoulder-width.",
              "Lower the bar slowly to your mid-chest.",
              "Push the bar back up explosively until your arms are fully extended."
            ]
          },
          {
            "name": "Cable Crossovers",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Stand in the middle of a cable machine with the pulleys set high.",
              "Pull the handles down and across your body in a sweeping arc.",
              "Squeeze your chest at the bottom, then slowly return to the start."
            ]
          },
          {
            "name": "Incline Dumbbell Press",
            "reps": "3 sets of 10-12 reps",
            "instructions": [
              "Set a bench to a 30-45 degree incline.",
              "Hold a dumbbell in each hand and press them straight up.",
              "Lower them slowly until you feel a stretch in your chest, then press back up."
            ]
          },
          {
            "name": "Dumbbell Bicep Curls",
            "reps": "3 sets of 12 reps",
            "instructions": [
              "Stand holding a dumbbell in each hand, palms facing forward.",
              "Curl the weights up towards your shoulders.",
              "Squeeze your biceps at the top and lower slowly."
            ]
          }
        ]
      },
      "thursday": {
        "title": "Thursday: Arms & Shoulders",
        "exercises": [
          {
            "name": "Barbell Rows",
            "reps": "4 sets of 8-10 reps",
            "instructions": [
              "Bend at the hips and knees with a straight back, holding a barbell.",
              "Pull the bar up to your lower rib cage.",
              "Lower the bar under control until your arms are fully extended."
            ]
          },
          {
            "name": "Overhead Press",
            "reps": "4 sets of 8 reps",
            "instructions": [
              "Stand holding a barbell or dumbbells at shoulder height.",
              "Press the weight straight up overhead until your arms lock out.",
              "Lower it back down to your shoulders under control."
            ]
          },
          {
            "name": "Deadlifts",
            "reps": "3 sets of 5-8 reps",
            "instructions": [
              "Stand with your mid-foot under the barbell.",
              "Bend over and grab the bar, bending your knees until your shins touch it.",
              "Lift your chest up and pull the weight up by driving through your heels."
            ]
          },
          {
            "name": "Lat Pulldowns",
            "reps": "4 sets of 10 reps",
            "instructions": [
              "Sit at a lat pulldown station and grab the wide bar.",
              "Pull the bar down towards your upper chest, squeezing your shoulder blades together.",
              "Slowly release the bar back to the starting position."
            ]
          }
        ]
      },
      "friday": {
        "title": "Friday: Full Body Mix",
        "exercises": [
          {
            "name": "Leg Press",
            "reps": "3 sets of 12 reps",
            "instructions": [
              "Sit in the leg press machine and place your feet shoulder-width apart.",
              "Lower the platform until your knees are at a 90-degree angle.",
              "Push the platform away using your heels."
            ]
          },
          {
            "name": "Incline Dumbbell Press",
            "reps": "3 sets of 10-12 reps",
            "instructions": [
              "Set a bench to a 30-45 degree incline.",
              "Hold a dumbbell in each hand and press them straight up.",
              "Lower them slowly until you feel a stretch in your chest, then press back up."
            ]
          },
          {
            "name": "Overhead Press",
            "reps": "4 sets of 8 reps",
            "instructions": [
              "Stand holding a barbell or dumbbells at shoulder height.",
              "Press the weight straight up overhead until your arms lock out.",
              "Lower it back down to your shoulders under control."
            ]
          },
          {
            "name": "Barbell Squats",
            "reps": "4 sets of 8 reps",
            "instructions": [
              "Rest the barbell securely on your upper back.",
              "Brace your core and lower your hips down and back as if sitting in a chair.",
              "Drive through your heels to return to a standing position."
            ]
          },
          {
            "name": "Dumbbell Bicep Curls",
            "reps": "3 sets of 12 reps",
            "instructions": [
              "Stand holding a dumbbell in each hand, palms facing forward.",
              "Curl the weights up towards your shoulders.",
              "Squeeze your biceps at the top and lower slowly."
            ]
          }
        ]
      },
      "saturday": {
        "title": "Saturday: Active Recovery",
        "exercises": []
      },
      "sunday": {
        "title": "Sunday: Rest Day",
        "exercises": []
      }
    },
    "week3": {
      "monday": {
        "title": "Monday: Heavy Upper Body",
        "exercises": [
          {
            "name": "Barbell Bench Press",
            "reps": "4 sets of 8-12 reps",
            "instructions": [
              "Lie flat on a bench and grip the barbell slightly wider than shoulder-width.",
              "Lower the bar slowly to your mid-chest.",
              "Push the bar back up explosively until your arms are fully extended."
            ]
          },
          {
            "name": "Incline Dumbbell Press",
            "reps": "3 sets of 10-12 reps",
            "instructions": [
              "Set a bench to a 30-45 degree incline.",
              "Hold a dumbbell in each hand and press them straight up.",
              "Lower them slowly until you feel a stretch in your chest, then press back up."
            ]
          },
          {
            "name": "Cable Crossovers",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Stand in the middle of a cable machine with the pulleys set high.",
              "Pull the handles down and across your body in a sweeping arc.",
              "Squeeze your chest at the bottom, then slowly return to the start."
            ]
          },
          {
            "name": "Lat Pulldowns",
            "reps": "4 sets of 10 reps",
            "instructions": [
              "Sit at a lat pulldown station and grab the wide bar.",
              "Pull the bar down towards your upper chest, squeezing your shoulder blades together.",
              "Slowly release the bar back to the starting position."
            ]
          }
        ]
      },
      "tuesday": {
        "title": "Tuesday: Leg Day Focus",
        "exercises": [
          {
            "name": "Tricep Pushdowns",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Attach a rope to a high pulley.",
              "Keep your elbows tucked into your sides and push the rope down.",
              "Spread the rope apart at the bottom, then slowly let it back up."
            ]
          },
          {
            "name": "Cable Crossovers",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Stand in the middle of a cable machine with the pulleys set high.",
              "Pull the handles down and across your body in a sweeping arc.",
              "Squeeze your chest at the bottom, then slowly return to the start."
            ]
          },
          {
            "name": "Incline Dumbbell Press",
            "reps": "3 sets of 10-12 reps",
            "instructions": [
              "Set a bench to a 30-45 degree incline.",
              "Hold a dumbbell in each hand and press them straight up.",
              "Lower them slowly until you feel a stretch in your chest, then press back up."
            ]
          },
          {
            "name": "Leg Press",
            "reps": "3 sets of 12 reps",
            "instructions": [
              "Sit in the leg press machine and place your feet shoulder-width apart.",
              "Lower the platform until your knees are at a 90-degree angle.",
              "Push the platform away using your heels."
            ]
          }
        ]
      },
      "wednesday": {
        "title": "Wednesday: Back & Core",
        "exercises": [
          {
            "name": "Barbell Bench Press",
            "reps": "4 sets of 8-12 reps",
            "instructions": [
              "Lie flat on a bench and grip the barbell slightly wider than shoulder-width.",
              "Lower the bar slowly to your mid-chest.",
              "Push the bar back up explosively until your arms are fully extended."
            ]
          },
          {
            "name": "Deadlifts",
            "reps": "3 sets of 5-8 reps",
            "instructions": [
              "Stand with your mid-foot under the barbell.",
              "Bend over and grab the bar, bending your knees until your shins touch it.",
              "Lift your chest up and pull the weight up by driving through your heels."
            ]
          },
          {
            "name": "Incline Dumbbell Press",
            "reps": "3 sets of 10-12 reps",
            "instructions": [
              "Set a bench to a 30-45 degree incline.",
              "Hold a dumbbell in each hand and press them straight up.",
              "Lower them slowly until you feel a stretch in your chest, then press back up."
            ]
          },
          {
            "name": "Barbell Rows",
            "reps": "4 sets of 8-10 reps",
            "instructions": [
              "Bend at the hips and knees with a straight back, holding a barbell.",
              "Pull the bar up to your lower rib cage.",
              "Lower the bar under control until your arms are fully extended."
            ]
          }
        ]
      },
      "thursday": {
        "title": "Thursday: Arms & Shoulders",
        "exercises": [
          {
            "name": "Dumbbell Bicep Curls",
            "reps": "3 sets of 12 reps",
            "instructions": [
              "Stand holding a dumbbell in each hand, palms facing forward.",
              "Curl the weights up towards your shoulders.",
              "Squeeze your biceps at the top and lower slowly."
            ]
          },
          {
            "name": "Barbell Bench Press",
            "reps": "4 sets of 8-12 reps",
            "instructions": [
              "Lie flat on a bench and grip the barbell slightly wider than shoulder-width.",
              "Lower the bar slowly to your mid-chest.",
              "Push the bar back up explosively until your arms are fully extended."
            ]
          },
          {
            "name": "Incline Dumbbell Press",
            "reps": "3 sets of 10-12 reps",
            "instructions": [
              "Set a bench to a 30-45 degree incline.",
              "Hold a dumbbell in each hand and press them straight up.",
              "Lower them slowly until you feel a stretch in your chest, then press back up."
            ]
          },
          {
            "name": "Cable Crossovers",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Stand in the middle of a cable machine with the pulleys set high.",
              "Pull the handles down and across your body in a sweeping arc.",
              "Squeeze your chest at the bottom, then slowly return to the start."
            ]
          }
        ]
      },
      "friday": {
        "title": "Friday: Full Body Mix",
        "exercises": [
          {
            "name": "Barbell Bench Press",
            "reps": "4 sets of 8-12 reps",
            "instructions": [
              "Lie flat on a bench and grip the barbell slightly wider than shoulder-width.",
              "Lower the bar slowly to your mid-chest.",
              "Push the bar back up explosively until your arms are fully extended."
            ]
          },
          {
            "name": "Overhead Press",
            "reps": "4 sets of 8 reps",
            "instructions": [
              "Stand holding a barbell or dumbbells at shoulder height.",
              "Press the weight straight up overhead until your arms lock out.",
              "Lower it back down to your shoulders under control."
            ]
          },
          {
            "name": "Barbell Squats",
            "reps": "4 sets of 8 reps",
            "instructions": [
              "Rest the barbell securely on your upper back.",
              "Brace your core and lower your hips down and back as if sitting in a chair.",
              "Drive through your heels to return to a standing position."
            ]
          },
          {
            "name": "Incline Dumbbell Press",
            "reps": "3 sets of 10-12 reps",
            "instructions": [
              "Set a bench to a 30-45 degree incline.",
              "Hold a dumbbell in each hand and press them straight up.",
              "Lower them slowly until you feel a stretch in your chest, then press back up."
            ]
          },
          {
            "name": "Cable Crossovers",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Stand in the middle of a cable machine with the pulleys set high.",
              "Pull the handles down and across your body in a sweeping arc.",
              "Squeeze your chest at the bottom, then slowly return to the start."
            ]
          }
        ]
      },
      "saturday": {
        "title": "Saturday: Active Recovery",
        "exercises": []
      },
      "sunday": {
        "title": "Sunday: Rest Day",
        "exercises": []
      }
    },
    "week4": {
      "monday": {
        "title": "Monday: Heavy Upper Body",
        "exercises": [
          {
            "name": "Barbell Bench Press",
            "reps": "4 sets of 8-12 reps",
            "instructions": [
              "Lie flat on a bench and grip the barbell slightly wider than shoulder-width.",
              "Lower the bar slowly to your mid-chest.",
              "Push the bar back up explosively until your arms are fully extended."
            ]
          },
          {
            "name": "Tricep Pushdowns",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Attach a rope to a high pulley.",
              "Keep your elbows tucked into your sides and push the rope down.",
              "Spread the rope apart at the bottom, then slowly let it back up."
            ]
          },
          {
            "name": "Leg Press",
            "reps": "3 sets of 12 reps",
            "instructions": [
              "Sit in the leg press machine and place your feet shoulder-width apart.",
              "Lower the platform until your knees are at a 90-degree angle.",
              "Push the platform away using your heels."
            ]
          },
          {
            "name": "Incline Dumbbell Press",
            "reps": "3 sets of 10-12 reps",
            "instructions": [
              "Set a bench to a 30-45 degree incline.",
              "Hold a dumbbell in each hand and press them straight up.",
              "Lower them slowly until you feel a stretch in your chest, then press back up."
            ]
          }
        ]
      },
      "tuesday": {
        "title": "Tuesday: Leg Day Focus",
        "exercises": [
          {
            "name": "Barbell Bench Press",
            "reps": "4 sets of 8-12 reps",
            "instructions": [
              "Lie flat on a bench and grip the barbell slightly wider than shoulder-width.",
              "Lower the bar slowly to your mid-chest.",
              "Push the bar back up explosively until your arms are fully extended."
            ]
          },
          {
            "name": "Leg Press",
            "reps": "3 sets of 12 reps",
            "instructions": [
              "Sit in the leg press machine and place your feet shoulder-width apart.",
              "Lower the platform until your knees are at a 90-degree angle.",
              "Push the platform away using your heels."
            ]
          },
          {
            "name": "Tricep Pushdowns",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Attach a rope to a high pulley.",
              "Keep your elbows tucked into your sides and push the rope down.",
              "Spread the rope apart at the bottom, then slowly let it back up."
            ]
          },
          {
            "name": "Incline Dumbbell Press",
            "reps": "3 sets of 10-12 reps",
            "instructions": [
              "Set a bench to a 30-45 degree incline.",
              "Hold a dumbbell in each hand and press them straight up.",
              "Lower them slowly until you feel a stretch in your chest, then press back up."
            ]
          }
        ]
      },
      "wednesday": {
        "title": "Wednesday: Back & Core",
        "exercises": [
          {
            "name": "Deadlifts",
            "reps": "3 sets of 5-8 reps",
            "instructions": [
              "Stand with your mid-foot under the barbell.",
              "Bend over and grab the bar, bending your knees until your shins touch it.",
              "Lift your chest up and pull the weight up by driving through your heels."
            ]
          },
          {
            "name": "Barbell Rows",
            "reps": "4 sets of 8-10 reps",
            "instructions": [
              "Bend at the hips and knees with a straight back, holding a barbell.",
              "Pull the bar up to your lower rib cage.",
              "Lower the bar under control until your arms are fully extended."
            ]
          },
          {
            "name": "Leg Press",
            "reps": "3 sets of 12 reps",
            "instructions": [
              "Sit in the leg press machine and place your feet shoulder-width apart.",
              "Lower the platform until your knees are at a 90-degree angle.",
              "Push the platform away using your heels."
            ]
          },
          {
            "name": "Lat Pulldowns",
            "reps": "4 sets of 10 reps",
            "instructions": [
              "Sit at a lat pulldown station and grab the wide bar.",
              "Pull the bar down towards your upper chest, squeezing your shoulder blades together.",
              "Slowly release the bar back to the starting position."
            ]
          }
        ]
      },
      "thursday": {
        "title": "Thursday: Arms & Shoulders",
        "exercises": [
          {
            "name": "Deadlifts",
            "reps": "3 sets of 5-8 reps",
            "instructions": [
              "Stand with your mid-foot under the barbell.",
              "Bend over and grab the bar, bending your knees until your shins touch it.",
              "Lift your chest up and pull the weight up by driving through your heels."
            ]
          },
          {
            "name": "Barbell Bench Press",
            "reps": "4 sets of 8-12 reps",
            "instructions": [
              "Lie flat on a bench and grip the barbell slightly wider than shoulder-width.",
              "Lower the bar slowly to your mid-chest.",
              "Push the bar back up explosively until your arms are fully extended."
            ]
          },
          {
            "name": "Incline Dumbbell Press",
            "reps": "3 sets of 10-12 reps",
            "instructions": [
              "Set a bench to a 30-45 degree incline.",
              "Hold a dumbbell in each hand and press them straight up.",
              "Lower them slowly until you feel a stretch in your chest, then press back up."
            ]
          },
          {
            "name": "Dumbbell Bicep Curls",
            "reps": "3 sets of 12 reps",
            "instructions": [
              "Stand holding a dumbbell in each hand, palms facing forward.",
              "Curl the weights up towards your shoulders.",
              "Squeeze your biceps at the top and lower slowly."
            ]
          }
        ]
      },
      "friday": {
        "title": "Friday: Full Body Mix",
        "exercises": [
          {
            "name": "Dumbbell Bicep Curls",
            "reps": "3 sets of 12 reps",
            "instructions": [
              "Stand holding a dumbbell in each hand, palms facing forward.",
              "Curl the weights up towards your shoulders.",
              "Squeeze your biceps at the top and lower slowly."
            ]
          },
          {
            "name": "Overhead Press",
            "reps": "4 sets of 8 reps",
            "instructions": [
              "Stand holding a barbell or dumbbells at shoulder height.",
              "Press the weight straight up overhead until your arms lock out.",
              "Lower it back down to your shoulders under control."
            ]
          },
          {
            "name": "Cable Crossovers",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Stand in the middle of a cable machine with the pulleys set high.",
              "Pull the handles down and across your body in a sweeping arc.",
              "Squeeze your chest at the bottom, then slowly return to the start."
            ]
          },
          {
            "name": "Incline Dumbbell Press",
            "reps": "3 sets of 10-12 reps",
            "instructions": [
              "Set a bench to a 30-45 degree incline.",
              "Hold a dumbbell in each hand and press them straight up.",
              "Lower them slowly until you feel a stretch in your chest, then press back up."
            ]
          },
          {
            "name": "Barbell Bench Press",
            "reps": "4 sets of 8-12 reps",
            "instructions": [
              "Lie flat on a bench and grip the barbell slightly wider than shoulder-width.",
              "Lower the bar slowly to your mid-chest.",
              "Push the bar back up explosively until your arms are fully extended."
            ]
          }
        ]
      },
      "saturday": {
        "title": "Saturday: Active Recovery",
        "exercises": []
      },
      "sunday": {
        "title": "Sunday: Rest Day",
        "exercises": []
      }
    }
  },
  "home": {
    "week1": {
      "monday": {
        "title": "Monday: High Intensity Cardio",
        "exercises": [
          {
            "name": "Pike Push-ups",
            "reps": "3 sets of 10-15 reps",
            "instructions": [
              "Start in a downward dog position with your hips high in the air.",
              "Bend your elbows and lower the top of your head towards the floor.",
              "Push back up to the starting position to target your shoulders."
            ]
          },
          {
            "name": "Plank",
            "reps": "3 sets of 45-60 seconds",
            "instructions": [
              "Support your body weight on your forearms and toes.",
              "Keep your body in a perfectly straight line from head to heels.",
              "Brace your core tight and hold the position."
            ]
          },
          {
            "name": "Bicycle Crunches",
            "reps": "3 sets of 20 reps",
            "instructions": [
              "Lie on your back with your hands behind your head and legs raised.",
              "Bring your right elbow towards your left knee while extending your right leg straight.",
              "Alternate sides in a smooth, cycling motion."
            ]
          },
          {
            "name": "Walking Lunges",
            "reps": "3 sets of 12 reps per leg",
            "instructions": [
              "Take a large step forward with one leg and drop your back knee towards the floor.",
              "Push off your front foot to bring your feet back together.",
              "Alternate legs and continue walking forward."
            ]
          }
        ]
      },
      "tuesday": {
        "title": "Tuesday: Core & Stability",
        "exercises": [
          {
            "name": "Plank",
            "reps": "3 sets of 45-60 seconds",
            "instructions": [
              "Support your body weight on your forearms and toes.",
              "Keep your body in a perfectly straight line from head to heels.",
              "Brace your core tight and hold the position."
            ]
          },
          {
            "name": "Standard Push-ups",
            "reps": "3 sets to failure",
            "instructions": [
              "Start in a high plank position with your hands slightly wider than your shoulders.",
              "Lower your body until your chest is just above the floor.",
              "Push back up forcefully to the starting position."
            ]
          },
          {
            "name": "Walking Lunges",
            "reps": "3 sets of 12 reps per leg",
            "instructions": [
              "Take a large step forward with one leg and drop your back knee towards the floor.",
              "Push off your front foot to bring your feet back together.",
              "Alternate legs and continue walking forward."
            ]
          },
          {
            "name": "Bodyweight Squats",
            "reps": "4 sets of 20 reps",
            "instructions": [
              "Stand with feet shoulder-width apart.",
              "Keep your chest up and push your hips back, bending your knees to a 90-degree angle.",
              "Stand back up, squeezing your glutes at the top."
            ]
          }
        ]
      },
      "wednesday": {
        "title": "Wednesday: Lower Body Blast",
        "exercises": [
          {
            "name": "Walking Lunges",
            "reps": "3 sets of 12 reps per leg",
            "instructions": [
              "Take a large step forward with one leg and drop your back knee towards the floor.",
              "Push off your front foot to bring your feet back together.",
              "Alternate legs and continue walking forward."
            ]
          },
          {
            "name": "Plank",
            "reps": "3 sets of 45-60 seconds",
            "instructions": [
              "Support your body weight on your forearms and toes.",
              "Keep your body in a perfectly straight line from head to heels.",
              "Brace your core tight and hold the position."
            ]
          },
          {
            "name": "Bicycle Crunches",
            "reps": "3 sets of 20 reps",
            "instructions": [
              "Lie on your back with your hands behind your head and legs raised.",
              "Bring your right elbow towards your left knee while extending your right leg straight.",
              "Alternate sides in a smooth, cycling motion."
            ]
          },
          {
            "name": "Superman Hold",
            "reps": "3 sets of 30 seconds",
            "instructions": [
              "Lie face down on the floor with your arms extended forward.",
              "Simultaneously lift your arms, chest, and legs off the floor.",
              "Squeeze your lower back and glutes, hold for the required time, then relax."
            ]
          }
        ]
      },
      "thursday": {
        "title": "Thursday: Upper Body Strength",
        "exercises": [
          {
            "name": "Plank",
            "reps": "3 sets of 45-60 seconds",
            "instructions": [
              "Support your body weight on your forearms and toes.",
              "Keep your body in a perfectly straight line from head to heels.",
              "Brace your core tight and hold the position."
            ]
          },
          {
            "name": "Chair Dips",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Place your hands on the edge of a sturdy chair behind you.",
              "Extend your legs straight out in front of you.",
              "Lower your body by bending your elbows until they reach a 90-degree angle, then push back up."
            ]
          },
          {
            "name": "Walking Lunges",
            "reps": "3 sets of 12 reps per leg",
            "instructions": [
              "Take a large step forward with one leg and drop your back knee towards the floor.",
              "Push off your front foot to bring your feet back together.",
              "Alternate legs and continue walking forward."
            ]
          },
          {
            "name": "Bodyweight Squats",
            "reps": "4 sets of 20 reps",
            "instructions": [
              "Stand with feet shoulder-width apart.",
              "Keep your chest up and push your hips back, bending your knees to a 90-degree angle.",
              "Stand back up, squeezing your glutes at the top."
            ]
          }
        ]
      },
      "friday": {
        "title": "Friday: Full Body Burn",
        "exercises": [
          {
            "name": "Walking Lunges",
            "reps": "3 sets of 12 reps per leg",
            "instructions": [
              "Take a large step forward with one leg and drop your back knee towards the floor.",
              "Push off your front foot to bring your feet back together.",
              "Alternate legs and continue walking forward."
            ]
          },
          {
            "name": "Standard Push-ups",
            "reps": "3 sets to failure",
            "instructions": [
              "Start in a high plank position with your hands slightly wider than your shoulders.",
              "Lower your body until your chest is just above the floor.",
              "Push back up forcefully to the starting position."
            ]
          },
          {
            "name": "Pike Push-ups",
            "reps": "3 sets of 10-15 reps",
            "instructions": [
              "Start in a downward dog position with your hips high in the air.",
              "Bend your elbows and lower the top of your head towards the floor.",
              "Push back up to the starting position to target your shoulders."
            ]
          },
          {
            "name": "Bodyweight Squats",
            "reps": "4 sets of 20 reps",
            "instructions": [
              "Stand with feet shoulder-width apart.",
              "Keep your chest up and push your hips back, bending your knees to a 90-degree angle.",
              "Stand back up, squeezing your glutes at the top."
            ]
          },
          {
            "name": "Superman Hold",
            "reps": "3 sets of 30 seconds",
            "instructions": [
              "Lie face down on the floor with your arms extended forward.",
              "Simultaneously lift your arms, chest, and legs off the floor.",
              "Squeeze your lower back and glutes, hold for the required time, then relax."
            ]
          }
        ]
      },
      "saturday": {
        "title": "Saturday: Light Stretching",
        "exercises": []
      },
      "sunday": {
        "title": "Sunday: Rest Day",
        "exercises": []
      }
    },
    "week2": {
      "monday": {
        "title": "Monday: High Intensity Cardio",
        "exercises": [
          {
            "name": "Bodyweight Squats",
            "reps": "4 sets of 20 reps",
            "instructions": [
              "Stand with feet shoulder-width apart.",
              "Keep your chest up and push your hips back, bending your knees to a 90-degree angle.",
              "Stand back up, squeezing your glutes at the top."
            ]
          },
          {
            "name": "Superman Hold",
            "reps": "3 sets of 30 seconds",
            "instructions": [
              "Lie face down on the floor with your arms extended forward.",
              "Simultaneously lift your arms, chest, and legs off the floor.",
              "Squeeze your lower back and glutes, hold for the required time, then relax."
            ]
          },
          {
            "name": "Plank",
            "reps": "3 sets of 45-60 seconds",
            "instructions": [
              "Support your body weight on your forearms and toes.",
              "Keep your body in a perfectly straight line from head to heels.",
              "Brace your core tight and hold the position."
            ]
          },
          {
            "name": "Chair Dips",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Place your hands on the edge of a sturdy chair behind you.",
              "Extend your legs straight out in front of you.",
              "Lower your body by bending your elbows until they reach a 90-degree angle, then push back up."
            ]
          }
        ]
      },
      "tuesday": {
        "title": "Tuesday: Core & Stability",
        "exercises": [
          {
            "name": "Plank",
            "reps": "3 sets of 45-60 seconds",
            "instructions": [
              "Support your body weight on your forearms and toes.",
              "Keep your body in a perfectly straight line from head to heels.",
              "Brace your core tight and hold the position."
            ]
          },
          {
            "name": "Chair Dips",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Place your hands on the edge of a sturdy chair behind you.",
              "Extend your legs straight out in front of you.",
              "Lower your body by bending your elbows until they reach a 90-degree angle, then push back up."
            ]
          },
          {
            "name": "Pike Push-ups",
            "reps": "3 sets of 10-15 reps",
            "instructions": [
              "Start in a downward dog position with your hips high in the air.",
              "Bend your elbows and lower the top of your head towards the floor.",
              "Push back up to the starting position to target your shoulders."
            ]
          },
          {
            "name": "Bicycle Crunches",
            "reps": "3 sets of 20 reps",
            "instructions": [
              "Lie on your back with your hands behind your head and legs raised.",
              "Bring your right elbow towards your left knee while extending your right leg straight.",
              "Alternate sides in a smooth, cycling motion."
            ]
          }
        ]
      },
      "wednesday": {
        "title": "Wednesday: Lower Body Blast",
        "exercises": [
          {
            "name": "Pike Push-ups",
            "reps": "3 sets of 10-15 reps",
            "instructions": [
              "Start in a downward dog position with your hips high in the air.",
              "Bend your elbows and lower the top of your head towards the floor.",
              "Push back up to the starting position to target your shoulders."
            ]
          },
          {
            "name": "Bodyweight Squats",
            "reps": "4 sets of 20 reps",
            "instructions": [
              "Stand with feet shoulder-width apart.",
              "Keep your chest up and push your hips back, bending your knees to a 90-degree angle.",
              "Stand back up, squeezing your glutes at the top."
            ]
          },
          {
            "name": "Superman Hold",
            "reps": "3 sets of 30 seconds",
            "instructions": [
              "Lie face down on the floor with your arms extended forward.",
              "Simultaneously lift your arms, chest, and legs off the floor.",
              "Squeeze your lower back and glutes, hold for the required time, then relax."
            ]
          },
          {
            "name": "Walking Lunges",
            "reps": "3 sets of 12 reps per leg",
            "instructions": [
              "Take a large step forward with one leg and drop your back knee towards the floor.",
              "Push off your front foot to bring your feet back together.",
              "Alternate legs and continue walking forward."
            ]
          }
        ]
      },
      "thursday": {
        "title": "Thursday: Upper Body Strength",
        "exercises": [
          {
            "name": "Standard Push-ups",
            "reps": "3 sets to failure",
            "instructions": [
              "Start in a high plank position with your hands slightly wider than your shoulders.",
              "Lower your body until your chest is just above the floor.",
              "Push back up forcefully to the starting position."
            ]
          },
          {
            "name": "Pike Push-ups",
            "reps": "3 sets of 10-15 reps",
            "instructions": [
              "Start in a downward dog position with your hips high in the air.",
              "Bend your elbows and lower the top of your head towards the floor.",
              "Push back up to the starting position to target your shoulders."
            ]
          },
          {
            "name": "Bicycle Crunches",
            "reps": "3 sets of 20 reps",
            "instructions": [
              "Lie on your back with your hands behind your head and legs raised.",
              "Bring your right elbow towards your left knee while extending your right leg straight.",
              "Alternate sides in a smooth, cycling motion."
            ]
          },
          {
            "name": "Superman Hold",
            "reps": "3 sets of 30 seconds",
            "instructions": [
              "Lie face down on the floor with your arms extended forward.",
              "Simultaneously lift your arms, chest, and legs off the floor.",
              "Squeeze your lower back and glutes, hold for the required time, then relax."
            ]
          }
        ]
      },
      "friday": {
        "title": "Friday: Full Body Burn",
        "exercises": [
          {
            "name": "Bicycle Crunches",
            "reps": "3 sets of 20 reps",
            "instructions": [
              "Lie on your back with your hands behind your head and legs raised.",
              "Bring your right elbow towards your left knee while extending your right leg straight.",
              "Alternate sides in a smooth, cycling motion."
            ]
          },
          {
            "name": "Standard Push-ups",
            "reps": "3 sets to failure",
            "instructions": [
              "Start in a high plank position with your hands slightly wider than your shoulders.",
              "Lower your body until your chest is just above the floor.",
              "Push back up forcefully to the starting position."
            ]
          },
          {
            "name": "Superman Hold",
            "reps": "3 sets of 30 seconds",
            "instructions": [
              "Lie face down on the floor with your arms extended forward.",
              "Simultaneously lift your arms, chest, and legs off the floor.",
              "Squeeze your lower back and glutes, hold for the required time, then relax."
            ]
          },
          {
            "name": "Pike Push-ups",
            "reps": "3 sets of 10-15 reps",
            "instructions": [
              "Start in a downward dog position with your hips high in the air.",
              "Bend your elbows and lower the top of your head towards the floor.",
              "Push back up to the starting position to target your shoulders."
            ]
          },
          {
            "name": "Plank",
            "reps": "3 sets of 45-60 seconds",
            "instructions": [
              "Support your body weight on your forearms and toes.",
              "Keep your body in a perfectly straight line from head to heels.",
              "Brace your core tight and hold the position."
            ]
          }
        ]
      },
      "saturday": {
        "title": "Saturday: Light Stretching",
        "exercises": []
      },
      "sunday": {
        "title": "Sunday: Rest Day",
        "exercises": []
      }
    },
    "week3": {
      "monday": {
        "title": "Monday: High Intensity Cardio",
        "exercises": [
          {
            "name": "Bodyweight Squats",
            "reps": "4 sets of 20 reps",
            "instructions": [
              "Stand with feet shoulder-width apart.",
              "Keep your chest up and push your hips back, bending your knees to a 90-degree angle.",
              "Stand back up, squeezing your glutes at the top."
            ]
          },
          {
            "name": "Walking Lunges",
            "reps": "3 sets of 12 reps per leg",
            "instructions": [
              "Take a large step forward with one leg and drop your back knee towards the floor.",
              "Push off your front foot to bring your feet back together.",
              "Alternate legs and continue walking forward."
            ]
          },
          {
            "name": "Burpees",
            "reps": "3 sets of 10 reps",
            "instructions": [
              "Start in a standing position, then drop into a squat and place your hands on the floor.",
              "Kick your feet back into a plank position and perform a push-up.",
              "Jump your feet back to the squat position and explode upwards into a jump."
            ]
          },
          {
            "name": "Chair Dips",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Place your hands on the edge of a sturdy chair behind you.",
              "Extend your legs straight out in front of you.",
              "Lower your body by bending your elbows until they reach a 90-degree angle, then push back up."
            ]
          }
        ]
      },
      "tuesday": {
        "title": "Tuesday: Core & Stability",
        "exercises": [
          {
            "name": "Standard Push-ups",
            "reps": "3 sets to failure",
            "instructions": [
              "Start in a high plank position with your hands slightly wider than your shoulders.",
              "Lower your body until your chest is just above the floor.",
              "Push back up forcefully to the starting position."
            ]
          },
          {
            "name": "Plank",
            "reps": "3 sets of 45-60 seconds",
            "instructions": [
              "Support your body weight on your forearms and toes.",
              "Keep your body in a perfectly straight line from head to heels.",
              "Brace your core tight and hold the position."
            ]
          },
          {
            "name": "Pike Push-ups",
            "reps": "3 sets of 10-15 reps",
            "instructions": [
              "Start in a downward dog position with your hips high in the air.",
              "Bend your elbows and lower the top of your head towards the floor.",
              "Push back up to the starting position to target your shoulders."
            ]
          },
          {
            "name": "Bicycle Crunches",
            "reps": "3 sets of 20 reps",
            "instructions": [
              "Lie on your back with your hands behind your head and legs raised.",
              "Bring your right elbow towards your left knee while extending your right leg straight.",
              "Alternate sides in a smooth, cycling motion."
            ]
          }
        ]
      },
      "wednesday": {
        "title": "Wednesday: Lower Body Blast",
        "exercises": [
          {
            "name": "Burpees",
            "reps": "3 sets of 10 reps",
            "instructions": [
              "Start in a standing position, then drop into a squat and place your hands on the floor.",
              "Kick your feet back into a plank position and perform a push-up.",
              "Jump your feet back to the squat position and explode upwards into a jump."
            ]
          },
          {
            "name": "Walking Lunges",
            "reps": "3 sets of 12 reps per leg",
            "instructions": [
              "Take a large step forward with one leg and drop your back knee towards the floor.",
              "Push off your front foot to bring your feet back together.",
              "Alternate legs and continue walking forward."
            ]
          },
          {
            "name": "Bicycle Crunches",
            "reps": "3 sets of 20 reps",
            "instructions": [
              "Lie on your back with your hands behind your head and legs raised.",
              "Bring your right elbow towards your left knee while extending your right leg straight.",
              "Alternate sides in a smooth, cycling motion."
            ]
          },
          {
            "name": "Bodyweight Squats",
            "reps": "4 sets of 20 reps",
            "instructions": [
              "Stand with feet shoulder-width apart.",
              "Keep your chest up and push your hips back, bending your knees to a 90-degree angle.",
              "Stand back up, squeezing your glutes at the top."
            ]
          }
        ]
      },
      "thursday": {
        "title": "Thursday: Upper Body Strength",
        "exercises": [
          {
            "name": "Bicycle Crunches",
            "reps": "3 sets of 20 reps",
            "instructions": [
              "Lie on your back with your hands behind your head and legs raised.",
              "Bring your right elbow towards your left knee while extending your right leg straight.",
              "Alternate sides in a smooth, cycling motion."
            ]
          },
          {
            "name": "Superman Hold",
            "reps": "3 sets of 30 seconds",
            "instructions": [
              "Lie face down on the floor with your arms extended forward.",
              "Simultaneously lift your arms, chest, and legs off the floor.",
              "Squeeze your lower back and glutes, hold for the required time, then relax."
            ]
          },
          {
            "name": "Burpees",
            "reps": "3 sets of 10 reps",
            "instructions": [
              "Start in a standing position, then drop into a squat and place your hands on the floor.",
              "Kick your feet back into a plank position and perform a push-up.",
              "Jump your feet back to the squat position and explode upwards into a jump."
            ]
          },
          {
            "name": "Plank",
            "reps": "3 sets of 45-60 seconds",
            "instructions": [
              "Support your body weight on your forearms and toes.",
              "Keep your body in a perfectly straight line from head to heels.",
              "Brace your core tight and hold the position."
            ]
          }
        ]
      },
      "friday": {
        "title": "Friday: Full Body Burn",
        "exercises": [
          {
            "name": "Plank",
            "reps": "3 sets of 45-60 seconds",
            "instructions": [
              "Support your body weight on your forearms and toes.",
              "Keep your body in a perfectly straight line from head to heels.",
              "Brace your core tight and hold the position."
            ]
          },
          {
            "name": "Chair Dips",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Place your hands on the edge of a sturdy chair behind you.",
              "Extend your legs straight out in front of you.",
              "Lower your body by bending your elbows until they reach a 90-degree angle, then push back up."
            ]
          },
          {
            "name": "Walking Lunges",
            "reps": "3 sets of 12 reps per leg",
            "instructions": [
              "Take a large step forward with one leg and drop your back knee towards the floor.",
              "Push off your front foot to bring your feet back together.",
              "Alternate legs and continue walking forward."
            ]
          },
          {
            "name": "Bicycle Crunches",
            "reps": "3 sets of 20 reps",
            "instructions": [
              "Lie on your back with your hands behind your head and legs raised.",
              "Bring your right elbow towards your left knee while extending your right leg straight.",
              "Alternate sides in a smooth, cycling motion."
            ]
          },
          {
            "name": "Superman Hold",
            "reps": "3 sets of 30 seconds",
            "instructions": [
              "Lie face down on the floor with your arms extended forward.",
              "Simultaneously lift your arms, chest, and legs off the floor.",
              "Squeeze your lower back and glutes, hold for the required time, then relax."
            ]
          }
        ]
      },
      "saturday": {
        "title": "Saturday: Light Stretching",
        "exercises": []
      },
      "sunday": {
        "title": "Sunday: Rest Day",
        "exercises": []
      }
    },
    "week4": {
      "monday": {
        "title": "Monday: High Intensity Cardio",
        "exercises": [
          {
            "name": "Plank",
            "reps": "3 sets of 45-60 seconds",
            "instructions": [
              "Support your body weight on your forearms and toes.",
              "Keep your body in a perfectly straight line from head to heels.",
              "Brace your core tight and hold the position."
            ]
          },
          {
            "name": "Bodyweight Squats",
            "reps": "4 sets of 20 reps",
            "instructions": [
              "Stand with feet shoulder-width apart.",
              "Keep your chest up and push your hips back, bending your knees to a 90-degree angle.",
              "Stand back up, squeezing your glutes at the top."
            ]
          },
          {
            "name": "Bicycle Crunches",
            "reps": "3 sets of 20 reps",
            "instructions": [
              "Lie on your back with your hands behind your head and legs raised.",
              "Bring your right elbow towards your left knee while extending your right leg straight.",
              "Alternate sides in a smooth, cycling motion."
            ]
          },
          {
            "name": "Burpees",
            "reps": "3 sets of 10 reps",
            "instructions": [
              "Start in a standing position, then drop into a squat and place your hands on the floor.",
              "Kick your feet back into a plank position and perform a push-up.",
              "Jump your feet back to the squat position and explode upwards into a jump."
            ]
          }
        ]
      },
      "tuesday": {
        "title": "Tuesday: Core & Stability",
        "exercises": [
          {
            "name": "Standard Push-ups",
            "reps": "3 sets to failure",
            "instructions": [
              "Start in a high plank position with your hands slightly wider than your shoulders.",
              "Lower your body until your chest is just above the floor.",
              "Push back up forcefully to the starting position."
            ]
          },
          {
            "name": "Chair Dips",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Place your hands on the edge of a sturdy chair behind you.",
              "Extend your legs straight out in front of you.",
              "Lower your body by bending your elbows until they reach a 90-degree angle, then push back up."
            ]
          },
          {
            "name": "Burpees",
            "reps": "3 sets of 10 reps",
            "instructions": [
              "Start in a standing position, then drop into a squat and place your hands on the floor.",
              "Kick your feet back into a plank position and perform a push-up.",
              "Jump your feet back to the squat position and explode upwards into a jump."
            ]
          },
          {
            "name": "Superman Hold",
            "reps": "3 sets of 30 seconds",
            "instructions": [
              "Lie face down on the floor with your arms extended forward.",
              "Simultaneously lift your arms, chest, and legs off the floor.",
              "Squeeze your lower back and glutes, hold for the required time, then relax."
            ]
          }
        ]
      },
      "wednesday": {
        "title": "Wednesday: Lower Body Blast",
        "exercises": [
          {
            "name": "Bicycle Crunches",
            "reps": "3 sets of 20 reps",
            "instructions": [
              "Lie on your back with your hands behind your head and legs raised.",
              "Bring your right elbow towards your left knee while extending your right leg straight.",
              "Alternate sides in a smooth, cycling motion."
            ]
          },
          {
            "name": "Standard Push-ups",
            "reps": "3 sets to failure",
            "instructions": [
              "Start in a high plank position with your hands slightly wider than your shoulders.",
              "Lower your body until your chest is just above the floor.",
              "Push back up forcefully to the starting position."
            ]
          },
          {
            "name": "Pike Push-ups",
            "reps": "3 sets of 10-15 reps",
            "instructions": [
              "Start in a downward dog position with your hips high in the air.",
              "Bend your elbows and lower the top of your head towards the floor.",
              "Push back up to the starting position to target your shoulders."
            ]
          },
          {
            "name": "Burpees",
            "reps": "3 sets of 10 reps",
            "instructions": [
              "Start in a standing position, then drop into a squat and place your hands on the floor.",
              "Kick your feet back into a plank position and perform a push-up.",
              "Jump your feet back to the squat position and explode upwards into a jump."
            ]
          }
        ]
      },
      "thursday": {
        "title": "Thursday: Upper Body Strength",
        "exercises": [
          {
            "name": "Bicycle Crunches",
            "reps": "3 sets of 20 reps",
            "instructions": [
              "Lie on your back with your hands behind your head and legs raised.",
              "Bring your right elbow towards your left knee while extending your right leg straight.",
              "Alternate sides in a smooth, cycling motion."
            ]
          },
          {
            "name": "Plank",
            "reps": "3 sets of 45-60 seconds",
            "instructions": [
              "Support your body weight on your forearms and toes.",
              "Keep your body in a perfectly straight line from head to heels.",
              "Brace your core tight and hold the position."
            ]
          },
          {
            "name": "Superman Hold",
            "reps": "3 sets of 30 seconds",
            "instructions": [
              "Lie face down on the floor with your arms extended forward.",
              "Simultaneously lift your arms, chest, and legs off the floor.",
              "Squeeze your lower back and glutes, hold for the required time, then relax."
            ]
          },
          {
            "name": "Walking Lunges",
            "reps": "3 sets of 12 reps per leg",
            "instructions": [
              "Take a large step forward with one leg and drop your back knee towards the floor.",
              "Push off your front foot to bring your feet back together.",
              "Alternate legs and continue walking forward."
            ]
          }
        ]
      },
      "friday": {
        "title": "Friday: Full Body Burn",
        "exercises": [
          {
            "name": "Pike Push-ups",
            "reps": "3 sets of 10-15 reps",
            "instructions": [
              "Start in a downward dog position with your hips high in the air.",
              "Bend your elbows and lower the top of your head towards the floor.",
              "Push back up to the starting position to target your shoulders."
            ]
          },
          {
            "name": "Standard Push-ups",
            "reps": "3 sets to failure",
            "instructions": [
              "Start in a high plank position with your hands slightly wider than your shoulders.",
              "Lower your body until your chest is just above the floor.",
              "Push back up forcefully to the starting position."
            ]
          },
          {
            "name": "Burpees",
            "reps": "3 sets of 10 reps",
            "instructions": [
              "Start in a standing position, then drop into a squat and place your hands on the floor.",
              "Kick your feet back into a plank position and perform a push-up.",
              "Jump your feet back to the squat position and explode upwards into a jump."
            ]
          },
          {
            "name": "Chair Dips",
            "reps": "3 sets of 15 reps",
            "instructions": [
              "Place your hands on the edge of a sturdy chair behind you.",
              "Extend your legs straight out in front of you.",
              "Lower your body by bending your elbows until they reach a 90-degree angle, then push back up."
            ]
          },
          {
            "name": "Plank",
            "reps": "3 sets of 45-60 seconds",
            "instructions": [
              "Support your body weight on your forearms and toes.",
              "Keep your body in a perfectly straight line from head to heels.",
              "Brace your core tight and hold the position."
            ]
          }
        ]
      },
      "saturday": {
        "title": "Saturday: Light Stretching",
        "exercises": []
      },
      "sunday": {
        "title": "Sunday: Rest Day",
        "exercises": []
      }
    }
  }
};

let currentType = 'gym';
let currentWeek = 'week1';

function renderWorkout() {
    const container = document.getElementById('workout-container');
    if(!container) return;
    
    const weekData = workoutData[currentType][currentWeek];
    let html = '';
    
    for (const [day, data] of Object.entries(weekData)) {
        html += `
            <div class="workout-day-modern">
                <div class="day-header">
                    <h2>${data.title}</h2>
                </div>
        `;
        
        if (data.exercises.length === 0) {
            html += `
                <div class="rest-card">
                    <h3>Rest day. Focus on hydration and recovery!</h3>
                </div>
            `;
        } else {
            html += `<div class="exercise-grid">`;
            data.exercises.forEach(ex => {
                let stepsHtml = '';
                ex.instructions.forEach((step, index) => {
                    stepsHtml += `<li>${step}</li>`;
                });

                html += `
                    <div class="exercise-card">
                        <div class="exercise-card-header">
                            <h3>${ex.name}</h3>
                            <span class="rep-badge">${ex.reps}</span>
                        </div>
                        <div class="exercise-steps">
                            <ol>
                                ${stepsHtml}
                            </ol>
                        </div>
                    </div>
                `;
            });
            html += `</div>`;
        }
        html += `</div>`;
    }
    
    // Add fade in effect
    container.style.opacity = 0;
    setTimeout(() => {
        container.innerHTML = html;
        container.style.opacity = 1;
    }, 200);
}

document.addEventListener('DOMContentLoaded', () => {
    // Week selectors
    const weekBtns = document.querySelectorAll('.week-btn');
    weekBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            weekBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentWeek = e.target.getAttribute('data-week');
            renderWorkout();
        });
    });

    // Type selectors
    const gymBtn = document.getElementById('gym-btn');
    const homeBtn = document.getElementById('home-btn');
    
    gymBtn.addEventListener('click', () => {
        gymBtn.classList.add('active-type');
        homeBtn.classList.remove('active-type');
        currentType = 'gym';
        renderWorkout();
    });
    
    homeBtn.addEventListener('click', () => {
        homeBtn.classList.add('active-type');
        gymBtn.classList.remove('active-type');
        currentType = 'home';
        renderWorkout();
    });

    // Initial render
    renderWorkout();
});
