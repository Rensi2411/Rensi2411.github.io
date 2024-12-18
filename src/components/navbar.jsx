// import "../styles/navbar.css";
import style from "../styles/navbar.module.css";
import pdf from "../pages/Images/Rensi Dudhat-Full Stack Web Developer.pdf";

export default function Navbar() {
  return (
    //--
    <nav className="navbar navbar-expand-lg navSec ps-xl-0 ">
      <div
        id="nav-menu"
        className={`container-fluid fixed-top pe-2 ps-2 pe-sm-5 ps-sm-5 ps-md-5  ps-lg-0 ps-xl-5   pe-md-5  pe-lg-0 pe-xl-5 pt-1 pb-1 ${style.nav_menu}`}
      >
        <a
          className="navbar-brand d-flex ms-lg-5 ms-md-0  align-items-center  "
          href="#"
        >
          <span className={style.span}>&lt;R</span>Rensi{""}
          <span style={{ color: "rgb(49, 175, 228)", fontSize: "22px" }}>
            /&gt;
          </span>
          <span>
            {/* <img
              className="ms-lg-2 ms-md-2 ms-2 "
              src="https://camo.githubusercontent.com/beb64ff21c883e318e4f5db5231c2ba4175705bea1c9249e82a41ab375db4f75/68747470733a2f2f6d65646961322e67697068792e636f6d2f6d656469612f51737347456d706b79454f684243623765312f67697068792e6769663f6369643d656366303565343761306e336769316266716e74716d6f62386739616964316f796a327772336473336d67373030626c267269643d67697068792e676966"
              width="35"
            /> */}
          </span>
        </a>
        <button
          className={`navbar-toggler ${style.hamburger}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav align-items-center ">
            <a
              className="nav-link home active me-lg-2 me-xl-4  text-info-emphasis "
              aria-current="page"
              href="#home"
            >
              HOME
            </a>
            <a
              className="nav-link about active me-lg-2 me-xl-4  text-info-emphasis "
              aria-current="page"
              href="#about"
            >
              ABOUT
            </a>
            <a
              className="nav-link skills active me-lg-2 me-xl-4 text-info-emphasis "
              aria-current="page"
              href="#skills"
            >
              SKILLS
            </a>
            <a
              className="nav-link projects active me-lg-2 me-xl-4  text-info-emphasis"
              aria-current="page"
              href="#projects"
            >
              PROJECTS
            </a>
            <a
              className="nav-link active me-lg-2 me-xl-4 text-info-emphasis"
              aria-current="page"
              href="#github"
            >
              GITHUB
            </a>
            <a
              className="nav-link experience active me-lg-2 me-xl-4 text-info-emphasis"
              aria-current="page"
              href="#experience"
            >
              EXPERIENCE
            </a>

            <a
              className="nav-link contact active me-lg-2 me-xl-4  text-info-emphasis"
              aria-current="page"
              href="#contact"
            >
              CONTACT
            </a>
            <a
              className="nav-link resume active   me-5 text-info-emphasis"
              id="resume-link-1"
              aria-current="page"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1qiNEvCVQNxBuxLanW970kNQpAblv9p8I/view?usp=sharing"
                )
              }
              download="Rensi Dudhat-Full Stack Web Developer"
              href={pdf}
            >
              <button id="resume-button-1" className={`${style.button} ms-5`}>
                <span className={style.buttonContent}>Resume </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
