import React from 'react'

const AccordionItem = ({ title, description, isExpanded, handleExpandClick }) => {
	return (
		<div className='w-[60%] my-2'>
			<div className='flex justify-between bg-gray-200 p-2'>
				<div>{title}</div>
				<div><button onClick={handleExpandClick}>{isExpanded ? 'Collapse' : 'Expand'}</button></div>
			</div>
			<div className='transition-all'>
				{
					isExpanded && <div className='p-2 border'>
						{description}
					</div>
				}
			</div>
		</div>
	)
}

export default AccordionItem