# To-Do List Application

## Project Overview

This project is a to-do list application built using React for the front end, Node.js and Express for the back end, and PostgreSQL for the database. The application allows users to add, display, delete, categorize, and share tasks. It uses local storage for offline access and syncs data with the server.

## Table of Contents

1. Front End

   - Display Tasks
   - Add Task Function

   --- finished ---

   - Add Categories

   * Local Storage
   * Delete Task Function
   * modify Task Function

2. Back End
   - User Authentication
   - Share To-Do List
   - Sync Local Storage with Server
   - Task Sharing and Permissions
3. CSS
   - Add Tailwind CSS
   - Custom CSS for Components
   - Icon library
4. Additional Features
   - Notifications and Reminders
   - Due Dates and Priorities
   - Google Login
   - Search Functionality

# To-Do List Application Wireframe

## Database Schema

### Tasks

| Field              | Type     | Description                                |
| ------------------ | -------- | ------------------------------------------ |
| id                 | int      | Primary key, unique ID                     |
| name               | string   | Name of the task                           |
| category_id        | int      | Foreign key to Categories table            |
| user_id            | int      | Foreign key to Users table                 |
| time_create        | datetime | Timestamp of when the task was created     |
| time_edit          | datetime | Timestamp of the last edit                 |
| expectedTime_start | datetime | Expected start time for the task           |
| expectedTime_end   | datetime | Expected end time for the task             |
| sub_Category       | int      | ID of the children category, if applicable |

### Categories

| Field    | Type   | Description                          |
| -------- | ------ | ------------------------------------ |
| id       | int    | Primary key, unique ID               |
| name     | string | Name of the category                 |
| sup_task | int    | ID of the parent task, if applicable |

### Users

| Field    | Type   | Description                                |
| -------- | ------ | ------------------------------------------ |
| id       | int    | Primary key, unique ID                     |
| username | string | Username of the user                       |
| password | string | Password of the user (hashed for security) |

## ER Diagram

    CATEGORY {
        int id
        string name
        int sup_task
    }

    TASK {
        int id
        string name
        int category_id
        int user_id
        datetime time_create
        datetime time_edit
        datetime expectedTime_start
        datetime expectedTime_end
        int sub_task
    }

    USER {
        int id
        string username
        string password
    }
