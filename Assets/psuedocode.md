Page displays link to "View Highscores" page, timer, and message to user with button to start quiz

Questions and highscore divs are hidden

Timer starts at 75 seconds

When user clicks the start button, following happens:
    - First screen hides
    - Div with questions is made visible
    - Timer starts to decrement by 1 every 1 second
    - A question appears along with 4 buttons as potential answers the user can select
        - If the user clicks the button with the correct answer
            - Then the next question is triggered and 
            - Timer continues to decrement as normal
            - A caption below the list of next questions displays "Correct"
        - If the user clicks the button that is not the correct button
            - 10 seconds are deducted from the timer
            - Timer continues to decrement by 1 second
            a caption below the list of next questions displays "Incorrect"

If timer reaches 0 or user answers all questions
    - First screen div remains hidden
    - Question div hides
    - Game over div is made visible
    - Message header says "All Done"
    - Message body says "Your final score is " + timer
    - Asked to "Enter initials: ", 
    - When submit button is clicked the timer value and initial is stored in localStorage
        - Question and preceding divs become hidden
        - Div appears that displays top 5 highscores in local storage
        - The div has "Go Back" and "Clear Highscores" buttons
            - If user selects "Go Back", first function is ran to hide everything but the first screen
            - if user selects "Clear highscores" button, div remains visible and localStorage storing highscores is cleared
