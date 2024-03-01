

const Section=(props)=>{

    return(<div className="sign-section flex flex-col text-left gap-3">
         <h2 className=" text-xl font-bold line-clamp-3 leading-6 li">{props.heading}</h2>
        <p className="text-xs">{props.subhead1}
        <p className="text-cyan-300 italic text-xs ">{props.subhead2}</p>
        </p>

        

    </div>
        
    );
}
export default Section;