import { useSelector } from 'react-redux';
import '../App.css';

export const InputsList = ({ list, onRangeChange }) => {
    const sVal = useSelector(state => state.range.sVal);
    const tVal = useSelector(state => state.range.tVal);

    return (
        <ul className="range-list">
            {list.map((el, index) => {
                return (
                    <li key={index}>
                        <label htmlFor={el}>{el}</label>
                        <input
                            onChange={onRangeChange}
                            id={index}
                            name={el}
                            type="range"
                            min="0"
                            max="1000"
                            step="1"
                        ></input>
                        <div className='gb-wrapper'>
                            <p>
                                {el === 'Storage' && <span>{sVal} GB</span>}
                                {el === 'Transfer' && <span>{tVal} GB</span>}
                            </p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};
