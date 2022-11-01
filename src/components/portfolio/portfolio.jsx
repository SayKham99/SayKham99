import Card from "./projectCard/card";
import './portfolio.scss'
import pic from '../../assets/pic.jpg'

const projects = [
    {
        id: 1,
        img: pic,
        name: 'Project 1',
        descr: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        urls: [
            {
                id: 1,
                url: 'www.google.com',
            },
            {
                id: 2,
                url: 'www.google.com',
            },
        ]
    },
    {
        id: 1,
        img: pic,
        name: 'Project 1',
        descr: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        urls: [
            {
                id: 1,
                url: 'www.google.com',
            },
            {
                id: 2,
                url: 'www.google.com',
            },
        ]
    },
    {
        id: 1,
        img: pic,
        name: 'Project 1',
        descr: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        urls: [
            {
                id: 1,
                url: 'www.google.com',
            },
            {
                id: 2,
                url: 'www.google.com',
            },
        ]
    },
    {
        id: 1,
        img: pic,
        name: 'Project 1',
        descr: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        urls: [
            {
                id: 1,
                url: 'www.google.com',
            },
            {
                id: 2,
                url: 'www.google.com',
            },
        ]
    },
]

function Portfolio() {
    return (
        <div className='portfolio'>
            <h1 className='portfolio__title'>Portfolio</h1>
            <hr/>
            <div className='portfolio__projects'>
                <div className='portfolio__projects-filter'></div>
                <div className='portfolio__projects-items'>
                    {projects.map(project => (
                        <div className='portfolio__projects-items--item'>
                            <Card data={project}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;