import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

function Dashboard() {
  const { user, logout } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [tasksLoading, setTasksLoading] = useState(true);
  const [tasksError, setTasksError] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await api.get('/api/tasks');
        setTasks(data);
      } catch (err) {
        setTasksError('Failed to load tasks from protected API endpoint.');
      } finally {
        setTasksLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="user-badge">
          <div className="avatar">
            {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <div className="user-details">
            <h3>{user?.name || 'Authorized User'}</h3>
            <p>{user?.email || 'user@example.com'}</p>
          </div>
        </div>
        <button className="btn btn-secondary" style={{ width: 'auto', padding: '10px 20px' }} onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="dashboard-content">
        <div className="content-section">
          <h4>Profile Overview</h4>
          <div style={{ margin: '15px 0', fontSize: '0.95rem', lineHeight: '1.6' }}>
            <p><strong>Database ID:</strong> <span style={{ color: 'var(--text-muted)' }}>{user?._id}</span></p>
            <p><strong>Verified Account:</strong> <span style={{ color: 'var(--success-color)' }}>Active</span></p>
            <p><strong>Session Token:</strong> <span style={{ color: 'var(--text-muted)' }}>Bearer jwt_token...</span></p>
          </div>
        </div>

        <div className="content-section">
          <h4>Tasks List (Protected Endpoint)</h4>
          {tasksLoading && <p style={{ color: 'var(--text-muted)' }}>Loading tasks...</p>}
          {tasksError && <p style={{ color: 'var(--error-color)' }}>{tasksError}</p>}
          
          {!tasksLoading && !tasksError && (
            <ul className="task-list">
              {tasks.map((task) => (
                <li key={task.id} className="task-item">
                  <div className="task-info">
                    <span style={{ fontSize: '1.1rem' }}>{task.completed ? '✅' : '📌'}</span>
                    <span className="task-title" style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'var(--text-muted)' : 'var(--text-main)' }}>
                      {task.title}
                    </span>
                  </div>
                  <span className={`task-status ${task.completed ? 'status-completed' : 'status-pending'}`}>
                    {task.completed ? 'Completed' : 'Pending'}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
