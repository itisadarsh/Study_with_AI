

const Images=(props)=>{

   return( <div className="img-section h-full relative">
    {/* <img src={gridnet} alt="" className="  brightness-[400] left-[-40px] h-full" /> */}
    <img src={props.Image1} alt="" className=" z-50 h-[100%]" />
    </div>);

}

export default Images;