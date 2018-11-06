import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CommentCard from '../comment-card/component'

const StyledCommentsGrid = styled.div`
  position: absolute;
  top: 200px;
  right: -4%;
  display: flex;
  flex-direction: column;
  width: 300px;
  z-index: 1;
`

const CommentsGrid = ({ comments, top }) => (
  <StyledCommentsGrid style={{ top }}>
    {comments.map((comment) => (
      <CommentCard key={comment._id} comment={comment} />
    ))}
  </StyledCommentsGrid>
)

CommentsGrid.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentsGrid
