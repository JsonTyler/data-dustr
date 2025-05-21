import { library } from '@fortawesome/fontawesome-svg-core';
import { faGoogle, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

if (typeof window !== 'undefined') {
    library.add(faGoogle, faFacebook, faInstagram, faLinkedin);
}
