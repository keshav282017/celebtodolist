# Testing Guide for To-Do List Application

## Setting Up the Project

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name


  2. INSTALL DEPENDENCY
       npm install

 3. Run the Development Server:
      npm run dev


    
Testing the To-Do List Component
1. Adding a Task
Action: Type a task into the input field and click the "Add Task" button.
Expected Result: The task should appear in the list below.


2. Marking a Task as Complete
Action: Click the "Mark Complete" button next to a task.
Expected Result: The task's text should be crossed out.
Additional Action: Click the button again to mark it as incomplete.
Expected Result: The task's text should no longer be crossed out.


3. Removing a Task
Action: Click the "Remove" button next to a task.
Expected Result: The task should be removed from the list.


4. Filtering Tasks
Action: Click the "All" button to show all tasks.
Expected Result: All tasks should be displayed.
Action: Click the "Completed" button to show only completed tasks.
Expected Result: Only completed tasks should be displayed.
Action: Click the "Incomplete" button to show only incomplete tasks.
Expected Result: Only incomplete tasks should be displayed.


5. Local Storage Persistence
Action: Add a few tasks and mark some as complete.
Action: Refresh the page.
Expected Result: The tasks and their states (completed or incomplete) should be persisted.


   
