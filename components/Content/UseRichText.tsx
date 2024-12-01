import { PortableText } from '@portabletext/react';
import YouTubeBlock from '../Block/YouTubeBlock';
import ImageBlock from '../Block/ImageBlock';
import components from './RichTextComponents';

const UseRichText = ({ value }: { value: Topography[] }) => {
  // Group blocks into media and content, handling lists within the same group
  const groupElements = (blocks: Topography[]) => {
    const groupedElements: Array<{
      type: 'media' | 'content';
      blocks?: Topography[];
      block?: Topography[];
    }> = [];

    let currentMediaGroup: Topography[] = [];
    let currentContentGroup: Topography[] = [];
    let currentListGroup: Topography[] = [];

    blocks.forEach(block => {
      const isMediaBlock = block._type === 'youtube' || block._type === 'image';
      const isListBlock = block._type === 'list';
      const isListItemBlock = block._type === 'listItem';

      if (isMediaBlock) {
        // Push the current content group if it exists
        if (currentContentGroup.length > 0) {
          groupedElements.push({ type: 'content', block: currentContentGroup });
          currentContentGroup = []; // Reset the content group
        }
        // Push the current media group if it exists and is of a different type
        if (
          currentMediaGroup.length > 0 &&
          currentMediaGroup[0]._type !== block._type
        ) {
          groupedElements.push({ type: 'media', blocks: currentMediaGroup });
          currentMediaGroup = []; // Start a new group
        }
        currentMediaGroup.push(block);
      } else if (isListBlock) {
        // Push the current content group if it exists
        if (currentContentGroup.length > 0) {
          groupedElements.push({ type: 'content', block: currentContentGroup });
          currentContentGroup = []; // Reset the content group
        }
        // Push the current media group if it exists
        if (currentMediaGroup.length > 0) {
          groupedElements.push({ type: 'media', blocks: currentMediaGroup });
          currentMediaGroup = []; // Reset the media group
        }
        // Handle list blocks
        currentListGroup.push(block);
      } else if (isListItemBlock) {
        // Add list items to the current list group
        currentListGroup.push(block);
      } else {
        // Push the current list group if it exists
        if (currentListGroup.length > 0) {
          groupedElements.push({ type: 'content', block: currentListGroup });
          currentListGroup = []; // Reset the list group
        }
        // Push the current media group if it exists
        if (currentMediaGroup.length > 0) {
          groupedElements.push({ type: 'media', blocks: currentMediaGroup });
          currentMediaGroup = []; // Reset the media group
        }
        currentContentGroup.push(block);
      }
    });

    // Add any remaining media, content, or list blocks to the grouped elements
    if (currentMediaGroup.length > 0) {
      groupedElements.push({ type: 'media', blocks: currentMediaGroup });
    }
    if (currentContentGroup.length > 0) {
      groupedElements.push({ type: 'content', block: currentContentGroup });
    }
    if (currentListGroup.length > 0) {
      groupedElements.push({ type: 'content', block: currentListGroup });
    }

    return groupedElements;
  };

  // Render media blocks (either images or videos) in a flex container
  const renderMediaGroup = (blocks: Topography[], index: number) => (
    <div key={index} className="flex flex-wrap gap-4 my-4">
      {blocks.map((block, blockIndex) => {
        if (block._type === 'youtube') {
          return (
            <YouTubeBlock
              key={blockIndex}
              value={block}
              index={blockIndex}
              isInline={false}
              renderNode={() => null}
            />
          );
        } else if (block._type === 'image') {
          return (
            <ImageBlock
              key={blockIndex}
              value={block}
              index={blockIndex}
              isInline={false}
              renderNode={() => null}
            />
          );
        }
        return null;
      })}
    </div>
  );

  // Render content blocks, including grouped lists
  const renderContentBlock = (blocks: Topography[], index: number) => (
    <PortableText key={index} value={blocks} components={components} />
  );

  // Group the blocks and render them in order
  const groupedElements = groupElements(value);

  return (
    <>
      {groupedElements.map((group, index) => {
        if (group.type === 'media' && group.blocks) {
          return renderMediaGroup(group.blocks, index);
        } else if (group.type === 'content' && group.block) {
          return renderContentBlock(group.block, index);
        }
        return null;
      })}
    </>
  );
};

export default UseRichText;
