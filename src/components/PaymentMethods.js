import styles from "./css/PaymentMethods.module.css";

const PaymentMethods = () => {
  return (
    <div className={styles.grandCadre}>
      <div className={styles.cadre} />
      <div className={styles.cartesBancaires}>
        <div className={styles.cadre1} />
        <img
          className={styles.chevronRightIcon}
          alt=""
          src="/chevron-right@2x.png"
        />
        <img className={styles.visaIcon} alt="" src="/visa@2x.png" />
        <img
          className={styles.mastercardCreditCard}
          alt=""
          src="/mastercard-credit-card@2x.png"
        />
        <div className={styles.cartesBancaires1}>{`Cartes Bancaires `}</div>
      </div>
      <div className={styles.cash}>
        <div className={styles.cadre1} />
        <img
          className={styles.chevronRightIcon1}
          alt=""
          src="/chevron-right@2x.png"
        />
        <img
          className={styles.expensivePriceIcon}
          alt=""
          src="/expensive-price@2x.png"
        />
        <div className={styles.cash1}>Cash</div>
      </div>
      <div className={styles.paiementMobile}>
        <div className={styles.cadre1} />
        <img
          className={styles.chevronRightIcon2}
          alt=""
          src="/chevron-right@2x.png"
        />
        <img
          className={styles.mobilePaymentIcon}
          alt=""
          src="/mobile-payment@2x.png"
        />
        <div className={styles.paiementsMobiles}>Paiements mobiles</div>
      </div>
      <div className={styles.paypal}>
        <div className={styles.cadre1} />
        <img
          className={styles.chevronRightIcon3}
          alt=""
          src="/chevron-right@2x.png"
        />
        <img className={styles.paypalIcon} alt="" src="/paypal@2x.png" />
        <div className={styles.paiementsMobiles}>Paypal</div>
      </div>
    </div>
  );
};

export default PaymentMethods;
