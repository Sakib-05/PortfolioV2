export default function Footer() {
    return(
        <div className="Footer">
            <h1 style={{fontSize:"0.95rem"}}>My Portfolio</h1>
            <section style={{paddingBottom:"10px"}}>
               
                <div>
                    <h1 style={{fontSize:"0.9rem",marginBottom:"0px",marginTop:"10px"}}>Contanct</h1>
                    <div style={{display:"flex",alignItems:"center",margin:"0px",paddingInline:"5px"}}>
                        <img src="./Images/mail-icon.png" alt="email" style={{width:"20px",height:"20px",paddingRight:"5px",margin:"0px"}} />
                        <p style={{fontSize:"0.9rem"}}>sakibimamul03@gmail.com</p>
                    </div>
                    <div style={{display:"flex",alignItems:"center",margin:"0px",paddingInline:"5px"}}>
                        <img src="./Images/phone-call.png" alt="phone" style={{width:"15px",paddingRight:"5px"}} />
                        <p style={{fontSize:"0.9rem"}}>07368520305</p>
                    </div>
                    
                </div>
                <div>
                        <h1 style={{fontSize:"1rem",marginBottom:"0px",marginTop:"10px"}}>socials</h1>
                        <br />
                        <div style={{display:"flex",gap:"10px"}}>
                            <a href="https://www.linkedin.com/in/sbque05/" target="_blank" ><img src="./Images/linkedin-logo-grey.webp" alt="linkedin" style={{width:"35px"}}/></a>
                            <a href="https://github.com/Sakib-05" target="_blank"><img src="./Images/github icon.png" alt="github" style={{width:"35px"}} /></a>
                            <a href="https://www.instagram.com/soku_ui/" target= "_blank"><img src="./Images/instagram-icon-grey.webp" alt="instagram" style={{width:"35px"}} /></a>
                        </div>
                    </div>


            </section>

            <section style={{display:"flex",justifyContent: "center", backgroundColor:"grey",fontSize:"0.75rem",paddingInline:"50px"}}>
                <p>2025 © Sakib Imamul Hoque Portfolio website - Privacy Policy </p>
                
            </section>
        </div>
    );
    
};
