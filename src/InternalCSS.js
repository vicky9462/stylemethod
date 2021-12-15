import React ,{useState}from 'react'


function InternalCSS(props) {
    const name = 'vicky';
    const img1 = "https://picsum.photos/220/300";
    const img2 = "https://picsum.photos/230/300";
    const img3 = "https://picsum.photos/250/300";

    const[img,setImg]=useState(img1);
    const[imgSec,setImgSec]=useState(img2);
    const[imgTh,setImgTh]=useState(img3);
    const heading = {
        color: '#fa9191',
        textAlign: 'center',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        textShadow: '0px 2px 4px #ffe9c5',
        margin: '70px 0',


    }
    const click=()=>{
        // console.log('jbhjb');
        // const im="https://picsum.photos/250/300";
        setImg(img3);
        setImgSec(img1);
        setImgTh(img2);
    }
   const click1=()=>{
    setImg(img1);
    setImgSec(img2);
    setImgTh(img3);
    
    }
    return (
        <>
            <div>
                <h1 style={heading}> My Name is {name}</h1>
                <div className={props.name}>
                    <img src={img} className={props.imgDiv} alt='random image'></img>

                    <img src={imgSec} className={props.imgDiv} alt='random image'></img>
                    <img src={imgTh} className={props.imgDiv} alt='random image'></img>
                </div>

            </div>
            <div className={props.btn}>
                <button  onClick={click} className={props.btnn}>Click Me 1</button>
                <button onClick={click1} className={props.btnn}>Click Me 2</button>
            </div>
        </>
    )
}

export default InternalCSS;
