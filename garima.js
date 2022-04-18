(async () => {
    async function fetchResumeData() {
        const response = await fetch('http://myjson.dit.upm.es/api/bins/4qvp');
        return await response.json();
    }

    const resumeData = await fetchResumeData();  

    function createAboutMe(name,contact) {

        return `<img src='garima.jpg' class='image'><h1>${name}</h1>
                
                <section id="contact">
                    <h1>contact</h1>
                    <p data-content="contact">Email ID: ${contact.email_id}</p>
	            <p data-content="contact">Phone: ${contact.phone_number}</p>
                </section>`;
    }
function createskill(skill) {
        const skillItems = skill.reduce((pv, item) => {
            return pv + `<li>
                    <section>
                        <ul>

					<li>Programming Languages
				</li>
					
                        </ul>
                    </section>
                </li>`;
        }, '');

        return `<section id="skill">
                <h1>skill</h1>
                <ul data-content="skill">
                    ${skill}
                </ul></section>`;

    }
			
  function createLanguage(Language) {
        const LanguageItems = Language.reduce((pv, Language) => {
            return pv + `<li>${Language}</li>`;
        }, '');
   

        return `<section id="Language">
            <h1>Language</h1>
            <ul>
                ${LanguageItems}
            </ul>
            </section>`   
         }  
      function createHobbies(Hobbies) {
        const HobbiesItems = Hobbies.reduce((pv, Hobbies) => {
            return pv + `<li>${Hobbies}</li>`;
        }, '');

        return `<section id="Hobbies">
            <h1>Hobbies</h1>
            <ul>
                ${HobbiesItems}
            </ul>
            </section>` 
      }

    function createExperience(Experience) {
        const ExperienceItems = Experience.reduce((pv, Experience) => {
            return pv + `<li>${Experience}</li>`;
        }, '');

        return `<section id="Experience">
            <h1>Experience</h1>
            <ul>
                ${ExperienceItems}
            </ul>
            </section>` 
      }    
            
     
			

    const section = document.createElement('section');
    section.id = 'container';
    section.innerHTML = createAboutMe(resumeData.name,resumeData.contact)
        + createskill(resumeData.Skill)
        + createLanguage(resumeData.Language)
        + createHobbies(resumeData.Hobbies)
        +createExperience(resumeData.Experience);

document.body.appendChild(section);
})();