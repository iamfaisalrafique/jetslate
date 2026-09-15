import React from "react";

export default function Team() {
  return (
    <section className="wpr-team-area mb--16">
      <div className="container">
        <div className="section-inner border" style={{ background: "#161616", position: "relative" }}>
          <div className="content-area">
            <div className="section-bg-shape">
              <img src="/assets/images/team/grid-big.svg" alt="" />
            </div>
            <div className="section-title-area center-style">
              <p className="sub-title">TEAM MEMBERS</p>
              <h2 className="section-title second-font font-semi-bold text-normal quote">
                The Minds <br /> Behind the Work
              </h2>
            </div>
            <div className="section-bottom-inner">
              <div className="row g-24">
                {/* Member 1: Ethan Brooks */}
                <div className="col-xl-3 col-md-6 wow fadeInDown" data-wow-delay=".2s">
                  <div className="team-wrapper">
                    <div className="image-area">
                      <img src="/assets/images/team/01.webp" alt="Ethan Brooks" />
                    </div>
                    <div className="author-area">
                      <h3 className="title h6">Ethan Brooks</h3>
                      <p className="designation">Engineering Lead</p>
                      <div className="social">
                        <ul>
                          <li><a href="https://twitter.com/jetslate" target="_blank" rel="me noopener noreferrer" aria-label="Twitter"><img src="/assets/images/team/twitter.svg" alt="" /></a></li>
                          <li><a href="https://linkedin.com/in/jetslateue" target="_blank" rel="me noopener noreferrer" aria-label="LinkedIn"><img src="/assets/images/team/linkedin.svg" alt="" /></a></li>
                          <li><a href="https://github.com/jetslateue" target="_blank" rel="me noopener noreferrer" aria-label="GitHub"><img src="/assets/images/team/github.svg" alt="" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="shape shape-top-left">
                      <img src="/assets/images/team/shape-top-left.svg" alt="" />
                    </div>
                  </div>
                </div>

                {/* Member 2: Liam Anderson */}
                <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                  <div className="team-wrapper down">
                    <div className="image-area">
                      <img src="/assets/images/team/02.webp" alt="Liam Anderson" />
                    </div>
                    <div className="author-area">
                      <h3 className="title h6">Liam Anderson</h3>
                      <p className="designation">Brand Identity Designer</p>
                      <div className="social">
                        <ul>
                          <li><a href="https://twitter.com/jetslate" target="_blank" rel="me noopener noreferrer" aria-label="Twitter"><img src="/assets/images/team/twitter.svg" alt="" /></a></li>
                          <li><a href="https://linkedin.com/in/jetslateue" target="_blank" rel="me noopener noreferrer" aria-label="LinkedIn"><img src="/assets/images/team/linkedin.svg" alt="" /></a></li>
                          <li><a href="https://github.com/jetslateue" target="_blank" rel="me noopener noreferrer" aria-label="GitHub"><img src="/assets/images/team/github.svg" alt="" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="shape shape-bottom-left">
                      <img src="/assets/images/team/shape-bottom-left.svg" alt="" />
                    </div>
                  </div>
                </div>

                {/* Member 3: Ethan Walker */}
                <div className="col-xl-3 col-md-6 wow fadeInDown" data-wow-delay=".6s">
                  <div className="team-wrapper">
                    <div className="image-area">
                      <img src="/assets/images/team/03.webp" alt="Ethan Walker" />
                    </div>
                    <div className="author-area">
                      <h3 className="title h6">Ethan Walker</h3>
                      <p className="designation">Creative Director</p>
                      <div className="social">
                        <ul>
                          <li><a href="https://twitter.com/jetslate" target="_blank" rel="me noopener noreferrer" aria-label="Twitter"><img src="/assets/images/team/twitter.svg" alt="" /></a></li>
                          <li><a href="https://linkedin.com/in/jetslateue" target="_blank" rel="me noopener noreferrer" aria-label="LinkedIn"><img src="/assets/images/team/linkedin.svg" alt="" /></a></li>
                          <li><a href="https://github.com/jetslateue" target="_blank" rel="me noopener noreferrer" aria-label="GitHub"><img src="/assets/images/team/github.svg" alt="" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="shape shape-top-right">
                      <img src="/assets/images/team/shape-top-right.svg" alt="" />
                    </div>
                  </div>
                </div>

                {/* Member 4: Mason Cole */}
                <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                  <div className="team-wrapper down">
                    <div className="image-area">
                      <img src="/assets/images/team/04.webp" alt="Mason Cole" />
                    </div>
                    <div className="author-area">
                      <h3 className="title h6">Mason Cole</h3>
                      <p className="designation">Lead UI/UX Designer</p>
                      <div className="social">
                        <ul>
                          <li><a href="https://twitter.com/jetslate" target="_blank" rel="me noopener noreferrer" aria-label="Twitter"><img src="/assets/images/team/twitter.svg" alt="" /></a></li>
                          <li><a href="https://linkedin.com/in/jetslateue" target="_blank" rel="me noopener noreferrer" aria-label="LinkedIn"><img src="/assets/images/team/linkedin.svg" alt="" /></a></li>
                          <li><a href="https://github.com/jetslateue" target="_blank" rel="me noopener noreferrer" aria-label="GitHub"><img src="/assets/images/team/github.svg" alt="" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="shape shape-bottom-right">
                      <img src="/assets/images/team/shape-bottom-right.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
