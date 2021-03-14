import { Editor } from 'slate';
import { someNode } from '../../../common/queries/someNode';
import { wrapNodes } from '../../../common/transforms/wrapNodes';
import { setDefaults } from '../../../common/utils/setDefaults';
import { DEFAULTS_BLOCKQUOTE } from '../defaults';
import { BlockquotePluginOptions } from '../types';
import { unwrapBlockquote } from './unwrapBlockquote';

//Overwrite default blockquote behavior by using wrapNodes() instead of setNodes()
export const toggleBlockquote = (
  editor: Editor,
  options: BlockquotePluginOptions
) => {
  if (!editor.selection) return;

  const { blockquote } = setDefaults(options, DEFAULTS_BLOCKQUOTE);
  const isActive = someNode(editor, { match: { type: blockquote.type } });

  unwrapBlockquote(editor, options);

  if (!isActive) {
    wrapNodes(editor, { type: blockquote.type, children: [] });
  }
};
