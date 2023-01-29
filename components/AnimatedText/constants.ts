type Tag = 'p' | 'h1';
export type TagType = 'paragraph' | 'heading1';

export const tagMap: { [x in TagType]: Tag } = {
   paragraph: 'p',
   heading1: 'h1',
};
