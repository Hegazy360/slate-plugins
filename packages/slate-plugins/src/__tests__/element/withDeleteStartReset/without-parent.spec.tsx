/** @jsx jsx */

import { jsx } from '__test-utils__/jsx';
import { withDeleteStartReset } from 'element';
import { Editor } from 'slate';

const input = (
  <editor>
    <hblockquote>
      <htext />
      <cursor />
    </hblockquote>
  </editor>
) as any;

const output = (
  <editor>
    <hblockquote>
      <htext />
    </hblockquote>
  </editor>
) as any;

it('should do nothing', () => {
  const editor = withDeleteStartReset({ types: [] })(input as Editor);

  editor.deleteBackward('character');

  expect(editor.children).toEqual(output.children);
});
