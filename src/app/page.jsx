import styles from "./page.module.scss";
import TopDiv from "../../Components/Landing Page/TopDiv";
import PlanningTools from "../../Components/Landing Page/PlanningTools";
import Downloads from "../../Components/Landing Page/Downloads";
import Inhouse from "../../Components/Landing Page/Inhouse";
import CardsContainer from "../../Components/Landing Page/CardsContainer";

export default function Home() {
  return (
    <main className={styles.main}>
      <TopDiv />
      <PlanningTools />
      <Inhouse />
      <CardsContainer />
      <CardsContainer />
      <CardsContainer type={"Venue"} />
      <Downloads />
    </main>
  );
}
