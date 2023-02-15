import { PureComponent } from 'react';

class CustomizedAxisTick extends PureComponent {
    render() {
        
        const { x, y, stroke, payload } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text
                    x={0}
                    y={20}
                    dy={0}
                    textAnchor="middle"
                    fill="#666"
                    style={{ fontSize: '20px' }}
                >
                    {payload.value}
                </text>
            </g>
        );
    }
}
class CustomizedAxisTickMobile extends PureComponent {
    render() {
        
        const { x, y, stroke, payload } = this.props;

        return (
             <g transform={`translate(${x},${y}) rotate(30)`} >
                <text style={{ fontSize: '20px' }} x={0} y={0} dy={-20} textAnchor="middle" fill="#666" transform="rotate(-90)">
          {payload.value}
        </text>
      </g>
                   );
    }
}
const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
   
    if (value > 0) {
            const fixedVal = value.toFixed(2)
            return (
                <text
                    x={x + width / 2}
                    y={y}
                    textAnchor="middle"
                    dy={height < 25 ? -5 : height / 2}
                    style={{ fontSize: '20px' }}
                >{` ${fixedVal}$`}</text>
            );
        }
};
    const renderCustomBarLabelMobile= ({ payload, x, y, width, height, value }) => {
   
    if (value > 0) {
            const fixedVal = value.toFixed(2)
            return (
                <text
                    x={width < 55 ? 2 * x + width  : x + width / 2}
                    y={y}
                    textAnchor="middle"
                    dy={height / 2 + 6}
                    style={{ fontSize: '20px'}}
                    
                >{` ${fixedVal}$`}</text>
            );
        }
};
export {CustomizedAxisTick,CustomizedAxisTickMobile,renderCustomBarLabelMobile, renderCustomBarLabel}