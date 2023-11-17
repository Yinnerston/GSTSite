import AppFooter from "./components/AppFooter";
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
    },
    {
        name: "Rick Krever",
        image: placeholderImage,
        bio: `Rick Krever is a professor at University of Western Australia Law School and an
        international fellow at the Centre for Business Taxation at the University of Oxford. He is the
        author of many research volumes, textbooks and journal articles. He has been seconded to
        both the Commonwealth Treasury and Australian Taxation Office and international agencies
        such as the International Monetary Fund and has provided tax and law design assistance for
        organisations such as the World Bank and the Asian Development Bank as well as numerous
        ministries of finance and treasury departments in Asia, Africa, the Pacific, the Caribbean and
        Eastern European nations. Rick was made a Member of the Order of Australia in recognition
        of his contributions to tax academia in Australia.`,
        links: ["https://research-repository.uwa.edu.au/en/persons/rick-krever"]
    },
    {
        name: "Lachlan Johnson",
        image: placeholderImage,
        bio: `Lachlan Johnson is a research fellow at the Tasmanian Policy Exchange (TPE) of the
        University of Tasmania. He completed his PhD on the role of knowledge networks in
        regional innovation clusters at the University of Tasmania in early 2021. While at the TPE, an
        impact-focussed applied policy research centre at the University of Tasmania, Lachlan plays
        a leading role in project design, data analysis and visualisation, research and writing, and
        liaising with stakeholders. Lachlan has contributed extensively to the TPE’s work on the
        Future of Local Government Review, analysis of greenhouse gas emissions data, and
        Tasmanian transport decarbonisation policy.`,
        links: ["https://discover.utas.edu.au/Lachie.Johnson"]
    },
    {
        name: "Yan Xu",
        image: placeholderImage,
        bio: `Yan Xu is a Scientia Associate Professor of Tax Law at the University of New South Wales
        (UNSW) and an Adjunct Associate Profession in the Faculty of Law at the University of
        Hong Kong. Yan has been a Fulbright Senior Scholar and was based at Columbia Law School
        as a Visiting Fellow in 2014-15. She has published in a range of international journals,
        presented papers at high-level international conferences, made presentations on invitation
        from prominent bodies, including the Commonwealth Treasury and International Fiscal
        Association, and is often invited to act as referee for top-tier law journals and academic
        books. Yan has successfully secured several highly competitive government grants including
        Australian Research Council (ARC) Discovery Projects and Hong Kong Research Grants
        Council General Research Fund grants (equivalent to ARC Discovery Projects). Her research
        interests include comparative tax law and policy, international taxation and environment
        taxation.`,
        links: ["https://www.unsw.edu.au/staff/yan-xu"]
    },

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
                <h3 className="peopleChiefInvestigatorHeader">Chief Investigators</h3>
                {peopleCards}
            </article>
            <AppFooter />
        </div>
    )
}