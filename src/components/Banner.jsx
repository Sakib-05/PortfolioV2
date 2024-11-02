export default function Banner() {
    return (
        <div className="Banner">
            <div className="introduction">
                <h2>welcome to my portfolio website</h2>
                <h1>Hi! I'm Sakib</h1>
                <p>As a second-year BSc Computer Science student at City University, I am known for my resilience,
openness to new ideas, and strong logical thinking skills. Driven by a passion for technology and
algorithms, I am dedicated to building a successful career in software engineering. My goal is to
become a versatile full-stack developer, capable of tackling complex challenges and delivering
innovative solutions.</p>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/sbque05/" target="_blank" ><img src="./Images/linkedin-logo-grey.webp" alt="linkedin"/></a>
                    <a href="https://github.com/Sakib-05" target="_blank"><img src="./Images/github-icon-grey.webp" alt="github" /></a>
                    <a href="https://www.instagram.com/soku_ui/" target= "_blank"><img src="./Images/instagram-icon-grey.webp" alt="instagram" /></a>
                </div>
            </div>
            <img id="profilePic" src="./Images/profile picture.jpeg" alt="profile picture" />
        </div>
    );
    
};
