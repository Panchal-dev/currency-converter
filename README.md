# 💱 Currency Converter

<div align="center">

![Currency Converter](https://img.shields.io/badge/Currency-Converter-af4d98?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### 🌐 [Live Demo](https://currency-converter-dev7.netlify.app/)

</div>

---

## 📖 About The Project

A modern and responsive **Currency Converter** web application that provides real-time exchange rates for over 150+ currencies worldwide. Built with vanilla JavaScript, this tool offers a seamless user experience with live currency conversion and dynamic flag updates.

### ✨ Key Features

- 🔄 **Real-Time Conversion** - Instant currency exchange rates using live API
- 🌍 **150+ Currencies** - Support for all major world currencies
- 🚩 **Dynamic Flags** - Auto-updating country flags for selected currencies
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Clean UI** - Modern and intuitive user interface
- ⚡ **Fast Performance** - Lightweight and optimized code

---

## 🖼️ Screenshots

### Desktop View
<div align="center">
  <img src="https://via.placeholder.com/800x500/af4d98/ffffff?text=Currency+Converter+Desktop+View" alt="Desktop Screenshot" width="700"/>
</div>

### Application Interface
<div align="center">
  <img src="https://via.placeholder.com/400x600/f4e4ba/000000?text=Currency+Converter+UI" alt="App Interface" width="350"/>
</div>

---

## 🚀 Demo

Experience the live application: **[https://currency-converter-dev7.netlify.app/](https://currency-converter-dev7.netlify.app/)**

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure and markup |
| **CSS3** | Styling and layout |
| **JavaScript (ES6+)** | Core functionality and API integration |
| **Open Exchange Rates API** | Real-time currency data |
| **Flags API** | Country flag images |
| **Font Awesome** | Icon library |

---

## 📂 Project Structure

```
CurrencyConverter/
│
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── app.js              # Core application logic
├── codes.js            # Currency code mappings
└── README.md           # Project documentation
```

---

## ⚙️ Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)

### Steps to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Panchal-dev/currency-converter.git
   ```

2. **Navigate to project directory**
   ```bash
   cd currency-converter
   ```

3. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use Live Server extension in VS Code

---

## 💡 How It Works

1. **Select Source Currency** - Choose the currency you want to convert from
2. **Select Target Currency** - Choose the currency you want to convert to
3. **Enter Amount** - Input the amount you wish to convert
4. **Get Exchange Rate** - Click the button to see the converted amount

The application automatically:
- Updates country flags based on currency selection
- Fetches live exchange rates from the API
- Calculates and displays the converted amount
- Validates user input for accuracy

---

## 🌟 Code Highlights

### API Integration
```javascript
const BASE_URL = "https://open.er-api.com/v6/latest";
const updateExchangeRate = async () => {
  const URL = `${BASE_URL}/${fromCurr.value}`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data.rates[toCurr.value];
  let finalAmount = amtVal * rate;
}
```

### Dynamic Flag Updates
```javascript
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
}
```

---

## 📝 API Reference

This project uses the **Open Exchange Rates API** for fetching live currency conversion rates.

- **Base URL:** `https://open.er-api.com/v6/latest`
- **Endpoint:** `/{currency_code}`
- **Response:** JSON with exchange rates for all currencies

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Developer

**Panchal-dev**

- GitHub: [@Panchal-dev](https://github.com/Panchal-dev)
- Live Project: [Currency Converter](https://currency-converter-dev7.netlify.app/)

---

## 🙏 Acknowledgments

- [Open Exchange Rates API](https://www.exchangerate-api.com/) for currency data
- [Flags API](https://flagsapi.com/) for country flag images
- [Font Awesome](https://fontawesome.com/) for icons
- [Netlify](https://www.netlify.com/) for hosting

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

Made with ❤️ by Panchal-dev

</div>
