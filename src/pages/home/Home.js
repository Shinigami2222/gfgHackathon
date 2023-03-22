import classes from "./Home.module.css";

function Home() {
  return (
    <div>
      <div className={classes.imageSection}>
        {/* <img src={homeImage} alt="React Image" className={classes.cropsImage} /> */}
        <p className={classes.text}>
          A <span className={classes.span}>DIGITAL MARKETPLACE </span>WHERE FAIR
          FOOD TRADE IS MADE EASY, FAST AND TRANSPARENT!
        </p>
      </div>

      <div className={classes.services}>
        <p className={classes.ser}>SERVICES</p>
        <div className={classes.mainServices}>
          <p className={classes.whatWeDo}>
            We open the door to thousands of approved buyers and sellers. Post
            your crop bid as a registered buyer, or create your crop offer as a
            platform verified seller. Through our rigorous customer compliance
            we make sure that only reliable users gain access to our digital
            marketplace. There are two ways to get started:
          </p>
          <div className={classes.post}>
            <div className={classes.seller}>
              <p className={classes.postSellBuy}>Post offer as a seller</p>
              <p className={classes.postContent}>
                As a seller, post offers for the agricultural crop you are
                looking to sell, and gain immediate access to credit-verified
                buyers. Or simply react to an existing buyer’s bid and start
                your transaction.
              </p>
              <button className={classes.btn}>Register as a Seller</button>
            </div>
            <div className={classes.buyer}>
              <p className={classes.postSellBuy}>Post Bid as a buyer</p>
              <p className={classes.postContent}>
                As a buyer, post bids for the agricultural crop you are looking
                to buy. Communicate to the market what you are looking for, and
                get rapid reactions from interested farmers or sellers.
              </p>
              <button className={classes.btn}>Register as a Buyer</button>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.howItWorks}>
        <p className={classes.howItWorksText}>HOW IT WORKS</p>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <span className={classes.signUp}>Sign-up </span>to the platform
          </li>
          <li className={classes.listItem}>Create your offer or bid</li>
          <li className={classes.listItem}>Set a quantity & price</li>
          <li className={classes.listItem}>
            Provide us with crop characteristics & details
          </li>
          <li className={classes.listItem}>
            Decide upon your preferred incoterm
          </li>
          <li className={classes.listItem}>
            Decide upon logistic and/or crop quality check services
          </li>
          <li className={classes.listItem}>
            Post your seller offer or buyer bid
          </li>
          <li className={classes.listItem}>
            Stay updated by email or notification centre
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
