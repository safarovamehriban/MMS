let educationCount = 1;

document.getElementById('addEducationBtn').addEventListener('click', function() {
  educationCount++; // Hər təhsil əlavə etdikdə sayını artırır
  
  // Yeni təhsil bölməsi yarat
  const educationFieldsContainer = document.getElementById('educationFields');
  const newEducationSection = document.createElement('div');
  newEducationSection.classList.add('education-section');
  
  // Yeni təhsil başlığını və formu əlavə et
  newEducationSection.innerHTML = `
    <div class="education-title">${educationCount}-ci Təhsil</div>
    <div class="columns-3">
      <div class="input-box">
        <label for="university_${educationCount}">Təhsil müəssisəsi</label>
        <select name="university_${educationCount}" id="university_${educationCount}" required>
          <option disabled selected>Seçin</option>
                        <option value="aztu">Azərbaycan Texniki Universiteti</option>
                        <option value="bdu">Bakı Dövlət Universiteti</option>
                        <option value="adu">Azərbaycan Dövlət Universiteti</option>
                        <option value="qafqaz">Qafqaz Universiteti</option>
                        <option value="ada">ADA Universiteti</option>
                        <option value="bdum">Bakı Mühəndislik Universiteti</option>
                        <option value="gdu">Gəncə Dövlət Universiteti</option>
                        <option value="sdu">Sumqayıt Dövlət Universiteti</option>
                        <option value="ktu">Xəzər Universiteti</option>
                        <option value="kdu">Azərbaycan Kooperasiya Universiteti</option>
                        <option value="imt">İqtisad Universiteti</option>
                        <option value="mdu">Mingəçevir Dövlət Universiteti</option>
                        <option value="asu">Azərbaycan Dövlət Neft və Sənaye Universiteti</option>
                        <option value="bmu">Bakı Mühəndislik Universiteti</option>
                        <option value="adu">Azərbaycan Dillər Universiteti</option>
                        <option value="lpu">Lənkəran Dövlət Universiteti</option>
                        <option value="ndu">Naxçıvan Dövlət Universiteti</option>
                        <option value="qdu">Quba Dövlət Universiteti</option>
                        <option value="sdu">Şəki Dövlət Universiteti</option>
                        <option value="adu">Azərbaycan Dövlət Pedaqoji Universiteti</option>
        </select>
      </div>
      <div class="input-box">
        <span>Fakültə</span>
        <select name="faculty_${educationCount}" required>
          <option value="" disabled selected>Seçin</option>
          <option value="informasika">İnformasiya texnologiyaları və mühəndislik fakültəsi</option>
          <option value="iqtisadiyyat">İqtisadiyyat və idarəetmə fakültəsi</option>
        </select>
      </div>
      <div class="input-box">
        <span>İxtisas</span>
        <select name="major_${educationCount}" required>
          <option value="" disabled selected>Seçin</option>
                      <option value="komp-muh">Kompüter mühəndisliyi</option>
                      <option value="informas-texn">İnformasiya texnologiyaları</option>
                      <option value="informas-tehluk">İnformasiya təhlükəsizliyi</option>
                      <option value="biznesin-idare">Biznesin idarə edilməsi</option>
                      <option value="iqtisadiyyat">İqtisadiyyat</option>
                      <option value="maliyyə">Maliyyə</option>
                      <option value="huquq">Hüquq</option>
                      <option value="tibb">Tibb</option>
                      <option value="muhendis-elektrik">Elektrik mühəndisliyi</option>
                      <option value="muhendis-mex">Mexanika mühəndisliyi</option>
                      <option value="neft-qaz-muh">Neft-qaz mühəndisliyi</option>
                      <option value="arxitektura">Memarlıq</option>
                      <option value="psixologiya">Psixologiya</option>
        </select>
      </div>
    </div>

    <div class="columns-3">
      <div class="input-box">
        <label for="entryYear_${educationCount}">Qəbul olduğu il</label>
        <select name="entryYear_${educationCount}" id="entryYear_${educationCount}" required></select>
      </div>
      <div class="input-box">
        <label for="graduationYear_${educationCount}">Bitirdiyi il</label>
        <select name="graduationYear_${educationCount}" id="graduationYear_${educationCount}" required></select>
      </div>
      <div class="input-box">
        <span>Status</span>
        <select name="status_${educationCount}" required>
          <option value="" disabled selected>Seçin</option>
          <option value="aktiv">Təhsil alır</option>
          <option value="bitirib">Bitirib</option>
        </select>
      </div>
    </div>

    <div class="columns-3">
      <div class="input-box">
        <span>Təhsil əsasları</span>
        <select name="educationType_${educationCount}" required>
          <option value="" disabled selected>Seçin</option>
          <option value="dovlet">Dövlət sifarişli</option>
          <option value="odenisli">Ödənişli əsaslarla</option>
        </select>
      </div>
      <div class="input-box">
        <span>Təhsil səviyyəsi</span>
        <select name="educationLevel_${educationCount}" required>
          <option value="" disabled selected>Seçin</option>
          <option value="bakalavr">Bakalavr</option>
          <option value="magistr">Magistr</option>
          <option value="doktorantura">Doktorantura</option>
        </select>
      </div>
      <div class="input-box">
        <span>Təhsilalma forması</span>
        <select name="educationForm_${educationCount}" required>
          <option value="" disabled selected>Seçin</option>
          <option value="eyani">Əyani</option>
          <option value="qiyabi">Qiyabi</option>
        </select>
      </div>
    </div>

    <div class="columns-3">
      <div class="input-box">
        <span>Tələbə ID-si</span>
        <input type="text" name="studentID_${educationCount}" placeholder="Məsələn: 202106458" required />
      </div>
      <div class="input-box">
        <span>GPA - Orta bal</span>
        <select name="gpa_${educationCount}" required>
          <option value="" disabled selected>Seçin</option>
          <option value="A">A 91-100</option>
          <option value="B">B 81-90</option>
          <option value="C">C 71-80</option>
          <option value="D">D 61-70</option>
          <option value="E">E 51-60</option>
          <option value="F">F 0-50</option>
        </select>
      </div>
      <div class="input-box">
        <span>Attestat İD -si</span>
        <input type="text" name="certificateID_${educationCount}" placeholder="Məsələn: AB123456" required />
      </div>
    </div>
  `;

  // Yeni təhsil bölməsini formaya əlavə et
  educationFieldsContainer.appendChild(newEducationSection);

  // Başlama ili və bitiş ili dropdownlarının illərlə doldurulması
  populateYearDropdown(`entryYear_${educationCount}`);
  populateYearDropdown(`graduationYear_${educationCount}`);
});

// Başlama ili və bitiş ili dropdown-unun illərlə doldurulması
function populateYearDropdown(selectId, startYear = 2000, endYear = 2025) {
  const select = document.getElementById(selectId);
  if (!select) return;

  // İlləri əlavə edirik
  for (let year = startYear; year <= endYear; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    select.appendChild(option);
  }
}
