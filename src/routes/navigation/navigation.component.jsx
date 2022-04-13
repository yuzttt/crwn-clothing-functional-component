import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer,LogoContainer,NavLink,NavLinksContainer } from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <LogoContainer to="/shop">
            SHOP
          </LogoContainer>
          <LogoContainer to="/contact">
            CONTACT
          </LogoContainer>
          {currentUser ? (
            <NavLink onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <LogoContainer to="/signIn">
              SIGNIN
            </LogoContainer>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
