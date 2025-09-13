"use client";

import styles from '../app/css/faqs.module.css';

const FAQs = () => {
  const frequentClicked = (e) => {
    let dropDown = e.currentTarget;
    let dropDownAnswer =
      dropDown.parentElement.parentElement.children[0].children[1];

    if (dropDown.classList.contains(styles.active)) {
      dropDown.classList.remove(styles.active);
      dropDownAnswer.classList.remove(styles.active);
    } else {
      dropDown.classList.add(styles.active);
      dropDownAnswer.classList.add(styles.active);
    }
  };

  return (
    <>
      <section id="frequently" className={styles.frequently}>
        <header className={styles.frequentlyHeader}>
          <h2>Frequently asked questions</h2>
        </header>
        <div className={styles.frequentlyContainer}>
          <div className={styles.frequentQuestion}>
            <div className={styles.frequentQuestionLeft}>
              <h2>How much does delivery cost?</h2>
              <div className={styles.frequequentQuestionLeftContent}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias est corrupti nulla aliquid perspiciatis itaque qui
                  nam, vero velit odio, sapiente totam reprehenderit iure ipsam
                  ab deleniti, libero reiciendis natus.
                </p>
              </div>
            </div>
            <div className={styles.frequentQuestionRight}>
              <div
                onClick={frequentClicked}
                className={styles.frequentDropDownContainer}
              >
                <i className="fa fa-chevron-down"></i>
              </div>
            </div>
          </div>

          <div className={styles.frequentQuestion}>
            <div className={styles.frequentQuestionLeft}>
              <h2>Can I place bulk orders?</h2>
              <div className={styles.frequequentQuestionLeftContent}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias est corrupti nulla aliquid perspiciatis itaque qui
                  nam, vero velit odio, sapiente totam reprehenderit iure ipsam
                  ab deleniti, libero reiciendis natus.
                </p>
              </div>
            </div>
            <div className={styles.frequentQuestionRight}>
              <div
                onClick={frequentClicked}
                className={styles.frequentDropDownContainer}
              >
                <i className="fa fa-chevron-down"></i>
              </div>
            </div>
          </div>

          <div className={styles.frequentQuestion}>
            <div className={styles.frequentQuestionLeft}>
              <h2>How do I place an order?</h2>
              <div className={styles.frequequentQuestionLeftContent}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias est corrupti nulla aliquid perspiciatis itaque qui
                  nam, vero velit odio, sapiente totam reprehenderit iure ipsam
                  ab deleniti, libero reiciendis natus.
                </p>
              </div>
            </div>
            <div className={styles.frequentQuestionRight}>
              <div
                onClick={frequentClicked}
                className={styles.frequentDropDownContainer}
              >
                <i className="fa fa-chevron-down"></i>
              </div>
            </div>
          </div>

          <div className={styles.frequentQuestion}>
            <div className={styles.frequentQuestionLeft}>
              <h2>
                I want to cancel my order. Will I be charged for cancellation?
              </h2>
              <div className={styles.frequequentQuestionLeftContent}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias est corrupti nulla aliquid perspiciatis itaque qui
                  nam, vero velit odio, sapiente totam reprehenderit iure ipsam
                  ab deleniti, libero reiciendis natus.
                </p>
              </div>
            </div>
            <div className={styles.frequentQuestionRight}>
              <div
                onClick={frequentClicked}
                className={styles.frequentDropDownContainer}
              >
                <i className="fa fa-chevron-down"></i>
              </div>
            </div>
          </div>

          <div className={styles.frequentQuestion}>
            <div className={styles.frequentQuestionLeft}>
              <h2>Where are the payment methods?</h2>
              <div className={styles.frequequentQuestionLeftContent}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias est corrupti nulla aliquid perspiciatis itaque qui
                  nam, vero velit odio, sapiente totam reprehenderit iure ipsam
                  ab deleniti, libero reiciendis natus.
                </p>
              </div>
            </div>
            <div className={styles.frequentQuestionRight}>
              <div
                onClick={frequentClicked}
                className={styles.frequentDropDownContainer}
              >
                <i className="fa fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
