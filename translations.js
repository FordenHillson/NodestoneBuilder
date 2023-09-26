fetch('../translation/translations.json')
  .then(response => response.json())
  .then(data => {
    const translations = data;

    // รับค่าภาษาปัจจุบันจากผู้ใช้หรือตั้งค่าอื่น ๆ
    let language = 'en'; // ภาษาเริ่มต้นเป็น 'th' หรือตามที่คุณต้องการ

    // เลือกข้อความที่คุณต้องการแปล
    const elementsToTranslate = document.querySelectorAll("[data-i18n]");

    // ฟังก์ชันสำหรับการเปลี่ยนภาษา
    const changeLanguage = (newLanguage) => {
      language = newLanguage;
      elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute("data-i18n");
        if (translations[language] && translations[language][translationKey]) {
          element.textContent = translations[language][translationKey];
        }
      });
    };

    // กำหนดค่าเริ่มต้นสำหรับภาษาเมื่อโหลดหน้าเว็บ
    changeLanguage(language);

    // เมื่อผู้ใช้เปลี่ยนภาษาผ่านเลือก
    const languageSelector = document.getElementById("languageSelector");
    languageSelector.addEventListener("change", (event) => {
      const newLanguage = event.target.value;
      changeLanguage(newLanguage);
    });
  })
  .catch(error => {
    console.error('Error loading translations:', error);
  });
