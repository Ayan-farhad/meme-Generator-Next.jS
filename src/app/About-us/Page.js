import Link from "next/link";

async function AboutMeme() {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const response = await res.json();
    console.log(response);

    return (
        <div style={mainDiv}>
            <div style={styleDiv}>
                {response.data.memes.map((item, index) => {
                    return (
                        <div key={index} style={imgDiv} >
                            <img src={item.url} style={imageStyle} />

                            <div style={{ padding: '16px' }}>

                                <h2 style={h2Name}>Name: {item.name}</h2>
                                <Link href={`/meme-detail?url=${item.url}`}>
                                    <button style={button}>Select this meme</button>
                                </Link>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default AboutMeme;

const mainDiv = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  };
  const styleDiv = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };
  const imgDiv = {
    width: '300px',
    margin: '10px',
    boxShadow: '0px 4px 8px black',
    borderRadius: '8px',
  };
  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px 8px 0 0',
  };
  const h2Name = {
    color: 'white',
    margin: '10px 0',
    fontSize: '18px',
  };
  const button = {
    cursor: 'pointer',
    textAlign: 'center',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    background: 'black',
    color: '#fff',
  };