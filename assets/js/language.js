const translations = {
  az: {
    site_title: "MMS - Məzun Məlumat Sistemi",
    header_subtitle: "Keçmişin izini, gələcəyin yolunu burada tapın!",
    service_registration_title: "Məzun Qeydiyyatı",
    service_registration_desc: "Məzunlarımız sistemdə öz məlumatlarını rahatlıqla qeyd edib gələcək üçün arxivləşdirə bilərlər.",
    service_fast_entry_title: "Sürətli Məlumat Girişi",
    service_fast_entry_desc: "Formu doldurmaq cəmi bir neçə dəqiqə çəkir – rahat interfeys və istifadəçi dostu dizayn.",
    service_grouping_title: "Qruplaşdırılma",
    service_grouping_desc: "Məzunlar fakültəyə, ixtisasa və bitirmə ilinə görə sistemdə qruplaşdırılır.",
    service_support_title: "24/7 Əlaqə və Dəstək",
    service_support_desc: "Suallarınız yaranarsa, əlaqə bölməsi vasitəsilə bizimlə asanlıqla əlaqə saxlaya bilərsiniz.",
    contact_phone: "Tel: (+994 12) 538-33-83",
    contact_hotline: "Qaynar xətt: (+994 12) 539-13-05",
    contact_email: "E-poçt: aztu@aztu.edu.az",
    contact_address: "H.Cavid prospekti 25, Bakı, Azərbaycan AZ 1073",
    about_platform: "Məzun Məlumat Sistemi – məzunlarımız haqqında ətraflı məlumatların idarə olunduğu və arxivləşdirildiyi rəsmi platformadır",
    footer_text: "MMS - hər zaman dəstək göstərməyə hazırdır!"
  },

  en: {
    site_title: "MMS - Graduate Information System",
    header_subtitle: "Find the trace of the past and the path of the future here!",
    service_registration_title: "Graduate Registration",
    service_registration_desc: "Our graduates can easily register their information in the system and archive it for future reference.",
    service_fast_entry_title: "Fast Data Entry",
    service_fast_entry_desc: "Filling out the form takes just a few minutes – user-friendly interface and design.",
    service_grouping_title: "Categorization",
    service_grouping_desc: "Graduates are categorized by faculty, specialty, and graduation year.",
    service_support_title: "24/7 Contact & Support",
    service_support_desc: "If you have any questions, you can easily reach us through the contact section.",
    contact_phone: "Phone: (+994 12) 538-33-83",
    contact_hotline: "Hotline: (+994 12) 539-13-05",
    contact_email: "Email: aztu@aztu.edu.az",
    contact_address: "25 H. Cavid Avenue, Baku, Azerbaijan AZ 1073",
    about_platform: "The Graduate Information System is the official platform for managing and archiving detailed data about our alumni.",
    footer_text: "MMS is always ready to support!"
  },

  ru: {
    site_title: "MMS - Система информации о выпускниках",
    header_subtitle: "Найдите след прошлого и путь будущего здесь!",
    service_registration_title: "Регистрация выпускников",
    service_registration_desc: "Наши выпускники могут легко зарегистрировать свои данные в системе и сохранить их в архиве.",
    service_fast_entry_title: "Быстрый ввод данных",
    service_fast_entry_desc: "Заполнение формы занимает всего несколько минут — удобный интерфейс и дизайн.",
    service_grouping_title: "Группировка",
    service_grouping_desc: "Выпускники группируются по факультету, специальности и году выпуска.",
    service_support_title: "Круглосуточная поддержка",
    service_support_desc: "Если у вас возникли вопросы, свяжитесь с нами через раздел «Контакты».",
    contact_phone: "Тел: (+994 12) 538-33-83",
    contact_hotline: "Горячая линия: (+994 12) 539-13-05",
    contact_email: "Эл. почта: aztu@aztu.edu.az",
    contact_address: "Проспект Г. Джавида 25, Баку, Азербайджан AZ 1073",
    about_platform: "Система информации о выпускниках — это официальная платформа для управления и архивирования данных о наших выпускниках.",
    footer_text: "MMS — всегда готова поддержать!"
  }
};

function switchLanguage(lang) {
  // Elementləri seç və tərcümələri tətbiq et
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Seçilmiş dili yadda saxla
  localStorage.setItem("selectedLang", lang);
}

// Səhifə yüklənəndə seçilmiş dili tətbiq et
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLang") || "az";
  document.getElementById("languageSwitcher").value = savedLang;
  switchLanguage(savedLang);
});
