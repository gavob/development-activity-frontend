import { ResponsiveBar } from '@nivo/bar'
import React from 'react'

export default function BarChart({data, title}) {
    return (
        <div style={{height:"240px", width:"520px", backgroundColor:"#282c34"}} className='text-light border border-2 border-light rounded my-4 mx-auto'>
            <h4>{title}</h4>
            <ResponsiveBar 
                data={data} 
                keys={['time']} 
                colors={{ scheme: 'set3', text: {
                    fill: "#fff"
                    }
                  }}
                theme={{ text: { fontSize: 11, fill: "white" } }}
                borderColor={{ from: 'color' }}
                indexBy={'id'} 
                isFocusable={false}
                margin={{ top: 0, right: 40, bottom: 50, left: 80 }}
                padding={0.3}
                axisBottom={null}
                axisLeft={{
                    legend: 'Time (Hours)',
                    legendPosition: 'middle',
                    legendOffset: -50
                }}
                enableLabel={false}
            />
        </div>
    )
}
