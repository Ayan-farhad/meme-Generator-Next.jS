import AboutMeme from "../About-us/Page";

function Dashboard() {

  return (
    <>
      <div>
        <div style={header}>
          <h1 style={mainHeading}><a>Meme Generator</a></h1>
        </div>
        <AboutMeme />
      </div>
    </>
  )
}

export default Dashboard;

const mainHeading = {
  textAlign: 'center',
  fontSize: 40,
  fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
  color: 'white',
  cursor: 'pointer',
};
const header = {
  backgroundColor: 'black',
  height: '5rem',
  paddingTop: '5px',
};