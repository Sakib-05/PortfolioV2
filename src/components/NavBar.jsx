import { useState } from "react";

export default function NavBar() {

    return(
        <div className="NavBar">
            <h2>MY PORTFOLIO</h2>

            <section>
                <a href="/images/CV.pdf" target="_blank">
                    <div className="resume">
                        <img src="Images/download icon.png" alt="download" id="download-icon" />
                        <p>resume</p>
                    </div>
                </a>
            </section>

        </div>



    );
    
};
