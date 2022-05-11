import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {useSelector,useDispatch} from 'react-redux';
import { selectCurrentUser } from "../../store/user/user.selector";

import {selectIsCartOpen} from '../../store/cart/cart.selector'
import {signOutStart} from '../../store/user/user.action';
import { NavigationContainer,LogoContainer,NavLink,NavLinksContainer } from './navigation.styles';

const Navigation = () => {
  const currentUser=useSelector(selectCurrentUser); 
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch=useDispatch();
  const signOutUser =()=>dispatch(signOutStart()); 

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
