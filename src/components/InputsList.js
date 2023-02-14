import { useSelector } from "react-redux";

export const InputsList = ({ list, onRangeChange}) => {
    const sVal = useSelector(state => state.range.sVal);
    const tVal = useSelector(state => state.range.tVal);
   
    return (
        <ul>
            {list.map((el, index) => {
            
                return (
                    <li key={index}>
                        <label htmlFor={el}>{el}</label>
                        <input onChange={onRangeChange} id={index} name={el} type="range" min="0" max="1000" step="1"></input>
                        <p>
                            {el === "Storage" && <span>{sVal} GB</span>}
                            {el === "Transfer" && <span>{tVal} GB</span>}
                        </p>
                    </li>
                );
            })}
        </ul>
    );
};
