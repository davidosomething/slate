/** @jsx h */

import { h } from 'slate-core-test-helpers'

export default function (state) {
  return state
    .change()
    .removeMark('bold')
    .state
    .change()
    .undo()
    .state
}

export const input = (
  <state>
    <document>
      <paragraph>
        <anchor /><b>one</b><focus />
      </paragraph>
    </document>
  </state>
)

export const output = input