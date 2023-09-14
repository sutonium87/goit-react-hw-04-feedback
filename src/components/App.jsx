import React, { useState } from 'react'; // Import React and useState hook from 'react' library
import Statistics from './Statistics/Statistics'; // Import the Statistics component
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'; // Import the FeedbackOptions component
import Section from './Section/Section'; // Import the Section component
import Notification from './Notification/Notification'; // Import the Notification component

const App = () => {
  const [feedback, setFeedback] = useState({
    // Initialize feedback state using the useState hook
    Good: 0, // Initialize Good feedback count to 0
    Neutral: 0, // Initialize Neutral feedback count to 0
    Bad: 0, // Initialize Bad feedback count to 0
  });

  const handleFeedback = feedbackType => {
    // Define a function to handle feedback
    setFeedback(prevFeedback => ({
      // Use setFeedback to update the feedback state
      ...prevFeedback, // Spread the previous feedback state
      [feedbackType]: prevFeedback[feedbackType] + 1, // Increment the feedback count for the given type
    }));
  };

  const { Good, Neutral, Bad } = feedback; // Destructure feedback state into individual variables

  const totalFeedback = Good + Neutral + Bad; // Calculate the total feedback count
  const positivePercentage = (Good / totalFeedback) * 100; // Calculate the percentage of positive feedback

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)} // Pass available feedback options
          onLeaveFeedback={handleFeedback} // Pass the feedback handler function
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback === 0 ? ( // Conditional rendering based on total feedback count
          <Notification message="There is no feedback" /> // Display a notification if there is no feedback
        ) : (
          <Statistics
            good={Good} // Pass the count of Good feedback
            neutral={Neutral} // Pass the count of Neutral feedback
            bad={Bad} // Pass the count of Bad feedback
            total={totalFeedback} // Pass the total feedback count
            positivePercentage={positivePercentage} // Pass the percentage of positive feedback
          />
        )}
      </Section>
    </div>
  );
};

export default App;

// This module represents a React functional component named `App` that serves as the main application component for collecting and displaying feedback statistics. Here's a summary of its key functionalities:

// 1. **State Management**: It uses the `useState` hook to manage the state of feedback counts, including "Good," "Neutral," and "Bad" feedback.

// 2. **Feedback Handling**: It defines a `handleFeedback` function to update the feedback state when a user provides feedback.

// 3. **Rendering**: It renders the user interface, including sections for leaving feedback and displaying statistics.

// 4. **Feedback Options**: It uses the `FeedbackOptions` component to present buttons for users to provide feedback.

// 5. **Statistics Display**: It uses the `Statistics` component to display statistics based on the collected feedback, including the total count of feedback and the percentage of positive feedback.

// 6. **Conditional Rendering**: It conditionally renders a "No feedback" notification if there is no feedback provided by the user.

// Overall, this module encapsulates the core logic and UI elements for collecting and presenting user feedback and related statistics in a React application.
