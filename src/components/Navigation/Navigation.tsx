import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import Icon from "../../shared/Icons/Icon";

const Navigation: React.FC = () => {
  return (
    <header>
      <nav className={css.navigation} aria-label="Main Navigation">
        <Icon className={css.logo} id="logo" width={136} height={15} />
        <ul className={css.navButtons}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.navButton} ${css.active}` : css.navButton
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.navButton} ${css.active}` : css.navButton
              }
              to="/catalog"
            >
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
