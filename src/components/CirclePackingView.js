import { ResponsiveCirclePackingCanvas } from '@nivo/circle-packing'
import React from 'react'

export default function CirclePackingView({data, title}) {
    return (
        <div style={{height:"400px", width:"400px", backgroundColor:"#282c34"}} className='text-light border border-2 border-light rounded pb-4 my-2 mx-auto'>
            <h3>{title}</h3>
            <ResponsiveCirclePackingCanvas
                data={{"name": "root",
                    "children": data
                }}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                id="name"
                colors={{ scheme: 'category10' }}
                colorBy="id"
                childColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'brighter',
                            0.4
                        ]
                    ]
                }}
                padding={1}
                leavesOnly={true}
                enableLabels={true}
                label="id"
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'brighter',
                            3.5
                        ]
                    ]
                }}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.3
                        ]
                    ]
                }}
                animate={false}
            />
        </div>
        
    )
}
