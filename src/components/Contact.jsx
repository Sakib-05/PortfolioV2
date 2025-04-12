export default function Contact() {
    return (
        <div className="Contact">
            <h1>Contact Me</h1>
            <p style={{ textAlign: "center" }}>Feel free to reach out to me through any of the following platforms:</p>
            <br />
            <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", gap: "20px" }}>
                <div style={{ textAlign: "center" }}>
                    <img src="./Images/mail-icon.png" alt="Email" style={{ width: "50px", marginBottom: "10px" }} />
                    <p>Email: <a href="mailto:sakibimamul03@gmail.com" style={{ textDecoration: "none", color: "blue" }}>sakibimamul03@gmail.com</a></p>
                </div>
                <div style={{ textAlign: "center" }}>
                    <img src="./Images/phone-call.png" alt="Phone" style={{ width: "50px", marginBottom: "10px" }} />
                    <p>Phone: <a href="tel:+447368520305" style={{ textDecoration: "none", color: "blue" }}>07368520305</a></p>
                </div>
                <div style={{ textAlign: "center" }}>
                    <img src="./Images/LN logo.png" alt="LinkedIn" style={{ width: "50px", marginBottom: "10px" }} />
                    <p><a href="https://www.linkedin.com/in/sbque05/" target="_blank" style={{ textDecoration: "none", color: "blue" }}>LinkedIn</a></p>
                </div>
                <div style={{ textAlign: "center" }}>
                    <img src="./Images/github logo.png" alt="GitHub" style={{ width: "50px", marginBottom: "10px" }} />
                    <p><a href="https://github.com/Sakib-05" target="_blank" style={{ textDecoration: "none", color: "blue" }}>GitHub</a></p>
                </div>
                <div style={{ textAlign: "center" }}>
                    <img src="./Images/instagram logo.png" alt="Instagram" style={{ width: "50px", marginBottom: "10px" }} />
                    <p><a href="https://www.instagram.com/soku_ui/" target="_blank" style={{ textDecoration: "none", color: "blue" }}>Instagram</a></p>
                </div>
            </div>
        </div>
    );
};
