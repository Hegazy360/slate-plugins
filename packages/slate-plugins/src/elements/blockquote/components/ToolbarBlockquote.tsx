import * as React from 'react';
import { useSlate } from 'slate-react';
import { getPreventDefaultHandler } from '../../../common/utils/getPreventDefaultHandler';
import { setDefaults } from '../../../common/utils/setDefaults';
import { ToolbarButtonProps } from '../../../components/ToolbarButton/ToolbarButton.types';
import { ToolbarElement } from '../../../components/ToolbarElement/ToolbarElement';
import { DEFAULTS_BLOCKQUOTE } from '../defaults';
import { toggleBlockquote } from '../transforms/toggleBlockquote';
import { BlockquotePluginOptions } from '../types';

export const ToolbarBlockquote = ({
  options,
  ...props
}: ToolbarButtonProps & { options: BlockquotePluginOptions }) => {
  const { blockquote } = setDefaults(options, DEFAULTS_BLOCKQUOTE);

  const editor = useSlate();

  return (
    <ToolbarElement
      type={blockquote.type}
      onMouseDown={getPreventDefaultHandler(toggleBlockquote, editor, options)}
      {...props}
    />
  );
};
