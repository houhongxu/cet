import { ExamLevel } from "./examLevel";

/**
 * 试卷难度枚举
 */
export enum PaperDifficulty {
  HARD = "hard",
  MEDIUM = "medium",
  EASY = "easy",
}

/**
 * 试卷配置接口
 */
interface PaperConfig {
  listening: string[];
  reading: string[];
  difficulty: {
    listening: Record<string, PaperDifficulty>;
    reading: Record<string, PaperDifficulty>;
  };
}

/**
 * 试卷配置
 * 包含试卷选项和难度配置
 */
export const paperConfig: Record<ExamLevel, PaperConfig> = {
  [ExamLevel.CET4]: {
    listening: ["难", "中", "易"],
    reading: ["难", "中", "易"],
    difficulty: {
      listening: {
        难: PaperDifficulty.HARD,
        中: PaperDifficulty.MEDIUM,
        易: PaperDifficulty.EASY,
      },
      reading: {
        难: PaperDifficulty.HARD,
        中: PaperDifficulty.MEDIUM,
        易: PaperDifficulty.EASY,
      },
    },
  },
  [ExamLevel.CET6]: {
    listening: ["难", "中", "易"],
    reading: ["难", "中", "易"],
    difficulty: {
      listening: {
        难: PaperDifficulty.HARD,
        中: PaperDifficulty.MEDIUM,
        易: PaperDifficulty.EASY,
      },
      reading: {
        难: PaperDifficulty.HARD,
        中: PaperDifficulty.MEDIUM,
        易: PaperDifficulty.EASY,
      },
    },
  },
};

/**
 * 获取听力试卷选项
 */
export function getListeningOptions(level: ExamLevel): string[] {
  return paperConfig[level].listening;
}

/**
 * 获取阅读试卷选项
 */
export function getReadingOptions(level: ExamLevel): string[] {
  return paperConfig[level].reading;
}

/**
 * 获取试卷难度
 * @param level 考试等级
 * @param paperType 试卷类型 listening 或 reading
 * @param paperName 试卷名称
 * @returns 难度级别，如果未找到则返回 MEDIUM（中等难度）
 */
export function getPaperDifficulty(
  level: ExamLevel,
  paperType: "listening" | "reading",
  paperName: string
): PaperDifficulty {
  const config = paperConfig[level];
  if (!config) return PaperDifficulty.MEDIUM;

  const difficulty = config.difficulty[paperType][paperName];
  return difficulty || PaperDifficulty.MEDIUM; // 默认返回中等难度
}
