import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className="center ma">
			<div className="absolute mt2">
				<img id='inputImage' src={imageUrl} alt="" width='500px' height='auto' />
				<div 
					className='bounding-box'
					style={{
						top: box.topRow,
						right: box.rightCol,
						bottom: box.bottomRow,
						left: box.leftCol

					}}
					></div>
			</div>
		</div>
	)
}

// DJ SNAKE Desert: https://medias.spotern.com/spots/w360/325/325194-1587568041.jpg
// DJ SNAKE Panda: https://pbs.twimg.com/media/EJgtJ_xXkAYmqQx?format=jpg&name=large
// Anna Akana: https://preview.redd.it/tf5kb1i378v41.jpg?auto=webp&s=4e1f8f16a893d252f1a66150504fe25664d48691
// Deadmau5: https://edm.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTUzODEzNTY0NjA2MzkyMDEx/deadmau5.jpg

export default FaceRecognition;