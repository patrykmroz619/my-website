import { pageWrapper, nextSection, prevSection } from '../index';

const scrollableElements = [
    ...document.querySelectorAll('.scrollable'),
] as HTMLElement[];

export const handleTouch = () => {
    let scroll = false;
    let touchStartPosition = 0;
    let distance = 0;

    const onTouchStart = (e: TouchEvent) => {
        touchStartPosition = e.touches[0].clientY;

        scroll = true;
        scrollableElements.forEach((element) => {
            if (element.contains(e.target as Element)) {
                if (element.scrollHeight > element.clientHeight) {
                    scroll = false;
                }
            }
        });
    };

    const onTouchMove = (e: TouchEvent) => {
        const touchEndPosition = e.touches[0].clientY;

        distance = touchEndPosition - touchStartPosition;
    };

    const onTouchEnd = () => {
        if (scroll) {
            if (distance < -70) {
                nextSection();
            } else if (distance > 70) {
                prevSection();
            }
        }

        distance = 0;
    };

    pageWrapper.addEventListener('touchstart', onTouchStart, { passive: true });
    pageWrapper.addEventListener('touchmove', onTouchMove, { passive: true });
    pageWrapper.addEventListener('touchend', onTouchEnd, { passive: true });
};
