import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <InstructionsComponent></InstructionsComponent>
      </main>
    </div>
    <script async id="slcLiveChat" src="https://widget.sonetel.com/SonetelWidget.min.js" data-account-id="208422341"></script>
  );
}
