export function Donation ({DonationData}) {
    return(
        <section>
            <h1>Donation</h1>
            <p> Total Donation Collected: {
                DonationData.reduce((total, {Donation}) => total+=Donation, 0)
            }</p>
        </section>
    )
}