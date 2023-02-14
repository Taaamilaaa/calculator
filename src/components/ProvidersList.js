export const ProvidersList = ({ data, modeSwitch }) => {
    return (
        <ul>
            {data.map((el, index) => {
                return (
                    <li key={index}>
                        <p>{el.name}</p>
                        {el.name === 'bunny' && (
                            <form onChange={modeSwitch}>
                                <input id="HDD" type="radio" name="bunny" value="HDD" defaultChecked></input>
                                <label htmlFor="HDD">HDD</label>
                                <input id="SSD" type="radio" name="bunny" value="SSD"></input>
                                <label htmlFor="SSD">SSD</label>
                            </form>
                        )}
                        {el.name === 'scaleway' && (
                            <form onChange={modeSwitch}>
                                <label htmlFor="Multi">
                                <input id="Multi" type="radio" name="scaleway" value="Multi" defaultChecked></input>
                                Multi</label>
                                <input id="Single" type="radio" name="scaleway" value="Single"></input>
                                <label htmlFor="Single">Single</label>
                            </form>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};
