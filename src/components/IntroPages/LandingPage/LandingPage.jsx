import '../../App/App.css';
import MainLayout from '../../Layouts/MainLayout/MainLayout';

function LandingPage() {
  return (
    <MainLayout>
      <div className="title">
        <h1>Sub Scheduling</h1>
        <h3>Made Easy</h3>
      </div>

      {/* <div className="info">
        <p>Paragraph description</p>
      </div>

      <div className="infotwo">
        <p>Paragraph two description</p>
      </div> */}

      {/* <div className="questions">
        <h2>
          Questions? <br></br>We're here to help?
        </h2>
        <button
          className="btn"
          onClick={() => {
            history.push('/contact');
          }}
        >
          Contact
        </button>
      </div> */}
    </MainLayout>
  );
}

export default LandingPage;
