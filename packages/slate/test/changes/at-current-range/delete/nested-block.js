/** @jsx h */

import { h } from 'slate-core-test-helpers'

export default function (change) {
  change.delete()
}

export const input = (
  <state>
    <document>
      <paragraph>
        wo<anchor />rd
      </paragraph>
      <paragraph>
        <paragraph>
          middle
        </paragraph>
        <paragraph>
          an<focus />other
        </paragraph>
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>
        wo<cursor />other
      </paragraph>
    </document>
  </state>
)