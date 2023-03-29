import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const socials = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/zou-ken',
        icon: <FontAwesomeIcon icon={faLinkedin} size="2x" />,
    },
    {
        name: 'Github',
        url: 'https://github.com/kzou55',
        icon: <FontAwesomeIcon icon={faGithub} size="2x" />,
    },
];

export default socials;