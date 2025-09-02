document.addEventListener('DOMContentLoaded', () => {

    // --- Language Content ---
    const translations = {
        en: {
            nav_name: "Felipe Trezub Bueno",
            nav_about: "About",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_contact: "Contact",
            hero_name: "Felipe Trezub Bueno",
            hero_subtitle: "Computer Science student dedicated to improving his skills in software development and Artificial Intelligence",
            about_title: "About Me",
            about_p1: "I am a 4th-semester Computer Science student at PUCPR, Brazil.",
            about_p2: "I have strong logic and programming skills.",
            about_p3: "I am experienced with Python, Flask, SQLAlchemy, MySQL, HTML, CSS, and JavaScript.",
            about_p4: "I work with microcontrollers (ESP32) and sensor integration.",
            about_p5: "I am beginning my journey with Artificial Intelligence and aim to work professionally in this field in the future.",
            skills_title: "Skills",
            skills_tab_backend: "Back-end",
            skills_tab_frontend: "Front-end",
            skills_tab_database: "Database",
            skills_tab_other: "Other Skills",
            skills_item_form: "Form validation with JS and PHP",
            skills_item_design: "Design",
            skills_item_editing: "Photo and video editing",
            skills_item_gaming: "Gaming",
            skills_item_sports: "Sports",
            skills_item_hardware: "PC hardware assembly and maintenance",
            projects_title: "Projects",
            project_drpet_desc: "A Flask web application for managing veterinary clinics, featuring appointment scheduling and image support for pet records.",
            project_new_title: "New Project Coming Soon",
            project_new_desc: "Another exciting project will be featured here in the near future.",
            contact_title: "Contact",
            contact_text: "Feel free to reach out via email or connect with me on social media.",
            contact_email_button: "Send an Email",
            form_name_label: "Name",
            form_email_label: "Email",
            form_message_label: "Message",
            form_submit_button: "Send Message",
            footer_text: "© 2025 Felipe Trezub Bueno. All rights reserved."
        },
        pt: {
            nav_name: "Felipe Trezub Bueno",
            nav_about: "Sobre",
            nav_skills: "Habilidades",
            nav_projects: "Projetos",
            nav_contact: "Contato",
            hero_name: "Felipe Trezub Bueno",
            hero_subtitle: "Estudante de Ciência da Computação focado em aprimorar suas habilidades em desenvolvimento de software e Inteligência Artificial",
            about_title: "Sobre Mim",
            about_p1: "Sou estudante do 4º semestre de Ciência da Computação na PUCPR, Brasil.",
            about_p2: "Possuo fortes habilidades em lógica e programação.",
            about_p3: "Tenho experiência com Python, Flask, SQLAlchemy, MySQL, HTML, CSS e JavaScript.",
            about_p4: "Trabalho com microcontroladores (ESP32) e integração de sensores.",
            about_p5: "Estou iniciando minha jornada em Inteligência Artificial e almejo trabalhar profissionalmente nesta área no futuro.",
            skills_title: "Habilidades",
            skills_tab_backend: "Back-end",
            skills_tab_frontend: "Front-end",
            skills_tab_database: "Banco de Dados",
            skills_tab_other: "Outras Habilidades",
            skills_item_form: "Validação de formulários com JS e PHP",
            skills_item_design: "Design",
            skills_item_editing: "Edição de fotos e vídeos",
            skills_item_gaming: "Jogos",
            skills_item_sports: "Esportes",
            skills_item_hardware: "Montagem e manutenção de hardware de PC",
            projects_title: "Projetos",
            project_drpet_desc: "Uma aplicação web em Flask para gerenciamento de clínicas veterinárias, com agendamento e suporte a imagens para registros de pets.",
            project_new_title: "Novo Projeto em Breve",
            project_new_desc: "Outro projeto incrível será apresentado aqui em breve.",
            contact_title: "Contato",
            contact_text: "Sinta-se à vontade para entrar em contato por e-mail ou conectar-se comigo nas redes sociais.",
            contact_email_button: "Enviar um Email",
            form_name_label: "Nome",
            form_email_label: "Email",
            form_message_label: "Mensagem",
            form_submit_button: "Enviar Mensagem",
            footer_text: "© 2025 Felipe Trezub Bueno. Todos os direitos reservados."
        }
    };

    // --- Element Selectors ---
    const themeSwitch = document.getElementById('theme-switch-checkbox');
    const langEn = document.getElementById('lang-en');
    const langPt = document.getElementById('lang-pt');
    const showFormBtn = document.getElementById('show-form-btn');
    const formContainer = document.getElementById('form-container');

    // --- Theme Toggler ---
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark-mode') {
        document.body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }

    themeSwitch.addEventListener('change', () => {
        let theme;
        if (themeSwitch.checked) {
            document.body.classList.add('dark-mode');
            theme = 'dark-mode';
        } else {
            document.body.classList.remove('dark-mode');
            theme = 'light-mode';
        }
        localStorage.setItem('theme', theme);
    });

    // --- Language Switcher ---
    const setLanguage = (lang) => {
        document.querySelectorAll('[data-lang-key]').forEach(elem => {
            const key = elem.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                elem.innerHTML = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);
        
        langEn.classList.toggle('active', lang === 'en');
        langPt.classList.toggle('active', lang === 'pt');

        // Update show form button text if form is not visible
        const isVisible = formContainer ? formContainer.classList.contains('visible') : false;
        if (showFormBtn && !isVisible) {
             showFormBtn.textContent = translations[lang]['contact_email_button'];
        } else if (showFormBtn && isVisible) {
            showFormBtn.textContent = lang === 'pt' ? 'Fechar Formulário' : 'Close Form';
        }
    };

    langEn.addEventListener('click', () => setLanguage('en'));
    langPt.addEventListener('click', () => setLanguage('pt'));

    // Set initial language
    const initialLang = localStorage.getItem('language') || (navigator.language.startsWith('pt') ? 'pt' : 'en');
    setLanguage(initialLang);

    // --- Show/Hide Form Logic ---
    if (showFormBtn && formContainer) {
        showFormBtn.addEventListener('click', () => {
            formContainer.classList.toggle('visible');
            
            const isVisible = formContainer.classList.contains('visible');
            const currentLang = localStorage.getItem('language') || 'en';

            if (isVisible) {
                showFormBtn.textContent = currentLang === 'pt' ? 'Fechar Formulário' : 'Close Form';
            } else {
                showFormBtn.textContent = translations[currentLang]['contact_email_button'];
            }
        });
    }

    // --- Skills Tabs ---
    const tabButtons = document.querySelectorAll('.tab-button');
    const skillGroups = document.querySelectorAll('.skill-group');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            skillGroups.forEach(group => {
                group.classList.toggle('active', group.id === tab);
            });
        });
    });

    // --- Smooth Scroll for Nav Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
