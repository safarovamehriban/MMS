
              function addLanguageField() {
                const languageFieldsContainer = document.getElementById('languageFieldsContainer');
                
                // Yeni bir dil sahəsi divi yarat
                const newLanguageField = document.createElement('div');
                newLanguageField.classList.add('columns-3');
                
                newLanguageField.innerHTML = `
                  <div class="input-box">
                    <label for="languageName">Dil</label>
                    <select name="languageName" required>                    
                    <option value="" disabled selected>Seçin</option>
                    <option value="azerbaijan">Azərbaycan dili</option>
                    <option value="english">İngilis dili</option>
                    <option value="russian">Rus dili</option>
                    <option value="german">Alman dili</option>
                    <option value="french">Fransız dili</option>
                    <option value="spanish">İspan dili</option>              
                    <option value="turkish">Türk dili</option>
                    <option value="arabic">Ərəb dili</option>
                    <option value="chinese">Çin dili</option>
                    <option value="italian">İtalyan dili</option>
                    <option value="korean">Koreya dili</option>
                  </select>
                  </div>
                  <div class="input-box">
                    <label for="languageLevel">Səviyyə</label>
                    <select name="languageLevel" required>
                      <option value="high">Yüksək</option>
                      <option value="medium">Orta</option>
                      <option value="low">Zəif</option>
                    </select>
                  </div>
                `;
                
                languageFieldsContainer.appendChild(newLanguageField);
              }
