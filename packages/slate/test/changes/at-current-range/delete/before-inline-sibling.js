/** @jsx h */

import { h } from 'slate-core-test-helpers'

export default function (change) {
  change.delete()
}

export const input = (
  <state>
    <document>
      <paragraph>
        one<link>two</link><anchor />a<focus />
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>
        one<link>two</link><cursor />
      </paragraph>
    </document>
  </state>
)