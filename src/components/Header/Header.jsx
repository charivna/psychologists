import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { useState, useEffect } = require('react');
const {
  Nav,
  Logo,
  Psycho,
  NavList,
  Home,
  Catalog,
  NavBtn,
  Btn,
  HeaderContainer,
  Name,
  AuthWrapper,
} = require('./Header.styled');
const { NavLink } = require('react-router-dom');
const { LogInModal } = require('components/ModalLogIn/LogInModal');
const { RegisterModal } = require('components/ModalRegister/RegisterModal');

const Header = () => {
  const [isModalLoginOpen, setModalLoginOpen] = useState(false);
  const [isModalRegOpen, setModalRegOpen] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const handlerClickLogin = () => {
    setModalLoginOpen(true);
  };

  const handlerClickReg = () => {
    setModalRegOpen(true);
  };

  const handlerCloseLoginModal = () => {
    setModalLoginOpen(false);
  };

  const handlerCloseRegModal = () => {
    setModalRegOpen(false);
  };

  const userSignOut = () => {
    signOut(auth)
      .then(() => toast.success('You have successfully logged out'))
      .catch(error => {
        toast.error(`Logout failed: ${error.message}`);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Nav>
          <Logo to="/">
            <Psycho>psychologists.</Psycho>services
          </Logo>
          <NavList>
            <Home>
              <NavLink to="/">Home</NavLink>
            </Home>
            <Catalog>
              <NavLink to="/catalog">Psychologists</NavLink>
            </Catalog>
            {/* <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li> */}
          </NavList>
          {authUser ? (
            <AuthWrapper>
              <Name>{authUser.displayName}</Name>
              <Btn onClick={userSignOut}>LogOut</Btn>
            </AuthWrapper>
          ) : (
            <NavBtn>
              <li>
                <Btn onClick={handlerClickLogin}>Log In</Btn>
              </li>
              <li>
                <Btn onClick={handlerClickReg}>Registration</Btn>
              </li>
            </NavBtn>
          )}
        </Nav>
        {isModalLoginOpen && <LogInModal onClose={handlerCloseLoginModal} />}
        {isModalRegOpen && <RegisterModal onClose={handlerCloseRegModal} />}
      </HeaderContainer>
    </>
  );
};

export default Header;
