import {
  cet4ListeningScores,
  cet4ReadingScores,
  cet6ListeningScores,
  cet6ReadingScores,
  writingTranslationScores,
  getScore,
} from "./scoreTables";
import { getPaperDifficulty } from "./paperConfig";
import { ExamLevel } from "./examLevel";

export interface ScoreCalculationResult {
  writingScore: number; // 写译赋分
  listeningScore: number; // 听力赋分
  readingScore: number; // 阅读赋分
  totalScore: number; // 总分
}

/**
 * 计算四级分数
 */
export function calculateCet4Score(
  writingRaw: number,
  listeningRaw: number,
  readingRaw: number,
  listeningPaper: string,
  readingPaper: string
): ScoreCalculationResult {
  // 获取试卷难度
  const listeningDifficulty = getPaperDifficulty(ExamLevel.CET4, "listening", listeningPaper);
  const readingDifficulty = getPaperDifficulty(ExamLevel.CET4, "reading", readingPaper);

  // 获取对应的分数表
  const listeningTable = cet4ListeningScores[listeningDifficulty as keyof typeof cet4ListeningScores];
  const readingTable = cet4ReadingScores[readingDifficulty as keyof typeof cet4ReadingScores];

  // 计算各部分分数
  const writingScore = getScore(writingRaw, writingTranslationScores);
  const listeningScore = getScore(listeningRaw, listeningTable);
  const readingScore = getScore(readingRaw, readingTable, true); // 阅读支持0.5分

  // 计算总分
  const totalScore = writingScore + listeningScore + readingScore;

  return {
    writingScore,
    listeningScore,
    readingScore,
    totalScore,
  };
}

/**
 * 计算六级分数
 */
export function calculateCet6Score(
  writingRaw: number,
  listeningRaw: number,
  readingRaw: number,
  listeningPaper: string,
  readingPaper: string
): ScoreCalculationResult {
  // 获取试卷难度
  const listeningDifficulty = getPaperDifficulty(ExamLevel.CET6, "listening", listeningPaper);
  const readingDifficulty = getPaperDifficulty(ExamLevel.CET6, "reading", readingPaper);

  // 获取对应的分数表
  const listeningTable = cet6ListeningScores[listeningDifficulty as keyof typeof cet6ListeningScores];
  const readingTable = cet6ReadingScores[readingDifficulty as keyof typeof cet6ReadingScores];

  // 计算各部分分数
  // 六级写译使用相同的分数表，但通常分数会低一些
  const writingScore = getScore(writingRaw, writingTranslationScores);
  const listeningScore = getScore(listeningRaw, listeningTable);
  const readingScore = getScore(readingRaw, readingTable, true); // 阅读支持0.5分

  // 计算总分
  const totalScore = writingScore + listeningScore + readingScore;

  return {
    writingScore,
    listeningScore,
    readingScore,
    totalScore,
  };
}

/**
 * 统一的计算入口
 */
export function calculateScore(
  level: ExamLevel,
  writingRaw: number,
  listeningRaw: number,
  readingRaw: number,
  listeningPaper: string,
  readingPaper: string
): ScoreCalculationResult {
  if (level === ExamLevel.CET4) {
    return calculateCet4Score(writingRaw, listeningRaw, readingRaw, listeningPaper, readingPaper);
  } else {
    return calculateCet6Score(writingRaw, listeningRaw, readingRaw, listeningPaper, readingPaper);
  }
}
