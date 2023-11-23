// Icon from: https://materialdesignicons.com/

import useSWR from 'swr'

import Icon from '@mdi/react';
import { mdiInformationSlabCircleOutline } from '@mdi/js';
import { ToolTipInfoBox } from './ToolTipInfoBox';

interface Inputs {
	index: number,
	toolTipIndex: number,
	text: string,
	tooltipAmount: number,
	callBack: Function
}


// ToolTip component
export const ToolTipIcon = ({index, toolTipIndex, text, tooltipAmount, callBack}:Inputs) => {

	return (
		<div className="flex flex-col space-y-2 text-left" onMouseOver={()=>callBack(index)}>
			<Icon
					path={mdiInformationSlabCircleOutline}
					size={1}
					className="text-primary" // Add cursor-pointer for hover effect
			/>

			{toolTipIndex === index?
				<ToolTipInfoBox callBack={callBack} textContent={text} myIndex={index} maxIndex={tooltipAmount}/>
				:
				<div></div> 
			}
		</div>
	);
}