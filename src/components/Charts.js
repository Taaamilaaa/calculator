import { Bar, BarChart, CartesianGrid, XAxis, Cell, ResponsiveContainer, YAxis } from 'recharts';
import {
    CustomizedAxisTick,
    CustomizedAxisTickMobile,
    renderCustomBarLabelMobile,
    renderCustomBarLabel
} from './customizedEl';

export const Charts = ({ data, mobile, minPrice }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={mobile ? 282 : 605}
                hide={mobile ? 480 : 380}
                data={data}
                barSize={mobile ? 40 : '95%'}
                layout={mobile ? 'vertical' : 'horizontal'}
            >
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />

                <XAxis
                    hide={mobile ? true : false}
                    type={mobile ? 'number' : 'category'}
                    dataKey={mobile ? 'price' : 'name'}
                    axisLine={true}
                    tick={<CustomizedAxisTick />}
                    padding={{ top: 20, bottom: 20 }}
                />
                <YAxis
                    hide={mobile ? false : true}
                    type={mobile ? 'category' : 'number'}
                    dataKey={mobile ? 'name' : 'price'}
                    axisLine={false}
                    orientation={'left'}
                    tick={<CustomizedAxisTickMobile />}
                    padding={{ top: 0, left: 0, right: 0, bottom: 0 }}
                />

                <Bar
                    dataKey="price"
                    label={mobile ? renderCustomBarLabelMobile : renderCustomBarLabel}
                    maxBarSize="95%"
                >
                    {data.map((el, index) => {
                        return (
                            <Cell
                                key={el.name}
                                dataKey={el.name}
                                fill={minPrice === el.price ? el.color : '#96c0b7'}
                            />
                        );
                    })}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};
