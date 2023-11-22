
const Flag = ({flags}) =>{

    const src = flags.svg
    const alt = flags.alt

    return (
        <>
            <img 
                src={src} 
                alt={alt} 
                style={{objectFit:"cover", boxShadow:"1px 1px 5px 5px #ccc"}} 
                width="300" 
                height="150"
            />
        </>
    ) 
}

export default Flag