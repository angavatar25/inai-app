import { Sign } from "../enum/sign";

export const tagSignColor = (props: { sign: Sign }): string => {
  if (props.sign === Sign.UpTrend) return '#22C55E';

  if (props.sign === Sign.DownTrend) return '#F43F5E';

  return 'transparent';
};

export const growthSignColor = (props: { sign: Sign }): string => {
  if (props.sign === Sign.UpTrend) return '#15803D';

  if (props.sign === Sign.DownTrend) return '#BE123C';

  return '#000';
}