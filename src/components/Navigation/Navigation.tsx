import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import Icon from "../../shared/Icons/Icon";

const Navigation: React.FC = () => {
  return (
    <header>
      <section className={css.hero}>
        <nav className={css.navigation}>
          <Icon className={css.logo} id="logo" width={136} height={15} />
          <div className={css.navButtons}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.navButton} ${css.active}` : css.navButton
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.navButton} ${css.active}` : css.navButton
              }
              to="/catalog"
            >
              Catalog
            </NavLink>
          </div>
        </nav>
      </section>
    </header>
  );
};

export default Navigation;
