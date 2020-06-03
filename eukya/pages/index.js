import Head from 'next/head'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Eukya Furniture</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'/>
        <script src="https://kit.fontawesome.com/ca7ff47d1e.js" crossOrigin="anonymous"/>
      </Head>
      <header>
        <div className="title-container">
          <a className="title">
            EUKYA
          </a>
          <a className="subcase">
            furniture
          </a>
        </div>
        <div className="catalogue-container">
          <div className="category">
            <a>Restaurant</a>
            <div className="zoom-container">
              <div className="mask"/>
              <img src="/restaurant.jpg"/>
            </div>
          </div>
          <div className="category">
            <a>Hotel</a>
            <div className="zoom-container">
              <div className="mask"/>
              <img src="/hotel.jpg"/>
            </div>
          </div>
          <div className="category">
            <a>Banquet</a>
            <div className="zoom-container">
              <div className="mask"/>
              <img src="/banquet.jpg"/>
            </div>
          </div>
        </div>
      </header>

    </React.Fragment>
  )
}
