import { useMemo } from "react";
import styles from "./css/Coupon.module.css";

const Coupon = ({
  displayText,
  showTrailingIcon = true,
  placeholderFontFamily,
}) => {
  const placeholderStyle = useMemo(() => {
    return {
      fontFamily: placeholderFontFamily,
    };
  }, [placeholderFontFamily]);

  return (
    <div className={styles.stateempty}>
      <div className={styles.placeholder} style={placeholderStyle}>
        {displayText}
      </div>
      {showTrailingIcon && (
        <img className={styles.trailingIcon} alt="" src="/trailing-icon.svg" />
      )}
    </div>
  );
};

export default Coupon;
