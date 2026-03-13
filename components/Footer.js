export default function Footer() {

  return (

    <footer className="footer">

      <div className="newsletter">

        <h2>BE THE FIRST TO KNOW</h2>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button>
          Subscribe
        </button>

      </div>

      <div className="footerColumns">

        <div>
          <h3>Contact</h3>
          <p>+44 221 133 5580</p>
          <p>customer@mettamuse.com</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <p>Orders</p>
          <p>Returns</p>
          <p>Privacy Policy</p>
        </div>

        <div>
          <h3>Follow Us</h3>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>

      </div>

    </footer>

  );
}