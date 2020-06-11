import Link from 'next/link'

const Header = (mobileView) => (
  <header>
    {
      mobileView &&
        <div className="dropdown-button">
          hello
        </div>
    }
    <div className="title-container">
      <Link href= "/">
        <a className="title">
          EUKYA
          <a className="subcase">
          furniture
          </a>
        </a>
      </Link>
    </div>
    {
      !mobileView &&
        <div className="button-containers">
          <Link href= "/about">
            <a className="button">
              About Us
            </a>
          </Link>
          <Link href= "/contact">
            <a className="button">
              Contact Us
            </a>
          </Link>
        </div>
    }

  </header>
)

export default Header