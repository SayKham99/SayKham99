import './skills.scss'

const skills = [
    {
        id: 1,
        name: "HTML5/CSS3",
        progress: '90%'
    },
    {
        id: 2,
        name: "Bootstrap5/MUI",
        progress: '60%'
    },
    {
        id: 3,
        name: "Sass/SCSS",
        progress: '80%'
    },
    {
        id: 5,
        name: "Npm/Yarn",
        progress: '70%'
    },
    {
        id: 4,
        name: "Git/Github",
        progress: '70%'
    },
    {
        id: 6,
        name: "ES6",
        progress: '70%'
    },
    {
        id: 7,
        name: "JavaScript",
        progress: '70%'
    },
    {
        id: 8,
        name: "React/Redux/RTK Query",
        progress: '60%'
    },
    {
        id: 9,
        name: "ReactJS",
        progress: '80%'
    },
    {
        id: 10,
        name: "Webpack",
        progress: '50%'
    },

]

function Skills() {
    return (<div className='skills'>
        <h2 className='skills__title'>Ko'nikmalar</h2>
        <div className='skills__items'>
            {skills.map(({id, name, progress}) => (
                <div key={id} className='skills__items-item'>
                    <p className='skills__items-item--title'>{name} {progress}</p>
                    <div className='skills__items-item--progress'>
                        <span style={{width: progress}}></span>
                    </div>
                </div>
            ))}
        </div>
    </div>);
}

export default Skills;