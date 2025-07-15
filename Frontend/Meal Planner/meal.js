const meals = {
    weightLoss: {
      veg: {
        breakfast: [
          "Oats porridge with banana",
          "Upma with vegetables",
          "Vegetable poha",
          "Smoothie with almond milk & spinach",
          "2 boiled eggs + multigrain toast"
        ],
        lunch: [
          "Brown rice + dal + salad",
          "Quinoa + mixed veg curry",
          "Roti + paneer bhurji + curd",
          "Buddha bowl (chickpeas, veggies, hummus)",
          "Moong dal khichdi"
        ],
        dinner: [
          "Vegetable soup + whole wheat toast",
          "Grilled tofu + sautéed spinach",
          "Mixed veg curry + roti",
          "Stir-fried veggies + brown rice",
          "Sprouts salad + soup"
        ],
        calories: 1500
      },
      nonVeg: {
        breakfast: [
          "Boiled eggs + brown toast",
          "Chicken sandwich (whole wheat)",
          "Greek yogurt + fruits",
          "Oats with almond milk + seeds",
          "Boiled egg whites + sprouts"
        ],
        lunch: [
          "Grilled chicken + salad",
          "Fish curry + brown rice",
          "Roti + egg curry",
          "Chicken salad wrap",
          "Quinoa + chicken stir-fry"
        ],
        dinner: [
          "Chicken soup + toast",
          "Grilled fish + veggies",
          "Omelet + sautéed veg",
          "Chicken stew + salad",
          "Boiled eggs + clear soup"
        ],
        calories: 1600
      }
    },
    weightGain: {
      veg: {
        breakfast: [
          "Banana + peanut butter sandwich",
          "Paneer paratha + curd",
          "Oats with full cream milk + nuts",
          "Almond milk smoothie + dates",
          "Chilla with potatoes + chutney"
        ],
        lunch: [
          "Rice + rajma + ghee",
          "Paneer curry + roti + salad",
          "Vegetable pulao + curd",
          "Chole bhature",
          "Dal makhani + jeera rice"
        ],
        dinner: [
          "Roti + aloo gobi + curd",
          "Paneer tikka + veg biryani",
          "Stuffed paratha + butter",
          "Khichdi + papad + pickle",
          "Palak paneer + naan"
        ],
        calories: 2500
      },
      nonVeg: {
        breakfast: [
          "Chicken omelet + butter toast",
          "Full cream milk + boiled eggs",
          "Chicken sandwich + juice",
          "Peanut butter shake + boiled eggs",
          "Oats with milk + scrambled eggs"
        ],
        lunch: [
          "Chicken curry + rice",
          "Fish fry + veg pulao",
          "Egg biryani + curd",
          "Butter chicken + naan",
          "Keema rice + raita"
        ],
        dinner: [
          "Grilled chicken + mashed potatoes",
          "Egg curry + paratha",
          "Fish curry + rice + salad",
          "Chicken pasta + garlic bread",
          "Tandoori chicken + roti"
        ],
        calories: 2700
      }
    }
  };

  function generatePlan() {
    const goal = document.getElementById('goal').value;
    const type = document.getElementById('type').value;
    const plan = meals[goal][type];
    let html = "";

    for (let day = 1; day <= 7; day++) {
      html += `<div class="meal-day">
        <h2>Day ${day}</h2>
        <strong>🍳 Breakfast:</strong>
        <ul>${getRandomMeals(plan.breakfast)}</ul>
        <strong>🥘 Lunch:</strong>
        <ul>${getRandomMeals(plan.lunch)}</ul>
        <strong>🍲 Dinner:</strong>
        <ul>${getRandomMeals(plan.dinner)}</ul>
        <p><strong>Total Calories:</strong> Approx. ${plan.calories} kcal</p>
      </div>`;
    }

    document.getElementById("mealPlan").innerHTML = html;
  }

  function getRandomMeals(arr) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);
    return selected.map(item => `<li>${item}</li>`).join("");
  }