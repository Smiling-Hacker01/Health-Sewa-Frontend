
# 🏥 Health Sewa – Frontend

A complete digital healthcare ecosystem, **Health Sewa** empowers users to take charge of their health with personalized tools, accurate guidance, and seamless healthcare services — all from one platform.

> This is the frontend repository of Health Sewa, developed using **HTML**, **CSS**, and **JavaScript**, and connected to a powerful backend built with **Node.js**, **Express**, and **MongoDB**.

---

## 🔗 Live Demo

🌐 [Visit Health Sewa on Netlify](https://healthsewa1.netlify.app/)

🧠 Backend: [View Backend Repo](https://github.com/Smiling-Hacker01/Health-Sewa-Backend.git)

---

## 🚀 Features

| Category                      | Functionality                                                                 |
|------------------------------|------------------------------------------------------------------------------|
| 👤 **Authentication**        | User login/signup, JWT-based protected routes                                 |
| 📝 **Appointments**          | Schedule appointments with real-time confirmation                            |
| 📬 **Email Notifications**   | Signup/login/appointment alerts using NodeMailer                             |
| 🩺 **BMI Calculator**        | Instantly calculate BMI and get categorized health advice                    |
| 🥗 **Meal Planner**          | Get personalized diet suggestions based on your health goals                 |
| 💪 **Workout Planner**       | Custom workout routines based on user input                                 |
| 🧘 **Lifestyle Guidance**    | Structured daily wellness recommendations and reminders                      |
| 📍 **Nearby Blood Banks**    | Find nearby hospitals and blood banks using 3rd-party location APIs          |
| 🩸 **Blood Donor Registry**  | Register as a blood donor or recipient, visible to others                    |
| 📚 **Health Blogs**          | Informative blog section for fitness, nutrition, and wellness                |
| 📢 **Advertisement Panel**   | Space for health product/service promotions                                  |

---

## 🌐 Tech Stack

| Tech        | Purpose                                |
|-------------|----------------------------------------|
| HTML/CSS    | Structure and Styling                  |
| JavaScript  | Frontend logic and API communication   |
| Fetch API   | Integration with backend APIs          |
| Netlify     | Deployment of frontend                 |
| REST APIs   | Communication with the backend         |

---

## 📁 Folder Structure

```
Frontend/
├── About us/
├── Advertisement/
├── BloodBank/
├── BmiPage/
├── Blood Pressure Page/
├── ColdShower/
├── Contact us/
├── DeseaseInfo/
├── DonorRegistration/
├── ExercisePage/
├── HealthTopic/
├── HealthSewaImages/
├── HomePage/
├── KushCore Technologies/
├── Meal Planner/
├── Our Brands/
├── Privacy Page/
├── ServiceGetter/
├── SleepPage/
├── TermsConditions/
├── UserRegister/            # Contains both login and signup pages
├── Walking Barefoot/
```

Each of these folders contains their respective `HTML`, `CSS`, and `JS` files.

---

## ⚙️ How to Run Locally

1. Clone this repo:
   ```bash
   git clone https://github.com/Smiling-Hacker01/Health-Sewa-Frontend.git
   ```
2. Navigate to the directory:
   ```bash
   cd Health-Sewa-Frontend
   ```
3. Open the main HTML file (e.g., `HomePage/index.html`) using VS Code Live Server or directly in your browser.
4. Make sure your backend is also running or deployed (Render/Vercel).

---

## 🔒 Security Notes

- All sensitive credentials like DB URIs, JWT secrets, email passwords are **stored safely in `.env` files on backend**, not exposed here.
- Routes that perform sensitive actions are protected using **JWT authentication**.

---

## 👨‍💻 Author

Made with 💙 by **Vishal Singh Kushwaha**

- GitHub: [Smiling-Hacker01](https://github.com/Smiling-Hacker01)
- LinkedIn: [Your Profile](https://www.linkedin.com/in/sdevsk/)

---

## 💡 Future Enhancements

- Push notifications
- Doctor dashboard
- Chatbot for quick health queries
- AI health predictions (experimental)

---

## 🧾 License

This project is open-source and intended for learning and showcasing real-world full-stack application development.  
Feel free to fork, star, or contribute!
