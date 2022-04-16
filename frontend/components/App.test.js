// Write your tests here
import React from "react"
import { render, screen } from "@testing-library/react";
import AppClass from './AppClass';

test('sanity', () => {
  render(<AppClass/>)
  expect(true).not.toBe(false)
})
