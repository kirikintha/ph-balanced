import { useEffect, useRef, useState } from 'react';
import styles from './app.module.scss';
import KeepScrolling from './keep-scrolling';
import NeonSign from './neon-sign';
import NoirVideo from './noir-video';

export function App() {
  const [isVisible, setIsVisible] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.target === navbarRef.current) {
          setIsVisible(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (navbarRef.current) {
      observer.observe(navbarRef.current);
    }

    return () => {
      if (navbarRef.current) {
        observer.unobserve(navbarRef.current);
      }
    };
  }, []);
  return (
    <>
      <nav ref={navbarRef} className="navbar text-bg-light">
        <div className="container-fluid text-center">
          <span className="navbar-brand mx-auto comfortaa-300">
            PH-Balanced Solutions
          </span>
        </div>
      </nav>
      <div className={`container-fluid ${styles.lightbox}`}>
        <div className="row">
          <section className="col-lg-6">
            <NeonSign />
            <NoirVideo
              className="los-angeles"
              src="/assets/Los-Angeles-Noir.mp4"
            />
          </section>
          <section className="col-lg-6">
            <div className="row">
              <section className="col-6">
                <NoirVideo
                  className="jazz"
                  src="/assets/Jazz-Noir.mp4"
                  delay={1000}
                />
              </section>
              <section className="col-6">
                <NoirVideo
                  className="co-springs"
                  src="/assets/CoSprings-Noir.mp4"
                  delay={4000}
                />
              </section>
              <section className="col-6">
                <NoirVideo
                  className="desert"
                  src="/assets/Desert-Noir.mp4"
                  delay={3000}
                />
              </section>
              <section className="col-6">
                <NoirVideo
                  className="savannah"
                  delay={2000}
                  src="/assets/Savannah-Noir.mp4"
                />
              </section>
            </div>
          </section>
        </div>
        <div className="row bg-dark bg-gradient text-white content">
          <div className="col p-3">
            <div className="row">
              <section>
                <img src="/assets/1940s.jpeg" alt="1940s" />
              </section>
              <section>
                <h2>Finding the right Balance</h2>
                <p>
                  Yes, "AI" it out there and we're embracing it, here we lead by
                  example.
                </p>
                <p>
                  Generative AI is a big dopamine hit and is rewarding to see
                  how much it can accomplish in a short period of time. However
                  it is not perfect and has limitations.
                </p>
                <p>
                  Take a deep dive on the generated images we created. We want
                  you to be critical of the output. There is a logic behind the
                  images and the styles we chose.
                </p>
                <p>
                  If you are expecting Machine Learning, Deep learning and
                  neural nets to be a magic wand to wave, change your
                  expectations.
                </p>
                <p>
                  For the foreseeable future, AI is still very much learning and
                  growing. If you are asking yourself if AI is right for you -
                  talk to us first.
                </p>
                <p>
                  We've been in the thick of Generative AI for a while now, and
                  have our sea legs. Let us help you!
                </p>
                <p>
                  Oh, and spoiler alert: Artificial Intelligent doesn't exist.
                  It is a term of use, like "The Cloud". And no, we didn't use
                  GPT to write the copy, that's all us.
                </p>
              </section>
            </div>
            <div className="row">
              <section>
                <h2>Proposing Innovative Solutions</h2>
                <p>
                  In a lot of ways, innovation is a leap of faith. But let's be
                  pragmatic: innovation is difficult and risky.
                </p>
                <p>
                  Let us help you mitigate the risk of finding emerging
                  technologies to use. Honestly, we may even propose some battle
                  tested tech because sometimes the risk isn't worth it and
                  comes at too high a cost.
                </p>
                <p>
                  We're here to help you find the right solution at the right
                  time and on budget.
                </p>
              </section>
              <section>
                <img src="/assets/1950s.jpeg" alt="1950s" />
              </section>
            </div>
            <div className="row">
              <section>
                <img src="/assets/1960s.jpeg" alt="1960s" />
              </section>
              <section>
                <h2>Executing on Deliverables</h2>
                <p>
                  If you're still reading this, good for you! TLDR; If you can't
                  execute on deliverables, you can't find success.
                </p>
                <p>
                  The first step is to define what success means to you and your
                  organization. After that, we can find solutions to support
                  your deliverables.
                </p>
                <p>
                  At PH-Balanced, we don't do endless meetings and reductive
                  slide-shows that don't go anywhere, or upsell you to another
                  product. We want you to be successful.
                </p>
                <p>
                  After you define what success looks like (even on a napkin) we
                  will help you execute it.
                </p>
              </section>
            </div>
            <div className="row">
              <section>
                <h2>Finding the right technology</h2>
                <p>
                  Vendor Assessments, Security Assessments, build vs. buy, TCO,
                  ROI, It's a lot to handle.
                </p>
                <p>
                  Finding the right technology is simultaneously the most
                  trivial and non-trivial decision your business can make. It's
                  a riddle, wrapped in an enigma, wrapped in a... well you know
                  the quote.
                </p>
                <p>
                  We have two decades of experience using technologies as
                  consumers, developers, engineers, architects, security
                  specialists and managers.
                </p>
                <p>
                  We've done everything from making small e-Commerce sites to
                  creating brand new products from scratch.
                </p>
                <p>
                  If you're stuck, let us guide you. We can help with everything
                  from RFPs to analysis.
                </p>
              </section>
              <section>
                <img src="/assets/1970s.jpeg" alt="1970s" />
              </section>
            </div>
            <div className="row">
              <section>
                <img src="/assets/1980s.jpeg" alt="1980s" />
              </section>
              <section>
                <h2>Critical Thinking</h2>
                <p>
                  Critical thinking is not about looking on social media and
                  then deciding what the next trend is by scrolling your feed
                  and saying: "I want to be the next...".
                </p>
                <p>
                  At PH-Balanced, we did the whole social media thing and we've
                  gone back to basics. You're not going to find us posting to up
                  our brand through click-bait. Our brand is our word, and that
                  is something in short supply these days.
                </p>
                <p>
                  Our goal is to find the spaces in between, to figure out where
                  the gaps are in the market and help you find your niche that
                  is sustainable.
                </p>
                <p>If we can be brilliant along the way, all the better.</p>
              </section>
            </div>
            <div className="row">
              <section>
                <h2>Having Fun along the way</h2>
                <p>So, yeah - we got the generative AI bug... there's that.</p>
                <p>
                  But can you blame us? It's just really fun! And, everyone
                  needs to have some fun once in a while.
                </p>
                <p>
                  Running a business can be a chore and stressful beyond belief.
                  The world is a funny place.
                </p>
                <p>
                  Our goal at PH-Balanced is to provide a really cool work
                  experience. The best ideas come from when we have fun.
                </p>
                <p>
                  Every image here, the CSS and some of the coding was done with
                  an AI assistant, because we wanted to see what it could do.
                  For us, developing the next move was realizing that there are
                  some really great tools out there.
                </p>
                <p>
                  And honestly, we had to step in a few times because we knew
                  better. Generative assistants still don't know how to keep one
                  organized and we don't want them compeletely in our file
                  system yet.
                </p>
              </section>
              <section>
                <img src="/assets/1990s.jpeg" alt="1990s" />
              </section>
            </div>
            <div className="row">
              <section>
                <img src="/assets/2000s.jpeg" alt="200s" />
              </section>
              <section>
                <h2>Communicating Results</h2>
                <p>
                  At the core of our delivery strategy suppling you with a way
                  to communicate back to your stakeholders with honesty and
                  conviction.
                </p>
                <p>
                  What drives that core is the ability to see the micro and
                  macro level of engineering with a great deal of perception.
                  And we'll create great documentation to that effect.
                </p>
                <p>
                  Part of our mission is a philosophy we've coined: "The Art and
                  Zen of Successful Failure." or "How we learned to love it when
                  things go wonk-a-doodle."
                </p>
                <p>
                  Success and Failure are not spherical in nature, nor are they
                  weighted all the same. They do not take up the same amount of
                  volume, or have the same densities.
                </p>
                <p>
                  And, let's face it: one person's definition of success is
                  sometimes another's definition of failure.
                </p>
                <p>
                  We will pledge to you that we will be honest with how to
                  proceed in a way were your organization can make the most out
                  of your definition of success.
                </p>
              </section>
            </div>
            <div className="row">
              <section>
                <h2>Developing the next Move</h2>
                <p>
                  A quick admission here - we're ok at chess, but collectively
                  we will ever be a champion. However, we can program the code
                  that makes an AI bot that will play chess for us.
                </p>
                <p>
                  Developing the next move is still very much a human endeavor,
                  no amount of programming of synapses can reach the
                  computational level and experience you have right now - today
                  - reading this with your mind.
                </p>
                <p>
                  Developing the next move within your organization will be a
                  human effort. You, your staff, your stakeholders are all
                  valuable and valued. We're not interested in changing that.
                </p>
                <p>
                  But, we will always look to future technology and give it a
                  go. It's only human.
                </p>
              </section>
              <section>
                <img src="/assets/2010s.jpeg" alt="201s" />
              </section>
            </div>
            <div className="row">
              <section>
                <img src="/assets/2020.jpeg" alt="2020s" />
              </section>
              <section>
                <h2>A desire to learn</h2>
                <p>
                  Our vision statement is this: You are only limited by your
                  imagination, and a desire to learn.
                </p>
                <p>
                  Our goal is to learn everything we can about your
                  organization, your mission, your culture and how you are
                  successful.
                </p>
                <p>
                  You're going to expect a lot from us, so we're going to expect
                  a lot from you in return.
                </p>
                <p>
                  The best thing about how we work, is that it shouldn't feel
                  like work. Well, maybe keeping the network up, or the
                  datacenter in tact, or keeping bugs out of the application
                  code, keeping funders and the executive team in the know,
                  problem solving, writing documentation... but other than that:
                  totally not work.
                </p>
                <p>
                  Want to know more? Our contact information is in the footer.
                  Thanks for taking the time to look!
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <div className="container">
          <p>
            ©{currentYear} PH-Balanced Solutions, Atlanta, Georgia USA. All
            rights reserved.
          </p>
          <p>
            <a
              href="tel:+14049542051"
              className="link-underline-light text-white"
            >
              +1.404.954.2051
            </a>
          </p>
          <p>
            <a
              href="https://calendly.com/paul-huntsberger/thirty-minute-meeting"
              className="link-underline-light text-white"
            >
              Schedule a Meeting
            </a>
          </p>
        </div>
      </footer>
      <KeepScrolling isVisible={isVisible} />
    </>
  );
}

export default App;
