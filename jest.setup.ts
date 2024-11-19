import "@testing-library/jest-dom";

import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

// IntersectionObserver isn't available in test environment
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock next/router
jest.mock("next/router", () => require("next-router-mock"));
