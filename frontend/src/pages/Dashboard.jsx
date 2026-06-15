import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

function Dashboard() {
  const { user, logout } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [tasksLoading, setTasksLoading] = useState(true);
  const [tasksError, setTasksError] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

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
    <div className="dashboard-layout">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span className="brand-logo">🔒</span>
          <h2>Prodesk IT</h2>
        </div>
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            📊 Overview
          </button>
          <button 
            className={`nav-item ${activeTab === 'tasks' ? 'active' : ''}`}
            onClick={() => setActiveTab('tasks')}
          >
            📋 My Tasks
          </button>
          <button 
            className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            👤 Profile
          </button>
        </nav>
        <div className="sidebar-footer">
          <button className="btn btn-logout" onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* Main Dashboard Window */}
      <main className="dashboard-main">
        <header className="dashboard-content-header">
          <div className="welcome-banner">
            <h1>Welcome to the prodesk IT, <span className="highlight-text">{user?.name || 'User'}</span></h1>
            <p className="welcome-subtitle">Here is what is happening with your workspace today.</p>
          </div>
          <div className="user-profile-widget">
            <div className="avatar">
              {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <div className="user-info-text">
              <span className="user-name-label">{user?.name || 'User'}</span>
              <span className="user-role-label">System Intern</span>
            </div>
          </div>
        </header>

        {activeTab === 'overview' && (
          <div className="dashboard-grid">
            <div className="content-section card-gradient">
              <h4>System Details</h4>
              <div style={{ margin: '15px 0', fontSize: '0.95rem', lineHeight: '1.8' }}>
                <p><strong>Database Status:</strong> <span style={{ color: 'var(--success-color)', fontWeight: '600' }}>● Connected (Atlas)</span></p>
                <p><strong>Security Protocols:</strong> <span style={{ color: 'var(--primary)', fontWeight: '600' }}>High (JWT Enforced)</span></p>
                <p><strong>Registered Email:</strong> <span style={{ color: 'var(--text-muted)' }}>{user?.email}</span></p>
                <p><strong>Database ID:</strong> <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{user?._id}</span></p>
              </div>
            </div>

            <div className="content-section">
              <h4>Platform Tasks Overview</h4>
              {tasksLoading && <p style={{ color: 'var(--text-muted)' }}>Loading tasks...</p>}
              {tasksError && <p style={{ color: 'var(--error-color)' }}>{tasksError}</p>}
              
              {!tasksLoading && !tasksError && (
                <ul className="task-list">
                  {tasks.slice(0, 2).map((task) => (
                    <li key={task.id} className="task-item">
                      <div className="task-info">
                        <span>{task.completed ? '✅' : '📌'}</span>
                        <span className="task-title" style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'var(--text-muted)' : 'var(--text-main)' }}>
                          {task.title}
                        </span>
                      </div>
                      <span className={`task-status ${task.completed ? 'status-completed' : 'status-pending'}`}>
                        {task.completed ? 'Done' : 'Pending'}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {activeTab === 'tasks' && (
          <div className="content-section">
            <h4>All System Tasks</h4>
            {tasksLoading && <p style={{ color: 'var(--text-muted)' }}>Loading tasks...</p>}
            {tasksError && <p style={{ color: 'var(--error-color)' }}>{tasksError}</p>}
            
            {!tasksLoading && !tasksError && (
              <ul className="task-list" style={{ marginTop: '15px' }}>
                {tasks.map((task) => (
                  <li key={task.id} className="task-item">
                    <div className="task-info">
                      <span>{task.completed ? '✅' : '📌'}</span>
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
        )}

        {activeTab === 'profile' && (
          <div className="content-section">
            <h4>Account Profile</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
              <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                <span style={{ width: '150px', color: 'var(--text-muted)' }}>Full Name:</span>
                <strong style={{ color: 'var(--text-main)' }}>{user?.name}</strong>
              </div>
              <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                <span style={{ width: '150px', color: 'var(--text-muted)' }}>Email Address:</span>
                <strong style={{ color: 'var(--text-main)' }}>{user?.email}</strong>
              </div>
              <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                <span style={{ width: '150px', color: 'var(--text-muted)' }}>Authentication ID:</span>
                <strong style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>{user?._id}</strong>
              </div>
              <div style={{ display: 'flex', paddingBottom: '10px' }}>
                <span style={{ width: '150px', color: 'var(--text-muted)' }}>Session:</span>
                <strong style={{ color: 'var(--success-color)' }}>Active & Authenticated</strong>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
