import { useMemo } from "react";
import styles from "./css/Footer.module.css";

const Footer = ({ elginStCelinaTop }) => {
  const footerStyle = useMemo(() => {
    return {
      top: elginStCelinaTop,
    };
  }, [elginStCelinaTop]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.textBar}>
        <div className={styles.items}>
          <div className={styles.privacyPolicy}>Privacy policy</div>
          <div className={styles.privacyPolicy}>Sitemap</div>
          <div className={styles.privacyPolicy}>Terms of Use</div>
        </div>
        <div className={styles.allRightsReserved}>
          © 2021-2022, All Rights Reserved
        </div>
      </div>
      <div className={styles.text}>
        <div className={styles.text02}>
          <img className={styles.icon} alt="" src="/12-2@2x.png" />
          <div className={styles.thisIsA}>
            This is a company engaged in beauty in 2001. This has made more than
            2023 products every day since its establishment this is the only
            beauty company that is the top ranking one in all of Indonesia
          </div>
        </div>
        <div className={styles.text01}>
          <div className={styles.text011}>
            <img className={styles.icon1} alt="" src="/icon.svg" />
            <div className={styles.div}>(270) 555-0117 - (270) 555-2344</div>
          </div>
          <div className={styles.text011}>
            <img className={styles.icon1} alt="" src="/icon.svg" />
            <div className={styles.elginStCelina}>
              6391 Elgin St. Celina, Delaware 10299
            </div>
          </div>
          <div className={styles.text011}>
            <img className={styles.icon1} alt="" src="/icon.svg" />
            <div className={styles.privacyPolicy}>infotechbeauty@gmail.com</div>
          </div>
        </div>
      </div>
      <div className={styles.textMenu}>
        <div className={styles.footerMenu04}>
          <div className={styles.menu}>Menu</div>
          <div className={styles.privacyPolicy}>Hotme</div>
          <div className={styles.privacyPolicy}>Consultant</div>
          <div className={styles.privacyPolicy}>Product</div>
          <div className={styles.privacyPolicy}>Shop</div>
          <div className={styles.privacyPolicy}>About Us</div>
        </div>
        <div className={styles.footerMenu04}>
          <div className={styles.menu}>Product</div>
          <div className={styles.privacyPolicy}>Skincare</div>
          <div className={styles.privacyPolicy}>Handbody</div>
          <div className={styles.privacyPolicy}>Oil</div>
          <div className={styles.privacyPolicy}>Fashwash</div>
        </div>
        <div className={styles.footerMenu04}>
          <div className={styles.menu}>Service</div>
          <div className={styles.privacyPolicy}>Order</div>
          <div className={styles.privacyPolicy}>Bokeed</div>
          <div className={styles.privacyPolicy}>Payment</div>
          <div className={styles.privacyPolicy}>Delivery</div>
          <div className={styles.cashOnDelivery}>Cash On Delivery</div>
        </div>
        <div className={styles.footerMenu04}>
          <div className={styles.menu}>Support</div>
          <div className={styles.privacyPolicy}>Chat Online</div>
          <div className={styles.privacyPolicy}>Call Online</div>
          <div className={styles.privacyPolicy}>Language</div>
          <div className={styles.privacyPolicy}>Copyright</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
