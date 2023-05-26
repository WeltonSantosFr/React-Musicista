export interface ILesson {
  id: string;
  title: string;
  primaryContent: [string];
  secondTitle?: string;
  secondaryContent?: [string];
  examples?: string;
  exampleContent?: [string];
  exampleAssets?: [{ id: string; url: string }];
}
