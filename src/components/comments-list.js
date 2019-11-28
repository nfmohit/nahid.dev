/*
* Internal dependencies
*/
import React from 'react'

const CommentsList = ( { comments } ) => {

	return (
		<div className="comments-list">
			<ul className="comments-container">
				{ comments
					.filter( comment => ! comment.wordpress_parent )
					.map( comment => {

						const child_comments = comments.filter( child_comment => comment.wordpress_id === child_comment.wordpress_parent )

						return (
							<li key={ comment.id } className="comment-container">
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
								{ child_comments &&
									<ul className="child-comments-container">
										{ child_comments.map( child_comment => (
											<li key={ child_comment.id } className="child-comment-container">
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
											</li>
										) ) }
									</ul>
								}
							</li>
						)
					} ) 
				}
			</ul>
		</div>
	)
}

export default CommentsList;
