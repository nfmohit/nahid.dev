/*
* Internal dependencies
*/
import React from 'react'

const CommentsList = ( { comments } ) => (
	<div>
		{ comments.map( comment => (
			<div>
				<span>{ comment.content }</span>
			</div>
		) ) }
	</div>
)

export default CommentsList;
