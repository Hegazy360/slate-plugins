import { Editor } from 'slate';
import { unwrapNodes } from '../../../common/transforms';
import { setDefaults } from '../../../common/utils/setDefaults';
import { DEFAULTS_BLOCKQUOTE } from '../defaults';
import { BlockquotePluginOptions } from '../types';

export const unwrapBlockquote = (
  editor: Editor,
  options?: BlockquotePluginOptions
) => {
  const { blockquote } = setDefaults(options, DEFAULTS_BLOCKQUOTE);

  unwrapNodes(editor, { match: { type: blockquote.type }, split: true });
};
