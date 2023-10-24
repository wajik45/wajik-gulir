type GetAnimationsProps = {
  tr?: string;
  sc?: string;
  rt?: string;
};

export default function getAnimations(props: GetAnimationsProps) {
  const { tr, sc, rt } = props;

  return [
    {
      name: "swipe-right",
      transformValue: {
        hide: `translateX(-${tr || "50%"})`,
        show: "translateX(0)",
      },
    },
    {
      name: "swipe-left",
      transformValue: {
        hide: `translateX(${tr || "50%"})`,
        show: "translateX(0)",
      },
    },
    {
      name: "swipe-up",
      transformValue: {
        hide: `translateY(${tr || "50%"})`,
        show: "translateY(0)",
      },
    },
    {
      name: "swipe-down",
      transformValue: {
        hide: `translateY(-${tr || "50%"})`,
        show: "translateY(0)",
      },
    },
    {
      name: "zoom-in",
      transformValue: {
        hide: `scale(${sc || "50%"})`,
        show: "scale(100%)",
      },
    },
    {
      name: "zoom-in-right",
      transformValue: {
        hide: `translateX(-${tr || "50%"}) scale(${sc || "50%"})`,
        show: "translateX(0) scale(100%)",
      },
    },
    {
      name: "zoom-in-left",
      transformValue: {
        hide: `translateX(${tr || "50%"}) scale(${sc || "50%"})`,
        show: "translateX(0) scale(100%)",
      },
    },
    {
      name: "zoom-in-up",
      transformValue: {
        hide: `translateY(${tr || "50%"}) scale(${sc || "50%"})`,
        show: "translateY(0) scale(100%)",
      },
    },
    {
      name: "zoom-in-down",
      transformValue: {
        hide: `translateY(-${tr || "50%"}) scale(${sc || "50%"})`,
        show: "translateY(0) scale(100%)",
      },
    },
    {
      name: "zoom-out",
      transformValue: {
        hide: `scale(${sc || "150%"})`,
        show: "scale(100%)",
      },
    },
    {
      name: "zoom-out-right",
      transformValue: {
        hide: `translateX(-${tr || "50%"}) scale(${sc || "150%"})`,
        show: "translateX(0) scale(100%)",
      },
    },
    {
      name: "zoom-out-left",
      transformValue: {
        hide: `translateX(${tr || "50%"}) scale(${sc || "150%"})`,
        show: "translateX(0) scale(100%)",
      },
    },
    {
      name: "zoom-out-up",
      transformValue: {
        hide: `translateY(${tr || "50%"}) scale(${sc || "150%"})`,
        show: "translateY(0) scale(100%)",
      },
    },
    {
      name: "zoom-out-down",
      transformValue: {
        hide: `translateY(-${tr || "50%"}) scale(${sc || "150%"})`,
        show: "translateY(0) scale(100%)",
      },
    },
    {
      name: "flip-x",
      transformValue: {
        hide: `rotateY(${rt || "180deg"})`,
        show: "rotateY(0)",
      },
    },
    {
      name: "flip-y",
      transformValue: {
        hide: `rotateX(${rt || "180deg"})`,
        show: "rotateX(0)",
      },
    },
    {
      name: "fade-in",
      transformValue: {
        hide: "none",
        show: "none",
      },
    },
  ];
}
