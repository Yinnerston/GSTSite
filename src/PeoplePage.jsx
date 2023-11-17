import AppHeader from "./components/AppHeader";
import PeopleCard from "./components/PeopleCard";
import placeholderImage from "/placeholder.jpg";

const PEOPLE = [
    {
        name: "John Freebairn",
        image: placeholderImage,
        bio: `
            John Freebairn is an emeritus professor of economics at the University of Melbourne from
            2022. He was a professor of economics at the University of Melbourne from 1996, including
            head of the department of economics 1997-2002 and director of the Melbourne Institute
            
            2005-2007. Prior to that, he was a professor of agricultural economics at LaTrobe University
            1977-1984, including a period as dean, and professor of economics at Monash University
            1986-1996, including periods as department head and acting faculty dean. From 1965-1968
            and 1972-1974, he was an economist with the NSW Department of Agriculture, and research
            director of the Business Council of Australia 1984-1986. John’s academic research interests
            have covered many topics under the general title of applied microeconomics. In recent times,
            his research has focused on analysis of the effects of taxation and evaluation of reform
            options, and environmental economics with a focus on water policy operation and reform
            options and economic issues with climate change mitigation and adaptation.   
        `,
        links: [
            "https://fbe.unimelb.edu.au/economics/our-people/honorary_staff/profiles/john-freebairn"
        ]
    },
    {
        name: "Richard Eccleston",
        image: placeholderImage,
        bio: `Richard Eccleston is a professor and Director of the Tasmanian Policy Exchange at the
        University of Tasmania. Richard is a specialist in social and economic policy and has worked
        on a wide range of policy issues, developing practical evidence-based solutions to some of
        the most significant policy challenges facing the community. In recent years, Richard has
        worked with a range of governments and led projects on a wide range of topics from tax
        reform, housing affordability, regional governance and development to climate and energy
        policy. He has been a Fulbright Senior Scholar based in Washington DC and was the
        Founding Director of the Institute for Social Change at the University of Tasmania.`,
        links: ["https://discover.utas.edu.au/Richard.Eccleston"]
    }
]

export default function PeoplePage() {
    const peopleCards = PEOPLE.map((person) => <PeopleCard name={person.name} image={person.image} bio={person.bio} links={person.links} key={person.name}/>)
    return (
        <div className="peoplePage">
            <AppHeader />
            <div className="appHeaderPadding"></div>
            <div className="headingContainer">
                <h1>People</h1>
            </div>
            <article className="pageContainer">
                <h3>Chief Investigators</h3>
                {peopleCards}
            </article>
        </div>
    )
}