/** @jsx jsx */

import { jsx } from '__test-utils__/jsx';
import { withBreakEmptyReset } from 'element';
import { PARAGRAPH } from 'elements';
import { Editor } from 'slate';

const input = (
  <editor>
    <hblockquote>
      text
      <cursor />
    </hblockquote>
  </editor>
) as any;

const output = (
  <editor>
    <hblockquote>
      text
      <cursor />
    </hblockquote>
    <hblockquote>
      <htext />
    </hblockquote>
  </editor>
) as any;

it('should do nothing', () => {
  const editor = withBreakEmptyReset({ types: [PARAGRAPH] })(input as Editor);

  editor.insertBreak();

  expect(editor.children).toEqual(output.children);
});
