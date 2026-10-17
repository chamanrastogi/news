import React, { useState, useEffect } from 'react';

// ===== DATA =====
const breakingNews = [
  "PM Modi addresses the nation on economic reforms and new policies for 2026",
  "ISRO successfully launches Chandrayaan-4 mission to Moon's south pole",
  "India wins ICC Champions Trophy 2026 after thrilling final against Australia",
  "Sensex crosses 90,000 mark for the first time in history",
  "Heavy rainfall预警 in Mumbai, IMD issues red alert for next 48 hours",
];

const featuredNews = {
  title: "India's GDP Growth Surges to 8.2% in Q4, Highest Among Major Economies",
  description: "The Indian economy continues its remarkable growth trajectory, with the latest GDP figures showing robust expansion driven by manufacturing, services, and agricultural sectors. Experts predict sustained momentum into 2027.",
  category: "Economy",
  image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&h=500&fit=crop",
  time: "2 hours ago",
  author: "Rajesh Sharma"
};

const sideNews = [
  {
    title: "Supreme Court Delivers Landmark Judgment on Digital Privacy Rights",
    category: "National",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop",
    time: "3 hours ago"
  },
  {
    title: "Indian Cricket Team Announces Squad for Upcoming Test Series",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop",
    time: "4 hours ago"
  },
  {
    title: "New Education Policy 2026: Major Changes in School Curriculum Announced",
    category: "Education",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop",
    time: "5 hours ago"
  }
];

const nationalNews = [
  {
    title: "Government Launches ₹5 Lakh Crore Infrastructure Development Plan",
    category: "National",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
    time: "1 hour ago",
    author: "Priya Singh"
  },
  {
    title: "India Successfully Tests Agni-VI Missile with Extended Range Capabilities",
    category: "Defence",
    image: "https://images.unsplash.com/photo-1580752300999-3244f6a87777?w=400&h=250&fit=crop",
    time: "2 hours ago",
    author: "Amit Patel"
  },
  {
    title: "Delhi Metro Phase 4 Expansion: New Routes to Connect NCR Regions",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=250&fit=crop",
    time: "3 hours ago",
    author: "Vikram Joshi"
  },
  {
    title: "India's Renewable Energy Capacity Crosses 200 GW Milestone",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop",
    time: "4 hours ago",
    author: "Sneha Reddy"
  },
  {
    title: "Census 2026 Data Reveals Urban Population Growth Trends Across States",
    category: "National",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=250&fit=crop",
    time: "5 hours ago",
    author: "Rahul Mehta"
  },
  {
    title: "Indian Railways Introduces Vande Bharat Sleeper on 10 New Routes",
    category: "Transport",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&h=250&fit=crop",
    time: "6 hours ago",
    author: "Deepak Kumar"
  }
];

const politicsNews = [
  {
    title: "Parliament Winter Session: Key Bills Expected to Be Passed",
    category: "Politics",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400&h=250&fit=crop",
    time: "1 hour ago",
    author: "Anita Desai"
  },
  {
    title: "Electoral Reforms: ECI Announces New Guidelines for State Elections",
    category: "Politics",
    image: "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?w=400&h=250&fit=crop",
    time: "3 hours ago",
    author: "Suresh Nair"
  },
  {
    title: "Opposition Alliance Plans Joint Strategy for Upcoming Budget Session",
    category: "Politics",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=250&fit=crop",
    time: "5 hours ago",
    author: "Kavitha Rao"
  },
  {
    title: "State Elections 2026: Key Constituencies to Watch in Maharashtra",
    category: "Politics",
    image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=250&fit=crop",
    time: "6 hours ago",
    author: "Manish Gupta"
  }
];

