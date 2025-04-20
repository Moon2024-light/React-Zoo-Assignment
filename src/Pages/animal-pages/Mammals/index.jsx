import { MainContent } from "../../../components/MainContent"
import { Sidebar } from "../../../components/Sidebar"
import styles from "../animal-pages.module.css"

export const Mammals = ({ title, chosenAnimal, click }) => {
  return (
    <>
      {/* Hardcoding the 'mammals' class temporarily for debugging */}
      <div className={`${styles.bgContainer} ${styles.mammals}`}></div>

      <div className={styles.main}>
        <Sidebar groupPage={title} press={click} />
        <MainContent groupPage={title} clickedAnimal={chosenAnimal} />
      </div>
    </>
  );
};
