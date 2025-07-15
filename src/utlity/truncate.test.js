import { expect, test } from 'vitest'
import { truncateText } from './truncate.ts'

test('Adds ellipsis and cuts extra text', () => {
  expect(truncateText('test string', 8)).toBe('test str...')
});

test('No ellipsis is added as text is shorter then arg', () => {
  expect(truncateText('test string', 20)).toBe('test string')
});

test('Testing the negative', () => {
  expect(truncateText('test string', 6)).not.toBe('test string')
});
