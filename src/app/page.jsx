import styles from "./page.module.scss";
import TopDiv from "../../Components/Landing Page/TopDiv";
import PlanningTools from "../../Components/Landing Page/PlanningTools";
import Downloads from "../../Components/Landing Page/Downloads";

export default function Home() {
  return (
    <main className={styles.main}>
      <TopDiv />
      <PlanningTools />
      <Downloads />
    </main>
  );
}
