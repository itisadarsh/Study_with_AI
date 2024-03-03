

const Images=(props)=>{

   return( <div className="img-section h-full relative w-11/12 max-w-[450px ]">
    <img src={props.Image1} alt="" className="  brightness-[400] left-[-40px] h-full" />
    <img src={props.Image2} alt="" className=" z-50 h-[100%] absolute -top-4 right-4" />
    </div>);

}

export default Images;