import Link from "next/link";

async function Dashboard() {

  const res = await fetch("https://api.imgflip.com/get_memes");
  const response = await res.json();
  console.log(response);


  return (
    <>
      <div style={mainDiv}>
        <h1>Meme Generate</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {response.data.memes.map((item, index) => {
            return (
              <div key={index} style={{ width: '300px', margin: '10px', boxShadow: '0px 4px 8px black', borderRadius: '8px' }} > 
               <img src={item.url} style={{ width: '100%', height: 'auto', borderRadius: '8px 8px 0 0' }} />
                
                <div style={{ padding: '16px' }}>
                  <h2 style={{ margin: '10px 0', fontSize: '18px' }}>Name: {item.name}</h2>
                  <Link href={`/meme-detail?url=${item.url}`}>
                    <button style={{ cursor: 'pointer', textAlign: 'center', padding: '8px 16px', borderRadius: '4px', background: '#007bff', color: '#fff' }}>Select this meme</button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Dashboard;

const mainDiv = {
  fontFamily: 'Arial, sans-serif',
  padding: '20px'
}