const sportsNews = [
  {
    title: "Virat Kohli Scores Century in Final Test Match at Melbourne",
    category: "Cricket",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop",
    time: "30 mins ago",
    author: "Sunil Gavaskar Jr."
  },
  {
    title: "Neeraj Chopra Wins Gold at World Athletics Championships 2026",
    category: "Athletics",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=250&fit=crop",
    time: "2 hours ago",
    author: "Ritu Singh"
  },
  {
    title: "ISL 2026: Mumbai City FC Clinches League Title with Dominant Performance",
    category: "Football",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop",
    time: "4 hours ago",
    author: "Arun Krishnan"
  },
  {
    title: "PV Sindhu Reaches World Badminton Championship Finals",
    category: "Badminton",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=250&fit=crop",
    time: "5 hours ago",
    author: "Deepa Malik"
  },
  {
    title: "Indian Hockey Team Qualifies for Olympics with Asia Cup Victory",
    category: "Hockey",
    image: "https://images.unsplash.com/photo-1580748142347-4862be3a4e32?w=400&h=250&fit=crop",
    time: "6 hours ago",
    author: "Dhyan Chand Jr."
  },
  {
    title: "IPL 2026 Auction: Record-Breaking Bids for Young Indian Talents",
    category: "Cricket",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop",
    time: "8 hours ago",
    author: "Harsha Bhogle"
  }
];

const technologyNews = [
  {
    title: "India's AI Revolution: New National AI Mission Launched with ₹10,000 Crore Budget",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    time: "1 hour ago",
    author: "Tech Desk"
  },
  {
    title: "UPI Transactions Cross 20 Billion Monthly Mark, Sets Global Record",
    category: "FinTech",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
    time: "3 hours ago",
    author: "Priya Tech"
  },
  {
    title: "Indian Startup Ecosystem: 15 New Unicorns Emerge in 2026",
    category: "Startups",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
    time: "5 hours ago",
    author: "Startup Bureau"
  },
  {
    title: "5G Expansion: India Now Has 800 Million 5G Subscribers",
    category: "Telecom",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=400&h=250&fit=crop",
    time: "7 hours ago",
    author: "Digital Desk"
  }
];

const entertainmentNews = [
  {
    title: "Bollywood's Highest Grossing Film of 2026 Crosses ₹1000 Crore Worldwide",
    category: "Bollywood",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=250&fit=crop",
    time: "2 hours ago",
    author: "Entertainment Desk"
  },
  {
    title: "Oscar Nominations 2026: Indian Film 'Mitti' Makes It to Final List",
    category: "Cinema",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=250&fit=crop",
    time: "4 hours ago",
    author: "Film Critic"
  },
  {
    title: "Music Awards 2026: Arijit Singh Wins Best Male Playback Singer",
    category: "Music",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
    time: "6 hours ago",
    author: "Music Desk"
  },
  {
    title: "Web Series Review: 'The Delhi Files' Takes OTT by Storm",
    category: "OTT",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=250&fit=crop",
    time: "8 hours ago",
    author: "OTT Review"
  }
];

const trendingNews = [
  { title: "Petrol Prices Drop to ₹85/Litre Across Major Cities", time: "1h ago" },
  { title: "New ITR Filing Rules for FY 2025-26: What You Need to Know", time: "2h ago" },
  { title: "Delhi Air Quality Improves After Graded Response Action Plan", time: "3h ago" },
  { title: "India vs England: 3rd Test Day 2 Highlights", time: "4h ago" },
  { title: "Chandrayaan-4: Latest Updates from ISRO Mission Control", time: "5h ago" },
  { title: "Monsoon 2026: IMD Predicts Above-Normal Rainfall", time: "6h ago" },
  { title: "Stock Market Today: Nifty 50 Hits All-Time High", time: "7h ago" },
];

const marketData = [
  { name: "SENSEX", value: "90,245.67", change: "+1.24%", up: true },
  { name: "NIFTY 50", value: "27,156.30", change: "+1.18%", up: true },
  { name: "BANK NIFTY", value: "45,890.15", change: "-0.32%", up: false },
  { name: "USD/INR", value: "82.45", change: "-0.15%", up: false },
  { name: "GOLD", value: "₹72,450", change: "+0.85%", up: true },
  { name: "CRUDE OIL", value: "$78.50", change: "+1.02%", up: true },
  { name: "BITCOIN", value: "$98,500", change: "+3.24%", up: true },
];

