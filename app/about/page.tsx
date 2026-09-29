import Link from "next/link";

export const metadata = {
  title: 'About My Portland Wedding',
  description: 'Meet My Portland Wedding, a local planning platform helping Portland-area couples discover wedding professionals and build a celebration that fits them.',
  alternates: { canonical: '/about' },
  openGraph: { title: 'About My Portland Wedding', description: 'Meet My Portland Wedding, a local planning platform helping Portland-area couples discover wedding professionals and build a celebration that fits them.', url: '/about', images: [{ url: '/brand/mpw-social-share.png', width: 1200, height: 630, alt: 'My Portland Wedding — Plan Local. Love Always.' }] }
};

export default function Page(){
  return <main className="aboutStoryPage">
    <section className="aboutHeroVisual">
      <div className="container aboutHeroGrid">
        <div className="aboutHeroCopy">
          <span className="eyebrow">My Portland Wedding</span>
          <h1>About My Portland Wedding</h1>
          <p>Helping Portland couples find the people who will bring their wedding to life.</p>
          <div className="aboutSignature"><span></span><em>Plan local. Love always.</em></div>
        </div>
        <div className="aboutHeroImage" role="img" aria-label="Newlyweds overlooking Portland at sunset" />
      </div>
    </section>

    <section className="section aboutIntroSection">
      <div className="container aboutStorySplit">
        <div className="aboutStoryArt">
          <div className="aboutStoryArtCard">
            <span className="aboutHeart">♡</span>
            <strong>Local people.</strong>
            <em>Unforgettable moments.</em>
          </div>
        </div>
        <div className="aboutStoryCopy">
          <span className="eyebrow">Our story</span>
          <h2>A Local Idea with a Big Heart</h2>
          <p>My Portland Wedding was created around a simple idea: <strong>planning one of the most meaningful days of your life should feel personal, local, and exciting.</strong></p>
          <p>Portland and the communities surrounding it are filled with incredibly talented wedding professionals—photographers who capture moments you didn’t even realize were happening, florists who turn an idea into something breathtaking, planners who somehow make chaos feel effortless, venues where families will make memories they’ll talk about for decades, and countless other people who pour a piece of themselves into every wedding they help create.</p>
          <p>We wanted to build a place where those businesses and the couples looking for them could find each other more naturally.</p>
        </div>
      </div>

      <div className="container aboutValueStrip">
        <div><span>⌖</span><strong>Locally focused</strong><small>Real Portland vendors. Real local love.</small></div>
        <div><span>♡</span><strong>Couple centered</strong><small>Tools to make planning easier and more personal.</small></div>
        <div><span>✦</span><strong>Vendor supported</strong><small>Helping local businesses grow and be discovered.</small></div>
        <div><span>❧</span><strong>A stronger community</strong><small>Together, we make Portland weddings even more special.</small></div>
      </div>
    </section>

    <section className="aboutBuilderSection">
      <div className="container aboutBuilderGrid">
        <div className="aboutBuilderCopy">
          <span className="eyebrow">Meet Wedding Builder by My Portland Wedding</span>
          <h2>A Smarter Way to Plan</h2>
          <p>Every wedding is different. A $20,000 intimate celebration shouldn’t receive the same recommendations as a 200-person wedding with a $75,000 budget. A relaxed outdoor celebration shouldn’t have to sift through the same results as an elegant downtown ballroom wedding.</p>
          <p>Wedding Builder by My Portland Wedding starts with <strong>your wedding</strong>. Tell us your budget, guest count, location, style, and what matters most to you. We use those details to assemble personalized groups of local wedding professionals that better fit the celebration you’re trying to create.</p>
          <p>You can explore recommendations, compare possibilities, swap vendors, and discover businesses you may never have found otherwise.</p>
          <p className="aboutPullQuote">It’s not about telling you how your wedding should look. It’s about helping you find the people who can help make your version of it possible.</p>
          <Link className="btn primary aboutBuilderCta" href="/wedding-builder">Try Wedding Builder by My Portland Wedding →</Link>
        </div>
        <div className="aboutBuilderMockup" aria-label="Wedding Builder by My Portland Wedding preview">
          <div className="aboutLaptop">
            <div className="aboutLaptopBar"><span></span><span></span><span></span></div>
            <div className="aboutLaptopScreen">
              <small>Wedding Builder by My Portland Wedding</small>
              <h3>Let’s Build Your Dream Wedding</h3>
              <p>Tell us a few details and we’ll help you discover local vendors for your big day.</p>
              <div className="aboutBuilderInputs">
                <span>◉<b>Budget</b></span><span>♙<b>Guests</b></span><span>⌖<b>Location</b></span><span>✿<b>Style</b></span><span>♡<b>Priorities</b></span>
              </div>
              <div className="aboutMiniRoster"><i></i><i></i><i></i></div>
            </div>
          </div>
          <div className="aboutPhone">
            <span>Your personalized<br/><strong>vendor matches</strong></span>
            <div></div><div></div><div></div>
          </div>
        </div>
      </div>
    </section>

    <section className="section aboutWishesSection">
      <div className="container aboutWishesGrid">
        <article className="aboutWishCard">
          <img src="/about/couple-moment.jpg" alt="Bride sharing a quiet wedding-day moment" />
          <div>
            <span className="eyebrow">Our wish for every couple</span>
            <h2>We hope you find your people.</h2>
            <p>Years from now, we don’t expect you to remember the website you used to find your photographer.</p>
            <p><strong>We hope you remember the photograph.</strong></p>
            <p>We hope you remember walking into your venue and seeing everything finally come together. The flowers on the tables. The song that brought everyone onto the dance floor. The meal your family still talks about. The nervous laughter before the ceremony. The people who quietly solved problems behind the scenes so you never even knew there was a problem.</p>
            <p>If My Portland Wedding can make finding those people a little easier, make planning feel a little less overwhelming, or introduce you to one vendor who becomes an unforgettable part of your wedding, then we’ve done what we came here to do.</p>
          </div>
        </article>
        <article className="aboutWishCard aboutWishCardReverse">
          <img src="/about/vendor-moment.jpg" alt="Wedding professional preparing reception details" />
          <div>
            <span className="eyebrow">Our wish for every vendor</span>
            <h2>We hope they find you.</h2>
            <p>Behind every vendor listing is a real business and real people who have chosen to make other people’s celebrations part of their life’s work.</p>
            <p><strong>We want My Portland Wedding to help those businesses grow.</strong></p>
            <p>Our goal isn’t simply to sell another place to put your logo. We want to build tools that introduce you to couples who are genuinely looking for what you offer and give local wedding professionals another meaningful way to be discovered.</p>
            <p>As My Portland Wedding grows, we want the businesses that helped us build this community to grow alongside it.</p>
          </div>
        </article>
      </div>
    </section>

    <section className="aboutClosing">
      <div className="container">
        <span className="eyebrow">This is just the beginning</span>
        <h2>A Stronger Wedding Community for a Brighter Tomorrow</h2>
        <p>We’re starting here in Portland because we believe something local can feel more personal. We’re building My Portland Wedding one couple, one vendor, and one wedding at a time—and we’re incredibly excited to see the celebrations that begin here.</p>
        <div className="aboutClosingLines">
          <strong>To the couples: we hope you find your people.</strong>
          <strong>To the vendors: we hope they find you.</strong>
        </div>
        <p>And to everyone planning a wedding here in the Pacific Northwest—welcome to My Portland Wedding.</p>
        <em>Plan local. Love always.</em>
      </div>
    </section>
  </main>
}
