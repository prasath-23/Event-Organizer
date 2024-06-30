import styles from "../../style";
import Click from "./Button";

const CTA = ({isAdmin}) =>{

  if (!isAdmin) {
    return null; // Render nothing if condition is false
  }
  return(
      <section id="host" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-secondary-gradient-2 rounded-[20px] shadow-2xl`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>"Are you hosting an event?"</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to host event and organize your plan
          anywhere on the planet.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Click />
      </div>
    </section>
  );
}

export default CTA;
