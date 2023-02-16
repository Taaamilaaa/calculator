import '../App.css';
import { Logo } from './Logo';

export const ProvidersList = ({ data, modeSwitch, minPrice }) => {
    return (
        <div className="providers-list__continer">
            <h2>More info:</h2>

            <ul className="providers-list">
                {data.map((el, index) => {
                    const { price } = el;
                    const fixedPrice = price.toFixed(2);
                    const pricePerYear = price * 12;
                    const fixedPricePerYear = pricePerYear.toFixed(2);

                    return (
                        <li
                            key={index}
                            style={
                                minPrice === el.price && minPrice !== 0
                                    ? {
                                          borderColor: `${el.color}`,
                                          backgroundColor: 'rgba(150, 192, 183, 0.671)',
                                          boxShadow: `0px 0px 18px 11px ${el.color}`,
                                          transform: 'scale(1.07)',
                                          transition: 'transform 1s easy',
                                      }
                                    : {
                                          borderColor: `${el.color}`,
                                          backgroundColor: 'rgba(150, 192, 183, 0.671)',
                                      }
                            }
                        >
                            <Logo logo={el.logo} name={el.name} />
                            <div className="item-text">
                                <h3
                                    style={{
                                        color: `${el.color}`,
                                        fontSize: '2rem',
                                        textAlign: 'center',
                                        marginBottom: '20px',
                                        // display: 'block',

                                        // mrginLeft: 'auto'
                                    }}
                                >
                                    {`${el.name}.com`}:
                                </h3>

                                <div className="price-text">
                                    <span className="price-month-cont">
                                        {fixedPrice}$ per month
                                    </span>
                                    or
                                    <span className="price-year-cont">
                                        {fixedPricePerYear}$ per year
                                    </span>
                                </div>
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
