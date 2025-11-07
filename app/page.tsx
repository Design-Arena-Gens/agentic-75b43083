export default function Home() {
  return (
    <main>
      <div className="container">
        <section className="hero">
          <p className="subtitle">Are you Ready?</p>
          <h1>Take your knowledge in Psychology to The Next Level</h1>
          <div className="tagline">Advanced Diploma in Islamic Counseling Techniques & Skills</div>
          <div className="rating">
            ⭐ Level 1 Course had Over 95% Approval Rating from Students
          </div>
        </section>

        <div className="content-grid">
          <div className="card">
            <h2>Subjects Include</h2>
            <ul>
              <li>CBT (Cognitive Behavioral Therapy)</li>
              <li>SFBT (Solution-Focused Brief Therapy)</li>
              <li>Enhanced Skill Training in Counseling</li>
              <li>Islamic Guidance by Scholars</li>
            </ul>
          </div>

          <div className="card">
            <h2>Build Your Skills</h2>
            <ul>
              <li>Empathy</li>
              <li>Advocacy</li>
              <li>Interpersonal Communication</li>
              <li>Listening</li>
              <li>Cultural Competency</li>
              <li>Solution Based Competency</li>
            </ul>
          </div>

          <div className="card highlight-card">
            <h2>How is this course unique?!</h2>
            <ul>
              <li>Observation of real counselling under supervision</li>
              <li>Hands on training</li>
              <li>Discussions on case studies</li>
              <li>Identifying ones&apos; style of counselling</li>
              <li>Competency based on application of appropriate Techniques</li>
            </ul>
          </div>

          <div className="card">
            <h2>Who Can Join?</h2>
            <ul>
              <li>Students who have completed Bachelor&apos;s, Master&apos;s & Advanced Studies in Psychology</li>
              <li>Humanities Students with Allied or Supplementary Paper in Psychology</li>
              <li>Students of Level 1 Islamic Psychology Diploma</li>
            </ul>
          </div>
        </div>

        <section className="cta-section">
          <div className="duration-badge">📅 Multi-Week Comprehensive Course</div>
          <h2 style={{marginBottom: '30px', fontSize: '2rem'}}>Ready to Transform Your Career?</h2>
          <button className="cta-button">Enroll Now</button>
        </section>
      </div>
    </main>
  )
}
