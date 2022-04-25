import { useState} from 'react';
import { Statistic } from '../Statistic/Statistic'
import { FeedbackOptions } from '../FeedbackBtn/FeedbackOptions'
import { Section } from '../Section/Section'
import {Notification} from '../Notification/Notification'
import {Container} from './App.styled'

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const makeFeedback = (option) => {
    switch (option) {
      case "good":
        setGood(prevState => (
          prevState + 1))
        break;
      case "neutral":
        setNeutral(prevState => (
          prevState + 1))
        break;
      case "bad":
        setBad(prevState => (
          prevState + 1))
        break;
      default:
        return;
    }
  }
  const countTotalFeedback = () => {
      return good + neutral + bad
  }
  const countPositiveFeedbackPercentage = () => {
      const sum = countTotalFeedback();
      let percent;
      percent = good > 0 ?
        Number.parseInt(good / sum * 100) : 0;
      return percent
  }
  return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options}
            onLeaveFeedback={makeFeedback} />
        </Section>
        {countTotalFeedback() === 0 ?
          (<Notification message="There is no feedback" />) :
          (<Section title="Statistics">
            <Statistic good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()} />
          </Section>)}
      </Container>
    );
  }

