import { AiFillDelete } from 'react-icons/ai'
import axios from 'axios'
import { useAlert } from 'react-alert'

import './TaskItem.scss'

const TaskItem = ({ task, fetchTasks }) => {
  const alert = useAlert()

  const handleTaskDeletion = async () => {
    try {
      await axios.delete(
                `https://santos-task-manager.up.railway.app/tasks/${task._id}`
      )

      await fetchTasks()
      alert.success('A tarefa foi removida com sucesso!')
    } catch (_error) {
      alert.error('Algo deu errado')
    }
  }

  const handleTaskCompletionChange = async (e) => {
    try {
      await axios.patch(
                `https://santos-task-manager.up.railway.app/tasks/${task._id}`,
                {
                  isCompleted: e.target.checked
                }
      )

      await fetchTasks()
      alert.success('A tarefa foi motifiada com sucesso!')
    } catch (_error) {
      alert.error('Algo deu errado')
    }
  }

  return (
        <div className="task-item-container">
            <div className="task-description">
                <label
                    className={
                        task.isCompleted
                          ? 'checkbox-container-completed'
                          : 'checkbox-container'
                    }
                >
                    {task.description}
                    <input
                        type="checkbox"
                        defaultChecked={task.isCompleted}
                        onChange={(e) => handleTaskCompletionChange(e)}
                    ></input>
                    <span
                        className={
                            task.isCompleted
                              ? 'checkmark completed'
                              : 'checkmark'
                        }
                    ></span>
                </label>
            </div>
            <div className="delete">
                <AiFillDelete
                    size={18}
                    color="#F97474"
                    onClick={handleTaskDeletion}
                />
            </div>
        </div>
  )
}

export default TaskItem
