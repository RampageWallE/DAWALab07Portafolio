const express = require('express');
const app = express();
const path = require('path');

app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);

app.use(
    express.static(path.resolve(__dirname, "node_modules/bootstrap/dist/css/")),
    express.static(path.resolve(__dirname, "public/"))
)

app.get('/',(req, res) => {

    const skills = [
        'Desarrollo web frontend y backend.',
        'Diseño de interfaces de usuario (UI) y experiencia de usuario (UX).',
        'Conocimientos basicos en JavaScrip.',
        'Conocimientos basicos en Python',
        'Conocimientos basicos en React Native',
        'Conocimientos basicos en Django',
        'Utilización de Visual studio code.'
    ]

    res.render(
        'index.ejs',
        {
            nombre : 'Piero Valentino Noa Chahuayo', 
            bienvenida:"¡Hola! Soy Piero Valentino Noa Chahuayo, un apasionado del diseño y desarrollo de software con una sólida formación y experiencia en el campo. ¡Me alegra que hayas llegado a mi portafolio!", 
            mensaje_inicio: "Soy un Programador con 3 años de experiencia en el Diseño y desarrollo de Software. Me graduare en TECSUP con una licenciatura en Diseño y desarrollo de software y desde entonces he estado trabajando en diversos proyectos.",
            skills: skills,
            foto: '/images/FotoPiero.jpg '
        }
    );


});

app.get('/habilidades', (req, res) => {
    const web = ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'React'];
    const backend = ['Django(Python)', 'Spring(Java)', 'Node.js(JavaScript)']; 
    const db = ['MySQL', 'Oracle', 'MongoDB']
    const gestionProyectos = ['SCRUM', 'Kanban']; 
    const moviles = ['Android', 'iOS', 'React Native']; 
    const herramientasDesarrollo = ['Git', 'Visual Studio Code']; 

    res.render(
        'habilidades.ejs', 
        { 
            web : web, 
            backend : backend, 
            db : db,
            gestionProyectos : gestionProyectos,
            moviles : moviles, 
            herramientasDesarrollo : herramientasDesarrollo,
        }
    )
});

app.get('/about-me', (req, res ) => {
    const trayectoria = [
        'Me graduare en el instituto TECSUP con una licenciatura en Diseño y desarrollo de software. Desde entonces, he estado inmerso en el mundo del desarrollo de software, explorando diferentes tecnologías y perfeccionando mis habilidades.',
        'Durante mi trayectoria, he tenido la oportunidad de trabajar en una variedad de proyectos desafiantes que han contribuido a mi crecimiento profesional. Mi enfoque principal ha sido el desarrollo web en frontend y backend  .'
    ]

    const valores = [
        'Creo firmemente en la importancia de la colaboración y el trabajo en equipo para alcanzar los objetivos. Me considero una persona proactiva y orientada a resultados, siempre buscando superar expectativas y entregar productos de calidad a mis clientes.',
        'Además, valoro la continua educación y el aprendizaje. Siempre estoy buscando nuevas oportunidades para ampliar mis conocimientos y mantenerme al día con las últimas tendencias y tecnologías en mi campo.'
    ]

    const intereses = [
        'Fuera del ámbito profesional, disfruto [menciona tus intereses relacionados con tu campo o hobbies]. Creo en el equilibrio entre el trabajo y la vida personal, y encuentro inspiración en actividades que me permiten desconectar y recargar energías.'    
    ]
    res.render('about-me.ejs', { data : 'asdas', trayectoria: trayectoria, valores : valores, intereses : intereses })
});


app.get('/contact-us', (req, res) => {
    res.render('contact-us.ejs', {
        email : 'piero.noa@tecsup.edu.pe',
        telefono : 962483840
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Escuchando el el puerto http://localhost:${PORT}`)
})