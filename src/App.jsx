import React, { useEffect, useState } from "react";

export default function BharatDebtSolutionsWebsite() {
  const [loan, setLoan] = useState(1000000);
  const [slide, setSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const payable = Math.round(loan * 0.3);
  const savings = loan - payable;

  const images = [
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1800&q=80",
    "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1800&q=80",
    "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1800&q=80"
  ];

  useEffect(() => {
    const t = setInterval(() => setSlide((p) => (p + 1) % images.length), 3500);
    return () => clearInterval(t);
  }, []);

  const services = [
    ["☎", "Debt Harassment Relief", "End recovery calls, threats, abuse and unwanted visits."],
    ["🤝", "Debt Settlement Services", "Reduce total outstanding through structured settlement support."],
    ["⚖", "Legal Support", "Guidance on notices, documentation, complaints and rights."],
    ["👤", "Counselling & Planning", "Personalised financial counselling and debt management plans."],
    ["🛡", "Privacy Protection", "Protect your family, workplace and personal privacy."]
  ];

  const faqs = [
    ["How much settlement is possible?", "Settlement depends on lender policy, overdue status, account history, repayment capacity and documents."],
    ["Do you provide legal representation?", "We provide guidance and documentation support. Court representation may require a qualified lawyer."],
    ["Will settlement affect my credit score?", "Yes, settlement can affect your credit profile. We explain the impact before you decide."],
    ["How long does settlement take?", "Timeline depends on lender response, overdue period, documents and settlement approval."],
    ["Can recovery agents harass me?", "Recovery must follow proper conduct. Threats, abuse or workplace pressure should be documented."],
    ["Is consultation free?", "Yes, initial case review is free."]
  ];

  return (
    <div className="site">
      <style>{`
        *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0}
        .site{font-family:Arial,sans-serif;background:#fff;color:#071b35}
        a{text-decoration:none;color:inherit}
        header{height:76px;background:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 6%;box-shadow:0 2px 18px rgba(0,0,0,.06);position:sticky;top:0;z-index:20}
        .brand{display:flex;align-items:center;gap:12px}
        .logo{width:42px;height:42px;border-radius:13px;background:#075ee8;color:white;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:22px}
        .brand h2{margin:0;font-size:22px}.brand p{margin:0;font-size:13px}
        nav{display:flex;gap:28px;font-weight:700;font-size:15px}
        .btn{background:#075ee8;color:white;border:0;border-radius:8px;padding:14px 22px;font-weight:800;cursor:pointer}
        .hero{height:455px;background-size:cover;background-position:center;position:relative;display:flex;align-items:center;padding:0 6%;overflow:hidden}
        .hero:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(255,255,255,.96),rgba(255,255,255,.72),rgba(255,255,255,.08))}
        .heroText{position:relative;z-index:2;max-width:610px}
        .hero h1{font-size:56px;line-height:1.08;margin:0 0 20px}
        .hero p{font-size:19px;line-height:1.7;color:#223653;margin:0 0 22px}
        .checks{display:flex;gap:24px;flex-wrap:wrap;margin-bottom:24px;font-weight:700}
        .check{display:flex;align-items:center;gap:8px}
        .tick{background:#075ee8;color:white;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center}
        .arrow{position:absolute;top:50%;transform:translateY(-50%);z-index:3;width:44px;height:44px;border-radius:50%;border:0;background:#fff;color:#075ee8;font-size:28px;box-shadow:0 8px 24px rgba(0,0,0,.15)}
        .left{left:18px}.right{right:18px}
        .dots{position:absolute;bottom:18px;left:50%;transform:translateX(-50%);display:flex;gap:8px;z-index:4}
        .dot{width:8px;height:8px;border-radius:50%;background:white}
        .dot.active{width:22px;background:#075ee8;border-radius:99px}
        .section{padding:52px 6%}
        .title{text-align:center;font-size:32px;margin:0 0 12px}
        .sub{text-align:center;color:#4d5d75;margin:0 auto 30px;max-width:760px;line-height:1.7}
        .grid{display:grid;gap:20px}
        .services{grid-template-columns:repeat(5,1fr)}
        .card{background:#fff;border:1px solid #dce7f5;border-radius:12px;padding:26px;box-shadow:0 10px 30px rgba(16,24,40,.04)}
        .service{text-align:center;min-height:230px;display:flex;flex-direction:column;align-items:center}
        .icon{width:70px;height:70px;border-radius:50%;background:#eef5ff;color:#075ee8;display:flex;align-items:center;justify-content:center;font-size:32px;margin-bottom:18px}
        .service h3{font-size:18px;margin:0 0 12px}
        .service p{color:#34435c;line-height:1.65;margin:0 0 20px}
        .learn{color:#075ee8;font-weight:800;margin-top:auto}
        .calculator{background:#eef8ff;border:1px solid #cfe5ff;border-radius:12px;padding:32px}
        .calcgrid{grid-template-columns:1.25fr .8fr .8fr;align-items:center;gap:34px}
        input,select,textarea{width:100%;padding:14px;border:1px solid #d9e4f1;border-radius:8px;margin-bottom:14px;font-size:16px;background:#fff}
        input[type="range"]{padding:0;accent-color:#075ee8}
        .result{border-radius:10px;padding:28px;text-align:center;min-height:140px;display:flex;flex-direction:column;justify-content:center}
        .green{background:#f1fbf3;border:1px solid #bfe8c6;color:#168038}
        .blueBox{background:#f0f6ff;border:1px solid #bad5ff;color:#075ee8}
        .result h3{margin:0 0 12px}
        .result h1{font-size:34px;margin:0 0 10px}
        .note{text-align:center;color:#34435c;font-size:14px;margin:24px 0 0}
        .steps{grid-template-columns:repeat(4,1fr);gap:42px}
        .step{text-align:center}
        .stepNum{font-size:52px;color:#e9edf4;font-weight:900;margin-bottom:-12px}
        .stepIcon{width:72px;height:72px;border-radius:50%;background:#075ee8;color:white;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:28px}
        .step h3{margin:0 0 10px}
        .step p{color:#34435c;line-height:1.6;margin:0}
        .faqgrid{grid-template-columns:1fr 1fr;max-width:1100px;margin:auto}
        .faq{border:1px solid #dce7f5;border-radius:8px;padding:16px 22px;background:white;cursor:pointer}
        .faqTop{display:flex;justify-content:space-between;align-items:center;color:#172b4d}
        .faqAnswer{margin:12px 0 0;color:#5f6b7a;line-height:1.6}
        .cta{max-width:1100px;margin:30px auto 0;background:#f0f7ff;border:1px solid #d7eaff;border-radius:12px;padding:22px 28px;display:flex;align-items:center;justify-content:space-between}
        .contact{background:#f6fbff}
        .contact .card{max-width:760px;margin:auto}
        footer{background:#f0f7ff;border-top:1px solid #d7eaff;padding:30px 6%;color:#172b4d}
        @media(max-width:950px){
          nav{display:none}
          .services,.calcgrid,.steps,.faqgrid{grid-template-columns:1fr}
          .hero{height:560px;padding:35px 6%}
          .hero h1{font-size:40px}
          .section{padding:46px 5%}
          .cta{display:block;text-align:center}
          .cta .btn{margin-top:16px}
        }
      `}</style>

      <header>
        <div className="brand">
          <div className="logo">B</div>
          <div>
            <h2>Bharat Debt Solutions</h2>
            <p>Debt Relief. Financial Freedom.</p>
          </div>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#calculator">Calculator</a>
          <a href="#process">Process</a>
          <a href="#faqs">FAQs</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact"><button className="btn">Get Free Consultation</button></a>
      </header>

      <section id="home" className="hero" style={{ backgroundImage: `url(${images[slide]})` }}>
        <button className="arrow left" onClick={() => setSlide((slide + images.length - 1) % images.length)}>‹</button>
        <button className="arrow right" onClick={() => setSlide((slide + 1) % images.length)}>›</button>

        <div className="heroText">
          <h1>Get Debt-Free. Live Stress-Free.</h1>
          <p>We help you settle loans, stop harassment, and plan your finances for a better tomorrow.</p>

          <div className="checks">
            <span className="check"><span className="tick">✓</span>Settle Loans</span>
            <span className="check"><span className="tick">✓</span>Stop Harassment</span>
            <span className="check"><span className="tick">✓</span>Plan Finances</span>
          </div>

          <a href="#contact"><button className="btn">Get Free Consultation</button></a>
        </div>

        <div className="dots">
          {images.map((_, i) => <span key={i} className={i === slide ? "dot active" : "dot"} />)}
        </div>
      </section>

      <section className="section" id="services">
        <h2 className="title">Our Debt Relief Services</h2>
        <p className="sub">Complete solutions to help you manage debt stress, stop harassment and move towards financial freedom.</p>

        <div className="grid services">
          {services.map(([icon, title, desc]) => (
            <div className="card service" key={title}>
              <div className="icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <span className="learn">Learn more →</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="calculator">
        <div className="calculator">
          <h2 style={{ marginTop: 0 }}>Settlement Savings Calculator</h2>
          <p style={{ color: "#34435c" }}>See an estimated settlement scenario based on your outstanding amount.</p>

          <div className="grid calcgrid">
            <div>
              <h3>Total Outstanding Amount</h3>
              <input value={`₹ ${loan.toLocaleString("en-IN")}`} readOnly />
              <input type="range" min="50000" max="5000000" value={loan} onChange={(e) => setLoan(Number(e.target.value))} />
              <div style={{ display: "flex", justifyContent: "space-between", color: "#34435c", fontSize: 14 }}>
                <span>₹ 50,000</span>
                <span>₹ 50,00,000</span>
              </div>
            </div>

            <div className="result green">
              <h3>Estimated Settlement Payable</h3>
              <h1>₹ {payable.toLocaleString("en-IN")}</h1>
              <strong>Estimated scenario</strong>
            </div>

            <div className="result blueBox">
              <h3>Potential Estimated Savings</h3>
              <h1>₹ {savings.toLocaleString("en-IN")}</h1>
              <strong>Estimated scenario</strong>
            </div>
          </div>

          <p className="note">This is an estimate only. Final settlement depends on lender policy, overdue period, account status, documents and repayment capacity.</p>
        </div>
      </section>

      <section className="section" id="process">
        <h2 className="title">Simple 4-Step Process</h2>
        <div className="grid steps">
          {[
            ["01", "✎", "Share Details", "Provide basic details about your loans and current situation."],
            ["02", "⌕", "Case Review", "Our experts review your case and understand your options."],
            ["03", "☑", "Action Plan", "We create a personalised plan suitable for your situation."],
            ["04", "👥", "Settlement Support", "We assist you throughout the settlement and documentation."]
          ].map(([num, icon, title, desc]) => (
            <div className="step" key={title}>
              <div className="stepNum">{num}</div>
              <div className="stepIcon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="faqs">
        <h2 className="title">Frequently Asked Questions</h2>

        <div className="grid faqgrid">
          {faqs.map(([q, a], i) => (
            <div className="faq" key={q} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className="faqTop">
                <span>{q}</span>
                <strong>{openFaq === i ? "⌃" : "⌄"}</strong>
              </div>
              {openFaq === i && <p className="faqAnswer">{a}</p>}
            </div>
          ))}
        </div>

        <div className="cta">
          <div>
            <h3 style={{ margin: "0 0 6px" }}>Still have questions?</h3>
            <p style={{ margin: 0, color: "#34435c" }}>Speak with our experts and get clarity on your situation.</p>
          </div>
          <a href="#contact"><button className="btn">Get Free Consultation</button></a>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Book Free Consultation</h2>
          <input placeholder="Full Name" />
          <input placeholder="Mobile Number" />
          <input placeholder="City" />
          <input placeholder="Total Outstanding Amount" />
          <select>
            <option>Select Problem</option>
            <option>Recovery Calls</option>
            <option>Credit Card Settlement</option>
            <option>Personal Loan Settlement</option>
            <option>Multiple Loan Burden</option>
          </select>
          <textarea placeholder="Briefly explain your issue" style={{ height: 110 }} />
          <a
  href="https://wa.me/918826704883?text=Hello%20Bharat%20Debt%20Solutions"
  target="_blank"
>
  <button className="btn" style={{ width: "100%" }}>
    Submit Details
  </button>
</a>
        </div>
      </section>

      <footer>
        <h3>Bharat Debt Solutions</h3>
        <p>Debt relief support, settlement planning and financial guidance.</p>
        <small>© 2026 Bharat Debt Solutions. All rights reserved.</small>
      </footer>
    </div>
  );
}