import '../App.css';

export const ProvidersList = ({ data, modeSwitch}) => {

    return (
        <div className='providers-list__continer'>
            <h2>More info:</h2>

            <ul className="providers-list">
                {data.map((el, index) => {
                    const { price } = el;
                    const fixedPrice = price.toFixed(2);
                    const pricePerYear = price * 12;
                    const fixedPricePerYear = pricePerYear.toFixed(2);

                    return (
                        <li className='list-item' key={index} style={{ borderColor: `${el.color}` }}>
                            
                            <div className='item-text'>
                                <h3 style={{
                                        color: `${el.color}`,
                                        fontSize: '2rem',
                                        display: 'inline',
                                        marginRight: '25px',
                                    }}
                                >
                                    {el.name}:
                                </h3>
                                <span className='price-month-cont'>{fixedPrice}$ per month</span>
                                or
                                <span className='price-year-cont'>{fixedPricePerYear}$ per year</span>
                                 
                            </div>
                            {el.name === 'bunny' && (
                                <form onChange={modeSwitch}>
                                    <input
                                        id="HDD"
                                        type="radio"
                                        name="bunny"
                                        value="HDD"
                                        defaultChecked
                                    ></input>
                                    <label htmlFor="HDD">HDD</label>
                                    <input id="SSD" type="radio" name="bunny" value="SSD"></input>
                                    <label htmlFor="SSD">SSD</label>
                                </form>
                            )}
                            {el.name === 'scaleway' && (
                                <form onChange={modeSwitch}>
                                    <label htmlFor="Multi">
                                        <input
                                            id="Multi"
                                            type="radio"
                                            name="scaleway"
                                            value="Multi"
                                            defaultChecked
                                        ></input>
                                        Multi
                                    </label>
                                    <input
                                        id="Single"
                                        type="radio"
                                        name="scaleway"
                                        value="Single"
                                    ></input>
                                    <label htmlFor="Single">Single</label>
                                </form>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
