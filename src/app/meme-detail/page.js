// 'use client'
// import { useSearchParams } from "next/navigation";
// import { useState, createRef } from "react";
// import Draggable from "react-draggable";
// import { exportComponentAsJPEG } from "react-component-export-image";

// function MemeDetail() {
//     const searchParams = useSearchParams();
//     const memeurl = searchParams.get('url');

//     const [text1, setText1] = useState('');
//     const [text2, setText2] = useState('');

//     const memeRef = createRef();

//     const exportMeme = () => {
//         exportComponentAsJPEG(memeRef, {
//             fileName: 'memeFileName'
//         })
//     }
//     return (
//         <div style={mainContainer}>
//             <h1 style={h1style}>Edit Meme</h1>

//             <div style={draggableContainer} ref={memeRef}>
//                 <img src={memeurl} alt="Meme" width={300} />
//                 <Draggable>
//                     <div style={textDiv}>
//                         <h4 style={h4Text}>{text1}</h4>
//                     </div>
//                 </Draggable>
//                 <Draggable>
//                     <div style={textDiv}>
//                         <h4 style={h4Text}>{text2}</h4>
//                     </div>
//                 </Draggable>
//             </div>

//             <div style={{ marginTop: "20px", textAlign: "center" }}>
//                 <input
//                     type="text"
//                     placeholder="Enter meme first text"
//                     onChange={e => setText1(e.target.value)}
//                     style={inputStyle}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Enter meme second text"
//                     onChange={e => setText2(e.target.value)}
//                     style={inputStyle}
//                 />
//                 <button onClick={exportMeme} style={saveButton}>Save</button>
//             </div>
//         </div>
//     );
// }

// export default MemeDetail;

// const mainContainer = {
//     fontFamily: "Arial, sans-serif",
//     padding: "20px",
// };
// const h1style = {
//     textAlign: 'center',
//     fontSize: 40,
//     fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
//     color: 'black',
//     cursor: 'pointer',
// };
// const draggableContainer = {
//     position: "relative",
//     width: "300px",
//     margin: "0 auto",
//     textAlign: "center",
// };
// const textDiv = {
//     position: "absolute",
//     cursor: "pointer",
//     top: "20%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
// };
// const h4Text = {
//     margin: "0",
//     padding: "4px",
//     background: "rgba(255, 255, 255, 0.7)",
//     borderRadius: "4px",
//     userSelect: "none",
// };
// const inputStyle = {
//     padding: "8px",
//     marginRight: "10px",
//     borderRadius: "5px",
//     border: "1px solid gray",
// };
// const saveButton = {
//     padding: "8px 16px",
//     borderRadius: "4px",
//     background: "#007bff",
//     color: "#fff",
//     border: "none",
//     cursor: "pointer",
// };

'use client'
import { useSearchParams } from "next/navigation";
import { useState, createRef } from "react";
import Draggable from "react-draggable";
import { exportComponentAsJPEG } from "react-component-export-image";

// import { useSearchParams } from "next/navigation";
// import { useState, createRef } from "react";
// import Draggable from "react-draggable";
// import { exportComponentAsJPEG } from "react-component-export-image";

function MemeDetail() {
    const searchParams = useSearchParams();
    const memeurl = searchParams.get('url');

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [textColor1, setTextColor1] = useState('#000000'); // Default color black
    const [textColor2, setTextColor2] = useState('#000000'); // Default color black

    const memeRef = createRef();

    const exportMeme = () => {
        exportComponentAsJPEG(memeRef, {
            fileName: 'memeFileName'
        })
    }

    return (
        <div style={mainContainer}>
            <h1 style={h1style}>Edit Meme</h1>

            <div style={draggableContainer} ref={memeRef}>
                <img src={memeurl} alt="Meme" width={300} />
                <Draggable>
                    <div style={{ ...textDiv, color: textColor1 }}>
                        <h4 style={h4Text}>{text1}</h4>
                    </div>
                </Draggable>
                <Draggable>
                    <div style={{ ...textDiv, color: textColor2 }}>
                        <h4 style={h4Text}>{text2}</h4>
                    </div>
                </Draggable>
            </div>

            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <input
                    type="text"
                    placeholder="Enter meme first text"
                    onChange={e => setText1(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="color"
                    value={textColor1}
                    onChange={e => setTextColor1(e.target.value)}
                    style={{ marginRight: "10px" }}
                />
                <input
                    type="text"
                    placeholder="Enter meme second text"
                    onChange={e => setText2(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="color"
                    value={textColor2}
                    onChange={e => setTextColor2(e.target.value)}
                    style={{ marginRight: "10px" }}
                />
                <br/>
                <button onClick={exportMeme} style={saveButton}>Save</button>
            </div>
        </div>
    );
}

export default MemeDetail;

const mainContainer = {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
};
const h1style = {
    textAlign: 'center',
    fontSize: 40,
    color: '#fff',
    cursor: 'pointer',
};
const draggableContainer = {
    position: "relative",
    width: "300px",
    margin: "0 auto",
    textAlign: "center",
};
const textDiv = {
    position: "absolute",
    cursor: "pointer",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
};
const h4Text = {
    margin: "0",
    padding: "4px",
    background: "rgba(255, 255, 255, 0.7)",
    borderRadius: "4px",
    userSelect: "none",
};
const inputStyle = {
    padding: "8px",
    marginRight: "10px",
    borderRadius: "5px",
    border: "1px solid gray",
};
const saveButton = {
    marginTop: '1rem',
    padding: "8px 16px",
    borderRadius: "4px",
    background: "blue",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontWeight: 'bold',
};
