import { useRef, useState } from "react"
import "./App.css"
import screenshot from "html2canvas"


const App = () => {

  const [fcol, setFcol] = useState('000')
  const [bgcol, setBgcol] = useState('000')
  const text = useRef()


  const chengeTextColor = (color) => {
    // document.getElementById('text').style.color = color
    text.current.style.color = color;
    text.current.style.borderColor = color

  }

  const chengeBgColor = (color) => {
    // document.getElementById('text').style.backgroundColor = color
    text.current.style.backgroundColor = color
  }

  const chengeFont = (font) => {
    // document.getElementById('text').style.fontFamily = font
    text.current.style.fontFamily = font
  }

  const downloadImage = ()=>{
    screenshot(text.current).then(canvas=>{
      const imageData = canvas.toDataURL("image/png")
      const link = document.createElement('a')
      link.href = imageData
      link.download = "textify.png"
      link.click()
    });
  }

  return (
    <>

      <div className="hedding">
        <h1>Textify</h1>
      </div>

      <div className="parent">

        <div className="textbox-c1">
          <h1 ref={text} className="text-c11" id="text" contentEditable="true">Create Your Art...</h1>
          <button onClick={downloadImage} className="btn-c12">Download</button>
        </div>

        <div className="right-c2">

          <div className="text-col-c21">

            <div className="text-col-c21-hed">
              <h1>Choose Text Color</h1>
            </div>

            <div className="text-color">
              <div id="t1" onClick={() => { chengeTextColor('red') }}></div>
              <div id="t2" onClick={() => { chengeTextColor('green') }}></div>
              <div id="t3" onClick={() => { chengeTextColor('blue') }}></div>
              <div id="t4" onClick={() => { chengeTextColor('pink') }}></div>
              <div id="t5" onClick={() => { chengeTextColor('purple') }}></div>
              <input id="t6"
                type="color"
                value={fcol}
                onChange={(event) => {
                  setFcol(event.target.value)
                  chengeTextColor(event.target.value)
                }}
              />
            </div>
          </div>

          <div className="bg-col-c22">
            <div className="bg-col-c22-hed">
              <h1>Choose Background Color</h1>
            </div>

            <div className="text-bg-color">
              <div id="t1" onClick={() => { chengeBgColor('red') }}></div>
              <div id="t2" onClick={() => { chengeBgColor('green') }}></div>
              <div id="t3" onClick={() => { chengeBgColor('blue') }}></div>
              <div id="t4" onClick={() => { chengeBgColor('pink') }}></div>
              <div id="t5" onClick={() => { chengeBgColor('purple') }}></div>
              <input id="t6"
                type="color"
                value={bgcol}
                onChange={() => {
                  setBgcol(event.target.value)
                  chengeBgColor(event.target.value)
                }}
              />
            </div>
          </div>


          <div className="text-font-c33">
            <div className="text-font-c33-hed" >
              <h1>Choose Font</h1>
            </div>
            <div className="text-font">
              {/* <div className=""></div> */}
              <div className="font" id="f1" onClick={() => { chengeFont('Times New Roman') }}>Hello</div>
              <div className="font" id="f2" onClick={() => { chengeFont('Georgia') }}>Hello</div>
              <div className="font" id="f3" onClick={() => { chengeFont('Consolas') }}>Hello</div>
              <div className="font" id="f4" onClick={() => { chengeFont('Lucida Handwriting') }} >Hello</div>
              <div className="font" id="f5" onClick={() => { chengeFont('Papyrus, fantasy') }} >Hello</div>
              <div className="font" id="f6" onClick={() => { chengeFont('Courier') }} >Hello</div>
              <div className="font" id="f7" onClick={() => { chengeFont('Impact') }}>Hello</div>
              <div className="font" id="f8" onClick={() => { chengeFont('Helvetica') }}>Hello</div>
              <div className="font" id="f9" onClick={() => { chengeFont('Segoe Script') }}>Hello</div>
              <div className="font" id="f10" onClick={() => { chengeFont('Harrington') }}>Hello</div>
            </div>
          </div>

        </div >


      </div >
    </>
  )
}

export default App