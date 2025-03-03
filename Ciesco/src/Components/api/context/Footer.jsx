import React, { createContext, useState } from "react";
import { FooterData } from "../../data/footer.data";

export const FooterItemContext = createContext();

export const FooterProvider = ({ children }) => {
  const [footer, setFooter] = useState(FooterData);

  return (
    <>
      <FooterItemContext.Provider value={{ footer, setFooter }} >
        {children}
      </FooterItemContext.Provider>
    </>
  );
};
