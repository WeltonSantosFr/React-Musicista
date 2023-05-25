export interface ILesson {
  id: string;
  title: string;
  content: {
    text: string;
  };
  exampleAssets?: [];
  exampleContent?: {
    text: string;
  };
  examples?: string;
  secondTitle?: string;
  secondContent?: {
    text: string;
  };
}
