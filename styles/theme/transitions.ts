import { gr } from "../helpers/goldenRatio";

const timingFunction = `cubic-bezier(0.1, 0.618, 0.382, 1.1)`;
const time = 200;

const transitions = {
  all: `all ${time}ms ${timingFunction}`,
  canopyOpacity: `opacity ${time}ms ${timingFunction}`,
  canopySlideIn: `left ${time * gr(2)}ms ${timingFunction}`,
};

export default transitions;
