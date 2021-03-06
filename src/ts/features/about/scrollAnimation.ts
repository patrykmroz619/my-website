import { gsap } from 'gsap';
import { getHeadingAnimationTimeline } from '@utils/headingTimeline';

const image = document.querySelector('.imageSection__imageBox') as HTMLElement;
const headingWrapper = document.querySelector(
    '.contentSection__headingWrapper'
) as HTMLElement;
const texts = [...document.querySelectorAll('.about__contentSection p')];

let contentTimeline: gsap.core.Timeline;

export const fadeInContent = () => {
    gsap.fromTo(
        image,
        {
            opacity: 0,
            x: -100,
        },
        {
            opacity: 1,
            x: 0,
            delay: 1,
            duration: 2,
        }
    );

    gsap.set(headingWrapper, { x: 0, opacity: 1 });

    contentTimeline = gsap.timeline();

    const headingTimeline = getHeadingAnimationTimeline(headingWrapper);

    contentTimeline.add(headingTimeline);

    texts.forEach((text) => {
        contentTimeline.fromTo(
            text,
            {
                opacity: 0,
                x: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,
            },
            '-=0.1'
        );
    });
};

export const fadeOutContent = () => {
    gsap.to(image, {
        opacity: 0,
        x: -100,
    });

    if (contentTimeline) {
        contentTimeline.clear(true);
    }

    gsap.to([headingWrapper, texts], { opacity: 0, x: 100 });
};
