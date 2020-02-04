import React from 'react'

import { PureTaskList } from './TaskList'
import { taskData, actionsData } from './Task.stories'

export default {
  component: PureTaskList,
  title: 'TaskList',
  decorators: [story => <div style={{padding: '3rem'}}>{story()}</div>],
  excludeStories: /.*Data$/,
}

export const defaultTasksData = [
  {...taskData, id: '1', title: 'Take 1'},
  {...taskData, id: '2', title: 'Take 2'},
  {...taskData, id: '3', title: 'Take 3'},
  {...taskData, id: '4', title: 'Take 4'},
  {...taskData, id: '5', title: 'Take 5'},
  {...taskData, id: '6', title: 'Take 6'},
]

export const withPinnedTaskData = [
  ...defaultTasksData.slice(0,5),
  {id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED'},
]

export const Default = () => <PureTaskList tasks={defaultTasksData} {...actionsData} />

export const WithPinnedTasks = () => <PureTaskList tasks={withPinnedTaskData} {...actionsData} />

export const Loading = () => <PureTaskList loading tasks={[]} {...actionsData} />

export const Empty = () => <PureTaskList tasks={[]} {...actionsData} />
