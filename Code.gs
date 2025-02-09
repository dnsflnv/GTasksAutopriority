// Store the last checked timestamp
var PROPERTY_KEY = 'LAST_CHECKED_TIME';

function checkTasks() {
  // Get all task lists
  var taskLists = Tasks.Tasklists.list().items;
  if (!taskLists) return;

  // Process each task list
  for (var j = 0; j < taskLists.length; j++) {
    var taskList = taskLists[j];

    // Get all tasks for this list
    var tasks = Tasks.Tasks.list(taskList.id, {
      showCompleted: false, // Only get non-completed tasks
    }).items;

    if (!tasks) continue;

    // Process each task
    for (var i = 0; i < tasks.length; i++) {
      var task = tasks[i];
      var title = task.title;
      var newTitle = title;

      if (title.startsWith('1 ')) {
        newTitle = title.replace('1 ', '🟥 ');
      } else if (title.startsWith('2 ')) {
        newTitle = title.replace('2 ', '🟨 ');
      } else if (title.startsWith('3 ')) {
        newTitle = title.replace('3 ', '🟩 ');
      }

      // Update the task if the title was changed
      if (newTitle !== title) {
        task.title = newTitle;
        Tasks.Tasks.update(task, taskList.id, task.id);
      }
    }
  }
}

function createTrigger() {
  // Delete any existing triggers
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    ScriptApp.deleteTrigger(triggers[i]);
  }

  // Create a new time-based trigger that runs every minute
  ScriptApp.newTrigger('checkTasks').timeBased().everyMinutes(1).create();
}

// Function to test the emoji replacement
function testEmojiReplacement() {
  var testCases = ['1 Important task', '2 Medium priority', '3 Low priority', 'No priority task'];

  for (var i = 0; i < testCases.length; i++) {
    var title = testCases[i];
    var newTitle = title;

    if (title.startsWith('1 ')) {
      newTitle = title.replace('1 ', '🟥 ');
    } else if (title.startsWith('2 ')) {
      newTitle = title.replace('2 ', '🟨 ');
    } else if (title.startsWith('3 ')) {
      newTitle = title.replace('3 ', '🟩 ');
    }

    Logger.log('Original: ' + title + ' -> New: ' + newTitle);
  }
}
