export type TutorialResponse = Tutorial[]

export interface Tutorial {
  id:          number;
  title:       string;
  description: string;
  published:   boolean;
}
