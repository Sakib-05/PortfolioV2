import { useState } from "react";

export default function NavBar() {
    const [theme, setTheme] = useState(true);
    let dark = "./images/dark icon.png";
    let light = "./images/light icon.webp";

    return(
        <div className="NavBar">
            <h2>MY PORTFOLIO</h2>

            <section>
                {theme ? (<img onClick={()=>setTheme(!theme)} src={dark} alt="dark" />):(<img onClick={()=>setTheme(!theme)} src={light} alt="light" />) }
                <a href="/images/CV.pdf" target="_blank">resume</a>
            </section>

        </div>



    );
    
};