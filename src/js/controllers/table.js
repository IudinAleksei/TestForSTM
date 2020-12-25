import { CLASS_LIST } from '../common/constants';

const mouseOverThumbnailHandler = (table) => {
  table.addEventListener('mouseover', (event) => {
    const { target } = event;

    if (target.classList.contains(CLASS_LIST.personThumbnail)) {
      const largeImage = target.nextSibling;
      largeImage.classList.remove(CLASS_LIST.hidden);

      target.addEventListener('mouseleave', () => {
        largeImage.classList.add(CLASS_LIST.hidden);
      });
    }
  });
};

export default mouseOverThumbnailHandler;
