import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserTie, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';
import ReactTooltip from "react-tooltip";

library.add(faUserTie, faBriefcase, fab)

export const Navbar = () => {
    const router = useRouter();

    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id={styles.mainNav}>
            <div className="container px-4">
                <a className="navbar-brand" onClick={() => router.push('#page_top')}>shashank.work</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className={styles.navicon}><FontAwesomeIcon icon={faUserTie} size="xs" className="nav-item nav-link" data-tip data-for="aboutTip" onClick={() => router.push('#about')} /></li>
                        <li className={styles.navicon}><FontAwesomeIcon icon={faBriefcase} size="xs" className="nav-item nav-link" data-tip data-for="resumeTip" onClick={() => router.push('#experience')} /></li>
                        <li className={styles.navicon}><FontAwesomeIcon icon={['fab', 'linkedin']} size="xs" className="nav-item nav-link" data-tip data-for="linkedTip" onClick={() => window.location.href = 'https://www.linkedin.com/in/shashankkmr/'} /></li>
                        <li className={styles.navicon}><FontAwesomeIcon icon={['fab', 'instagram']} size="xs" className="nav-item nav-link" data-tip data-for="instaTip" onClick={() => window.location.href = 'https://www.instagram.com/ctrl.sk/'} /></li>
                    </ul>
                    <ReactTooltip id="instaTip" place="bottom" effect="solid" type="light" delayShow="100" delayHide="100">@ctrl.sk</ReactTooltip>
                <ReactTooltip id="linkedTip" place="bottom" effect="solid" type="light" delayShow="100" delayHide="100">LinkedIn</ReactTooltip>
                <ReactTooltip id="aboutTip" place="bottom" effect="solid" type="light" delayShow="100" delayHide="100">About</ReactTooltip>
                <ReactTooltip id="resumeTip" place="bottom" effect="solid" type="light" delayShow="100" delayHide="100">Experience</ReactTooltip>
                </div>
            </div>
            </nav>
    );
};