const videoNews = [
  { title: "PM Modi's Address to the Nation: Full Speech", duration: "15:32", image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400&h=250&fit=crop" },
  { title: "ISRO's Chandrayaan-4 Launch: Complete Coverage", duration: "22:15", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=250&fit=crop" },
  { title: "India's Republic Day Parade 2026 Highlights", duration: "18:45", image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400&h=250&fit=crop" },
  { title: "Mumbai's New Skyline: Urban Development Documentary", duration: "12:30", image: "https://images.unsplash.com/photo-1574484284002-9522351e620f?w=400&h=250&fit=crop" },
];

// ===== COMPONENTS =====

const TopBar: React.FC = () => (
  <>
    <div className="tricolor-line"></div>
    <div className="top-bar">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="d-flex align-items-center gap-3">
            <span><i className="bi bi-calendar3 me-1"></i>{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="d-none d-md-inline"><i className="bi bi-geo-alt me-1"></i>New Delhi, 32°C</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <a href="#" className="d-none d-sm-inline"><i className="bi bi-facebook"></i></a>
            <a href="#" className="d-none d-sm-inline"><i className="bi bi-twitter-x"></i></a>
            <a href="#" className="d-none d-sm-inline"><i className="bi bi-youtube"></i></a>
            <a href="#" className="d-none d-sm-inline"><i className="bi bi-instagram"></i></a>
            <span className="d-none d-md-inline">|</span>
            <a href="#" className="d-none d-md-inline">English</a>
            <a href="#" className="d-none d-md-inline">हिन्दी</a>
            <a href="#" className="d-none d-md-inline">தமிழ்</a>
            <span className="live-badge">LIVE TV</span>
          </div>
        </div>
      </div>
    </div>
  </>
);

const Header: React.FC = () => (
  <div className="main-header">
    <div className="container">
      <div className="logo-section d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <div>
            <div className="logo-text">BHARAT SAMACHAR</div>
            <div className="logo-hindi">भारत समाचार — सत्य पहले</div>
          </div>
        </div>
        <div className="search-box d-none d-md-block">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search news..." />
            <button className="btn btn-outline-warning" type="button">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Navigation: React.FC = () => {
  const [activeNav, setActiveNav] = useState('Home');
  const navItems = ['Home', 'National', 'Politics', 'Sports', 'Entertainment', 'Business', 'Technology', 'World', 'Opinion', 'Videos'];
  
  return (
    <nav className="main-nav">
      <div className="container">
        <div className="navbar navbar-expand-lg">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav">
              {navItems.map((item) => (
                <li className="nav-item" key={item}>
                  <a 
                    className={`nav-link ${activeNav === item ? 'active' : ''}`} 
                    href="#"
                    onClick={(e) => { e.preventDefault(); setActiveNav(item); }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

const BreakingNewsTicker: React.FC = () => (
  <div className="breaking-news-bar">
    <div className="container">
      <div className="d-flex align-items-center">
        <span className="breaking-label">
          <i className="bi bi-lightning-charge-fill me-1"></i>BREAKING
        </span>
        <div className="ticker-wrap">
          <div className="ticker">
            {breakingNews.map((news, idx) => (
              <span key={idx}>{news}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MarketTicker: React.FC = () => (
  <div className="market-ticker">
    <div className="container">
      <div className="d-flex overflow-auto" style={{ scrollbarWidth: 'none' }}>
        {marketData.map((item, idx) => (
          <div className="market-item" key={idx}>
            <span className="name">{item.name}</span>
            <span>{item.value}</span>
            <span className={item.up ? 'up ms-2' : 'down ms-2'}>
              <i className={`bi bi-caret-${item.up ? 'up' : 'down'}-fill`}></i> {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const HeroSection: React.FC = () => (
  <section className="hero-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="hero-main-card">
            <img src={featuredNews.image} alt={featuredNews.title} />
            <div className="overlay">
              <span className="category-badge">{featuredNews.category}</span>
              <h2>{featuredNews.title}</h2>
              <p className="d-none d-md-block">{featuredNews.description}</p>
              <div className="meta">
                <i className="bi bi-clock me-1"></i>{featuredNews.time}
                <span className="ms-3"><i className="bi bi-person me-1"></i>{featuredNews.author}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          {sideNews.map((news, idx) => (
            <div className="hero-side-card" key={idx}>
              <img src={news.image} alt={news.title} />
              <div className="overlay">
                <span className="category-badge">{news.category}</span>
                <h5>{news.title}</h5>
                <small><i className="bi bi-clock me-1"></i>{news.time}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const NewsCard: React.FC<{ news: typeof nationalNews[0] }> = ({ news }) => (
  <div className="news-card">
    <div style={{ overflow: 'hidden' }}>
      <img src={news.image} alt={news.title} />
    </div>
    <div className="card-body">
      <span className="category-tag">{news.category}</span>
      <h5>{news.title}</h5>
      <div className="meta">
        <i className="bi bi-clock me-1"></i>{news.time}
        <span className="ms-2"><i className="bi bi-person me-1"></i>{news.author}</span>
      </div>
    </div>
  </div>
);

const HorizontalNewsCard: React.FC<{ news: typeof trendingNews[0] }> = ({ news }) => (
  <div className="news-card-horizontal">
    <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=150&h=100&fit=crop" alt="" />
    <div className="card-body">
      <h6>{news.title}</h6>
      <div className="meta">
        <i className="bi bi-clock me-1"></i>{news.time}
      </div>
    </div>
  </div>
);

const SectionTitle: React.FC<{ title: string; icon?: string }> = ({ title, icon }) => (
  <div className="section-title">
    <h3>{icon && <i className={`bi ${icon} me-2`}></i>}{title}</h3>
    <a href="#" className="view-all">View All <i className="bi bi-arrow-right"></i></a>
  </div>
);

const NationalNewsSection: React.FC = () => (
  <section className="py-4">
    <div className="container">
      <SectionTitle title="National News" icon="bi-flag" />
      <div className="row g-3">
        {nationalNews.slice(0, 6).map((news, idx) => (
          <div className="col-lg-4 col-md-6" key={idx}>
            <NewsCard news={news} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SportsSection: React.FC = () => (
  <section className="py-4">
    <div className="container">
      <SectionTitle title="Sports" icon="bi-trophy" />
      <div className="row g-3">
        {sportsNews.slice(0, 4).map((news, idx) => (
          <div className="col-lg-3 col-md-6" key={idx}>
            <NewsCard news={news} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PoliticsSection: React.FC = () => (
  <section className="py-4">
    <div className="container">
      <SectionTitle title="Politics" icon="bi-bank" />
      <div className="row g-3">
        <div className="col-lg-8">
          <div className="row g-3">
            {politicsNews.slice(0, 2).map((news, idx) => (
              <div className="col-md-6" key={idx}>
                <NewsCard news={news} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-4">
          {politicsNews.slice(2).map((news, idx) => (
            <HorizontalNewsCard key={idx} news={news} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const TechnologySection: React.FC = () => (
  <section className="py-4">
    <div className="container">
      <SectionTitle title="Technology & Business" icon="bi-cpu" />
      <div className="row g-3">
        {technologyNews.map((news, idx) => (
          <div className="col-lg-3 col-md-6" key={idx}>
            <NewsCard news={news} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EntertainmentSection: React.FC = () => (
  <section className="py-4">
    <div className="container">
      <SectionTitle title="Entertainment" icon="bi-film" />
      <div className="row g-3">
        {entertainmentNews.map((news, idx) => (
          <div className="col-lg-3 col-md-6" key={idx}>
            <NewsCard news={news} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const VideoSection: React.FC = () => (
  <section className="video-section">
    <div className="container">
      <div className="section-title" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
        <h3 style={{ color: 'white' }}><i className="bi bi-play-circle me-2"></i>Video News</h3>
        <a href="#" className="view-all" style={{ color: 'var(--saffron)' }}>View All <i className="bi bi-arrow-right"></i></a>
      </div>
      <div className="row g-3">
        {videoNews.map((video, idx) => (
          <div className="col-lg-3 col-md-6" key={idx}>
            <div className="video-card">
              <img src={video.image} alt={video.title} />
              <div className="play-btn">
                <i className="bi bi-play-fill"></i>
              </div>
              <span className="duration">{video.duration}</span>
              <h6>{video.title}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Sidebar: React.FC = () => (
  <div>
    {/* Trending */}
    <div className="sidebar-widget">
      <h5 className="widget-title"><i className="bi bi-fire me-2"></i>Trending Now</h5>
      {trendingNews.map((news, idx) => (
        <div className="trending-item" key={idx}>
          <span className="trending-number">0{idx + 1}</span>
          <div>
            <h6>{news.title}</h6>
            <div className="meta"><i className="bi bi-clock me-1"></i>{news.time}</div>
          </div>
        </div>
      ))}
    </div>

    {/* Weather Widget */}
    <div className="weather-widget">
      <i className="bi bi-sun" style={{ fontSize: '2rem' }}></i>
      <div className="temp">32°C</div>
      <div className="city">New Delhi</div>
      <small className="d-block mt-1" style={{ opacity: 0.8 }}>Partly Cloudy</small>
      <div className="d-flex justify-content-around mt-3">
        <div><small>Mumbai</small><br /><strong>29°C</strong></div>
        <div><small>Bangalore</small><br /><strong>25°C</strong></div>
        <div><small>Chennai</small><br /><strong>33°C</strong></div>
      </div>
    </div>

    {/* Latest Updates */}
    <div className="sidebar-widget">
      <h5 className="widget-title"><i className="bi bi-lightning me-2"></i>Latest Updates</h5>
      {nationalNews.slice(0, 5).map((news, idx) => (
        <HorizontalNewsCard key={idx} news={{ title: news.title, time: news.time }} />
      ))}
    </div>

    {/* Ad Space */}
    <div className="sidebar-widget text-center" style={{ background: '#f0f0f0', minHeight: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <i className="bi bi-ad" style={{ fontSize: '2rem', color: '#999' }}></i>
        <p className="mt-2 mb-0" style={{ color: '#999', fontSize: '0.8rem' }}>Advertisement Space</p>
        <small style={{ color: '#bbb' }}>300 x 250</small>
      </div>
    </div>
  </div>
);

const MainContentWithSidebar: React.FC = () => (
  <section className="py-4">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <SectionTitle title="Editor's Picks" icon="bi-star" />
          <div className="row g-3">
            {[...nationalNews.slice(0, 2), ...sportsNews.slice(0, 2)].map((news, idx) => (
              <div className="col-md-6" key={idx}>
                <NewsCard news={news} />
              </div>
            ))}
          </div>
          
          {/* Opinion Section */}
          <div className="mt-5">
            <SectionTitle title="Opinion & Editorial" icon="bi-chat-quote" />
            <div className="row g-3">
              {[
                { author: "Dr. Rajiv Kumar", title: "Why India's Digital Economy is the Future of Global Commerce", role: "Economic Analyst" },
                { author: "Prof. Meera Singh", title: "The Changing Face of Indian Democracy in the Digital Age", role: "Political Scientist" },
                { author: "Arun Shourie Jr.", title: "Education Reform: What India Can Learn from Finland's Model", role: "Education Expert" },
              ].map((opinion, idx) => (
                <div className="col-md-4" key={idx}>
                  <div className="opinion-card">
                    <div className="d-flex align-items-center gap-2">
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '0.8rem' }}>
                        {opinion.author.charAt(0)}
                      </div>
                      <div>
                        <small style={{ fontWeight: '600' }}>{opinion.author}</small>
                        <br />
                        <small style={{ color: 'var(--text-light)', fontSize: '0.7rem' }}>{opinion.role}</small>
                      </div>
                    </div>
                    <h6>{opinion.title}</h6>
                    <a href="#" style={{ color: 'var(--primary-color)', fontSize: '0.8rem', fontWeight: '600', textDecoration: 'none' }}>Read More →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <Sidebar />
        </div>
      </div>
    </div>
  </section>
);

const NewsletterSection: React.FC = () => (
  <section className="newsletter-section">
    <div className="container">
      <h4><i className="bi bi-envelope-paper me-2"></i>Subscribe to Our Newsletter</h4>
      <p>Get the latest news delivered to your inbox every morning</p>
      <div className="newsletter-form d-flex justify-content-center flex-wrap gap-2">
        <input type="email" className="form-control" placeholder="Enter your email address" />
        <button className="btn">Subscribe Now</button>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="main-footer">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-4 col-md-6">
          <h5 style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>BHARAT SAMACHAR</h5>
          <p style={{ fontSize: '0.85rem', lineHeight: '1.7' }}>
            India's most trusted news portal delivering accurate, unbiased, and comprehensive news coverage from across the nation and the world. Available in 12+ languages.
          </p>
          <div className="social-icons mt-3">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-twitter-x"></i></a>
            <a href="#"><i className="bi bi-youtube"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
            <a href="#"><i className="bi bi-telegram"></i></a>
          </div>
        </div>
        <div className="col-lg-2 col-md-6">
          <h5>Categories</h5>
          <ul className="list-unstyled footer-links">
            <li><a href="#">National</a></li>
            <li><a href="#">Politics</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Entertainment</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Technology</a></li>
            <li><a href="#">World</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6">
          <h5>Quick Links</h5>
          <ul className="list-unstyled footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">RSS Feed</a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6">
          <h5>Download Our App</h5>
          <p style={{ fontSize: '0.85rem' }}>Stay updated on the go with our mobile app</p>
          <div className="d-flex flex-column gap-2">
            <a href="#" className="btn btn-outline-light btn-sm d-flex align-items-center gap-2" style={{ borderRadius: '8px' }}>
              <i className="bi bi-google-play" style={{ fontSize: '1.5rem' }}></i>
              <div className="text-start">
                <small style={{ fontSize: '0.6rem', opacity: 0.7 }}>GET IT ON</small>
                <br />
                <span style={{ fontSize: '0.85rem' }}>Google Play</span>
              </div>
            </a>
            <a href="#" className="btn btn-outline-light btn-sm d-flex align-items-center gap-2" style={{ borderRadius: '8px' }}>
              <i className="bi bi-apple" style={{ fontSize: '1.5rem' }}></i>
              <div className="text-start">
                <small style={{ fontSize: '0.6rem', opacity: 0.7 }}>DOWNLOAD ON THE</small>
                <br />
                <span style={{ fontSize: '0.85rem' }}>App Store</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="tricolor-line"></div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0" style={{ fontSize: '0.8rem' }}>
              © 2026 Bharat Samachar. All Rights Reserved. | A Division of Bharat Media Network Pvt. Ltd.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0" style={{ fontSize: '0.8rem' }}>
              Designed with <i className="bi bi-heart-fill" style={{ color: 'var(--primary-color)' }}></i> in India
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

// ===== MAIN APP =====
const App: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app-wrapper">
      <TopBar />
      <Header />
      <Navigation />
      <BreakingNewsTicker />
      <MarketTicker />
      <HeroSection />
      <NationalNewsSection />
      
      {/* Main Content + Sidebar */}
      <MainContentWithSidebar />
      
      <PoliticsSection />
      <SportsSection />
      <TechnologySection />
      <EntertainmentSection />
      <VideoSection />
      <NewsletterSection />
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        background: 'var(--primary-color)',
        color: 'white',
        border: 'none',
        boxShadow: '0 4px 15px rgba(255,107,0,0.4)',
        cursor: 'pointer',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        transition: 'all 0.3s',
      }}
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
};

export default App;
