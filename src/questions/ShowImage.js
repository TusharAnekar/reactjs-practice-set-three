export function ShowImage ({link, imgHeight, imgWidht}) {
    return(
        <section>
            <h1>Image</h1>
            <img src={link} alt="Random" height={imgHeight} widht={imgWidht}></img>
        </section>
    )
}