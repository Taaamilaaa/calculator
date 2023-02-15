

export const Logo = ({ logo, name }) => {
 
    return (
        <div className="logo" style={{width: "200px", height: "60px"}}>
            <a href={`https://${name}.com/`} target={"_blank"}>

                <img  src={logo}></img>

            </a>
        </div>
    )
}