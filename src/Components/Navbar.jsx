import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

function Navbar() {
    return (
        <header>
            <nav className="navbar-container">
                <h3 className="navbar-logo">Rasya</h3>
                <ul className="navbar-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <ul className="navbar-socials">
                    <li><a href="https://github.com/rasyatsaniputra" target='_blank'><GitHubIcon /></a></li>
                    <li><a href="https://instagram.com/rasyatsaniputra001/" target='_blank'><InstagramIcon /></a></li>
                    <li><a href="https://facebook.com/profile.php?id=100070320450328" target='_blank'><FacebookIcon /></a></li>
                    <li><a href="https://x.com/rasyatsani123" target='_blank'><XIcon /></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar