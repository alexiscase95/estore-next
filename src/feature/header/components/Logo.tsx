import Image from 'next/image';
import Link from 'next/link';

/**
 * HeaderLogo component - Displays the site logo
 * It wraps the logo image in a link that navigates to the home page when clicked.
 * 
 * @returns {JSX.Element} The rendered HeaderLogo component.
 */

const HeaderLogo = () => (
  <section id="header-logo-section">
      <Link
        data-dtm="global nav"
        href="/"
        aria-label="Go to Chevrolet Accessories Home"
      >
        <Image
          src="https://ecom-dam.ext.gm.com/marketing/accessories/chevrolet/na/usa/en_us/images/Chevrolet_Accessories_Logo_2023.svg"
          alt="Chevrolet Accessories logo"
          width={150} 
          height={50}
        />
      </Link>
    </section>
);

export default HeaderLogo;