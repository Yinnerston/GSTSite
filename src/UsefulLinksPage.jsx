import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

const USEFUL_LINKS = [
    {
        text: `OECD, “Fiscal federalism network”`,
        link: `https://www.oecd.org/tax/federalism/`
    },
    {
        text: `Productivity Commission, on horizontal fiscal equalisation:`,
        link: `https://www.pc.gov.au/search?collection=productivity-commission-web&amp;form=site-
        search&amp;query=fiscal+equalisation&amp;start_rank=1`
    },
    {
        text: `The Grattan Institute, on tax reform:`,
        link: `https://grattan.edu.au/tax-reform/`
    },
    {
        text: `ANU Tax and Transfer Policy Institute, “Publications”:`,
        link: `https://taxpolicy.crawford.anu.edu.au/taxpolicy-publications`
    },
    {
        text: `Publius: The Journal of Federalism, a leading journal devoted to federalism:`,
        link: `https://academic.oup.com/publius`
    }
]

export default function UsefulLinksPage() {

    const usefulLinkEntries = USEFUL_LINKS.map((link) =>    (
        <div>
            <p>{link.text}</p>
            <a href={link.link}>
                <p>{link.link}</p>
            </a>
            <br />
        </div>
    ))
    return (
        <div className="usefulLinksPage">
            <AppHeader />
            <div className="appHeaderPadding"></div>
            <div className="headingContainer">
                <h1>Publications</h1>
            </div>
            <article className="pageContainer">
                {usefulLinkEntries}
            </article>
            <AppFooter />
        </div>
    )
}