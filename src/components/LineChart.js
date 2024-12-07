import { ResponsiveLine } from '@nivo/line'
import React from 'react'

export default function LineChart({data, title}) {
    return (
        <div style={{height:"200px",width:"600px"}} className='my-2 mx-4 p-2 bg-light bg-gradient rounded'>
            <h4>{title}</h4>
            <ResponsiveLine
                axisBottom={{
                    format: '%b %d'
                }}
                axisLeft={{
                    legend: 'Count',
                    legendPosition: 'middle',
                    legendOffset: -30,
                    format: (e) => (Math.floor(e) === e ? e : "")
                }}
                curve="monotoneX"
                data={[{id: title,
                    color: "hsl(257, 70%, 50%)",
                    data: data}]}
                enablePointLabel
                enableTouchCrosshair
                margin={{
                    bottom: 60,
                    left: 40,
                    right: 20,
                    top: 20
                }}
                pointBorderColor={{
                    from: 'color',
                    modifiers: [
                    [
                        'darker',
                        0.3
                    ]
                    ]
                }}
                pointBorderWidth={1}
                pointSize={16}
                pointSymbol={function noRefCheck(){}}
                useMesh
                xFormat="time:%Y-%m-%d"
                xScale={{
                    format: '%Y-%m-%d',
                    precision: 'day',
                    type: 'time',
                    useUTC: false
                }}
                yScale={{
                    type: 'linear'
                }}
            />
        </div>
    )
}
