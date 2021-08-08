import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { useTransition } from 'react-spring';

import Logo from "../../images/icon.png"
import ScrollToTop from '../UI/scrollToTop';

const StyledLink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const LogoNavBar = ({ notOnePageSection, setMenuOpened }) => {
  // State to show or hide scroll to top component, gets trigged based on the scroll link component
  const [showScrollTop, setShowScrollTop] = useState(false);
  // Animation
  const ScrollTopTransition = useTransition(showScrollTop, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  // If is not a section from the index(no one page scroll link), render the gatsby link instead
  return notOnePageSection  ? <div>.</div>
    //<GatsbyStyledLink to="/#about-me">{renderLogo()}</GatsbyStyledLink>
   : (
    <>
      <StyledLink
        to="header"
        smooth={true}
        spy={true}
        // When header section is active, hide scroll to top When inactive, show scroll to top
        onSetActive={() => setShowScrollTop(false)}
        onSetInactive={() => setShowScrollTop(true)}
        onClick={() => setMenuOpened(false)}
      >
        {/*renderLogo()*/}
        <img src={Logo} alt="Logo" style={{height:"40px", width:"100px"}} />
      </StyledLink>
      {ScrollTopTransition.map(
        ({ item, key, props }) =>
          item && <ScrollToTop style={props} key={key} />
      )}
    </>
  );
};

export default LogoNavBar;
