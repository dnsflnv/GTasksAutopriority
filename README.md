# Google Tasks Priority Emoji Converter

This Google Apps Script automatically converts numeric priority prefixes in Google Tasks to colored square emojis:

- `1 ` → 🟥 (Red square for high priority)
- `2 ` → 🟨 (Yellow square for medium priority)
- `3 ` → 🟩 (Green square for low priority)

## Setup Instructions

1. Go to [Google Apps Script](https://script.google.com) and create a new project
2. Copy the contents of `Code.gs` into the script editor
3. Enable the Google Tasks API:
   - Click on "Services" (+ button)
   - Select "Tasks API" from the list
   - Click "Add"
4. Save the project
5. Run the `createTrigger` function once to set up the automatic trigger
   - This will create a time-based trigger that runs every minute to check tasks
6. When prompted, authorize the script to access your Google Tasks

## Usage

Simply create tasks with the following format:

- Start with "1 " for high priority tasks
- Start with "2 " for medium priority tasks
- Start with "3 " for low priority tasks

Examples:

- "1 Complete project proposal" → "🟥 Complete project proposal"
- "2 Review documentation" → "🟨 Review documentation"
- "3 Optional reading" → "🟩 Optional reading"

## Testing

You can use the `testEmojiReplacement` function to test the emoji conversion without creating actual tasks. The results will be shown in the Apps Script logs.

## Notes

- The script works with all your Google Tasks lists
- The script checks all non-completed tasks every minute
- Completed tasks will not be modified
- Tasks without numeric prefixes will remain unchanged
- Make sure to include a space after the number (e.g., "1 " not just "1")
- The conversion may take up to a minute to appear as it runs on a time-based trigger
