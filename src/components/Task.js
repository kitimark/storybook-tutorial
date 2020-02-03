import React from 'react';
import PropTypes from 'prop-types'

export default function Task ({task: {id, title, state}, onArchiveTask, onpinTask}) {
  return (
  <div className="list-item">
    <input type="text" value={title} readOnly={true} />
  </div>
  )
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTsk: PropTypes.func,
  onpinTask: PropTypes.func,
}