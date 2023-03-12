import styles from "./style";

function App() {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>NAVBAR</div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>Hero</div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            Stats <br />
            Business <br />
            Billing <br />
            CardDeal <br />
            Testimonials <br />
            Clients <br />
            CTA <br />
            Footer <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;