import { ResponsiveScatterPlot } from '@nivo/scatterplot'
import React from 'react'

export default function ScatterChart({data, title}) {
    return (
        <div style={{height:"240px"}} className='mt-2 mx-4 p-2 bg-light bg-gradient rounded'>
            <h4>{title}</h4>
            <ResponsiveScatterPlot
                colors={{ scheme: 'set1' }}
                borderColor={{ from: 'color' }}
                data={[{id: title,
                    color: "red",
                    data: data}]}
                margin={{ top: 20, right: 70, bottom: 70, left: 90 }}
                xFormat="time:%Y-%m-%d"
                yFormat=">-.2f"
                xScale={{
                    format: '%Y-%m-%d',
                    precision: 'day',
                    type: 'time',
                    useUTC: false
                }}
                yScale={{
                    type: 'linear'
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    format: '%b %d'
                }}
                axisLeft={{
                    legend: 'Release Count',
                    legendPosition: 'middle',
                    legendOffset: -40,
                    format: (e) => (Math.floor(e) === e ? e : "")
                }}
            />
        </div>
    )
}
