import { Key } from 'react'

export interface workordersProps {
  title: string
  description: string
  status: string
  priority: string
  assignedUserIds: number[]
  checklist: object[]
}

export interface usersProps {
  id: Key
}

export interface checklistProps {
  task: string
  completed: boolean
}
