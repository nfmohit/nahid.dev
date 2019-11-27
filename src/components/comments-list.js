/*
* Internal dependencies
*/
import React from 'react'

const CommentsList = ( { comments } ) => (
	<div className="comments-list">
		{ comments
			.filter( comment => ! comment.wordpress_parent )
			.map( comment => {
				const child_comment = comments.find( c => comment.wordpress_id === c.wordpress_parent )
				return (
					<div key={ comment.id } className="comment-container">
						<div className="comment">
							<div className="author">
								<img
									src={ comment.author_avatar_urls.wordpress_48 }
									alt={ comment.author_name }
									className="author-avatar"
								/>
								<div className="comment-meta">
									<div className="author-name">{ comment.author_name }</div>
									<div className="comment-date">{ comment.date }</div>
								</div>
							</div>
							<div className="comment-content" dangerouslySetInnerHTML={ { __html: comment.content } } />
						</div>
						{ child_comment && (
							<div className="comment reply">
								<div className="author">
									<img
										src={ child_comment.author_avatar_urls.wordpress_48 }
										alt={ child_comment.author_name }
										className="author-avatar"
									/>
									<div className="comment-meta">
										<div className="author-name">{ child_comment.author_name }</div>
										<div className="comment-date">{ child_comment.date }</div>
									</div>
								</div>
								<div className="comment-content" dangerouslySetInnerHTML={ { __html: child_comment.content } } />
							</div>
						) }
					</div>
				)
			} ) 
		}
	</div>
)

export default CommentsList;
