import ReactGA from 'react-ga';

interface EventType {
  category: string;
  action: string;
  label: string;
}

export default function reactGaEvent({ category, action, label }: EventType): void {
  ReactGA.event({
    category,
    action,
    label,
  });
};