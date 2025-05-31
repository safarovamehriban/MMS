let currentLang = 'az'; // Başlanğıcda Azərbaycan dili

const translations = {
  az: {
    "title": "Qeydiyyat Forması",
    "personal-info": "Şəxsi Məlumatlar",
    "education-info": "Təhsil Məlumatları",
    "job-info": "İş yeri məlumatları",
    "contact-info": "Əlaqə Məlumatları",
    "additional-info": "Əlavə Məlumat",
    "submit": "Qeydiyyatdan keç",
    "add-education": "+ Təhsil əlavə et",
    // Bütün digər tərcümələri də buraya əlavə edin
  },
  ru: {
    "title": "Форма регистрации",
    "personal-info": "Личные данные",
    "education-info": "Образовательная информация",
    "job-info": "Данные о месте работы",
    "contact-info": "Контактная информация",
    "additional-info": "Дополнительная информация",
    "submit": "Зарегистрироваться",
    "add-education": "+ Добавить образование",
    // Rus dilində tərcümələr
  },
  en: {
    "title": "Registration Form",
    "personal-info": "Personal Information",
    "education-info": "Education Information",
    "job-info": "Job Information",
    "contact-info": "Contact Information",
    "additional-info": "Additional Information",
    "submit": "Register",
    "add-education": "+ Add Education",
    // İngilis dilində tərcümələr
  }
};

function toggleLanguage() {
  // Dil dəyişdirilməsini təmin edən funksiya
  const langBtn = document.getElementById('lang-toggle');
  if (currentLang === 'az') {
    currentLang = 'ru';
    langBtn.innerText = 'RU';
  } else if (currentLang === 'ru') {
    currentLang = 'en';
    langBtn.innerText = 'EN';
  } else {
    currentLang = 'az';
    langBtn.innerText = 'AZ';
  }

  // Tərcümələri tətbiq et
  applyTranslations(currentLang);
}

function applyTranslations(lang) {
  // Hər bir mətnin tərcüməsini yerləşdir
  document.title = translations[lang].title;
  document.querySelector('.title').innerText = translations[lang]["personal-info"];
  document.querySelector('#addEducationBtn').innerText = translations[lang]["add-education"];
  // Yerdə qalan elementlər üçün tərcümələri tətbiq et
  // .querySelector() ilə lazımi elementləri tapıb innerText ilə tərcüməni tətbiq et
}
