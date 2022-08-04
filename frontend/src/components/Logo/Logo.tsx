import { Container, StyledLogo } from './Logo.styles';
import { useLocation } from 'react-router-dom';

function Logo() {
  const { pathname } = useLocation();
  const mainPage = pathname === '/';

  return (
    <Container mainPage={mainPage}>
      <StyledLogo mainPage={mainPage} />
      <svg width="145" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            className={'part-one'}
            d="M14.322 39.27a2.995 2.995 0 0 1-3.077-3.054 3.008 3.008 0 0 1 3.077-3.063 2.955 2.955 0 0 1 1.473.38c.44.238.807.593 1.06 1.026l-.841.48a1.702 1.702 0 0 0-.69-.69 1.953 1.953 0 0 0-1.002-.235 2.045 2.045 0 0 0-1.528.596 2.261 2.261 0 0 0 0 3.027 2.217 2.217 0 0 0 2.54.343c.29-.16.527-.402.68-.696l.84.48c-.25.434-.614.791-1.052 1.033-.452.252-.962.38-1.48.373Zm7.541-6.006v.925h-1.657v4.97h-.961V34.2h-1.663v-.926l4.281-.01Zm3.304 0a1.886 1.886 0 0 1 1.388.555 1.86 1.86 0 0 1 .563 1.379 1.908 1.908 0 0 1-1.951 1.934h-1.201v2.027h-.961v-5.886l2.162-.01Zm0 2.96a.944.944 0 0 0 .706-.286c.187-.2.287-.467.279-.74a1 1 0 0 0-.6-.945.928.928 0 0 0-.385-.072h-1.201v2.052l1.2-.01Zm8.081 2.162a2.941 2.941 0 0 1-2.162.884 3.015 3.015 0 0 1-3.05-3.054 3.053 3.053 0 1 1 5.212 2.162v.008ZM29.6 37.73a2.03 2.03 0 0 0 1.487.596 2.003 2.003 0 0 0 1.48-.596 2.053 2.053 0 0 0 .606-1.514 2.029 2.029 0 0 0-.606-1.506 1.991 1.991 0 0 0-1.48-.603 2.019 2.019 0 0 0-1.487.603 2.043 2.043 0 0 0-.598 1.506 2.066 2.066 0 0 0 .605 1.514H29.6Zm9.37 1.441v-4.005l-2.763 3.993h-.757v-5.886h.961v3.993l2.775-3.993h.757v5.886l-.973.012Zm6.388-5.886v.925H43.7v4.95h-.96v-4.962h-1.666v-.925l4.282.012Zm2.118 4.95h2.607v.924h-3.567v-5.886h3.531v.925h-2.57v1.53h2.354v.916h-2.355v1.59Zm3.429.924v-.891a.824.824 0 0 0 .824-.27c.186-.23.279-.67.279-1.32v-3.405h3.942v5.886h-.961V34.2h-2.011v2.462c.01.44-.046.88-.168 1.304-.077.304-.236.58-.461.798-.189.167-.413.29-.656.355a2.359 2.359 0 0 1-.788.041Zm8.81-3.868a1.87 1.87 0 0 1 1.388.562 1.963 1.963 0 0 1 0 2.751 1.884 1.884 0 0 1-1.389.555h-2.162v-5.886h.961v2.018h1.201Zm0 2.96a.943.943 0 0 0 .706-.286c.18-.199.276-.46.269-.728a1.002 1.002 0 0 0-.6-.945.926.926 0 0 0-.385-.071h-1.202v2.052l1.211-.022Zm6.7-4.978h.96v5.886h-.96v-2.546H63.89v2.546h-.96v-5.886h.96v2.403h2.523v-2.403Zm6.397 5.886-.41-1.184h-2.506l-.413 1.184h-1.05l2.135-5.886h1.173l2.114 5.886H72.81Zm-2.597-2.095h1.867l-.935-2.657-.932 2.657Zm8.796-3.79v5.885h-.962v-2.143h-.934l-1.425 2.143h-1.093l1.497-2.23a1.883 1.883 0 0 1-.961-.662 1.797 1.797 0 0 1-.37-1.1 1.88 1.88 0 0 1 1.89-1.894h2.358Zm-2.355 2.882h1.389V34.19h-1.389a.87.87 0 0 0-.656.285 1.04 1.04 0 0 0 0 1.396.874.874 0 0 0 .656.279v.007ZM87.57 39.16h-1.15l-2.321-2.801v2.801h-.961v-5.886h.96v2.643l2.237-2.643h1.153l-2.38 2.866 2.462 3.02Zm5.466-.773a3.075 3.075 0 1 1 .891-2.163 2.937 2.937 0 0 1-.891 2.163Zm-3.65-.656a2.037 2.037 0 0 0 1.49.596 2.007 2.007 0 0 0 1.48-.596 2.054 2.054 0 0 0 .605-1.514 2.029 2.029 0 0 0-.605-1.506 1.994 1.994 0 0 0-1.48-.603 2.021 2.021 0 0 0-1.49.603 2.05 2.05 0 0 0-.595 1.506 2.074 2.074 0 0 0 .595 1.514Zm11.479-4.457v5.886h-.96v-4.197l-1.793 2.96h-.115l-1.8-2.967v4.204h-.96v-5.886h1.042l1.775 2.943 1.783-2.943h1.028Zm5.924 0v5.886h-.961V34.2h-2.402v4.96h-.961v-5.886h4.324Zm5.435 5.886-.414-1.184h-2.505l-.413 1.184h-1.05l2.135-5.886h1.163l2.129 5.886h-1.045Zm-2.6-2.095h1.867l-.932-2.657-.935 2.657Zm8.183-3.79h.961v5.885h-.961v-2.546h-2.523v2.546h-.961v-5.886h.961v2.403h2.523v-2.403Zm6.097 5.885v-3.993l-2.775 3.993h-.756v-5.886h.961v3.993l2.779-3.993h.757v5.886h-.966Zm6.624-5.886v5.886h-.961v-2.143h-.933l-1.427 2.143h-1.093l1.495-2.23a1.872 1.872 0 0 1-.961-.662 1.794 1.794 0 0 1-.37-1.1 1.872 1.872 0 0 1 1.89-1.893h2.36Zm-2.355 2.883h1.386V34.19h-1.386a.869.869 0 0 0-.656.285 1.04 1.04 0 0 0 0 1.396.881.881 0 0 0 .656.279v.007ZM.148 39.88h6.126l4.084-25.946-3.603-9.61L.148 39.88ZM35.704 25.586h-5.646l-1.802-11.532 3.484-9.61 3.964 21.142ZM68.376 25.586h-4.084V.96h13.093v4.084h-9.009v20.54ZM81.23.96v24.626h4.083V14.414h10.811v11.172h3.964V.96h-3.964v9.37h-10.81V.96h-4.085ZM105.854.96v24.626h3.964l10.931-16.937v16.937h3.964V.96h-3.964l-10.931 16.937V.96h-3.964ZM129.878 0v3.964h5.525V40h3.964V3.964h5.406V0h-14.895Z"
            fill="#fff"
          />
          <path
            className={'part-one'}
            d="M37.385 25.586h4.205l2.042-5.045h10.45l1.922 5.045h4.444L51.2.96h-4.684l-9.13 24.625Zm15.256-9.13h-7.568l3.844-10.09 3.724 10.09Z"
            fill="#fff"
          />
          <path
            d="M13.361.96H8.076l9.49 26.187h3.483L30.54.961h-5.406l-5.765 16.216L13.361.961Z"
            fill="#4FA6D9"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path
              className={'part-one'}
              fill="#fff"
              transform="translate(.148)"
              d="M0 0h144.625v40H0z"
            />
          </clipPath>
        </defs>
      </svg>
    </Container>
  );
}

export default Logo;
