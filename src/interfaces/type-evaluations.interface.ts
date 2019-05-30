export interface CharacterologicalQuestion {
  answer1: string;
  answer2: string;
  answer3?: string;

}

export interface VocationalOrientationQuestion {
  answer1: string;
  answer2: string;
  answer3: string;

}

export enum EvaluationType {
  vocational = 'vocationalOrientation',
  intelligence = 'multipleIntelligence',
  charactelogical = 'characterological'
}




