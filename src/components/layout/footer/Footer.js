import FooterMobile from "./FooterMobile.js";
import FooterDesktop from "./FooterDesktop";
import ContactFormDialog from "../../common/dialog/ContactFormDialog.js";
import { isMobile } from "react-device-detect";
import { useState } from "react";

function Footer() {
  const [openContactForm, setOpenContactForm] = useState(false);

  const handleFormOpen = () => {
    setOpenContactForm(true);
  };

  const handleFormClose = () => {
    setOpenContactForm(false);
  };

  return (
    <>
      {isMobile ? (
        <FooterMobile onFormOpen={handleFormOpen} />
      ) : (
        <FooterDesktop onFormOpen={handleFormOpen} />
      )}
      {openContactForm && <ContactFormDialog close={handleFormClose} />}
    </>
  );
}

export default Footer;
