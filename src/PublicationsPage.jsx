import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
// TODO: Change to markdown
const PUBLICATIONS = [
    `John Freebairn, “Design Options to Reform State Property Taxes” (2023) 52(1)
    Australian Tax Review 30-38.`,
    `Richard Krever, “Directors’ Liability for Unpaid Company Tax in Australia:
    Revisiting the Case for Reform” (2023) 52(2) Australian Tax Review 1-19.`,
    `Kerrie Sadiq and Richard Krever, “Mandatory Disclosure Rules – Australia” in Georg
    Kofler, Michael Lang, Jeffrey Owens, Pasquale Pistone, Alexander Rust, Josef
    Schuch, Karoline Spies, Claus Staringer and Rita Szudocz, Stefanie Gombotz and
    Ashrita Prasad Kotha (eds.), Mandatory Disclosure Rules (IBFD, 2023) 75-96.`,
    `Lachlan Johnson and Richard Eccleston, “Interrogating Inclusive Growth:
    Implications for Conceptualisation, Measurement and Policy practice” (2023)
    62(2) Australian Economic Papers 362–376, https://doi.org/10.1111/1467-
    8454.12294.`,
    `Richard Eccleston and Lachlan Johnson, “Fiscal Equalisation and Subnational Tax
    Resources” in César Colino (ed.), Handbook of Federations and Federal Studies
    (Edward Elgar Publishing, 2023, forthcoming).`,
    `Richard Eccleston, Lachlan Johnson, Kimberly Brockman and Sarah Hyslop, “Local
    Government Funding in Tasmania: Considerations and Options” (Research paper
    prepared for the Tasmanian Future of Local Government Review, 2023, forthcoming),
    https://www.futurelocal.tas.gov.au/.`,
    `Lachlan Johnson, Richard Eccleston, Michael Lester, and Richard Herr, “State or
    Territory Chapter: Tasmania” in Patrick Dunleavy, Mark Evans and Alice Park (eds.),
    The Democratic Audit of Australia (LSE Press, 2023, forthcoming).
    Yan Xu, “The Long Gestation and Troubled Birth of the First Income Tax Law in
    Modern China: 1912-1937” in Peter Harris and Dominic de Cogan (eds.), Studies in
    The History of Tax Law (Volume 13) (Cambridge: Hart Publishing, 2023) 329-359.`,
    `Yan Xu, “Bad Debts and Insolvency in VAT/GST: Approaches Outside the EU” in
    George Kofler, Michael Lang, Pasquale Pistone, Alexander Rust, Joseph Schuch,
    Karoline Spies, Claus Strainger and IIze Kuniga (eds.), CJEU – Recent Developments
    in Value Added Tax 2021 (Linde Verlag, 2023) 103-130.`
]

export default function PublicationsPage() {
    const publicationEntries = PUBLICATIONS.map((publication) =>    (
        <div>
            <p>{publication}</p>
            <br />
        </div>
    ))
    return (
        <div className="publicationsPage">
            <AppHeader />
            <div className="appHeaderPadding"></div>
            <div className="headingContainer">
                <h1>Publications</h1>
            </div>
            <article className="pageContainer">
                {publicationEntries}
            </article>
            <AppFooter />
        </div>
    )
}