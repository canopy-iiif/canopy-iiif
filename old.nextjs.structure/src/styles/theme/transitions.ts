import { gr } from "../helpers/goldenRatio";

const timingFunction = `cubic-bezier(0.1, 0.618, 0.382, 1.1)`;
const time = 250;

const transitions = {
  canopyAll: `all ${time}ms ${timingFunction}`,
  canopyOpacity: `opacity ${time}ms ${timingFunction}`,
  canopySlideIn: `all ${time * gr(2)}ms ${timingFunction}`,
};

export default transitions;
