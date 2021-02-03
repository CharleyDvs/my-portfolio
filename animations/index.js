import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const initialAnimation = ({
  headerText1,
  headerText2,
  titleText1,
  titleText2,
  titleSeparator,
}) => {
  gsap.from(headerText1, {
    opacity: 0,
    x: -150,
    duration: 1,
    rotate: 20,
    ease: 'power3',
  })
  gsap.from(headerText2, {
    opacity: 0,
    x: 150,
    duration: 1,
    rotate: -20,
    ease: 'power3',
  })
  gsap.to(titleSeparator, {
    delay: 1,
    duration: 0.7,
    rotate: 10,
  })
  gsap.from(titleText1, {
    delay: 1,
    duration: 0.5,
    opacity: 0,
    x: -50,
  })
  gsap.from(titleText2, {
    delay: 1,
    duration: 0.5,
    opacity: 0,
    x: 50,
  })
}

export const scrubHorizontal = (node, scrub, x) => {
  gsap.to(node, {
    scrollTrigger: {
      trigger: node,
      start: 'top center',
      scrub,
    },
    x,
    ease: 'power3',
  })
}

export const scrubVertical = (node, scrub, y) => {
  gsap.to(node, {
    scrollTrigger: {
      trigger: node,
      start: 'top center',
      scrub,
    },
    y,
    ease: 'power3',
  })
}

export const headerAnimation = (titleNodes) => {
  gsap.from(titleNodes, {
    scrollTrigger: {
      trigger: titleNodes,
      start: 'top center',
    },
    opacity: 0,
    scale: 2,
    stagger: 1,
    duration: 2,
    ease: 'power3',
  })
}
