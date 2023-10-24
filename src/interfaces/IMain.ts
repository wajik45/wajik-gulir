export default interface IMain {
  async: {
    elements: NodeListOf<HTMLElement>;
    init(): void;
    start(): void;
  };

  basic: {
    elements: NodeListOf<HTMLElement>;
    init(): void;
    start(): void;
  };
}
